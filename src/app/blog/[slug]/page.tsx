import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';
import MarkdownContent from './MarkdownContent';

interface BlogPostProps {
  params: { slug: string };
}

const fetchPostBySlug = async (slug: string) => {
  try {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const postData = querySnapshot.docs[0]?.data();
      return postData ?? null;
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return null;
};

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
    <div className="h-full w-full bg-brand-cream">
      <div className="bg-brand-green lg:min-h-[300px] lg:max-h-[400px]">
        <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col px-4 pb-8 pt-24 lg:py-32 2xl:max-w-[1540px]">
          <h1 className="mb-4 font-Archivo text-3xl leading-none text-brand-cream lg:text-7xl">
            {post?.title}
          </h1>
          <p className="-mt-4 text-[22px] text-brand-cream">{post?.description}</p>
        </div>
      </div>
      <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col py-16 lg:py-32 2xl:max-w-[1540px]">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="h-auto w-[90%] lg:h-full lg:w-[60%]">
            {post?.image && <img src={post.image} alt={post?.title} className="mb-4 h-full w-full object-cover" />}
          </div>
          <div className="mx-auto flex h-full w-full max-w-[1100px] flex-col px-4 py-16 ">
            <p className="mb-6 border-brand-green-dark opacity-20">
              {post?.date ? renderDate(post.date) : 'Invalid Date'}
            </p>
            <MarkdownContent content={post?.content || ''} />
            <div className="relative mt-8">
              <div className="">{renderSignature()}</div>
              <div className="ml-14 w-3/4 border-t border-brand-green-dark opacity-20 lg:w-1/2"></div>
            </div>
            <a href="/blog" className="mt-8 flex items-center text-xl text-brand-green hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
