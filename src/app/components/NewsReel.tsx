'use client';

import { motion } from 'framer-motion';

interface NewsReelProps {
  words: string[];
}

export default function NewsReel({ words }: NewsReelProps) {
  return (
    <div className="w-full overflow-hidden bg-brand-cream py-4">
      <div className="relative whitespace-nowrap">
        <motion.div
          className="inline-block"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          <div className="flex gap-16">
            {/* Duplicate the words array to create a seamless loop */}
            {[...words, ...words].map((word, index) => (
              <span
                key={index}
                className="font-Archivo text-xl uppercase tracking-wider text-brand-green"
              >
                {word}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
