'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TextGenerateEffect } from '../components/TextGenerateEffect';
import { cn } from '../utils/cn';

const Hero: React.FC = () => {
  return (
    <>
      {/* Mobile & Tablet Layout */}
      <div className="flex flex-col lg:hidden">
        {/* First Section - Sunflower with Text */}
        <div className="relative h-[75vh]">
          {/* Sunflower Background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/sloane_sunflower.png"
              alt="Sunflower Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          {/* Text Overlay */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="font-Archivo text-3xl font-bold text-brand-cream md:text-4xl">
                WORK SMART<span className="ml-1 text-brand-cream">.</span>
                <br />
                LIVE WELL<span className="ml-1 text-brand-cream">.</span>
              </h1>

              <motion.p
                className="font-Poppins mt-8 text-lg text-brand-cream/90 md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="mb-4 block italic">
                  Ready to work smart & live well?
                </span>
                <span className="block font-semibold">
                  Sloane's AI experts + mindful tools
                  <br />
                  help you achieve it all.
                </span>
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Second Section - Green Background with Product */}
        <div className="h-fit bg-brand-green pb-12">
          <div className="flex h-full flex-col items-center justify-center px-8 lg:py-16">
            <motion.div
              className="w-full max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/heroMOck.png"
                alt="Sloane App Interface"
                width={800}
                height={600}
                className="w-full"
                priority
              />
            </motion.div>

            <motion.div
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="https://app.sloane.biz/sign-up"
                className="group relative inline-flex items-center justify-center rounded-full border border-brand-cream bg-brand-green px-5 py-2 font-Archivo text-xs uppercase text-brand-cream transition-all duration-300 hover:border-brand-logo hover:text-brand-logo overflow-hidden"

              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 -skew-x-12 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent"></div>
                </div>
                <span className="relative z-10 font-medium text-lg">Try For Free</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative hidden min-h-screen overflow-hidden lg:flex">
        {/* Left Half - Green Background */}
        <motion.div
          className="relative flex w-1/2 flex-col items-center bg-brand-green"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mt-auto flex w-full max-w-2xl flex-col items-center justify-center px-8 pb-16 pt-48">
            <div className="relative w-full">
              <Image
                src="/images/heroMOck.png"
                alt="Sloane App Interface"
                width={800}
                height={600}
                className="w-full"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Right Half - Sunflower Image */}
        <motion.div
          className="relative w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/sloane_sunflower.png"
              alt="Sunflower Background"
              fill
              className="object-cover"
              priority
            />
            <div className="relative z-10 flex h-full items-center justify-center px-8">
              <motion.p
                className="font-Poppins -mt-24 text-lg text-brand-cream/90 md:text-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="block italic">
                  Ready to work smart & live well?
                </span>

                <span className="block font-semibold">
                  Sloane's AI experts + mindful tools
                  <br />
                  help you achieve it all.
                </span>
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Centered Title - Positioned above both halves */}
        <motion.div
          className="absolute top-28 z-10 w-full -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="-ml-16 font-Archivo text-3xl font-bold text-brand-cream md:text-5xl lg:text-5xl">
            WORK SMART<span className="ml-1 text-brand-cream">. </span>
            LIVE WELL<span className="ml-2 text-brand-cream">. </span>
          </h1>
        </motion.div>
        {/* Centered Button */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="mx-auto flex justify-center pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="https://app.sloane.biz/sign-up"
                className="group relative inline-flex items-center justify-center rounded-full border border-brand-cream bg-brand-green px-6 py-4 w-full  font-Archivo text-xs uppercase text-brand-cream transition-all duration-300 hover:border-brand-logo hover:text-brand-logo overflow-hidden"

              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 -skew-x-12 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent"></div>
                </div>
                <span className="relative z-10 font-medium text-lg">Try For Free</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
