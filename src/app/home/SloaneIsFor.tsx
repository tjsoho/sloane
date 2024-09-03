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
              <h2 className="text-left text-[32px] leading-none lg:text-5xl 2xl:text-7xl">
              Who is <br></br>Slaone Ai For?
              </h2>
              {/* &apos; */}
            </SlideReveal>
            <SlideReveal>
              <p className="my-8 font-light lg:w-[90%] text-[21px]">
              Sloane Ai is designed for solo entrepreneurs, small business owners, and creatives who are juggling multiple roles and need a reliable partner to make business tasks easier. <br></br><br></br>Whether you're a start-up founder, a life coach, an online course creator, or a freelancer, Sloane Ai offers tools and personalised solutions to fit your unique needs.
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
            {isMobile ? <MobileClientCardCarousel /> : <ClientCardCarousel />}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Section2;
