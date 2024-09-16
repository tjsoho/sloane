// src/components/MarkdownContent.tsx
'use client'; // This directive indicates that this component is client-side

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <div className="">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Enables GitHub Flavored Markdown
        rehypePlugins={[rehypeRaw]} // Allows raw HTML to be rendered
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl lg:text-4xl font-bold lg:mb-4 ml-0 pl-0 text-brand-green-dark" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl lg:text-3xl font-semibold text-brand-green-dark" {...props} />,
          h3: ({ node, ...props }) => <h2 className="text-xl lg:text-2xl font-semibold text-brand-green-dark" {...props} />,
          h4: ({ node, ...props }) => <h2 className="text-lg lg:text-2xl font-semibold text-brand-green-dark" {...props} />,
          p: ({ node, ...props }) => <p className="text-brand-green-dark font-extralight" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-4 text-brand-green-dark" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-14 text-brand-green-dark text-xl" {...props} />,
          li: ({ node, ...props }) => <li className="text-brand-green-dark mb-2" {...props} />,
          
          img: ({ node, ...props }) => <img className="max-w-full h-auto" {...props} />,
          // Add more elements as needed
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
