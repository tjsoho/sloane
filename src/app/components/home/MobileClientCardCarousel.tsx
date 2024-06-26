// src/components/MobileClientCardCarousel.tsx
import React from "react";
import { motion } from "framer-motion";
import ClientCard from "./ClientCard";

const cards = [
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
  {
    imageSrc: "/images/client4.png",
    jobTitle: "Caterer",
    jobTitleColor: "brand-green",
    name: "Tian Evans",
    businessName: "Sage Events",
    bgColor: "brand-logo",
    innerBgColor: "brand-green-light",
  },
  {
    imageSrc: "/images/client5.png",
    jobTitle: "Product",
    jobTitleColor: "brand-orange",
    name: "Shani Tim Shoal",
    businessName: "Products 1st",
    bgColor: "brand-orange-light",
    innerBgColor: "brand-cream",
  },
  {
    imageSrc: "/images/client6.png",
    jobTitle: "Business Coach",
    jobTitleColor: "brand-green-light",
    name: "Shani Timms",
    businessName: "Business Coach",
    bgColor: "brand-green",
    innerBgColor: "brand-logo",
  },
];

const MobileClientCardCarousel = () => {
  const cycleDuration = 80; // duration of the cycle in seconds

  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex flex-row"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-100%", "0%"] }} // Adjusted to animate leftwards and then reverse
        transition={{
          duration: cycleDuration,
          ease: "linear",
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
