'use client';

import React from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';
import SpeechBubble from '../components/SpeechBubble';

const Wings = () => {
  const testimonialText =
    "I was spending so much time trying to write content and emails that sounded professional. Now with Sloane, everything I create is polished and on-brand. It's like having a professional writer on call 24/7!";

  return (
    <div className="relative h-[70vh] w-full overflow-hidden bg-brand-cream">
      {/* Background Image with darker overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/wings.png"
          alt="Wings Background"
          className="h-full w-full object-cover"
          style={{ objectPosition: '50% 20%' }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-12 px-4 py-16 lg:px-8">
        {/* Centered Text */}
        <div className="w-full text-center lg:w-2/3">
          <SlideReveal>
            <h2 className="font-Archivo text-4xl font-bold leading-none text-brand-cream lg:text-6xl 2xl:text-7xl">
              <span className="text-brand-logo">sloane</span> saved me
              <br />
              <span className="text-brand-cream">20hrs per week</span>
              <br />
              <span className="text-brand-cream">$52k per year</span>
            </h2>
          </SlideReveal>
        </div>

        {/* Centered Speech Bubble */}
        <div className="w-full max-w-[600px]">
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

export default Wings;
