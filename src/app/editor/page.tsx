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
import Link from 'next/link';
import Image from 'next/image';
import { X, Upload, Info } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Post {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  signature?: 'toby' | 'rachel' | null;
  date: string;
  image: string;
  slug: string;
  views: number;
  tags: string[];
  status: 'draft' | 'published';
}

interface Subscriber {
  id: string;
  email: string;
  firstName: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
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
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [signature, setSignature] = useState<'toby' | 'rachel' | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [view, setView] = useState<'editor' | 'posts'>('editor');
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [showSubscribers, setShowSubscribers] = useState(false);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loadingSubscribers, setLoadingSubscribers] = useState(false);

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
            setSubtitle(post.subtitle || '');
            setDescription(post.description);
            setContent(post.content);
            setExistingImage(post.image);
            setSignature(post.signature || null);
            setTags(post.tags || []);
            setIsEditing(true);
          } else {
            console.error('No such document!');
          }
        } catch (error) {
          console.error('Error fetching the post:', error);
        }
      };

      fetchPost();
    } else {
      // Reset form when creating a new post
      setTitle('');
      setSubtitle('');
      setDescription('');
      setContent('');
      setImage(null);
      setImageURL(null);
      setExistingImage(null);
      setSignature(null);
      setTags([]);
      setIsEditing(false);
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
            subtitle: data.subtitle || '',
            description: data.description || '',
            content: data.content || '',
            signature: data.signature || null,
            date: data.date || '',
            image: data.image || '',
            slug: data.slug || '',
            views: data.views || 0,
            tags: data.tags || [],
            status: data.status || 'draft',
          } as Post;
        });
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (showSubscribers) {
      loadSubscribers();
    }
  }, [showSubscribers]);

  const loadSubscribers = async () => {
    setLoadingSubscribers(true);
    try {
      const subscribersRef = collection(db, 'subscribers');
      const subscribersSnapshot = await getDocs(subscribersRef);
      const subscribersData = subscribersSnapshot.docs.map(doc => ({
        id: doc.id,
        email: doc.data().email || '',
        firstName: doc.data().firstName || '',
        subscribedAt: doc.data().subscribedAt || new Date().toISOString(),
        status: doc.data().status || 'active'
      })) as Subscriber[];

      // Sort by date, newest first
      subscribersData.sort((a, b) =>
        new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
      );

      setSubscribers(subscribersData);
    } catch (error) {
      console.error('Error loading subscribers:', error);
    } finally {
      setLoadingSubscribers(false);
    }
  };

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

  const handlePost = async (status: 'draft' | 'published') => {
    console.log('Publishing post with data:', {
      title,
      description,
      content,
      imageURL,
      existingImage,
      status,
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
        subtitle,
        description,
        content,
        signature: signature || '',
        date: new Date().toISOString(),
        image: imageURL || existingImage,
        slug: postSlug,
        views: 0,
        tags,
        status,
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

        // If the post is published, send notifications to subscribers
        if (status === 'published') {
          const loadingToast = toast.loading('Sending notifications to subscribers...');

          try {
            const response = await fetch('/api/notify-subscribers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ post: postData }),
            });

            if (!response.ok) {
              throw new Error('Failed to send notifications');
            }

            const result = await response.json();
            toast.success(result.message, { id: loadingToast });
          } catch (error) {
            console.error('Error sending notifications:', error);
            toast.error('Failed to send notifications to subscribers', { id: loadingToast });
          }
        }
      }

      alert(status === 'published' ? 'Blog post published successfully!' : 'Draft saved successfully!');

      const postsRef = collection(db, 'posts');
      const querySnapshot = await getDocs(postsRef);
      const postsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || '',
          subtitle: data.subtitle || '',
          description: data.description || '',
          content: data.content || '',
          signature: data.signature || null,
          date: data.date || '',
          image: data.image || '',
          slug: data.slug || '',
          views: data.views || 0,
          tags: data.tags || [],
          status: data.status || 'draft',
        } as Post;
      });
      setPosts(postsData);

      setTitle('');
      setSubtitle('');
      setDescription('');
      setContent('');
      setImage(null);
      setImageURL(null);
      setExistingImage(null);
      setSignature(null);
      setTags([]);

      if (slug) {
        router.push('/editor');
      }
    } catch (error) {
      console.error('Error posting the blog:', error);
      alert('An error occurred while saving the post.');
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

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleDeleteSubscriber = async (subscriberId: string) => {
    if (!confirm('Are you sure you want to remove this subscriber?')) {
      return;
    }

    try {
      const subscriberRef = doc(db, 'subscribers', subscriberId);
      await deleteDoc(subscriberRef);

      // Update the local state to remove the subscriber
      setSubscribers(prev => prev.filter(sub => sub.id !== subscriberId));

    } catch (error) {
      console.error('Error deleting subscriber:', error);
    }
  };

  return (
    <div className="min-h-screen bg-brand-green/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            <button
              onClick={() => setView('editor')}
              className={`px-4 py-2 rounded-md transition-colors ${view === 'editor'
                ? 'bg-brand-green text-brand-cream'
                : 'bg-brand-green/5 text-brand-green hover:bg-brand-green/10'
                }`}
            >
              Editor
            </button>
            <button
              onClick={() => setView('posts')}
              className={`px-4 py-2 rounded-md transition-colors ${view === 'posts'
                ? 'bg-brand-green text-brand-cream'
                : 'bg-brand-green/5 text-brand-green hover:bg-brand-green/10'
                }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setShowSubscribers(!showSubscribers)}
              className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-md hover:bg-brand-green/20 transition-colors"
            >
              {showSubscribers ? 'Hide Subscribers' : 'Show Subscribers'}
            </button>
          </div>
          <Link
            href="/admin"
            className="px-4 py-2 bg-brand-green/5 text-brand-green rounded-md hover:bg-brand-green/10 transition-colors"
          >
            Back to Admin
          </Link>
        </div>

        {showSubscribers ? (
          <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-Archivo text-brand-green">Newsletter Subscribers</h2>
              <button
                onClick={loadSubscribers}
                className="text-sm text-brand-green hover:text-brand-green-dark"
              >
                Refresh List
              </button>
            </div>
            {loadingSubscribers ? (
              <p className="text-brand-green">Loading subscribers...</p>
            ) : subscribers.length === 0 ? (
              <p className="text-brand-green">No subscribers yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-brand-green/10">
                      <th className="text-left py-2 px-4 text-brand-green font-medium">First Name</th>
                      <th className="text-left py-2 px-4 text-brand-green font-medium">Email</th>
                      <th className="text-left py-2 px-4 text-brand-green font-medium">Subscribed Date</th>
                      <th className="text-left py-2 px-4 text-brand-green font-medium">Status</th>
                      <th className="text-left py-2 px-4 text-brand-green font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber) => (
                      <tr
                        key={subscriber.id}
                        className="border-b border-brand-green/5 hover:bg-brand-green/5"
                      >
                        <td className="py-2 px-4 text-brand-green">
                          {subscriber.firstName || 'N/A'}
                        </td>
                        <td className="py-2 px-4 text-brand-green">
                          {subscriber.email}
                        </td>
                        <td className="py-2 px-4 text-brand-green/70">
                          {new Date(subscriber.subscribedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </td>
                        <td className="py-2 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs ${subscriber.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                            }`}>
                            {subscriber.status}
                          </span>
                        </td>
                        <td className="py-2 px-4">
                          <button
                            onClick={() => handleDeleteSubscriber(subscriber.id)}
                            className="text-red-500 hover:text-red-700 transition-colors p-1 rounded-full hover:bg-red-50"
                            title="Delete subscriber"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : null}

        {view === 'editor' ? (
          <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-md shadow-md p-6 mb-6">
                {/* Title */}
                <div className="mb-6">
                  <label className="block text-brand-green text-sm mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-brand-green px-4 py-2 border border-brand-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                    placeholder="Enter post title"
                  />
                </div>

                {/* Subtitle */}
                <div className="mb-6">
                  <label className="block text-brand-green text-sm mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full text-brand-green px-4 py-2 border border-brand-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                    placeholder="Enter post subtitle"
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-brand-green text-sm mb-2">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full text-brand-green px-4 py-2 border border-brand-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                    placeholder="Enter post description"
                    rows={3}
                  />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <label className="block text-brand-green text-sm mb-2">
                    Content
                  </label>
                  <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    className="h-96"
                  />
                </div>

                {/* Signature */}
                <div className="mb-6">
                  <label className="block text-brand-green text-sm mb-2">
                    Signature
                  </label>
                  <RadioGroup
                    row
                    value={signature}
                    onChange={(e) => setSignature(e.target.value as 'toby' | 'rachel')}
                    className="gap-4"
                  >
                    <FormControlLabel
                      value="toby"
                      control={<Radio />}
                      label="Toby Signature"
                      className="text-brand-green"
                    />
                    <FormControlLabel
                      value="rachel"
                      control={<Radio />}
                      label="Rachel Signature"
                      className="text-brand-green"
                    />
                  </RadioGroup>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => handlePost('draft')}
                  className="px-4 py-2 border border-brand-green text-brand-green rounded-md hover:bg-brand-green/5"
                >
                  Save Draft
                </button>
                <button
                  onClick={() => handlePost('published')}
                  className="px-4 py-2 bg-brand-green text-brand-cream rounded-md hover:bg-brand-green/90"
                >
                  Publish
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-80">
              {/* Featured Image */}
              <div className="bg-white rounded-md shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-brand-green mb-4">
                  Featured Image
                </h3>
                <div className="mb-4">
                  {imageURL || existingImage ? (
                    <div className="relative">
                      <div className="relative h-48 w-full mb-2">
                        <Image
                          src={imageURL || existingImage || ''}
                          alt="Featured"
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <button
                        onClick={() => {
                          setImage(null);
                          setImageURL(null);
                          setExistingImage(null);
                        }}
                        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                      >
                        <X className="w-4 h-4 text-brand-green" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => document.getElementById('image-upload')?.click()}
                      className="h-48 border-2 border-dashed border-brand-green/20 rounded-md flex items-center justify-center cursor-pointer hover:border-brand-green/40 transition-colors"
                    >
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-brand-green/40 mx-auto mb-2" />
                        <span className="text-sm text-brand-green/60">
                          Click to upload image
                        </span>
                      </div>
                    </div>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-md shadow-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-bold text-brand-green">
                    Blog Tags
                  </h3>
                  <div className="group relative">
                    <Info className="w-4 h-4 text-brand-green/40 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-white rounded-md shadow-lg text-xs text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">
                      Add tags to your blog that are one or two word descriptions so when people search for topics they will find this blog.
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-brand-green/5 text-brand-green rounded-full text-sm flex items-center gap-1"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    className="flex-1 px-3 py-2 border border-brand-green/20 text-brand-green rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green text-sm"
                    placeholder="Add a tag"
                  />
                </div>
                <p className="text-xs text-brand-green/60 mt-2">
                  Press Enter to add a tag
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-md shadow-md overflow-hidden flex flex-col"
              >
                {post.image && (
                  <div className="relative h-40">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-brand-green mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-green/60 mb-3 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-brand-green/5 text-brand-green rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-3 border-t border-brand-green/10">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-brand-green/60">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center text-xs text-brand-green/60">
                          <svg
                            className="w-3 h-3 mr-1"
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
                          {post.views || 0}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEdit(post.slug)}
                          className="px-2 py-0.5 text-xs text-brand-green border border-brand-green rounded-md hover:bg-brand-green/5"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.slug)}
                          className="px-2 py-0.5 text-xs text-red-500 border border-red-500 rounded-md hover:bg-red-500/5"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
