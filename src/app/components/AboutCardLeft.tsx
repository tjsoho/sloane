"use client";

import React from "react";

interface AboutCardLeftProps {
  imageSrc: string;
  title: string;
  content: string;
  bgColor: string;
}

const AboutCardLeft: React.FC<AboutCardLeftProps> = ({
  imageSrc,
  title,
  content,
  bgColor,
}) => {
  const bgColorClass = `bg-${bgColor}`;
  return (
    <div className={`flex w-full flex-col items-center justify-center lg:flex-row ${bgColorClass}`}>
      <div className="flex flex-col justify-start w-full lg:w-2/3 px-8 py-4">
        <h2 className="mt-4 text-left font-Archivo text-3xl text-brand-cream lg:text-5xl">
          {title}
        </h2>
        <div 
          className="font-Raleway mt-4 text-left text-brand-cream text-[20px]" 
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="w-full lg:w-1/3 flex-grow h-full">
        <div className="h-full">
          <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutCardLeft;
