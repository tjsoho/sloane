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
      <div className="flex flex-col justify-start w-contain px-8 py-4">
        <h2 className="mt-4 text-left font-Archivo text-2xl text-brand-cream lg:text-4xl">
          {title}
        </h2>
        <p className="font-Raleway mt-4 text-left text-brand-cream">
          {content}
        </p>
      </div>
      <div className="lg:w-[2000px] lg:min-h-[300px]">
        <img src={imageSrc} alt={title} className="min-h-[400px] max-h-[400px] w-full object-cover" />
      </div>
    </div>
  );
};

export default AboutCardLeft;
