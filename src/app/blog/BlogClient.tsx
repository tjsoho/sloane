'use client';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { useState, useEffect } from 'react';

interface Post {
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
    const postsData = postsSnapshot.docs.map((doc) => ({
        slug: doc.id,
        ...doc.data(),
    })) as Post[];

    // Sort posts by date (newest first)
    return postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogClient() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    useEffect(() => {
        async function loadPosts() {
            const postsData = await getPosts();
            setPosts(postsData);
        }
        loadPosts();
    }, []);

    // Get unique tags from all posts
    const uniqueTags = Array.from(
        new Set(posts.flatMap((post) => post.tags || []))
    ).sort();

    // Get the latest post
    const latestPost = posts[0];

    // Filter other posts based on selected tags
    const filteredPosts = posts.slice(1).filter((post) => {
        if (selectedTags.length === 0) return true;
        return selectedTags.some((tag) => post.tags?.includes(tag));
    });

    return (
        <div className="min-h-screen bg-brand-cream">
            {/* Hero Section */}
            <div className="relative h-[50vh] bg-brand-green">
                <div className="absolute inset-0">
                    <Image
                        src="/images/sloane_sunflower.png"
                        alt="Blog Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
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

            {/* Featured Post Card - Overlapping Hero */}
            {latestPost && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="absolute -top-4 -left-4 z-50">
                        <span className="px-6 py-3 bg-brand-logo text-brand-green rounded-md text-xl font-bold font-Archivo shadow-lg transform -rotate-2">
                            Latest Post
                        </span>
                    </div>
                    <div className="-mt-32 mb-16">
                        <div className="bg-white/90 backdrop-blur-md rounded-md shadow-xl overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="relative w-full md:w-2/3 h-72 md:h-96">
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
                                <div className="w-full md:w-1/3 p-8">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {latestPost.tags?.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-brand-green/5 text-brand-green rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-2xl font-Archivo text-brand-green mb-4">
                                        {latestPost.title}
                                    </h2>
                                    <p className="text-brand-green/70 mb-6 line-clamp-3">
                                        {latestPost.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={`/blog/${latestPost.slug}`}
                                            className="px-4 py-2 bg-brand-green text-brand-cream rounded-md hover:bg-brand-green-dark transition-colors"
                                        >
                                            Read More
                                        </Link>
                                        <span className="text-sm text-brand-green/50">
                                            {formatDistanceToNow(new Date(latestPost.date), {
                                                addSuffix: true,
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4">
                        <div className="bg-white/90 backdrop-blur-md rounded-md p-6 shadow-sm">
                            <h3 className="text-xl font-Archivo text-brand-green mb-4">Filter by Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {uniqueTags.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => {
                                            setSelectedTags((prev) =>
                                                prev.includes(tag)
                                                    ? prev.filter((t) => t !== tag)
                                                    : [...prev, tag]
                                            );
                                        }}
                                        className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedTags.includes(tag)
                                            ? 'bg-brand-green text-brand-cream'
                                            : 'bg-brand-green/5 text-brand-green hover:bg-brand-green/10'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Posts Grid */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group block bg-white/90 backdrop-blur-md rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="relative h-64">
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
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags?.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 bg-brand-green/5 text-brand-green rounded-md text-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-Archivo text-brand-green mb-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-brand-green/70 mb-4 line-clamp-2">
                                            {post.description}
                                        </p>
                                        <div className="text-sm text-brand-green/50">
                                            {formatDistanceToNow(new Date(post.date), {
                                                addSuffix: true,
                                            })}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pricing Banner */}
                <div className="mt-16 lg:p-12 hover:cursor-pointer rounded-md overflow-hidden">
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
    );
} 