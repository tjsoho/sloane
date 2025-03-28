import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';
import MarkdownContent from './MarkdownContent';
import ViewCounter from './ViewCounter';
import Image from 'next/image';

interface BlogPostProps {
  params: { slug: string };
}

async function fetchPostBySlug(slug: string) {
  try {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0]?.data();
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  return null;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  if (!post) return <div>Post not found</div>;

  const renderSignature = () => {
    if (post?.signature === 'toby') {
      return <img src="/images/tobySignature.png" alt="Toby Signature" />;
    } else if (post?.signature === 'rachel') {
      return <img src="/images/rachSignature.png" alt="Rachel Signature" />;
    }
    return null;
  };

  const renderDate = (date: any) => {
    if (date?.seconds) {
      return new Date(date.seconds * 1000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } else if (typeof date === 'string') {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    return 'Invalid Date';
  };

  return (
    <article className="min-h-screen bg-brand-cream">
      {/* Hero Section with Featured Image */}
      <div className="relative h-[60vh] w-full">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-brand-green/10" />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="font-Archivo text-5xl mb-4">{post.title}</h1>
            <p className="text-xl opacity-90">{post.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-brand-green/10 text-brand-green rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <MarkdownContent content={post.content || ''} />
        </div>

        {/* Signature and Metadata */}
        <div className="mt-12 pt-6 border-t border-brand-green/10">
          <div className="relative">
            <div className="mb-4">{renderSignature()}</div>
            <div className="flex justify-between items-center text-sm text-brand-green/60">
              <span>Published: {renderDate(post.date)}</span>
              <ViewCounter slug={slug} />
            </div>
          </div>
        </div>

        {/* Back to Blog Link */}
        <a
          href="/blog"
          className="text-brand-green mt-8 flex items-center text-xl hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </a>
      </div>
    </article>
  );
}

// Adding revalidation time of 10 seconds
export const revalidate = 10;
