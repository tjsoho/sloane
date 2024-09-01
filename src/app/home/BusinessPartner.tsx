'use client';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import ClientCardCarousel from '../components/home/ClientCardCarousel';
import MobileClientCardCarousel from '../components/home/MobileClientCardCarousel';
import Statistic from '../components/home/Statistic';
import { SlideReveal } from '../components/Animations/SlideReveal';
import { SlideReveal2 } from '../components/Animations/SlideReveal2';

const BusinessPartner = () => {
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
              <h2 className="text-left text-[32px] leading-none lg:text-[44px] ">
                Sloane Ai<br></br>is your new <br></br>business partner
              </h2>
              {/* &apos; */}
            </SlideReveal>
            <SlideReveal>
              <p className="my-8 font-light lg:w-3/4 text-[21px]">
                Discover how it effortlessly handles your day-to-day tasks with
                ease and precision.
              </p>
            </SlideReveal>
            <SlideReveal>
              <div className="mt-2">
                <Button
                  title="Get Sloane"
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
          {/* Right Col */}
          <div className="mt-8 w-full lg:mt-0 lg:w-1/2">
            <SlideReveal2>
            <img
              src="/images/bizPartner.png"
              alt="Scale and grow your business with Sloane Ai"
              className="h-full w-full rounded-xl"
            />
            </SlideReveal2>
          </div>
        </div>
        {/* Stats */}
      </div>
      <div className="mt-8 flex h-full w-[90%] flex-col justify-between rounded-br-[100px] rounded-tr-[100px] bg-brand-yellow py-8 lg:mt-28 lg:flex-row">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col justify-between md:flex-row 2xl:max-w-[1540px]">
          <div className="my-4 w-full lg:w-full">
            <Statistic
              percentage={100}
              subheading="User Happiness"
              imageUrl="/images/thumbs.png"
            />
          </div>
          <div className="my-12 w-full lg:my-4 lg:w-full">
            <Statistic
              heading="#1"
              subheading="Ai Tool for Business"
              imageUrl="/images/lappy.svg"
              className=" w-[200px] " // Add responsive width classes here
            />
          </div>
          <div className="my-4 w-full lg:w-full">
            <Statistic
              percentage={100}
              subheading="No Brainer"
              imageUrl="/images/light.png"
              className="mt-2 h-auto w-[60px] lg:w-[100%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartner;
