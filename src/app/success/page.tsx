'use client';
import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Success: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col bg-brand-green lg:h-screen lg:flex-row">
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

      {/* right col */}
      <div className="flex h-full w-full flex-col items-center justify-center bg-brand-green pt-32 lg:w-1/2">
        <div className="mb-8 flex w-full justify-center gap-12 font-Archivo lg:gap-16">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cream text-brand-green-dark opacity-30">
            1
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cream text-brand-green-dark opacity-30">
            2
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cream text-brand-green-dark opacity-30">
            3
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-logo text-brand-green-dark">
            4
          </div>
        </div>

        <div className="h-full w-full items-center justify-center  lg:py-8">
          <div className="px-4">
            <h2 className="mb-4 text-center text-3xl font-bold text-brand-logo lg:text-4xl">
              EXCITING!!!
            </h2>
            <h2 className="mb-4 text-center text-3xl font-bold text-brand-logo lg:text-4xl">
              Your Business Deep-Dive is Booked!
            </h2>
            <div className="lg:mt-16">
              <div className="mx-auto my-8 w-[75px] border-b-2 border-brand-cream"></div>
              <div className="my-8">
                <p className="mb-4 px-2 text-center font-bold text-brand-cream">
                  PLEASE PREPARE
                </p>
                <div className="flex flex-row justify-center">
                  <TaskAltIcon className="mr-2 h-8 w-8 text-brand-logo" />
                  <p className="mb-4  text-left text-brand-cream">
                    Example of brand language{' '}
                    <span className="text-md">
                      e.g., social media posts, website copy, blog post
                    </span>
                  </p>
                </div>
                <div className="flex flex-row justify-center">
                  <TaskAltIcon className="mr-2 h-8 w-8 text-brand-logo" />
                  <p className="mb-4  text-left text-brand-cream">
                    A testimonial from a client/customer
                  </p>
                </div>
              </div>
              <div className="mx-auto my-8 w-[75px] border-b-2 border-brand-cream"></div>
              <p className="mb-12 px-4 text-center font-Archivo text-brand-cream text-2xl">
                Email Examples{' '}
                <a
                  href="mailto:hello@sloane.biz"
                  className="text-brand-logo underline"
                >
                  Here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
