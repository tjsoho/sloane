// src/components/MobileClientCardCarousel.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ClientCard from './ClientCard';

const cards = [
  {
    imageSrc: '/images/client1.png',
    jobTitle: 'Photographer',
    jobTitleColor: 'brand-green',
    name: 'Dana Tsibil',
    businessName: 'Chevell Photography',
    bgColor: 'brand-green-light',
    innerBgColor: 'brand-cream',
  },
  {
    imageSrc: '/images/client4.png',
    jobTitle: 'Photographers',
    jobTitleColor: 'brand-orange',
    name: 'Rosie',
    businessName: 'Rosie & Laurent',
    bgColor: 'brand-orange-light',
    innerBgColor: 'brand-cream',
  },
  {
    imageSrc: '/images/client9.png',
    jobTitle: 'Finance Coach',
    jobTitleColor: 'brand-green',
    name: 'Rebecca',
    businessName: 'Project Empower',
    bgColor: 'brand-logo',
    innerBgColor: 'brand-green-light',
  },

  {
    imageSrc: '/images/client6.png',
    jobTitle: 'Chiropractor',
    jobTitleColor: 'brand-orange',
    name: 'Kelly Bean',
    businessName: 'Hunter Healthy Spines',
    bgColor: 'brand-yellow',
    innerBgColor: 'brand-orange-light',
  },
  {
    imageSrc: '/images/client3.png',
    jobTitle: 'Business Coach',
    jobTitleColor: 'brand-yellow',
    name: 'Shani',
    businessName: 'Shani Timms',
    bgColor: 'brand-orange',
    innerBgColor: 'brand-orange-light',
  },
];

const MobileClientCardCarousel = () => {
  const cycleDuration = 80; // duration of the cycle in seconds

  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex flex-row"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-100%', '0%'] }} // Adjusted to animate leftwards and then reverse
        transition={{
          duration: cycleDuration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {cards.concat(cards).map((card, index) => (
          <div key={`mobile-${index}`} className="w-full p-2">
            <ClientCard {...card} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MobileClientCardCarousel;
