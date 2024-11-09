'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [headingText, setHeadingText] = useState<React.ReactNode>(null);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const updateHeadingText = () => {
      if (window.innerWidth < 768) {
        // Mobile screen (small screens)
        setHeadingText(
          <>
            Make Business
            <br />
            Easy with
            <br />
            <span className="text-brand-logo">Sloane Ai</span>
          </>
        );
      } else {
        // Medium and larger screens
        setHeadingText(
          <>
            Make Business Easy
            <br />
            with <span className="text-brand-logo">Sloane Ai</span>
          </>
        );
      }
    };

    // Initial call to set the heading based on the current window size
    updateHeadingText();

    // Add event listener
    window.addEventListener('resize', updateHeadingText);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateHeadingText);
    };
  }, []);

  return (
    <div className="w-screen-1 h-screen bg-brand-green ">
      <div className="absolute bottom-0 right-0 h-full w-[300px] opacity-10 md:h-auto md:opacity-60 lg:w-1/2">
        <img
          src="/images/palms1.png"
          alt="hero background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center ">
        {/* main content */}
        <div className="flex h-full w-full flex-col items-start justify-center">
          {/* main content */}
          <div className="flex h-full w-full flex-col items-start justify-center ">
            <div className="z-10 mb-4 flex flex-col px-8 pt-12 lg:pt-40">
              <h1 className="text-left text-[37px] leading-[36px] text-brand-cream md:text-5xl lg:text-7xl">
                {headingText}
              </h1>
              <p className="mt-4 text-left text-[21px] text-brand-cream lg:text-2xl">
                The #1 Ai Tool for Business Owners - Tailored to Your Unique
                Needs.
              </p>
            </div>
            <div className="flex w-full justify-center md:justify-start">
              <div className="3xl:w-[700px] z-50 flex w-[80%] items-start justify-center md:w-[500px] md:justify-start lg:w-[600px]">
                <img
                  src="/images/macBook1a.png"
                  alt="Make business easy with Sloane.Ai. The no.1 Ai platform for business owners "
                />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 2.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div
            className="flex flex-col items-end justify-center pb-20 hover:cursor-pointer md:pb-8"
            onClick={scrollToNextSection}
          >
            <div id="scroll-down-animation" className="w-full">
              <span className="mouse">
                <span className="move"></span>
              </span>
              <h1 className="scroll-text" aria-label="Sloane AI Platform">
                Scroll down
              </h1>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
