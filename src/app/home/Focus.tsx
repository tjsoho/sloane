'use client';
import React, { useState, useEffect } from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';
import { SlideReveal2 } from '../components/Animations/SlideReveal2';

const Focus = () => {
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
    <div className="bg-brand-cream ">
      <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col px-4 py-16 lg:py-32 2xl:max-w-[1540px]">
        <div className="h-contain flex w-full flex-col lg:flex-row">
          {/* left col */}
          <div className="order-1 flex w-full flex-col items-center justify-center text-brand-orange lg:order-2 lg:w-1/2">
            <div className='w-full lg:w-[90%]'>
              <SlideReveal>
                <h2 className="text-left text-[32px] leading-none lg:text-5xl 2xl:text-7xl ">
                  Focus on<br></br>What You Love
                </h2>
                {/* &apos; */}
              </SlideReveal>
              <SlideReveal>
                <p className="my-8 font-light lg:w-[90%] text-[21px] text-brand-orange">
                  Imagine focusing on the parts of your business you truly
                  enjoy, while Sloane Ai handles the rest. <br></br>
                  <br></br>From planning to client communication, our platform
                  ensures everything runs smoothly, empowering you to grow your
                  business with ease and confidence.
                </p>
              </SlideReveal>
             
            </div>
          </div>
          {/* Right Col */}
          <div className="order-2 mt-8 w-full lg:order-1 lg:mt-0 lg:w-1/2">
            <SlideReveal2>
              <img
                src="/images/duo.png"
                alt="Scale and grow your business with Sloane Ai"
                className="h-full w-full rounded-xl"
              />
            </SlideReveal2>
          </div>
        </div>
        {/* Stats */}
      </div>
    </div>
  );
};

export default Focus;
