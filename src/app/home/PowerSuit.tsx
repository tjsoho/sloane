'use client';

import React from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';
import SpeechBubble from '../components/SpeechBubble';

const PowerSuit = () => {
  const testimonialText =
    "I've tried numerous Al tools, but Sloane stands out with its intuitively designed dashboard. The Hubs for each section make it a game changer, perfectly aligning with how I think, Highly user-friendly and effective, Sloane has truly transformed my creative process.";

  return (
    <div className="relative h-[70vh] w-full overflow-hidden bg-brand-cream">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/powersuit1.jpg"
          alt="Power Suit Background"
          className="h-full w-full object-cover"
          style={{ objectPosition: '50% 20%' }}
        />
        <div className="absolute inset-0 bg-black/20" />{' '}
        {/* Overlay for better text visibility */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-between px-4 py-16 lg:px-8">
        {/* Top Left Text */}
        <div className="w-full lg:w-1/2">
          <SlideReveal>
            <h2 className="font-Archivo text-4xl font-bold leading-none text-brand-cream lg:text-6xl 2xl:text-7xl text-center">
             <span className="text-brand-logo">sloane</span> saved me
              <br />
              <span className="text-brand-cream">15hrs per week</span>
              <br />
              <span className="text-brand-cream">$46k per year</span>
            </h2>
          </SlideReveal>
        </div>

        {/* Bottom Right Speech Bubble */}
        <div className="ml-auto w-full max-w-[600px] lg:w-1/2 bottom-0 mt-16">
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

export default PowerSuit;
