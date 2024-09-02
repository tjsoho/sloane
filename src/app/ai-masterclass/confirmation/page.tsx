// components/Confirmation.tsx
'use client';
import React from 'react';

const Confirmation: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-green md:flex-row ">
      <div className="mx-auto flex max-w-[1240px] flex-col  items-center  justify-center px-4 py-16 md:flex-row 2xl:max-w-[1540px]">
        {/* Left Column */}
        <div className="z-50 flex w-full flex-col items-center justify-center p-4 text-center md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-brand-cream md:text-4xl lg:text-6xl">
            Thank you for your payment!
          </h1>
          <p className='font-bold text-brand-logo'>BEFORE YOU GO...</p>
          <p className="mt-8 w-4/5 text-[21px] text-brand-cream">
            Please check your email and junk folder for <span className='font-bold text-brand-logo'>TWO</span> emails: One from Calendly with the zoom link and one from <span className="font-bold text-brand-logo">hello@sloane.biz</span> for the Ai Masterclass Info. 
            <br></br>
            <br></br> If you're unable to attend please email your questions to
            the above email address.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex w-full justify-center p-4 md:w-1/2 ">
          <div className="w-full lg:w-1/2">
            <img
              src="/images/toby-3.jpg" // Update with your image path
              alt="Confirmation Image"
              className="h-auto max-w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <img
        src="/images/palms.svg" // Replace with the correct path to your SVG file
        alt="Decorative SVG"
        className="absolute bottom-0 left-0 z-10 hidden h-48 w-48 md:block lg:h-[400px] lg:w-[400px]"
      />
    </div>
  );
};

export default Confirmation;
