'use client';

import { collection, getDocs, addDoc, query, where, orderBy, limit, getDoc, doc, updateDoc, increment, serverTimestamp } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';



interface Post {
    id: string;
    slug: string;
    title: string;
    date: string;
    image?: string;
    description: string;
    tags?: string[];
    content?: string;
    status?: 'draft' | 'published';
}

// Fetch posts from Firebase
async function getPosts(): Promise<Post[]> {
    const postsCollection = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsCollection);
    const postsData = postsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            slug: data.slug || doc.id,
            title: data.title || '',
            date: data.date || '',
            description: data.description || '',
            image: data.image,
            tags: data.tags || [],
            content: data.content,
            status: data.status || 'published',
        } as Post;
    });

    // Sort posts by date (newest first)
    return postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Add a helper function to highlight text
function highlightText(text: string, searchTerm: string) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, i) =>
        regex.test(part) ? (
            <span key={i} className="bg-brand-logo text-brand-green">
                {part}
            </span>
        ) : (
            part
        )
    );
}

interface SubscribeModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialEmail?: string;
    onSubmit: (email: string, firstName: string) => void;
}

const SubscribeModal = ({ isOpen, onClose, initialEmail = '', onSubmit }: SubscribeModalProps) => {
    const [email, setEmail] = useState(initialEmail);
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        setEmail(initialEmail);
    }, [initialEmail]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, firstName);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-lg bg-gradient-to-br from-brand-cream to-white rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-logo/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl" />

                        <div className="relative p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-Archivo text-brand-green mb-2">
                                        Win a Free Month
                                    </h3>
                                    <p className="text-brand-green/70 text-sm">
                                        Enter your details below for a chance to experience Sloane AI completely free for a month.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-brand-green/50 hover:text-brand-green transition-colors p-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        className="w-full px-0 py-2 bg-transparent border-b border-brand-green/20 text-brand-green placeholder:text-[14px] placeholder:text-brand-green/40 focus:outline-none focus:border-brand-green transition-all duration-200"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-0 py-2 bg-transparent border-b border-brand-green/20 text-brand-green placeholder:text-[14px] placeholder:text-brand-green/40 focus:outline-none focus:border-brand-green transition-all duration-200"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full group relative inline-flex items-center justify-center rounded-lg bg-brand-green px-6 py-3 font-Archivo text-sm uppercase text-brand-cream transition-all duration-300 hover:bg-brand-green-dark overflow-hidden"
                                >
                                    <div className="absolute inset-0 w-full h-full transition-all duration-300">
                                        <div className="absolute inset-0 -translate-x-full hover:translate-x-0 bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent group-hover:translate-x-full transition-all duration-700 ease-out"></div>
                                    </div>
                                    <span className="relative z-10 font-medium flex items-center gap-2">
                                        Enter to Win
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </button>
                            </form>

                            <p className="mt-4 text-xs text-center text-brand-green/60">
                                By entering, you agree to receive marketing emails from Sloane AI. You can unsubscribe at any time.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function BlogClient() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function loadPosts() {
            try {
                setLoading(true);
                setError(null);
                console.log('Starting to load posts...');
                const postsData = await getPosts();
                console.log('Loaded posts:', postsData);

                // Filter out draft posts
                const publishedPosts = postsData.filter(post => post.status !== 'draft');
                console.log('Filtered published posts:', publishedPosts);

                setPosts(publishedPosts);
            } catch (error) {
                console.error('Error in loadPosts:', error);
                setError('Failed to load blog posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    // Get unique tags from all posts
    const uniqueTags = Array.from(
        new Set(posts.flatMap((post) => post.tags || []))
    ).sort();

    // Get the latest post
    const latestPost = posts[0];

    // Filter posts based on search term and selected tags
    const filteredPosts = posts.slice(1).filter((post) => {
        const matchesSearch = searchTerm === '' ||
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTags = selectedTags.length === 0 ||
            selectedTags.some((tag) => post.tags?.includes(tag));

        return matchesSearch && matchesTags;
    });

    const handleSubscribeSubmit = async (email: string, firstName: string) => {
        try {
            console.log('Attempting to subscribe with email:', email, 'and name:', firstName);

            // Show success toast immediately
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="ml-3 flex-1">
                                <p className="text-lg font-Archivo text-brand-green">
                                    Thanks ${firstName}! 🎉
                                </p>
                                <p className="mt-1 text-sm text-brand-green/70">
                                    You're now in the draw to win a free month of Sloane AI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-brand-cream">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-brand-green hover:text-brand-green/70 focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ), {
                duration: 5000,
                position: 'top-center',
            });

            // Check if email already exists
            const subscribersRef = collection(db, 'subscribers');
            const querySnapshot = await getDocs(query(subscribersRef, where('email', '==', email)));

            if (!querySnapshot.empty) {
                setSubscribeStatus({
                    type: 'error',
                    message: 'This email is already subscribed.'
                });
                return;
            }

            // Add new subscriber
            const newSubscriber = {
                email,
                firstName,
                subscribedAt: new Date().toISOString(),
                status: 'active'
            };

            console.log('Adding new subscriber:', newSubscriber);
            await addDoc(subscribersRef, newSubscriber);

            // Send welcome email using the API route
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, firstName }),
            });

            if (!response.ok) {
                throw new Error('Failed to send welcome email');
            }

            setEmail('');
            setFirstName('');
            setSubscribeStatus({
                type: 'success',
                message: 'Thank you for subscribing!'
            });

            // Clear success message after 3 seconds
            setTimeout(() => {
                setSubscribeStatus({ type: null, message: '' });
            }, 3000);

        } catch (error) {
            console.error('Subscription error:', error);
            setSubscribeStatus({
                type: 'error',
                message: 'Failed to subscribe. Please try again.'
            });
        }
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !firstName) return;

        try {
            const loadingToast = toast.loading('Subscribing...');

            // Check if email already exists
            const existingSubscriber = await getDoc(doc(db, 'subscribers', email));
            if (existingSubscriber.exists()) {
                toast.error('This email is already subscribed!', { id: loadingToast });
                return;
            }

            // Add to subscribers collection
            await addDoc(collection(db, 'subscribers'), {
                email,
                firstName,
                createdAt: serverTimestamp(),
                status: 'active'
            });

            // Send welcome email
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, firstName }),
            });

            if (!response.ok) {
                throw new Error('Failed to send welcome email');
            }

            // Close modal and reset form
            setIsModalOpen(false);
            setEmail('');
            setFirstName('');
            toast.success('Successfully subscribed! Check your email for confirmation.', { id: loadingToast });
        } catch (error) {
            console.error('Error subscribing:', error);
            toast.error('Failed to subscribe. Please try again.');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-cream flex items-center justify-center">
                <div className="text-brand-green text-xl">Loading blog posts...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-brand-cream flex items-center justify-center">
                <div className="text-red-500 text-xl">{error}</div>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="min-h-screen bg-brand-cream flex items-center justify-center">
                <div className="text-brand-green text-xl">No blog posts found.</div>
            </div>
        );
    }

    return (
        <>
            <Toaster />
            <div className="min-h-screen bg-brand-cream">
                {/* Hero Section */}
                <div className="relative h-[65vh] bg-brand-green overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/baliPool.png"
                            alt="Blog Hero"
                            fill
                            className="object-cover animate-[zoom_10s_ease-in-out_infinite]"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="font-Archivo text-5xl md:text-6xl lg:text-7xl text-brand-cream">
                                Blog Posts
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-brand-cream/90 max-w-3xl mx-auto px-4">
                                Explore insightful strategies, tips, and stories that empower business owners to grow and thrive.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row">
                    {/* Sidebar */}
                    <div className="w-full lg:w-64 bg-white/90 backdrop-blur-md shadow-sm px-4 py-8 lg:flex-shrink-0">
                        <div className="sticky top-0 lg:top-16">
                            {/* Search Posts */}
                            <div className="hidden lg:block mb-8">
                                <h3 className="text-lg font-Archivo text-brand-green mb-3">Search</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search posts..."
                                        className="w-full px-3 py-2 bg-brand-cream/50 rounded-md text-sm text-brand-green placeholder-brand-green/50 focus:outline-none focus:ring-1 focus:ring-brand-green"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-3 top-2.5 text-brand-green/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>



                            {/* Filter by Tags */}
                            <div className="mb-4">
                                <h3 className="text-lg font-Archivo text-brand-green mb-3">Filter by Tags</h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {uniqueTags.slice(0, 6).map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => {
                                                setSelectedTags((prev) =>
                                                    prev.includes(tag)
                                                        ? prev.filter((t) => t !== tag)
                                                        : [...prev, tag]
                                                );
                                            }}
                                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-colors ${selectedTags.includes(tag)
                                                ? 'bg-brand-green text-brand-cream'
                                                : 'bg-brand-green/5 text-brand-green hover:bg-brand-green/10'
                                                }`}
                                        >
                                            {tag}
                                            {selectedTags.includes(tag) && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                    {uniqueTags.length > 6 && (
                                        <div className="relative group">
                                            <button className="px-2 py-1 rounded-full text-xs bg-brand-green/5 text-brand-green hover:bg-brand-green/10 transition-colors">
                                                More Tags...
                                            </button>
                                            <div className="hidden group-hover:block absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg z-50 p-2 min-w-[150px]">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {uniqueTags.slice(6).map((tag) => (
                                                        <button
                                                            key={tag}
                                                            onClick={() => {
                                                                setSelectedTags((prev) =>
                                                                    prev.includes(tag)
                                                                        ? prev.filter((t) => t !== tag)
                                                                        : [...prev, tag]
                                                                );
                                                            }}
                                                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-colors ${selectedTags.includes(tag)
                                                                ? 'bg-brand-green text-brand-cream'
                                                                : 'bg-brand-green/5 text-brand-green hover:bg-brand-green/10'
                                                                }`}
                                                        >
                                                            {tag}
                                                            {selectedTags.includes(tag) && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <hr className="hidden lg:block border-t border-brand-green/10 mb-6" />

                            {/* Popular Posts */}
                            <div className="hidden lg:block mb-2">
                                <h3 className="text-lg font-Archivo text-brand-green mb-3">Popular Posts</h3>
                                <div className="flex flex-col gap-4">
                                    {posts.slice(0, 3).map((post, index) => (
                                        <div key={post.slug}>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="group block"
                                            >
                                                <h4 className="text-sm font-medium hover:font-bold text-brand-green group-hover:text-brand-green-dark transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <span className="text-xs text-black/20">
                                                    {new Date(post.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </Link>
                                            {index < 2 && <hr className="border-t border-brand-green/5 mt-1" />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="hidden lg:block border-t border-brand-green/10 mb-6" />

                            {/* Newsletter Signup */}
                            <div>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    if (email) {
                                        setIsModalOpen(true);
                                    }
                                }} className="space-y-3">
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(true)}
                                            className="group relative inline-flex items-center justify-center rounded-full border border-brand-cream bg-brand-green px-5 py-2 font-Archivo text-xs uppercase text-brand-cream transition-all duration-300 hover:border-brand-logo hover:text-brand-logo overflow-hidden w-full"
                                        >
                                            <div className="absolute inset-0 w-full h-full">
                                                <div className="absolute inset-0 -skew-x-12 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent"></div>
                                            </div>
                                            <span className="relative z-10 font-medium">WIN A FREE MONTH</span>
                                        </button>
                                        <p className="text-sm text-brand-green py-4">Enter your email for your chance to win a free month of Sloane AI.</p>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full px-3 py-2 bg-brand-cream/50 rounded-md text-sm text-brand-green placeholder-brand-green/50 focus:outline-none focus:ring-1 focus:ring-brand-green"
                                        />
                                        <button
                                            type="submit"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (email) {
                                                    setIsModalOpen(true);
                                                }
                                            }}
                                            className="w-full mt-2 group relative inline-flex items-center justify-center rounded-full border border-brand-cream bg-brand-green px-5 py-2 font-Archivo text-xs uppercase text-brand-cream transition-all duration-300 hover:border-brand-logo hover:text-brand-logo overflow-hidden"
                                        >
                                            <div className="absolute inset-0 w-full h-full">
                                                <div className="absolute inset-0 -skew-x-12 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent"></div>
                                            </div>
                                            <span className="relative z-10 font-medium">Submit</span>
                                        </button>
                                    </div>
                                    {subscribeStatus.message && (
                                        <p className={`text-xs ${subscribeStatus.type === 'success'
                                            ? 'text-green-600'
                                            : 'text-red-500'
                                            }`}>
                                            {subscribeStatus.message}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 px-4 sm:px-8 py-8 lg:py-16">
                        {/* Featured Post Card */}
                        {latestPost && (
                            <div className="max-w-3xl mb-8 lg:mb-16">
                                <div className="relative">
                                    <div className="absolute -top-4 -left-4 z-50">
                                        <span className="px-4 py-2 bg-brand-green text-brand-cream rounded-full text-sm font-bold font-Archivo shadow-lg transform -rotate-2">
                                            Latest Post
                                        </span>
                                    </div>
                                    <div className="bg-white/90 backdrop-blur-md rounded-md shadow-md overflow-hidden">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="relative w-full md:w-1/2 h-48 md:h-64">
                                                {latestPost.image ? (
                                                    <Image
                                                        src={latestPost.image}
                                                        alt={latestPost.title}
                                                        fill
                                                        className="object-cover"
                                                        priority
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-brand-green/10" />
                                                )}
                                            </div>
                                            <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col">
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {latestPost.tags?.map((tag: string) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2 py-1 bg-brand-green/5 text-brand-green rounded-full text-xs"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h2 className="text-lg md:text-xl font-Archivo text-brand-green mb-3">
                                                    {latestPost.title}
                                                </h2>
                                                <p className="text-brand-green/70 mb-4 line-clamp-2 flex-grow">
                                                    {latestPost.description}
                                                </p>
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto pt-4 border-t border-brand-green/10">
                                                    <Link
                                                        href={`/blog/${latestPost.slug}`}
                                                        className="px-4 py-2 bg-brand-green text-brand-cream rounded-md hover:bg-brand-green-dark transition-colors text-sm flex items-center gap-2"
                                                    >
                                                        Read More
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </Link>
                                                    <span className="text-sm text-brand-green/50 flex items-center gap-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        {new Date(latestPost.date).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Posts Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {filteredPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group block bg-white/90 backdrop-blur-md rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="relative h-40">
                                        {post.image ? (
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-brand-green/10" />
                                        )}
                                    </div>
                                    <div className="p-4 sm:p-5 flex flex-col justify-between h-[200px]">
                                        <div>
                                            <div className="flex flex-wrap gap-1 mb-1.5">
                                                {post.tags?.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-0.5 bg-brand-green/5 text-brand-green rounded-full text-xs"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-base sm:text-lg font-Archivo text-brand-green mb-1.5">
                                                {searchTerm ? highlightText(post.title, searchTerm) : post.title}
                                            </h3>
                                            <p className="text-brand-green/70 line-clamp-2 text-sm">
                                                {searchTerm
                                                    ? highlightText(
                                                        post.description.length > 80
                                                            ? `${post.description.substring(0, 80)}...`
                                                            : post.description,
                                                        searchTerm
                                                    )
                                                    : post.description.length > 80
                                                        ? `${post.description.substring(0, 80)}...`
                                                        : post.description
                                                }
                                            </p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-3 border-t border-brand-green/10">
                                            <button
                                                className="group inline-flex items-center gap-1 text-brand-green hover:text-brand-green-dark transition-all duration-200 text-sm font-medium"
                                            >
                                                Learn More
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-all duration-200 transform group-hover:w-5 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                            <span className="text-xs text-brand-green/50 flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Pricing Banner */}
                        <div className="mt-8 lg:mt-16 lg:p-12 hover:cursor-pointer rounded-md overflow-hidden">
                            <Link href="/pricing">
                                <Image
                                    src="/images/number1.png"
                                    alt="Sloane Ai The Number 1 Ai tool for business owners"
                                    width={1200}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <SubscribeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialEmail={email}
                onSubmit={handleSubscribeSubmit}
            />
        </>
    );
} 