'use client';

import React from 'react';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

interface QuoteProps {
  text: string;
  author: string;
  bgColorClass: string; // Accept a Tailwind class as a prop
  textColorClass: string; // Accept a Tailwind class for text colour
  quoteIconColorClass?: string; // Optional prop for the icon colour
}

const Quote2: React.FC<QuoteProps> = ({
  text,
  author,
  bgColorClass,
  textColorClass,
  quoteIconColorClass = 'text-brand-cream', // Default to text-brand-cream if not provided
}) => {
  return (
    <div className={`flex justify-center py-16 ${bgColorClass}`}>
      <div className="relative max-w-[1240px] px-8 2xl:max-w-[1540px]">
        <FormatQuoteRoundedIcon className={`absolute -top-10 left-0 text-6xl ${quoteIconColorClass} xl:-left-5`} />
        <p className={`text-center text-2xl font-light leading-relaxed lg:text-4xl ${textColorClass}`}>
          {text}
        </p>
        <p className={`mt-4 text-right text-sm font-light lg:text-base ${textColorClass}`}>
          {author}
        </p>
      </div>
    </div>
  );
};

export default Quote2;
