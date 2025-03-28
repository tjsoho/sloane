'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: `Sloane, you are changing my business and life! All the things I have put off for years, yes years - I am now doing with ease. Sloane just makes things effortless. From email campaigns to blog posts, all done with my teammate sloane. I am excited where we go from here! Thank you!`,
    author: 'Megan',
    role: 'Satori Hair',
  },
  {
    quote:
      "Before I met Sloane, I was on the verge of hiring a VA, which would have cost a fortune in time and money, Now, with Sloane's capabilities stretching across all my business needs, I'm saving more than just dollars— I'm reclaiming my time. It's like having a VA 24/7, but at a fraction of the cost. Bye-bye, payroll worries; hello, efficiency!",
    author: 'Chani',
    role: 'Cosmic CEO',
  },
  {
    quote:
      "Honestly I'm just blown away! Every single day I use Sloane for literally everything and it's making my business life so much easier and ten times faster!! Bloody love it!!! Thank you!!!",
    author: 'Emma',
    role: 'Digital Creator',
  },
];

const Section5: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Get current testimonial at the start of the component
  const currentTestimonial = testimonials[current] as Testimonial;

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/testi-1.png"
          alt="Testimonial background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
        <div className="md:ml-auto md:w-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="text-brand-cream"
            >
              {/* Quote */}
              <motion.blockquote className="font-Poppins mb-8 text-xl font-thin lg:text-2xl">
                &quot;{currentTestimonial.quote}&quot;
              </motion.blockquote>

              {/* Author */}
              <div>
                <p className="mb-2 font-Archivo text-xl font-bold">
                  {currentTestimonial.author}
                </p>
                <p className="text-brand-logo">{currentTestimonial.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-12 flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-8 bg-brand-logo'
                    : 'w-2 bg-brand-logo/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
