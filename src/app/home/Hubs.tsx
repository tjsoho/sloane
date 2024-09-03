'use client';
import React, { useState, useEffect } from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';
import { SlideReveal2 } from '../components/Animations/SlideReveal2';

const Hubs = () => {
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
          <div className="flex w-full flex-col items-start justify-center text-brand-green lg:w-1/2">
            <SlideReveal>
              <h2 className=" text-left text-[32px] leading-none lg:text-5xl 2xl:text-7xl  ">
                Meet the Hubs
              </h2>
              {/* &apos; */}
            </SlideReveal>
            <p className="font-semibold">“The Sloane Ai Game-Changer”</p>
            <SlideReveal>
              <p className="my-8 w-full text-[21px] font-light">
                Your dedicated specialists in every field. Whether it’s
                marketing, business planning, brainstorming new offers or social media, each Hub in
                Sloane Ai offers customised, expert-level support, just a click
                away. <br></br>
                <br></br> No more outsourcing or thinking 'I don't know how to do that'. Sloane's strategies and guidance give you the confidence for tasks you used to avoid. <br></br>
                <br></br>Each Hub comes with built-in prompts and
                questions, helping you get to the heart of your goals. No need to think up the right questions, spend money on outsourcing, or waste time figuring out what to do next.
                
              </p>
            </SlideReveal>
          </div>
          {/* Right Col */}
          <div className=" flex w-full items-center justify-center lg:w-1/2">
            <SlideReveal2>
              <img
                src="/images/hubs.png"
                alt="Scale and grow your business with Sloane Ai"
                className="h-full w-full rounded-2xl"
              />
            </SlideReveal2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hubs;
