'use client';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

import { SlideReveal } from '../components/Animations/SlideReveal';
import { SlideReveal2 } from '../components/Animations/SlideReveal2';
import SpeechBubble from '../components/SpeechBubble';

const BusinessPartner = () => {
  const testimonialText =
    "Before I met Sloane, I was on the verge of hiring a VA, which would have cost a fortune in time and money, Now, with Sloane's capabilities stretching across all my business needs, I'm saving more than just dollars— I'm reclaiming my time. It's like having a VA 24/7, but at a fraction of the cost. Bye-bye, payroll worries; hello, efficiency!";
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
    <div className="relative bg-brand-cream">
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* Left container - full width with padding */}
        <div className="order-2 flex w-full items-center justify-center  bg-brand-cream lg:order-1 lg:w-1/2">
          <div className="px-8 py-16 lg:px-0">
            {' '}
            {/* Container for content */}
            <SlideReveal>
              <h2 className="text-left text-[32px] leading-none text-brand-green lg:text-5xl 2xl:text-7xl">
                Say Hello<br></br>to your New <br></br>Business Bestie
              </h2>
            </SlideReveal>
            <SlideReveal>
              <p className="my-8 font-poppins text-[21px] font-medium text-brand-green lg:w-3/4">
                She's more than just a tool, Sloane Ai offers constant support.
              </p>
            </SlideReveal>
            <SlideReveal>
              <div className="mt-2">
                <Button
                  title="Start Now"
                  textColor="brand-cream"
                  textHoverColor="brand-logo"
                  backgroundColor="brand-green"
                  hoverBG="brand-green-dark"
                  onClick={handleClick}
                  path="/pricing"
                  ariaLabel="Find Sloane Pricing"
                />
              </div>
            </SlideReveal>
          </div>
        </div>

        {/* Right container - full height, 50% width, no padding */}
        <div className="order-1 w-full lg:order-2 lg:w-1/2">
          <SlideReveal2>
            <div className="h-full">
              <img
                src="/images/besties1.jpg"
                alt="Scale and grow your business with Sloane Ai"
                className="h-screen w-full object-cover"
              />
            </div>
          </SlideReveal2>
          <div className="absolute bottom-[33%] left-1/2 w-[90%] max-w-[600px] -translate-x-1/2 px-4 lg:bottom-[18%] lg:left-[60%]">
            <SlideReveal>
              <SpeechBubble
                text={testimonialText}
                type="received"
                className="text-lg"
              />
            </SlideReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartner;
