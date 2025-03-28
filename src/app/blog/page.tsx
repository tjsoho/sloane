import BlogClient from './BlogClient';

// This is the server component that handles revalidation
export const dynamic = 'force-dynamic';
export const revalidate = 10;

export default function BlogPage() {
  return <BlogClient />;
}
