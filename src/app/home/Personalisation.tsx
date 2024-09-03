'use client';
import React, { useState, useEffect } from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';
import { SlideReveal2 } from '../components/Animations/SlideReveal2';

const Personalisation = () => {
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
        <div className="h-contain flex w-full flex-col md:flex-row">
          {/* left col */}
          <div className="flex w-full flex-col items-start justify-center text-brand-orange lg:w-1/2">
            <SlideReveal>
              <h2 className=" text-left text-[32px] leading-none lg:text-5xl 2xl:text-7xl  ">
                Personalisation<br></br> Like No Other
              </h2>
              {/* &apos; */}
            </SlideReveal>
            <SlideReveal>
              <p className="my-8 text-[21px] font-light lg:w-full">
                Sloane Ai isn't just any tool. Through our deep-dive interviews
                with you & one of our experts, Sloane Ai learns to speak in your
                unique voice, reflecting your brand's essence. It's like having
                another you in your business, easing your workload and providing
                expert guidance round the clock.
              </p>
            </SlideReveal>
          </div>
          {/* Right Col */}
          <div className=" flex items-center justify-center">
            <div className="mt-8 w-full lg:mt-0 lg:w-1/2 ">
              <SlideReveal2>
                <img
                  src="/images/photographerStock.png"
                  alt="Scale and grow your business with Sloane Ai"
                  className="h-full w-full rounded-2xl"
                />
              </SlideReveal2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalisation;
