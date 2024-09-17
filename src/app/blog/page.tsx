import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';  // Ensure correct Firebase setup
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  image?: string;
  description: string;
}

async function getPosts(): Promise<Post[]> {
  const postsCollection = collection(db, 'posts');
  const postsSnapshot = await getDocs(postsCollection);
  const postsData = postsSnapshot.docs.map((doc) => ({
    slug: doc.id,
    ...doc.data(),
  })) as Post[];

  return postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <div className="h-full w-full bg-brand-cream">
      <div>
        <div className="bg-brand-green lg:h-[300px]">
          <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col px-4 pb-8 pt-24 lg:py-32 2xl:max-w-[1540px]">
            <h1 className="text-5xl font-bold text-brand-cream lg:text-6xl">Blog Posts</h1>
            <p className="mt-2 text-brand-cream lg:w-3/4">
              Explore insightful strategies, tips, and stories that empower business owners to grow and thrive.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl bg-brand-cream px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="overflow-hidden rounded-md bg-[#fff5e6] shadow-md">
              <div>
                {post.image && (
                  <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
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
            <img src="/images/number1.png" alt="Sloane Ai The Number 1 Ai tool for business owners" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
}
