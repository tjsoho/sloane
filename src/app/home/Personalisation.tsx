'use client';
import React from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';
import SpeechBubble from '../components/SpeechBubble';

const Personalisation = () => {
  const testimonialText =
    "Before I met Sloane, I was on the verge of hiring a VA, which would have cost a fortune in time and money, Now, with Sloane's capabilities stretching across all my business needs, I'm saving more than just dollars— I'm reclaiming my time. It's like having a VA 24/7, but at a fraction of the cost. Bye-bye, payroll worries; hello, efficiency!";

  return (
    <div className="relative overflow-hidden bg-brand-cream">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/shadow.png"
          alt="Background pattern"
          className="h-full w-full object-cover"
        />
       
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 py-16 lg:py-32 2xl:max-w-[1540px]">
        <div className="lg:w-3/4">
          <SlideReveal>
            <h2 className="text-left text-[32px] leading-tight text-brand-cream lg:text-5xl 2xl:text-7xl">
              Get results you won't find anywhere else.
            </h2>
          </SlideReveal>

          <SlideReveal>
            <p className="mt-8 text-[22px] font-medium font-poppins text-brand-cream lg:w-2/3">
              Sloane's unique blend of deep personalisation and expert-driven
              Hubs delivers highly effective content and streamlined workflows,
              saving you time, money, and stress – all while staying true to
              your brand.
            </p>
          </SlideReveal>
        </div>
      </div>
    </div>
  );
};

export default Personalisation;
