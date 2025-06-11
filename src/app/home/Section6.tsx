'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Personalised AI Like Nowhere Else',
    description:
      'From the beginning, you’ll be guided through a video interview about your business. We’ll ask questions delving deep into your business and your “why.” This sets the tone for everything with Sloane. After this interview, Sloane will understand your business completely—your “why,” and who you serve. This makes every response and action within Sloane completely personalised to your business.',
    icon: '/images/community.png',
  },
  {
    id: 2,
    title: 'Action Planner',
    description:
      'Do you find it hard to stay focused on your goals & overwhelmed by your to do list? Find your flow and get things done. Sloane’s beautifully designed board helps you stay focused, organised, and energised. Productivity should feel good, and look good.',
    icon: '/images/actions.png',
  },
  {
    id: 3,
    title: 'Daily Mindfulness',
    description:
      'Wish you had a simple, effective way to integrate self-care into your busy schedule? Integrate daily mindfulness into your workflow. This dedicated space helps you check in with yourself, process emotions, and set intentions for a productive and balanced day. Even a few minutes of reflection can greatly enhance focus and reduce stress.',
    icon: '/images/mindfullness.png',
  },
  {
    id: 4,
    title: 'Create Your Own Ai Expert',
    description:
      'What if you could build an AI expert that perfectly mirrors your specific requirements? Build your ideal expert and custom prompts tailored to your unique needs.',
    icon: '/images/community.png',
  },
  {
    id: 5,
    title: 'Goal Tracker',
    description:
      'Are you spending more time thinking about your goals than actually working towards them? Achieve your goals with effortless ease. Your weekly and monthly goals are kept front and center, promoting a sense of calm and accomplishment as you tick them off. Stay focused and on track, without the overwhelm.',
    icon: '/images/goals.png',
  },
];

const Section6: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(1);
  const currentFeature = features.find((f) => f.id === activeFeature);

  return (
    <section className="min-h-screen bg-brand-green py-12 md:py-32 lg:min-h-fit">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col-reverse gap-16 md:flex-row md:gap-32 justify-center">
          {/* Left Content - Large Icon and Description */}
          <div className="lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative"
              >
                {/* Background Icon */}
                <div className="absolute -top-10 left-0">
                  <Image
                    src={currentFeature?.icon || ''}
                    alt=""
                    width={160}
                    height={160}
                    className="opacity-20 md:w-[240px]"
                  />
                </div>

                <div className="relative z-10 pl-4 pt-16 md:pl-16 md:pt-32">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 text-2xl font-bold text-brand-cream md:text-4xl"
                  >
                    {currentFeature?.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-brand-cream/90 md:text-xl"
                  >
                    {currentFeature?.description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content - Menu */}
          <div className="lg:w-1/2">
            <h2 className="mb-8 text-left text-3xl font-bold text-brand-cream md:mb-16 md:text-5xl">
              FEATURES
            </h2>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 h-full w-px bg-brand-cream/20" />

              {/* Menu Items */}
              <div className="relative space-y-8 md:space-y-12">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`group flex w-full items-center space-x-4 border-l-4 pl-4 transition-all duration-500 ease-out md:space-x-6 md:pl-6
                      ${
                        activeFeature === feature.id
                          ? 'border-brand-logo text-brand-logo'
                          : 'border-transparent text-brand-cream hover:text-brand-logo'
                      }`}
                  >
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-500 ease-out md:h-8 md:w-8
                        ${activeFeature === feature.id ? 'bg-brand-logo' : 'bg-transparent'}`}
                    >
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={20}
                        height={20}
                        className={`transition-all duration-500 md:h-6 md:w-6 ${activeFeature === feature.id ? 'brightness-0' : 'text-brand-cream'}`}
                      />
                    </div>

                    <span className="text-left text-lg font-medium md:text-xl">
                      {feature.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
