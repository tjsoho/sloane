'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/centerHome.png"
          alt="Hero Background"
          fill
          className="scale-110 object-cover object-[0%_center]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />{' '}
        {/* Overlay for better text visibility */}
      </div>

      {/* Mobile Layout (sm and md screens) */}
      <div className="relative z-10 flex h-screen flex-col pt-12 lg:hidden">
        {/* First Third - Headings */}
        <div className="flex h-1/3 items-end px-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-Archivo text-4xl font-bold leading-none text-white md:text-5xl"
            >
              Just
              <br />
              Ask
              <br />
              <span className="leading-[1px] text-brand-logo">sloane</span>
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-xl leading-tight text-white/90"
            >
              She knows you.
              <br />
              She supports you.
              <br />
              She creates for you.
            </motion.h3>
          </div>
        </div>

        {/* Second Third - MacBook Image */}
        <motion.div
          className="flex h-1/3 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/images/macBook1a.png"
            alt="Sloane MacBook"
            width={300}
            height={200}
            className="h-auto w-[64%] max-w-[320px]"
            priority
          />
        </motion.div>

        {/* Third Third - Price and Button */}
        <motion.div
          className="-mt-8 flex h-1/3 flex-col items-center justify-start px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-left">
            <p className="font-poppins text-2xl font-semibold text-white">
              $79 AUD
            </p>
            <p className="font-poppins text-2xl font-semibold text-white">
              Monthly Subscription
            </p>
            <p className="mt-1 font-poppins text-sm font-light text-white">
              No Lock ins. No Contract. Full Freedom.
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <Link href="/signup">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-brand-logo px-16 py-4 font-Archivo text-2xl 
                text-brand-green shadow-lg transition-all duration-300"
              >
                Start Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout (lg screens and up) - Existing Code */}
      <div className="relative z-10 mx-auto hidden h-screen max-w-[1540px] flex-col items-center px-4 lg:flex lg:flex-row lg:justify-between lg:px-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-32 text-center lg:mt-0 lg:w-1/3 lg:text-left"
        >
          <h1 className="font-Archivo text-4xl font-bold leading-none text-white md:text-5xl lg:text-7xl lg:leading-[65px]">
            Just
            <br />
            Ask
            <br />
            <span className="leading-[1px] text-brand-logo">sloane</span>
          </h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xl text-white/90 lg:text-3xl"
          >
            She knows you.
            <br />
            She supports you.
            <br />
            She creates for you.
          </motion.h3>
          {/* Scroll Indicator - Now separate from social icons */}
          <div className="absolute bottom-20 z-50 hidden md:block">
            <div className="relative mx-auto h-32 w-px">
              {/* Static line */}
              <div className="absolute inset-0 bg-white/20" />

              {/* Animated arrow */}
              <div className="absolute inset-0">
                <div className="animate-scrollIndicator absolute top-0 h-full w-full bg-white" />
              </div>

              {/* Arrow head */}
              <div className="absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-white" />
            </div>
          </div>
        </motion.div>

        {/* Center Column - MacBook Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="3xl:mt-0 relative flex w-full max-w-[400px] lg:mt-28  lg:min-h-screen lg:w-1/3"
        >
          <div className="relative w-full lg:absolute lg:bottom-16">
            <Image
              src="/images/macBook1a.png"
              alt="Sloane MacBook"
              width={300}
              height={200}
              className="h-auto w-full"
              priority
            />
          </div>
        </motion.div>

        {/* Right Column - Pricing & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 flex h-full flex-col items-end justify-end pb-[10%] pr-4 text-left lg:mb-0 lg:w-1/3"
        >
          <div className="mb-6">
            <p className="font-poppins text-2xl font-semibold text-white md:text-3xl">
              $79 AUD
            </p>
            <p className="font-poppins text-2xl font-semibold text-white md:text-3xl">
              Monthly Subscription
            </p>
            <p className="mt-1 font-poppins text-sm font-light text-white">
              No Lock ins. No Contract. Full Freedom.
            </p>
          </div>
          <div className=" w-3/5 ">
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mx-auto -ml-6 rounded-lg bg-brand-logo px-16 py-4 font-Archivo 
                text-2xl text-brand-green shadow-lg transition-all duration-300 hover:bg-brand-green-dark hover:shadow-xl"
              >
                Start Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
