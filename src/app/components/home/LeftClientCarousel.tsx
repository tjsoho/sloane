// src/components/LeftClientCardCarousel.tsx
import React from "react";
import { motion } from "framer-motion";
import ClientCard from "./ClientCard";

const leftCards = [
  {
    imageSrc: "/images/client1.png",
    jobTitle: "Designer",
    jobTitleColor: "brand-green",
    name: "Dana Tsibil",
    businessName: "Tsibil Designs",
    bgColor: "brand-green-light",
    innerBgColor: "brand-cream",
  },
  {
    imageSrc: "/images/client2.png",
    jobTitle: "Naturopath",
    jobTitleColor: "brand-orange",
    name: "Deborah O'Neil",
    businessName: "Simply Natural",
    bgColor: "brand-yellow",
    innerBgColor: "brand-orange-light",
  },
  {
    imageSrc: "/images/client3.png",
    jobTitle: "Photographer",
    jobTitleColor: "brand-yellow",
    name: "Dan Murphy",
    businessName: "Bleek Studios",
    bgColor: "brand-orange",
    innerBgColor: "brand-orange-light",
  },
];

const LeftClientCardCarousel = () => {
  const cycleDuration = 60; // duration of the cycle in seconds

  return (
    <div className="flex w-1/2 flex-col overflow-hidden">
      <motion.div
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: ["0%", "-100%", "0%"] }} // Adjusted to animate upwards and then reverse
        transition={{
          duration: cycleDuration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {leftCards.concat(leftCards).map((card, index) => (
          <div key={`left-${index}`} className="p-2">
            <ClientCard {...card} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LeftClientCardCarousel;
