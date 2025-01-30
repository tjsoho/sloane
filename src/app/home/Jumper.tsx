'use client';

import React from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';
import SpeechBubble from '../components/SpeechBubble';

const Jumper = () => {
  const testimonialText =
    "Honestly I'm just blown away! Every single day I use Sloane for literally everything and it's making my business life so much easier and ten times faster!! Bloody love it!!! Thank you!!!";

  return (
    <div className="relative h-[70vh] w-full overflow-hidden bg-brand-cream">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jumper1.jpg"
          alt="Jumper Background"
          className="h-full w-full object-cover"
          style={{ objectPosition: '50% 20%' }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-between px-4 py-16 lg:px-8">
        {/* Top Right Text */}
        <div className="ml-auto w-full lg:w-1/2">
          <SlideReveal>
            <h2 className="text-center font-Archivo text-4xl font-bold leading-none text-brand-cream lg:text-6xl 2xl:text-7xl">
              <span className="text-brand-logo">sloane</span> saved me
              <br />
              <span className="text-brand-cream">12hrs per week</span>
              <br />
              <span className="text-brand-cream">$38k per year</span>
            </h2>
          </SlideReveal>
        </div>

        {/* Bottom Left Speech Bubble */}
        <div className="bottom-0 mt-16 w-full max-w-[600px] lg:w-1/2">
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
  );
};

export default Jumper;
