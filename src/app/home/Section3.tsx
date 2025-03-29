'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Section3: React.FC = () => {
  const TickBox = ({ text, delay }: { text: string; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-center gap-3 text-brand-cream"
    >
      <div className="relative h-2 w-2 mr-2">
        {/* Square */}
        <div className="absolute h-4 w-4 border border-brand-logo"></div>
        {/* Tick */}
        <FontAwesomeIcon
          icon={faCheck}
          className="absolute -top-2 left-0 h-6 w-5 text-brand-logo"
        />
      </div>
      <span className="text-lg">{text}</span>
    </motion.div>
  );

  // Mobile version with staggered animations
  const MobileLayout = () => (
    <div className="flex w-full flex-col items-center px-4 lg:hidden">
      {/* Heading for mobile */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center font-Archivo text-3xl font-bold text-brand-cream"
      >
        Signs You Need Sloane.
      </motion.h2>

      {/* Tick boxes list with staggered animation */}
      <motion.div
        className="mb-12 flex w-full flex-col space-y-4 mr-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          'Feeling stressed and overwhelmed?',
          "Need new ideas or Don't know where to start",
          "Frustrated by Ai tools that don't sound like you",
          'Wish you had someone to brainstorm with',
          'Need help & support!!! Anytime. Anywhere.',
          'Want to grow your business without the burn out',
          'Need support in every aspect of business',
          "Don't know how to use AI properly",
        ].map((text, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <TickBox text={text} delay={0} />
          </motion.div>
        ))}
      </motion.div>

      {/* Circle for mobile */}
      <div className="relative h-72 w-72">
        {/* Outer Rotating Circle */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute h-full w-full rounded-full border border-brand-logo opacity-30" />
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute font-Archivo text-xs text-brand-logo"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * (360 / 1)}deg) translateX(${144}px) rotate(-${i * (360 / 12)}deg)`,
                }}
              >
                S
              </div>
            ))}
          </motion.div>
        </div>

        {/* Inner Rotating Circle */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute h-full w-full rounded-full border border-brand-logo opacity-30" />
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute font-Archivo text-xs text-brand-logo"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * (360 / 2)}deg) translateX(${136}px) rotate(-${i * (360 / 2)}deg)`,
                }}
              >
                S
              </div>
            ))}
          </motion.div>
        </div>

        {/* Center Circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="flex h-56 w-56 items-center justify-center rounded-full bg-brand-green-light p-4 text-center shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <p className="text-base text-brand-cream">
              If you answered yes to One or more - <br />
              It's time for sloane.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen w-full bg-brand-green py-16">
      {/* Desktop heading */}
      <div className="container mx-auto hidden h-full flex-col justify-center px-4 lg:flex">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center font-Archivo text-4xl font-bold text-brand-cream md:text-5xl lg:text-6xl"
        >
          Signs You Need Sloane.
        </motion.h2>

        {/* Rest of desktop layout */}
        <div className="hidden lg:block">
          {/* Layout - Using CSS Grid with responsive columns */}
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="hidden w-full md:flex md:h-full md:flex-col md:items-start md:justify-center">
              <div className="ml-20">
                <TickBox text="Feeling stressed and overwhelmed?" delay={0.1} />
              </div>
              <div className="my-16">
                <TickBox
                  text="Need new ideas or Don't know where to start"
                  delay={0.2}
                />
              </div>
              <div className="ml-20">
                <TickBox
                  text="Frustrated by Ai tools that don't sound like you"
                  delay={0.3}
                />
              </div>
            </div>

            {/* Middle Column with Circles */}
            <div className="mx-auto flex w-full flex-col items-center py-12 md:py-0">
              <div className="relative aspect-square w-full max-w-md">
                {/* Top Tick Box - Added text-center and width */}
                <div className="absolute left-0 right-0 top-0 mx-auto mb-12 text-center">
                  <div className="flex justify-center">
                    <TickBox
                      text="Feeling stressted and overwhelmed?"
                      delay={0.4}
                    />
                  </div>
                </div>

                {/* Outer Rotating Circle */}
                <div className="absolute left-1/2 top-1/2 mt-12 h-80 w-80 -translate-x-1/2 -translate-y-1/2">
                  {/* Static base circle */}
                  <div className="absolute h-full w-full rounded-full border border-brand-logo opacity-30" />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {/* Rotating dots - reduced from 24 to 12 */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="text-md absolute font-Archivo text-brand-logo"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * (360 / 2)}deg) translateX(${148}px) `,
                        }}
                      >
                        S
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Inner Rotating Circle */}
                <div className="absolute left-1/2 top-1/2 mt-12 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2">
                  {/* Static base circle */}
                  <div className="absolute h-full w-full rounded-full border border-brand-logo opacity-30" />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {/* Rotating dots - reduced from 24 to 12 */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute font-Archivo text-sm text-brand-logo"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * (360 / 1)}deg) translateX(${154}px)`,
                        }}
                      >
                        S
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 top-1/2 mt-12 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="flex h-64 w-64 items-center justify-center rounded-full bg-brand-green-light p-4 text-center shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <p className="text-lg text-brand-cream">
                      If you answered yes to One or more - <br />
                      It's time for sloane.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Tick Box - Added text-center */}
              <div className="mt-16 w-full text-center">
                <div className="flex justify-center">
                  <TickBox
                    text="Need support in every aspect of business"
                    delay={0.5}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden w-full md:flex md:h-full md:flex-col md:items-end md:justify-center">
              <div>
                <TickBox
                  text="Wish you had someone to brainstorm with"
                  delay={0.6}
                />
              </div>
              <div className="my-16 ml-16">
                <TickBox
                  text="Need help & support!!! Anytime. Anywhere."
                  delay={0.7}
                />
              </div>
              <div>
                <TickBox
                  text="Want to grow your business without the burn out"
                  delay={0.8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <MobileLayout />
    </div>
  );
};

export default Section3;
