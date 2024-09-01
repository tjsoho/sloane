'use client';

import React from 'react';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

const Quote2: React.FC<{ text: string; author: string }> = ({
  text,
  author,
}) => {
  return (
    <div className="flex justify-center bg-brand-orange py-16">
      <div className=" relative max-w-[1240px] px-8 2xl:max-w-[1540px]">
        <FormatQuoteRoundedIcon className="absolute -top-10 left-0 text-6xl text-brand-cream xl:-left-5" />
        <p className="text-2xl font-light leading-relaxed text-brand-cream lg:text-4xl text-center">
          {text}
        </p>
        <p className="mt-4 text-right text-sm font-light text-brand-cream lg:text-base">
          - {author}
        </p>
      </div>
    </div>
  );
};

export default Quote2;
