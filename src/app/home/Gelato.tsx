'use client';

import React from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';


function Gelato() {
  return (
    <div className="flex flex-col bg-brand-orange-light pt-16 lg:flex-row">
      {/* image */}

      <div className="order-2 w-full lg:order-1 lg:w-1/2">
        <SlideReveal>
        <div className="w-[280px] lg:w-[500px] pt-12">
          <img
            src="/images/gelato.png"
            alt="Gelato"
            className="h-full w-full object-cover"
          />
        </div>
        </SlideReveal>
      </div>
      <div className="flex w-full flex-col items-end justify-center lg:w-1/2 lg:order-2">
      
        <div className="flex w-[90%] items-center rounded-bl-[100px] rounded-tl-[100px] bg-brand-cream py-4 pl-8 md:py-8">
          <h2 className="text-[32px] leading-none text-brand-orange md:text-4xl xl:text-5xl  2xl:text-7xl">
            Savour a Gelato
          </h2>
        </div>
          
        <div className="w-[90%] pl-8 pt-4 ">
          <h3 className=" text-xl text-brand-cream lg:text-2xl xl:text-4xl">
            While Sloane Ai Creates
          </h3>
          <h3 className=" text-3xl text-brand-cream lg:text-4xl xl:text-6xl">
            Better Content <br></br>in Half the Time.
          </h3>
        </div>
      </div>
        
    </div>
  );
}

export default Gelato;
