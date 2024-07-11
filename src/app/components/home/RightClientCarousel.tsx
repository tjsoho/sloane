// src/components/RightClientCardCarousel.tsx
import React from "react";
import { motion } from "framer-motion";
import ClientCard from "./ClientCard";

const rightCards = [
 
  {
    imageSrc: "/images/client4.png",
    jobTitle: "Photographers",
    jobTitleColor: "brand-orange",
    name: "Rosie",
    businessName: "Rosie & Laurent",
    bgColor: "brand-orange-light",
    innerBgColor: "brand-cream",
  },
  {
    imageSrc: "/images/client5.png",
    jobTitle: "Expansion Mentor",
    jobTitleColor: "brand-green-light",
    name: "Dante",
    businessName: "Dante Amato",
    bgColor: "brand-green",
    innerBgColor: "brand-logo",
  },
  {
    imageSrc: "/images/client6.png",
    jobTitle: "Chiropractor",
    jobTitleColor: "brand-orange",
    name: "Kelly Bean",
    businessName: "Hunter Healthy Spines",
    bgColor: "brand-yellow",
    innerBgColor: "brand-orange-light",
  },
  {
    imageSrc: "/images/client7.png",
    jobTitle: "Content Producer",
    jobTitleColor: "brand-green",
    name: "Scott Hendo",
    businessName: "Scott Hendo",
    bgColor: "brand-green-light",
    innerBgColor: "brand-cream",
  },
  {
    imageSrc: "/images/client8.png",
    jobTitle: "Catering",
    jobTitleColor: "brand-yellow",
    name: "Tian Evans",
    businessName: "Sage Events",
    bgColor: "brand-orange",
    innerBgColor: "brand-orange-light",
  },
];

const RightClientCardCarousel = () => {
  const cycleDuration = 90; // duration of the cycle in seconds

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
        {rightCards.concat(rightCards).map((card, index) => (
          <div key={`right-${index}`} className="p-2">
            <ClientCard {...card} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RightClientCardCarousel;
