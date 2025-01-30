'use client';

import React from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';
import { SlideReveal2 } from '../components/Animations/SlideReveal2';
import Button from '../components/Button';

const Quote2 = () => {

  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className="bg-brand-cream">
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* Left container - Image */}
        <div className="order-1 w-full lg:w-1/2">
          <SlideReveal2>
            <div className="h-full">
              <img
                src="/images/me2.jpg"
                alt="Sloane Business Partner"
                className="lg:h-screen w-full scale-150 lg:scale-125 object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
          </SlideReveal2>
        </div>

        {/* Right container - Text */}
        <div className="order-2 flex w-full items-center justify-center bg-brand-cream lg:w-1/2">
          <div className="px-8 py-16 ">
            <SlideReveal>
              <h2 className="lg:text-right text-[32px] leading-none text-brand-green lg:text-5xl 2xl:text-7xl">
                Highly<br></br>Personalised
              </h2>
            </SlideReveal>
            <SlideReveal>
              <p className="my-8 lg:text-right font-poppins text-[21px] font-medium text-brand-green">
                This is where the magic happens. A detailed interview with Toby,
                our founder ensures Sloane Ai understands YOU, your unique
                business needs and where you need support. Resulting in highly personalised and effective
                content that drives remarkable results.
              </p>
            </SlideReveal>
            <SlideReveal>
              <div className="mt-2 w-full flex justify-end">
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
      </div>
    </div>
  );
};

export default Quote2;
