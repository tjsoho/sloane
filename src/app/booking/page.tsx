'use client'
import React from 'react';
import { InlineWidget } from 'react-calendly';




const SignupComponent: React.FC = () => {
  return (
    <div className="flex h-full lg:h-screen w-full flex-col bg-brand-green lg:flex-row ">
      {/* left col half width with image  */}
      <div className="hidden h-screen w-1/2 bg-brand-green lg:flex">
        <div className="h-full w-3/5">
          <img
            src="/images/signup.png"
            alt="Signup"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-4 flex h-full w-2/5 items-center">
          <h1 className="text-6xl leading-none text-brand-logo">
            Let's<br></br>make<br></br>biz a<br></br>breeze.
          </h1>
        </div>
      </div>

      {/* rightr col */}
      <div className="flex h-full w-full flex-col items-center justify-center bg-brand-green pt-32 lg:w-1/2">
        <div className="mb-8 flex w-full justify-center gap-12 font-Archivo lg:gap-16">
          <div
            className={`'bg-brand-logo text-brand-green-dark bg-brand-cream opacity-30 flex  h-8 w-8 items-center justify-center rounded-full`}
          >
            1
          </div>
          <div
            className={`'bg-brand-logo text-brand-green-dark bg-brand-cream opacity-30 flex  h-8 w-8 items-center justify-center rounded-full`}
          >
            2
          </div>
          <div
            className={`'bg-brand-logo text-brand-green-dark bg-brand-logo flex  h-8 w-8 items-center justify-center rounded-full`}
          >
            3
          </div>
        </div>

        <div className="h-full w-full  lg:py-8 ">
          <div className="">
            <h2 className="mb-4 text-center text-3xl lg:text-4xl font-bold text-brand-logo">
              Book Your Business Deep-Dive
            </h2>
            <p className="mb-4 text-center px-4 text-brand-cream">
            This is where we delve into your business to tailor Sloane precisely to your brand, voice, and goals.
            </p>
            <InlineWidget
              url="https://calendly.com/sloane-bookings/sloane-business-interview"
              styles={{
                
                padding: '0 10px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
