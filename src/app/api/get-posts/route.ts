import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get('slug');

  if (slug) {
    // Logic to get a single post by slug
    const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Post not found', { status: 404 });
    }

    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    return NextResponse.json({ title: data.title, description: data.description, content, image: data.image });
  } else {
    // Logic to get all posts
    const postsDir = path.join(process.cwd(), 'src', 'content');
    const filenames = fs.readdirSync(postsDir);

    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
        image: data.image,
        description: data.description,
      };
    });

    const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(sortedPosts);
  }
}
