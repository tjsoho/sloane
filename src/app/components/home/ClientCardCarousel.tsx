// src/components/ClientCardCarousel.tsx
import React from "react";
import LeftClientCardCarousel from "../home/LeftClientCarousel";
import RightClientCardCarousel from "../home/RightClientCarousel";

const ClientCardCarousel = () => {
  return (
    <div className="flex h-[600px] w-full overflow-hidden">
      <LeftClientCardCarousel />
      <RightClientCardCarousel />
    </div>
  );
};

export default ClientCardCarousel;
