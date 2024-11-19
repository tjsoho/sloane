// src/components/GetStarted.tsx
'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCircle from '../components/home/AnimatedCircle';
import Button from '../components/Button';
import * as fbq from '../../utils/fpixel';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the children animation by 0.5 seconds
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 1.5 }, // Delay the button animation by 2 seconds
  },
};

function GetStarted() {
  const controls = useAnimation();
  const buttonControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      buttonControls.start('visible');
    } else {
      controls.start('hidden');
      buttonControls.start('hidden');
    }
  }, [controls, buttonControls, inView]);

  function handleClick(): void {
    console.log('Button clicked!');
       fbq.event('initiate_checkout', {
         content_name: 'Get Started Section',
         content_category: 'home get started section',
         location: 'home_get_started_section',
       });
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-brand-cream">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center px-4 pt-16 lg:pt-16 2xl:max-w-[1540px]">
        <div className="w-full">
          <h2 className="text-center text-[32px] leading-tight text-brand-green lg:text-[48px]">
            Get Started
          </h2>
          <p className="text-center text-brand-green text-[21px]">In 4 Easy Steps</p>
        </div>

        <motion.div
          ref={ref}
          className="grid w-full grid-cols-2 gap-4 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <AnimatedCircle
              number={1}
              step={
                <>
                  <span>Create Your</span>
                  <br />
                  <span>Biz profile</span>
                </>
              }
            />
            <div className="dashed-line hidden md:block" />
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <AnimatedCircle
              number={2}
              step={
                <>
                  <span>Fill in Your</span>
                  <br />
                  <span>Stripe Details</span>
                </>
              }
            />
            <div className="dashed-line hidden md:block" />
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <AnimatedCircle
              number={3}
              step={
                <>
                  <span>Book Your Biz</span>
                  <br />
                  <span>Deep Dive Session</span>
                </>
              }
            />
            <div className="dashed-line hidden md:block" />
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <AnimatedCircle
              number={4}
              step={
                <>
                  <span>Up & Running</span>
                  <br />
                  <span>24hrs Later</span>
                </>
              }
            />
          </motion.div>
        </motion.div>

        <div className="my-16 flex w-full items-center justify-center">
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={buttonControls}
          >
            <Button
              title="GET STARTED"
              textColor="brand-cream"
              textHoverColor="brand-logo"
              backgroundColor="brand-green"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="/pricing"
              ariaLabel="Get Started With Sloane"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
