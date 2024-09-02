'use client';

import React from 'react';

function intro() {
  return (
    <div>
      <div className="flex flex-col bg-brand-cream md:flex-row">
        <div className="mx-auto flex max-w-[1240px]  px-4  py-16 md:flex-row 2xl:max-w-[1540px] flex-col lg:flex">
          <div className="w-full p-4 md:w-1/2">
            <h2 className="text-4xl lg:text-5xl text-brand-orange lg:w-4/5">
              Simplify Your Business Life Without the Tech Hassle
            </h2>
          </div>

          <div className="w-full p-4 md:w-1/2">
            <p className='lg:px-16 text-brand-orange text-[21px]'>
              Feeling overwhelmed by all the talk about Ai in business? Does the
              thought of diving into new tech make your head spin? <br></br><br></br>You're not
              alone! This masterclass is here to break it all down for you—think of
              it as enjoying a gelato on a balmy summer holiday, easy and
              delightful. <br></br><br></br>Join us for a friendly, informative session with Toby
              J, founder of Sloane.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default intro;
