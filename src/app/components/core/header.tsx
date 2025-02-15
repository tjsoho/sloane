'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import * as fbq from '../../../utils/fpixel';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleGetStartedClick = () => {
    fbq.event('initiate_checkout', {
      content_name: 'Get Started Click',
      content_category: 'purchase',
      location: isOpen ? 'mobile_menu' : 'desktop_header',
    });

    toggleMenu();
  };

  const linkClasses =
    'hover:text-brand-logo uppercase font-Archivo text-brand-cream flex justify-center items-center hover:underline ';
  const linkClasses2 =
    'hover:text-brand-logo uppercase font-Archivo text-brand-cream px-4 py-2 rounded-lg flex justify-center items-center bg-brand-green hover:bg-brand-green-dark leading-none hover:border-brand-logo hover:shadow-lg';
  const linkClasses3 =
    'hover:text-brand-logo uppercase font-Archivo text-brand-green  px-4 py-2 rounded-lg flex justify-center items-center bg-brand-cream hover:bg-brand-green-dark leading-none hover:border-brand-logo hover:shadow-lg';

  return (
    <>
      <motion.header
        className="fixed left-0 top-0 flex w-full justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: 1000 }}
      >
        <div className="z-50 mt-2 w-[95%] rounded-xl  bg-brand-green/60 shadow-md">
          <div className="container mx-auto flex items-center justify-between px-8 py-2 ">
            <div className="flex items-center">
              <Link href="/home">
                <img src="/images/logo.png" alt="Logo" className="h-8" />
              </Link>
            </div>
            <nav className="hidden lg:flex lg:flex-1 lg:items-center">
              <div className="absolute left-1/2 flex -translate-x-1/2 space-x-8">
                <Link href="/about" legacyBehavior>
                  <a className={linkClasses}>About</a>
                </Link>
                <Link href="/pricing" legacyBehavior>
                  <a className={linkClasses}>Pricing</a>
                </Link>
                <Link href="/FAQS" legacyBehavior>
                  <a className={linkClasses}>FAQS</a>
                </Link>
                <Link href="/blog" legacyBehavior>
                  <a className={linkClasses}>blog</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a className={linkClasses}>Contact</a>
                </Link>
              </div>
              <div className="ml-auto flex items-center space-x-8">
                <Link href="https://app.sloane.biz/dashboard" legacyBehavior>
                  <a className={linkClasses2}>Login</a>
                </Link>
                <Link href="https://app.sloane.biz/userform" legacyBehavior>
                  <a className={linkClasses3} onClick={handleGetStartedClick}>
                    Get Started
                  </a>
                </Link>
              </div>
            </nav>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="flex h-8 w-8 items-center justify-center pt-3 text-brand-cream focus:outline-none"
              >
                {isOpen ? (
                  <Close fontSize="large" />
                ) : (
                  <svg width="30" height="24" viewBox="0 0 30 24">
                    <rect width="30" height="2" rx="2" fill="#FFE7C3" />
                    <rect y="10" width="30" height="2" rx="2" fill="#FFE7C3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isOpen && (
            <motion.div
              className="fixed left-0 top-0 z-40 flex h-full w-full flex-col items-center justify-center bg-brand-green lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={toggleMenu}
                className="absolute right-4 top-4 text-brand-cream focus:outline-none"
              >
                <Close fontSize="large" />
              </button>
              <nav className="mt-16 flex flex-col space-y-10">
                <Link href="/about" legacyBehavior>
                  <a
                    onClick={toggleMenu}
                    className="text-center font-Archivo text-2xl uppercase text-brand-cream hover:text-brand-orange"
                  >
                    About
                  </a>
                </Link>
                <Link href="/pricing" legacyBehavior>
                  <a
                    onClick={toggleMenu}
                    className="text-center font-Archivo text-2xl uppercase text-brand-cream hover:text-brand-orange"
                  >
                    Pricing
                  </a>
                </Link>

                <Link href="/FAQS" legacyBehavior>
                  <a
                    onClick={toggleMenu}
                    className="text-center font-Archivo text-2xl uppercase text-brand-cream hover:text-brand-orange"
                  >
                    FAQS
                  </a>
                </Link>
                <Link href="/blog" legacyBehavior>
                  <a
                    onClick={toggleMenu}
                    className="text-center font-Archivo text-2xl uppercase text-brand-cream hover:text-brand-orange"
                  >
                    Blog
                  </a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a
                    onClick={toggleMenu}
                    className="text-center font-Archivo text-2xl uppercase text-brand-cream hover:text-brand-orange"
                  >
                    Contact
                  </a>
                </Link>
                <Link href="https://app.sloane.biz/dashboard" legacyBehavior>
                  <a
                    onClick={toggleMenu}
                    className="text-center font-Archivo text-2xl uppercase text-brand-cream hover:text-brand-orange"
                  >
                    Login
                  </a>
                </Link>
                <Link href="https://app.sloane.biz/userform" legacyBehavior>
                  <a
                    onClick={handleGetStartedClick}
                    className="rounded-full bg-brand-cream px-4 py-2 text-center font-Archivo text-2xl uppercase text-brand-green hover:bg-brand-green-dark"
                  >
                    Get Started
                  </a>
                </Link>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
};

export default Header;
