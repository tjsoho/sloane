import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.md`);  // Ensure this points to the correct directory
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-auto max-h-96 object-cover mb-4"
        />
      )}
      <p className="text-gray-500 mb-6">
        {new Date(data.date).toLocaleDateString()}
      </p>
      <div className="prose prose-lg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}  // Enables GitHub Flavored Markdown
          rehypePlugins={[rehypeRaw]}  // Allows raw HTML to be rendered
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
