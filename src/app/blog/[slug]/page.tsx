import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';
import MarkdownContent from './MarkdownContent';
import ViewCounter from './ViewCounter';

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
      return new Date(date.seconds * 1000).toLocaleDateString();
    } else if (typeof date === 'string') {
      return new Date(date).toLocaleDateString();
    }
    return 'Invalid Date';
  };

  return (
    <div className="bg-brand-cream h-full w-full">
      <ViewCounter slug={slug} />
      <div className="bg-brand-green lg:max-h-[400px] lg:min-h-[300px]">
        <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col px-4 pb-8 pt-24 lg:py-32 2xl:max-w-[1540px]">
          <h1 className="font-Archivo text-brand-cream mb-4 text-3xl leading-none lg:text-7xl">
            {post?.title}
          </h1>
          <p className="text-brand-cream -mt-4 text-[22px]">
            {post?.description}
          </p>
        </div>
      </div>
      <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col py-16 lg:py-32 2xl:max-w-[1540px]">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="h-auto w-[90%] lg:h-full lg:w-[60%]">
            {post?.image && (
              <img
                src={post.image}
                alt={post?.title}
                className="mb-4 h-full w-full object-cover"
              />
            )}
          </div>
          <div className="mx-auto flex h-full w-full max-w-[1100px] flex-col px-4 py-16 ">
            <p className="border-brand-green-dark mb-6 opacity-20">
              {post?.date ? renderDate(post.date) : 'Invalid Date'}
            </p>
            <MarkdownContent content={post?.content || ''} />
            <div className="relative mt-8">
              <div className="">{renderSignature()}</div>
              <div className="border-brand-green-dark ml-14 w-3/4 border-t opacity-20 lg:w-1/2"></div>
            </div>
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
        </div>
      </div>
    </div>
  );
}

// Adding revalidation time of 10 seconds
export const revalidate = 10;
