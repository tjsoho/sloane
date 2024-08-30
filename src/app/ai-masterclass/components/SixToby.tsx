'use client';

import React from 'react';

function sixToby() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-brand-cream">
      <div className="mx-auto flex max-w-[1240px] flex-col  items-center  justify-center  px-4 py-16 2xl:max-w-[1540px]">
        <p>FOUNDER OF SLOANE.AI</p>
        <h2 className="mb-8 mt-4 text-5xl text-brand-orange lg:text-6xl">
          Toby J
        </h2>
        <div className="w-4/5 lg:w-1/4">
          <img
            src="/images/toby-1.jpg"
            alt="Sloane.Ai Masterclass with Sloane.Ai founder, Toby J"
            className="h-full w-full rounded-xl object-cover lg:rounded-[30px]"
          />
        </div>
        <div className="text-left lg:text-center lg:w-2/3 text-[21px]">
          <p className="mb-4 text-[21px] mt-8">
          <span className="font-bold">Toby’s aim is simple:</span> to equip you with the knowledge and confidence
            needed to start adopting some truly powerful Ai tools that can
            streamline and grow your business. No jargon, no confusion—just
            clear, straightforward explanations that you’ll not only understand
            but also feel excited to implement.
          </p>

          <p className="my-8 text-[28px]">
            <span className="font-bold">Why Toby?</span>
          </p>

          <ul className="mx-auto my-8 max-w-xl list-disc pl-5 text-left">
            <li>
              <span className="font-bold">Tech Enthusiast:</span> With a passion
              for the latest in technology, Toby has always been ahead of the
              curve, constantly exploring how new tools can be used to make life
              easier.
            </li>
            <li>
              <span className="font-bold">Creative Mind:</span> His background
              in music brings a creative twist to tech explanations, making them
              engaging and easy to grasp.
            </li>
            <li>
              <span className="font-bold">Experienced Educator:</span> Two
              decades of teaching has honed his ability to explain difficult
              concepts in a way that makes sense to everyone, especially those
              who might not be tech-savvy.
            </li>
          </ul>

          <p className="mb-4 text-[21px]">
            Toby’s mission is to make sure you walk away not just understanding
            but feeling confident to use these tools yourself. Get ready to
            transform your business operations with ease and a touch of fun.
          </p>
        </div>
      </div>
    </div>
  );
}

export default sixToby;
