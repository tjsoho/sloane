// src/components/MarkdownContent.tsx
'use client'; // This directive indicates that this component is client-side

import React from 'react';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <div className="blog-content">
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose prose-lg max-w-none"
      />
    </div>
  );
};

export default MarkdownContent;
