'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Section2: React.FC = () => {
  return (
    <div className="relative h-[60vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/section2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-Poppins max-w-5xl text-3xl font-normal text-brand-cream md:text-4xl lg:text-5xl"
        >
          Do you need support to grow your business and focus on what you love?
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-Poppins mt-8 text-3xl font-normal text-brand-cream md:text-4xl lg:text-5xl"
        >
          Then <span className="font-Archivo text-brand-logo">sloane</span> is
          for you.
        </motion.h2>
      </div>
    </div>
  );
};

export default Section2;
