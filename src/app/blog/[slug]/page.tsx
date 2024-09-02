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
  const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.md`); // Ensure this points to the correct directory
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  return (
    <div className="h-full w-full bg-brand-cream">
      <div className="h-[300px] bg-brand-green">
        <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col px-4 py-16 lg:py-32 2xl:max-w-[1540px]">
          <h1 className="mb-4 font-Archivo text-4xl lg:text-8xl text-brand-cream ">
            {data.title}
          </h1>
        </div>
      </div>
      <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col py-16 lg:py-32 2xl:max-w-[1540px]">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-[90%] h-auto lg:w-[60%] lg:h-full">
            {data.image && (
              <img
                src={data.image}
                alt={data.title}
                className="mb-4 h-full w-full object-cover"
              />
            )}
          </div>
          <div className='mx-auto flex h-full w-full max-w-[1240px] flex-col px-4 2xl:max-w-[1540px] py-16'>
            <p className="mb-6 text-gray-400">
              {new Date(data.date).toLocaleDateString()}
            </p>
            <div className="prose prose-lg">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]} // Enables GitHub Flavored Markdown
                rehypePlugins={[rehypeRaw]} // Allows raw HTML to be rendered
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
