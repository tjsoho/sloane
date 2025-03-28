'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import * as fbq from '../../../utils/fpixel';
import { Menu } from './Menu';

const menuVariants = {
  initial: {
    gap: 8,
  },
  hover: {
    gap: 10,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const lineVariants = {
  initial: { width: 28 },
  hover: {
    width: 48,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const middleLineVariants = {
  initial: { width: 32 },
  hover: {
    width: 24,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScroll = () => {
      setHasScrolled(scrollY.get() > 0);
    };

    const unsubscribe = scrollY.on('change', updateScroll);
    return () => unsubscribe();
  }, [scrollY]);

  const handleGetStartedClick = () => {
    fbq.event('initiate_checkout', {
      content_name: 'Get Started Click',
      content_category: 'purchase',
      location: 'desktop_header',
    });
  };

  return (
    <>
      <motion.header
        className={`fixed left-0 top-0 w-full transition-all duration-300 ${hasScrolled
          ? 'border-b border-brand-cream bg-brand-green'
          : 'bg-transparent'
          }`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: 1000 }}
      >
        <style jsx global>{`
          @keyframes shine {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(100%);
            }
          }
        `}</style>

        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Menu Button */}
            <div className="w-32">
              <motion.button
                className="flex cursor-pointer flex-col items-start"
                variants={menuVariants}
                initial="initial"
                animate={isOpen ? 'hover' : 'initial'}
                whileHover={isOpen ? 'initial' : 'hover'}
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.span
                  className="h-[1px] bg-brand-logo"
                  variants={lineVariants}
                />
                <motion.span
                  className="h-[1px] bg-brand-logo"
                  variants={middleLineVariants}
                />
                <motion.span
                  className="h-[1px] bg-brand-logo"
                  variants={lineVariants}
                />
              </motion.button>
            </div>

            {/* Centered Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href="/home">
                <img src="/images/logo.png" alt="Logo" className="h-8" />
              </Link>
            </div>

            {/* Right side buttons - Hidden on mobile */}
            <div className="hidden w-auto items-center justify-end gap-4 lg:flex">
              <Link
                href="https://app.sloane.biz/dashboard"
                className="group relative inline-flex items-center justify-center rounded-full border border-brand-cream/20 px-5 py-2 font-Archivo text-xs uppercase text-brand-cream/80 transition-all duration-300 hover:text-brand-logo hover:border-brand-cream/40"
              >
                <span className="relative z-10">Login</span>
              </Link>
              <Link
                href="https://app.sloane.biz/userform"
                className="group relative inline-flex items-center justify-center rounded-full border border-brand-cream bg-brand-green px-5 py-2 font-Archivo text-xs uppercase text-brand-cream transition-all duration-300 hover:border-brand-logo hover:text-brand-logo overflow-hidden"
                onClick={handleGetStartedClick}
              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 -skew-x-12 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent"></div>
                </div>
                <span className="relative z-10 font-medium">Try For Free</span>
              </Link>
            </div>

            {/* Empty div for mobile to maintain layout */}
            <div className="w-32 lg:hidden" />
          </div>
        </div>
      </motion.header>

      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
