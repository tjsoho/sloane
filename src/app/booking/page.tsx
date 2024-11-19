'use client';
import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person2Icon from '@mui/icons-material/Person2';
import PaidIcon from '@mui/icons-material/Paid';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import * as fbq from '../../utils/fpixel';


const SignupComponent: React.FC = () => {
  useEffect(() => {
    fbq.event('Purchase', {
      content_name: 'Sloane Business Package',
      content_category: 'Booking',
      location: 'Booking Page',
    });
  }, []); 
  return (
    <div className="flex h-full w-full flex-col bg-brand-green lg:h-screen lg:flex-row ">
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
            className={`'bg-brand-logo flex h-8 w-8 items-center  justify-center rounded-full bg-brand-cream text-brand-green-dark opacity-30`}
          >
            1
          </div>

          <div
            className={`'bg-brand-logo flex h-8 w-8 items-center  justify-center rounded-full bg-brand-cream text-brand-green-dark opacity-30`}
          >
            2
          </div>

          <div
            className={`'bg-brand-logo flex h-8 w-8  items-center justify-center rounded-full bg-brand-logo text-brand-green-dark`}
          >
            3
          </div>

          <div
            className={`'bg-brand-logo flex h-8 w-8 items-center  justify-center rounded-full bg-brand-cream text-brand-green-dark opacity-30`}
          >
            4
          </div>
        </div>

        <div className="h-full w-full  lg:py-8 ">
          <div className="">
            <h2 className="mb-4 text-center text-3xl font-bold text-brand-logo lg:text-4xl">
              Book Your Business Deep-Dive
            </h2>
            <p className="mb-4 px-4 text-center text-brand-cream">
              This is where we delve into your business to tailor Sloane
              precisely to your brand, voice, and goals.
            </p>
            <div className="calendly-widget">
              <InlineWidget
                url="https://calendly.com/sloane-bookings/sloane-business-interview"
                styles={{ padding: '0 10px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
