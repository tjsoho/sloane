import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownContent from './MarkdownContent'; // Import the client-side component

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

  const renderSignature = () => {
    if (data.signature === 'toby') {
      return <img src="/images/tobySignature.png" alt="Toby Signature" />;
    } else if (data.signature === 'rachel') {
      return <img src="/images/rachSignature.png" alt="Rachel Signature" />;
    }
    return null; // No signature selected
  };

  return (
    <div className="h-full w-full bg-brand-cream">
      <div className="bg-brand-green lg:h-[300px]">
        <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col px-4 pb-8 pt-24 lg:py-32 2xl:max-w-[1540px]">
          <h1 className="mb-4 font-Archivo text-4xl leading-none text-brand-cream lg:text-8xl">
            {data.title}
          </h1>
          <p className="-mt-4 text-[22px] text-brand-cream">
            {data.description}
          </p>
        </div>
      </div>
      <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col py-16 lg:py-32 2xl:max-w-[1540px]">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="h-auto w-[90%] lg:h-full lg:w-[60%]">
            {data.image && (
              <img
                src={data.image}
                alt={data.title}
                className="mb-4 h-full w-full object-cover"
              />
            )}
          </div>
          <div className="mx-auto flex h-full w-full max-w-[1100px] flex-col px-4 py-16 ">
            <p className="mb-6 border-brand-green-dark  opacity-20">
              {new Date(data.date).toLocaleDateString()}
            </p>
            <MarkdownContent content={content} />

            {/* Render the selected signature */}
            <div className="relative mt-8">
              <div className="">{renderSignature()}</div>
              <div className="ml-14 w-3/4 border-t  border-brand-green-dark opacity-20 lg:w-1/2"></div>
            </div>

            {/* Link back to blog with a back arrow */}
            <a
              href="/blog"
              className="mt-8 flex items-center text-xl text-brand-green hover:underline"
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
