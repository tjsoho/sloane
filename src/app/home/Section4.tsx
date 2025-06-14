'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Section4: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const features = [
    {
      icon: '/images/sketch-icons/1.png',
      title: 'SOLVES BUSINESS NEEDS & CHALLENGE',
    },
    {
      icon: '/images/sketch-icons/2.png',
      title: 'GIVE YOU THE SUPPORT YOU NEED',
    },
    {
      icon: '/images/sketch-icons/3.png',
      title: 'REDUCES STRESS, BOOSTS FOCUS',
    },
    {
      icon: '/images/sketch-icons/4.png',
      title: 'ENHANCED CREATIVITY',
    },
    {
      icon: '/images/sketch-icons/5.png',
      title: 'HELPS YOU SET GOALS, AND GET THINGS DONE.',
    },
    {
      icon: '/images/sketch-icons/6.png',
      title: 'STREAMLINES WORKFLOW',
      hideOnMobile: true,
    },
    {
      icon: '/images/sketch-icons/7.png',
      title: 'EASY TASK MANAGEMENT',
    },
    {
      icon: '/images/sketch-icons/8.png',
      title: 'SUSTAINABLE GROWTH',
    },
    {
      icon: '/images/sketch-icons/9.png',
      title: 'IMPROVES CLIENT COMMUNICATIONS',
    },
    {
      icon: '/images/sketch-icons/10.png',
      title: 'STRATEGIC PLANNING',
    },
    {
      icon: '/images/sketch-icons/11.png',
      title: 'SPEAKS YOUR LANGUAGE',
    },
  ];

  return (
    <div className="relative w-full bg-brand-cream py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-brand-green"
        >
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            She's Just <em>That</em> Good.
          </h2>
          <p className="mt-4 text-xl">What she actually does for you.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, index) => {
            if (feature.hideOnMobile && isMobile) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 h-16 w-16 md:h-20 md:w-20">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="h-full w-full"
                  />
                </div>
                <h3 className="text-sm font-bold text-brand-green md:text-base">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}

          {/* Button as grid item on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: features.length * 0.1 }}
            viewport={{ once: true }}
            className="hidden items-center justify-center lg:flex"
          >
            <Link
              href="https://app.sloane.biz/sign-up"
              className="group relative inline-flex items-center justify-center rounded-full border border-brand-green-light bg-brand-green px-5 py-4 w-3/4 font-Archivo text-xs uppercase text-brand-cream transition-all duration-300 hover:border-brand-logo hover:text-brand-logo overflow-hidden"

            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 -skew-x-12 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent"></div>
              </div>
              <span className="relative z-10 font-medium text-lg">Try For Free</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile/Tablet Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 lg:hidden"
        >
          <Link
              href="https://app.sloane.biz/sign-up"
              className="group relative inline-flex items-center justify-center w-full rounded-full border border-brand-green-light bg-brand-green px-5 py-4 font-Archivo text-lg uppercase text-brand-cream transition-all duration-300 hover:border-brand-logo hover:text-brand-logo overflow-hidden"
              
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 -skew-x-12 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent"></div>
              </div>
              <span className="relative z-10 font-medium text-lg">Try For Free</span>
            </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
