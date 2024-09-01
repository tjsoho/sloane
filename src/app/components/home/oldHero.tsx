"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(true);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-brand-green h-full w-full">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex w-4/5 flex-col items-center justify-center lg:w-1/2">
            <motion.div
              className="flex flex-1 flex-col items-center justify-center"
              initial={
                isAnimated
                  ? { opacity: 0, scale: 0.3 }
                  : { opacity: 1, scale: 1 }
              }
              animate={
                isAnimated ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }
              }
              transition={{
                duration: 2,
                ease: [0, 0.11, 0.2, 1.01],
              }}
            >
              <img
                src="/images/logo.png"
                alt="Sloane AI Platform - Marketing, Coaching, Onboarding, and Training"
              />
            </motion.div>
          </div>
          <div className="ml-16 lg:ml-64">
            <motion.div
              className="flex flex-col items-center justify-center"
              initial={{ y: "+100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 0.5,
                ease: [0, 0.41, 0.2, 1.01],
              }}
            >
              <img
                src="/images/slogan.png"
                alt="Sloane AI Platform - Marketing, Coaching, Onboarding, and Training"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 2.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div
            className="flex flex-col items-end justify-center pb-20 hover:cursor-pointer md:pb-8"
            onClick={scrollToNextSection}
          >
            <div id="scroll-down-animation" className="w-full">
              <span className="mouse">
                <span className="move"></span>
              </span>
              <h1 className="scroll-text" aria-label="Sloane AI Platform">Scroll down</h1>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
