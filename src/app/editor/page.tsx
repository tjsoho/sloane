'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import ProtectedEditor from '../components/ProtectedEditor';
import { db, storage } from '../../utils/firebase';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  signature?: 'toby' | 'rachel' | null;
  date: string;
  image: string;
  slug: string;
  views: number;
}

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [
      {
        color: [
          '#000000', // Black
          '#FFE7C3', // brand-cream
          '#C1FF72', // brand-logo
          '#00BF63', // brand-green
          '#7ED957', // brand-green-light
          '#004B27', // brand-green-dark
          '#FF914D', // brand-orange
          '#FFBD59', // brand-orange-light
          '#572700', // brand-orange-dark
          '#FFD874', // brand-yellow
        ],
      },
    ],
    [
      {
        background: [
          '#FFE7C3', // brand-cream
          '#C1FF72', // brand-logo
          '#00BF63', // brand-green
          '#7ED957', // brand-green-light
          '#004B27', // brand-green-dark
          '#FF914D', // brand-orange
          '#FFBD59', // brand-orange-light
          '#572700', // brand-orange-dark
          '#FFD874', // brand-yellow
        ],
      },
    ],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'color',
  'background',
  'list',
  'bullet',
  'align',
  'link',
  'image',
  'blockquote',
  'indent',
];

const EditorContent: React.FC = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [signature, setSignature] = useState<'toby' | 'rachel' | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          console.log('Fetching post with slug:', slug);
          const postsRef = collection(db, 'posts');
          const q = query(postsRef, where('slug', '==', slug));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const post = querySnapshot.docs[0]?.data() as Post;
            console.log('Fetched post data:', post);
            setTitle(post.title);
            setDescription(post.description);
            setContent(post.content);
            setExistingImage(post.image);
            setSignature(post.signature || null);
          } else {
            console.error('No such document!');
          }
        } catch (error) {
          console.error('Error fetching the post:', error);
        }
      };

      fetchPost();
    }
  }, [slug]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, 'posts');
        const querySnapshot = await getDocs(postsRef);
        const postsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || '',
            description: data.description || '',
            content: data.content || '',
            signature: data.signature || null,
            date: data.date || '',
            image: data.image || '',
            slug: data.slug || '',
            views: data.views || 0,
          } as Post;
        });
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const uploadImage = async (file: File) => {
    try {
      console.log('Uploading image:', file.name);
      const imageRef = ref(storage, `images/${file.name}`);
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      console.log('Image uploaded successfully:', url);
      return url;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setImage(file);
    if (file) {
      const url = await uploadImage(file);
      setImageURL(url);
    }
  };

  const handlePost = async () => {
    console.log('Publishing post with data:', {
      title,
      description,
      content,
      imageURL,
      existingImage,
    });

    if (!title || !content || !description || (!imageURL && !existingImage)) {
      alert('Title, description, content, and image are required.');
      return;
    }

    setLoading(true);

    try {
      const postSlug = generateSlug(title);
      const postData = {
        title,
        description,
        content,
        signature: signature || '',
        date: new Date().toISOString(),
        image: imageURL || existingImage,
        slug: postSlug,
        views: 0,
      };

      console.log('Post data to be saved:', postData);

      if (slug) {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where('slug', '==', slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docId = querySnapshot.docs[0]?.id;
          if (docId) {
            const postDoc = doc(db, 'posts', docId);
            console.log('Updating existing post:', docId);
            await updateDoc(postDoc, postData);
          } else {
            console.error('Document ID is undefined');
          }
        }
      } else {
        const postsRef = collection(db, 'posts');
        console.log('Creating new post');
        await addDoc(postsRef, postData);
      }

      alert('Blog post published successfully!');

      const postsRef = collection(db, 'posts');
      const querySnapshot = await getDocs(postsRef);
      const postsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || '',
          description: data.description || '',
          content: data.content || '',
          signature: data.signature || null,
          date: data.date || '',
          image: data.image || '',
          slug: data.slug || '',
          views: data.views || 0,
        } as Post;
      });
      setPosts(postsData);

      setTitle('');
      setDescription('');
      setContent('');
      setImage(null);
      setImageURL(null);
      setExistingImage(null);
      setSignature(null);

      if (slug) {
        router.push('/editor');
      }
    } catch (error) {
      console.error('Error posting the blog:', error);
      alert('An error occurred while publishing the post.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (slug: string) => {
    router.push(`/editor?slug=${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where('slug', '==', slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docId = querySnapshot.docs[0]?.id;
          if (docId) {
            const postDoc = doc(db, 'posts', docId);
            await deleteDoc(postDoc);
          } else {
            console.error('Document ID is undefined');
          }

          const updatedQuerySnapshot = await getDocs(postsRef);
          const postsData = updatedQuerySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              title: data.title || '',
              description: data.description || '',
              content: data.content || '',
              signature: data.signature || null,
              date: data.date || '',
              image: data.image || '',
              slug: data.slug || '',
              views: data.views || 0,
            } as Post;
          });
          setPosts(postsData);

          alert('Blog post deleted successfully!');
        }
      } catch (error) {
        console.error('Error deleting the blog:', error);
        alert('An error occurred while deleting the post.');
      }
    }
  };

  return (
    <div className="mx-auto mt-32 max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-bold">
        {slug ? 'Edit' : 'Create'} Blog Post
      </h1>
      <input
        className="mb-4 w-full rounded border p-2"
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-4 w-full rounded border p-2"
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="mb-4 w-full rounded border p-2"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {existingImage && !image && (
        <img
          src={existingImage}
          alt="Current blog post image"
          className="mb-4"
        />
      )}
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        theme="snow"
        className="mb-12"
      />
      <div className="mt-6">
        <FormLabel component="legend" className="mb-2 font-semibold">
          Choose Signature:
        </FormLabel>
        <RadioGroup
          row
          value={signature}
          onChange={(e) => setSignature(e.target.value as 'toby' | 'rachel')}
        >
          <FormControlLabel
            value="toby"
            control={<Radio />}
            label="Toby Signature"
          />
          <FormControlLabel
            value="rachel"
            control={<Radio />}
            label="Rachel Signature"
          />
        </RadioGroup>
      </div>
      <div className="mt-4">
        <button
          className="rounded-full bg-brand-green px-4 py-2 text-white"
          onClick={handlePost}
          disabled={loading}
        >
          {loading ? 'Publishing...' : 'Post'}
        </button>
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="mb-6 text-2xl font-bold">Current Blog Posts</h2>
        <div className="grid grid-cols-3 gap-6">
          {posts.map((post: Post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg border bg-white p-4 shadow-sm"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-4 h-32 w-full rounded object-cover"
                />
              )}
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mb-4 mt-2 line-clamp-2 text-sm text-gray-600">
                {post.description}
              </p>
              <div className="mt-auto">
                <div className="mb-2 flex items-center text-sm text-gray-500">
                  <svg
                    className="mr-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  {post.views || 0} views
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(post.slug)}
                    className="flex-1 rounded border-2 border-brand-green bg-transparent px-3 py-1.5 text-sm text-brand-green hover:bg-brand-green hover:text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.slug)}
                    className="flex-1 rounded border-2 border-red-500 bg-transparent px-3 py-1.5 text-sm text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EditorPage: React.FC = () => (
  <Suspense fallback={<div>Loading editor...</div>}>
    <ProtectedEditor>
      <EditorContent />
    </ProtectedEditor>
  </Suspense>
);

export default EditorPage;
