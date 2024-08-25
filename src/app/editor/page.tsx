'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useRouter, useSearchParams } from 'next/navigation';
import PostManagerModal from '../components/PostManagerModal';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditorPage: React.FC = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState<string | null>(null);
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
      if (image) {
        formData.append('image', image);
      } else if (existingImage) {
        formData.append('existingImage', existingImage);
      }

      const response = await fetch(`/api/${slug ? `update-post?slug=${slug}` : 'save-post'}`, {
        method: 'POST',
        body: formData,
      });

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
    <div className="max-w-3xl mx-auto p-4 mt-32">
      <h1 className="text-2xl font-bold mb-4">{slug ? 'Edit' : 'Create'} Blog Post</h1>
      <input
        className="w-full p-2 mb-4 border rounded"
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-4 border rounded"
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="w-full p-2 mb-4 border rounded"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {existingImage && !image && (
        <img src={existingImage} alt="Current blog post image" className="mb-4" />
      )}
      <ReactQuill value={content} onChange={setContent} />
      <button
        className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handlePost}
        disabled={loading}
      >
        {loading ? 'Publishing...' : 'Post'}
      </button>
      <button
        className="mt-4 ml-4 px-4 py-2 bg-gray-500 text-white rounded"
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

export default EditorPage;
