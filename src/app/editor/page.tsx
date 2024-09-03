'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useRouter, useSearchParams } from 'next/navigation';
import PostManagerModal from '../components/PostManagerModal';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import ProtectedEditor from '../components/ProtectedEditor';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditorContent: React.FC = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [signature, setSignature] = useState<'toby' | 'rachel' | null>(null); // State for signature selection
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/get-posts?slug=${slug}`);
          const post = await response.json();
          setTitle(post.title);
          setDescription(post.description);
          setContent(post.content);
          setExistingImage(post.image);
          setSignature(post.signature || null); // Load signature if exists
        } catch (error) {
          console.error('Error fetching the post:', error);
        }
      };

      fetchPost();
    }
  }, [slug]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setImage(file);
  };

  const handlePost = async () => {
    if (!title || !content || !description || (!image && !existingImage)) {
      alert('Title, description, content, and image are required.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('content', content);
      formData.append('signature', signature || ''); // Include the signature in the form data
      if (image) {
        formData.append('image', image);
      } else if (existingImage) {
        formData.append('existingImage', existingImage);
      }

      const response = await fetch(
        `/api/${slug ? `update-post?slug=${slug}` : 'save-post'}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        alert('Blog post published successfully!');
        router.push('/blog');
      } else {
        alert('Failed to publish the post.');
      }
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
        const response = await fetch(`/api/delete-post?slug=${slug}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Blog post deleted successfully!');
          closeModal();
        } else {
          alert('Failed to delete the post.');
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
      <ReactQuill value={content} onChange={setContent} />

      {/* Signature Selection */}
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
