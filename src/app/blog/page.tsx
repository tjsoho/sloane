'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { db } from '../../utils/firebase'; // Ensure the Firebase setup is correct
import { collection, getDocs } from 'firebase/firestore';

interface Post {
  slug: string;
  title: string;
  date: string;
  image?: string;
  description: string;
}

export default function BlogIndex() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsCollection);
        const postsData = postsSnapshot.docs.map((doc) => {
          return {
            slug: doc.id, // Using Firestore document ID as the slug
            ...doc.data(),
          } as Post;
        });

        // Sort posts by date in descending order
        const sortedPosts = postsData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="h-full w-full bg-brand-cream">
      <div>
        <div className="bg-brand-green lg:h-[300px]">
          <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col px-4 pb-8 pt-24 lg:py-32 2xl:max-w-[1540px]">
            <h1 className="text-5xl font-bold text-brand-cream lg:text-6xl">
              Blog Posts
            </h1>
            <p className="mt-2 text-brand-cream lg:w-3/4">
              Explore insightful strategies, tips, and stories that empower
              business owners to grow and thrive.
            </p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <h2 className="mr-4 text-4xl">Loading</h2>
          <motion.div
            className="flex space-x-2"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <motion.div
              className="h-4 w-4 rounded-full bg-brand-green"
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0,
              }}
            />
            <motion.div
              className="h-4 w-4 rounded-full bg-brand-green"
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            />
            <motion.div
              className="h-4 w-4 rounded-full bg-brand-green"
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.4,
              }}
            />
          </motion.div>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl bg-brand-cream px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="overflow-hidden rounded-md bg-[#fff5e6] shadow-md"
              >
                <div>
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold text-brand-green">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-[18px] text-brand-green-dark">
                      {post.description}
                    </p>
                    <p className="mt-2 border-brand-green-dark text-sm opacity-40">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 lg:p-12 hover:cursor-pointer">
            <Link href="/pricing">
              <img
                src="/images/number1.png"
                alt="Sloane Ai The Number 1 Ai tool for business owners"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
