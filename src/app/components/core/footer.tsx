'use client';

import { motion } from 'framer-motion';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer className="relative bg-brand-green-light">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-brand-green/50 blur-3xl" />
        <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-brand-green/50 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Top Section */}
        <div className="container mx-auto px-4 py-8 lg:py-12 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <div className="mb-8 ">
                <img
                  src="/images/logo.png"
                  alt="Sloane Logo"
                  className="h-12"
                />
              </div>
              <h3 className="font-Archivo mb-6 text-4xl font-bold text-brand-cream leading-tight">
                Work Smart.<br />
                Live Well.
              </h3>
              <p className="font-Poppins text-base text-brand-cream/80 leading-relaxed max-w-md">
                Empowering businesses with AI-driven solutions for a more mindful and efficient future.
              </p>
            </div>

            {/* Navigation Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
                {/* Quick Links */}
                <div>
                  <h4 className="font-Archivo mb-6 text-sm font-semibold uppercase tracking-wider text-brand-cream">
                    Quick Links
                  </h4>
                  <ul className="space-y-4">
                    {['About', 'Pricing', 'FAQS', 'Blog'].map((item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase()}`}
                          className="font-Poppins text-sm text-brand-cream/50 hover:text-brand-green transition-colors duration-300"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="font-Archivo mb-6 text-sm font-semibold uppercase tracking-wider text-brand-cream">
                    Legal
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { text: 'Privacy Policy', href: '/privacy' },
                      { text: 'Terms & Conditions', href: '/terms&conditions' },
                      { text: 'Admin', href: '/editor' }
                    ].map((item) => (
                      <li key={item.text}>
                        <Link
                          href={item.href}
                          className="font-Poppins text-sm text-brand-cream/50 hover:text-brand-green transition-colors duration-300"
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="md:col-span-2">
                  <h4 className="font-Archivo mb-6 text-sm font-semibold uppercase tracking-wider text-brand-cream">
                    Connect
                  </h4>
                  <div className="flex space-x-6">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-1 rounded-lg bg-brand-green/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <BsFacebook className="relative h-5 w-5 text-brand-cream/80 transition-colors duration-300 group-hover:text-brand-green" />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/sloane.biz/"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-1 rounded-lg bg-brand-green/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <BsInstagram className="relative h-5 w-5 text-brand-cream/80 transition-colors duration-300 group-hover:text-brand-green" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-logo/70 w-[90vw] mx-auto">
          <div className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="font-Poppins text-sm text-brand-cream/80">
                © 2024 sloane. All rights reserved.
              </div>
              <div className="flex items-center space-x-8">
                <Link
                  href="/privacy"
                  className="font-Poppins text-sm text-brand-cream/80 hover:text-brand-green transition-colors duration-300"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms&conditions"
                  className="font-Poppins text-sm text-brand-cream/80 hover:text-brand-green transition-colors duration-300"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
