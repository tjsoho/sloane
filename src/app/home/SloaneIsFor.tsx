// src/app/section2.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

import { SlideReveal } from '../components/Animations/SlideReveal';

const Section2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/founder5.png"
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-start justify-center px-4 text-left">
        <SlideReveal>
          <h2 className="font-Archivo text-4xl font-bold leading-none text-brand-cream lg:text-6xl 2xl:text-7xl">
            Meet
            <br />
            The Founders
          </h2>
        </SlideReveal>

        <SlideReveal>
          <div className="mt-8">
            <Button
              title="How it All Began"
              textColor="brand-cream"
              textHoverColor="brand-logo"
              backgroundColor="brand-green"
              hoverBG="brand-green-dark"
              path="/about"
              ariaLabel="Learn about Sloane's founders"
            />
          </div>
        </SlideReveal>
      </div>
    </div>
  );
};

export default Section2;
