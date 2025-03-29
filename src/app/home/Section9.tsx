'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Section9: React.FC = () => {
  return (
    <section className="bg-brand-cream">
      <div className="flex flex-col-reverse md:flex-row">
        {/* Left Content */}
        <div className="flex items-center p-8 py-12 md:w-1/2 md:p-24">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-brand-green md:text-5xl">
              Meet the Founders
            </h2>
            <p className="mb-8 text-lg text-brand-green md:text-xl">
              Sloane wasn't born from a boardroom; it was born from a kitchen
              table, fueled by two entrepreneurs a husband and wife duo who
              understood the unique challenges of running their own businesses.
              <br />
              <br />
              We built Sloane to help you Work Smart & Live Well.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="inline-block rounded-full bg-brand-green px-16 py-4 font-Archivo text-lg uppercase text-brand-cream transition-all hover:bg-brand-green-dark hover:text-brand-cream hover:shadow-lg"
              >
                OUR WHY
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/2">
          <div className="relative h-[400px] w-full md:h-full">
            <Image
              src="/images/founders_sloane.png"
              alt="Sloane Mobile App"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
