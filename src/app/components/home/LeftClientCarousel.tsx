// src/components/LeftClientCardCarousel.tsx
import React from "react";
import { motion } from "framer-motion";
import ClientCard from "./ClientCard";

const leftCards = [
  {
    imageSrc: "/images/client11.png",
    jobTitle: "Photographer",
    jobTitleColor: "brand-green",
    name: "Rachel Chevell",
    businessName: "Chevell Photography",
    bgColor: "brand-green-light",
    innerBgColor: "brand-cream",
  },
  {
    imageSrc: "/images/client99.png",
    jobTitle: "Consultant",
    jobTitleColor: "brand-yellow",
    name: "Sean",
    businessName: "Kinektion",
    bgColor: "brand-orange",
    innerBgColor: "brand-orange-light",
  },
  {
    imageSrc: "/images/bec.png",
    jobTitle: "Finance Coach",
    jobTitleColor: "brand-green",
    name: "Rebecca",
    businessName: "Project Empower",
    bgColor: "brand-logo",
    innerBgColor: "brand-green-light",
  },
  {
    imageSrc: "/images/client2.png",
    jobTitle: "Music Producer",
    jobTitleColor: "brand-orange",
    name: "Danny",
    businessName: "Danny Nico Productions",
    bgColor: "brand-yellow",
    innerBgColor: "brand-orange-light",
  },
  {
    imageSrc: "/images/tahls2.png",
    jobTitle: "Personal Coach",
    jobTitleColor: "brand-green",
    name: "Tahlia",
    businessName: "CEO Collective",
    bgColor: "brand-green-light",
    innerBgColor: "brand-cream",
  },
  {
    imageSrc: "/images/client3.png",
    jobTitle: "Business Coach",
    jobTitleColor: "brand-yellow",
    name: "Shani",
    businessName: "Shani Timms",
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
