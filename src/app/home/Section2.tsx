// src/app/section2.tsx
"use client";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import ClientCardCarousel from "../components/home/ClientCardCarousel";
import MobileClientCardCarousel from "../components/home/MobileClientCardCarousel";
import Statistic from "../components/home/Statistic";
import { SlideReveal } from "../components/Animations/SlideReveal";

const Section2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="bg-brand-cream ">
      <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col px-4 py-16 lg:py-32 2xl:max-w-[1540px]">
        <div className="h-contain flex w-full flex-col lg:flex-row">
          {/* left col */}
          <div className="text-brand-green flex w-full flex-col items-start justify-center lg:w-1/2">
            <SlideReveal>
              <h2 className="text-left text-[32px] leading-tight lg:text-[44px]">
              The Business Tool <br></br>You’ll Reach for Every Day. <br></br>Uniquely Tailored to You.
              </h2>
              {/* &apos; */}
            </SlideReveal>
            <SlideReveal>
              <p className="my-8 font-medium lg:w-3/4">
              Sloane is a meticulously designed Ai platform tailored to your unique brand. Helping creatives, solo and small business owners enhance marketing, streamline operations, and save time. Simplify every business task so you can focus on growing your business and doing more of what you love most. 
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
                />
              </div>
            </SlideReveal>
          </div>
          {/* Right Col */}
          <div className="mt-8 w-full lg:mt-0 lg:w-1/2">
            {isMobile ? <MobileClientCardCarousel /> : <ClientCardCarousel />}
          </div>
        </div>
        {/* Stats */}
        <div className="mt-8 flex h-full w-full flex-col justify-between lg:mt-28 lg:flex-row">
          <div className="my-4 w-full lg:w-full">
            <Statistic
              percentage={100}
              subheading="User Happiness"
              imageUrl="/images/thumbs.png"
            />
          </div>
          <div className="my-12 w-full lg:my-4 lg:w-full">
            <Statistic
              percentage={70}
              subheading="Faster Task Completion"
              imageUrl="/images/graph.png"
            />
          </div>
          <div className="my-4 w-full lg:w-full">
            <Statistic
              percentage={100}
              subheading="No Brainer"
              imageUrl="/images/light.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
