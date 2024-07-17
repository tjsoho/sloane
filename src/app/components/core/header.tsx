'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Close } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const linkClasses = 'hover:text-brand-logo uppercase font-Archivo text-brand-cream ';

  return (
    <>
      {isVisible && (
        <motion.header
          className="fixed top-0 left-0 w-full flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 1000 }}
        >
          <div className="w-[90%] bg-brand-green shadow-md border-[0.5px] border-brand-logo z-50 rounded-full mt-4">
            <div className="container mx-auto flex items-center justify-between px-8 py-2 ">
              <div className="flex items-center">
                <Link href="/home" >
                  <img src="/images/logo.png" alt="Logo" className="h-8" />
                </Link>
              </div>
              <nav className="hidden lg:flex space-x-8">
                <Link href="/about" legacyBehavior><a className={linkClasses}>About</a></Link>
                <Link href="/pricing" legacyBehavior><a className={linkClasses}>Pricing</a></Link>

                <Link href="https://app.sloane.biz" legacyBehavior><a className={linkClasses}>Login</a></Link>
                <Link href="/FAQS" legacyBehavior><a className={linkClasses}>FAQS</a></Link> {/* Updated this line */}
                <Link href="/contact" legacyBehavior><a className={linkClasses}>Contact</a></Link>
              </nav>
              <div className="lg:hidden">
                <button onClick={toggleMenu} className="flex items-center justify-center focus:outline-none h-8 w-8 pt-3 text-brand-cream">
                  {isOpen ? <Close fontSize="large" /> : (
                    <svg width="30" height="24" viewBox="0 0 30 24">
                      <rect width="30" height="2" rx="2" fill="#FFE7C3"/>
                      <rect y="10" width="30" height="2" rx="2" fill="#FFE7C3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {isOpen && (
              <motion.div 
                className="lg:hidden fixed top-0 left-0 w-full h-full bg-brand-green flex flex-col items-center justify-center z-40"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
              >
                <button onClick={toggleMenu} className="text-brand-cream focus:outline-none absolute top-4 right-4">
                  <Close fontSize="large" />
                </button>
                <nav className="flex flex-col space-y-10 mt-16">
                  <Link href="/about" legacyBehavior><a onClick={toggleMenu} className="text-2xl hover:text-brand-orange uppercase font-Archivo text-brand-cream text-center">About</a></Link>
                  <Link href="/pricing" legacyBehavior><a onClick={toggleMenu} className="text-2xl hover:text-brand-orange uppercase font-Archivo text-brand-cream text-center">Pricing</a></Link>
                  <Link href="/login" legacyBehavior><a onClick={toggleMenu} className="text-2xl hover:text-brand-orange uppercase font-Archivo text-brand-cream text-center">Login</a></Link>
                  <Link href="/#FAQ" legacyBehavior><a onClick={toggleMenu} className="text-2xl hover:text-brand-orange uppercase font-Archivo text-brand-cream text-center">FAQ</a></Link> {/* Updated this line */}
                  <Link href="/contact" legacyBehavior><a onClick={toggleMenu} className="text-2xl hover:text-brand-orange uppercase font-Archivo text-brand-cream text-center">Contact</a></Link>
                </nav>
              </motion.div>
            )}
          </div>
        </motion.header>
      )}
    </>
  );
};

export default Header;
