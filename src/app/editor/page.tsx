'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useRouter, useSearchParams } from 'next/navigation';
import PostManagerModal from '../components/PostManagerModal';
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
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 
      'color': [
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
      ] 
    }],
    [{ 
      'background': [
        '#FFE7C3', // brand-cream
        '#C1FF72', // brand-logo
        '#00BF63', // brand-green
        '#7ED957', // brand-green-light
        '#004B27', // brand-green-dark
        '#FF914D', // brand-orange
        '#FFBD59', // brand-orange-light
        '#572700', // brand-orange-dark
        '#FFD874', // brand-yellow
      ]
    }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']
  ]
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
  'indent'
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          console.log('Fetching post with slug:', slug);
          const postDoc = doc(db, 'posts', slug);
          const postSnapshot = await getDoc(postDoc);
          if (postSnapshot.exists()) {
            const post = postSnapshot.data();
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
      };

      console.log('Post data to be saved:', postData);

      if (slug) {
        const postDoc = doc(db, 'posts', slug);
        console.log('Updating existing post:', slug);
        await updateDoc(postDoc, postData);
      } else {
        const postsRef = collection(db, 'posts');
        console.log('Creating new post');
        await addDoc(postsRef, postData);
      }

      alert('Blog post published successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error posting the blog:', error);
      alert('An error occurred while publishing the post.');
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleEdit = (slug: string) => {
    router.push(`/editor?slug=${slug}`);
    closeModal();
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        const postDoc = doc(db, 'posts', slug);
        await deleteDoc(postDoc);
        alert('Blog post deleted successfully!');
        closeModal();
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
      <div className="mt-4 flex gap-4">
        <button
          className="rounded-full bg-brand-green px-4 py-2 text-white"
          onClick={handlePost}
          disabled={loading}
        >
          {loading ? 'Publishing...' : 'Post'}
        </button>

        <button
          className="rounded-full bg-brand-cream px-4 py-2 text-brand-green"
          onClick={openModal}
        >
          Edit Blog Posts
        </button>
      </div>

      <PostManagerModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
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
