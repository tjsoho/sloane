'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useRouter, useSearchParams } from 'next/navigation';
import PostManagerModal from '../components/PostManagerModal';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import ProtectedEditor from '../components/ProtectedEditor';
import { db, storage } from '../../utils/firebase';
import { collection, addDoc, updateDoc, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import storage utilities

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Utility function to generate a slug from the title
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/(^-|-$)/g, ''); // Remove leading/trailing hyphens
};

const EditorContent: React.FC = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null); // For storing the uploaded image URL
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [signature, setSignature] = useState<'toby' | 'rachel' | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  // Fetch post if in edit mode
  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          const postDoc = doc(db, 'posts', slug);
          const postSnapshot = await getDoc(postDoc);
          if (postSnapshot.exists()) {
            const post = postSnapshot.data();
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

  // Handle image upload and return the uploaded URL
  const uploadImage = async (file: File) => {
    const imageRef = ref(storage, `images/${file.name}`);
    const snapshot = await uploadBytes(imageRef, file);
    return await getDownloadURL(snapshot.ref); // Return the image URL after upload
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setImage(file);
    if (file) {
      const url = await uploadImage(file); // Upload and get URL
      setImageURL(url);
    }
  };

  const handlePost = async () => {
    if (!title || !content || !description || (!imageURL && !existingImage)) {
      alert('Title, description, content, and image are required.');
      return;
    }

    setLoading(true);

    try {
      const postSlug = generateSlug(title); // Generate a slug from the title
      const postData = {
        title,
        description,
        content,
        signature: signature || '',
        date: new Date().toISOString(), // Ensure date is stored as ISO string
        image: imageURL || existingImage, // Store the uploaded image URL or existing image
        slug: postSlug, // Store the generated slug
      };

      if (slug) {
        // Update existing post
        const postDoc = doc(db, 'posts', slug);
        await updateDoc(postDoc, postData);
      } else {
        // Create new post
        const postsRef = collection(db, 'posts');
        await addDoc(postsRef, postData);
      }

      alert('Blog post published successfully!');

      // Force page refresh to see new post immediately
      window.location.reload(); // This forces a refresh, showing updated blog cards immediately
    } catch (error) {
      console.error('Error posting the blog:', error);
      alert('An error occurred while publishing the post.');
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
      <ReactQuill value={content} onChange={setContent} />

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
            control={<Radio sx={{ color: 'brand-green' }} />}
            label="Toby Signature"
          />
          <FormControlLabel
            value="rachel"
            control={<Radio sx={{ color: 'brand-green' }} />}
            label="Rachel Signature"
          />
        </RadioGroup>
      </div>

      <button
        className={`mt-4 rounded-full bg-brand-green px-4 py-2 text-white ${
          loading ? 'cursor-not-allowed opacity-50' : ''
        }`}
        onClick={handlePost}
        disabled={loading}
      >
        {loading ? 'Publishing...' : 'Post'}
      </button>
      <button
        className="ml-4 mt-4 rounded-full border-2 border-brand-green px-4 py-2 text-brand-green"
        onClick={openModal}
      >
        Edit/Delete a Post
      </button>

      <PostManagerModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

const EditorPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <ProtectedEditor>
        <EditorContent />
      </ProtectedEditor>
    </Suspense>
  );
};

export default EditorPage;
