// src/components/ClientCard.tsx
import React from "react";
import { getTailwindColor } from "../../../utils/tailwindColors";

interface ClientCardProps {
  imageSrc: string;
  jobTitle: string;
  jobTitleColor: string;
  name: string;
  businessName: string;
  bgColor: string;
  innerBgColor: string;
}

const ClientCard: React.FC<ClientCardProps> = ({
  imageSrc,
  jobTitle,
  jobTitleColor,
  name,
  businessName,
  bgColor,
  innerBgColor,
}) => {
  return (
    <div
      className="relative px-4 min-w-[250px]"
      style={{ backgroundColor: getTailwindColor(bgColor) }}
    >
      <h2
        className="py-2 text-left text-[20px] xl:text-[22px] font-black uppercase"
        style={{ color: getTailwindColor(jobTitleColor) }}
      >
        {jobTitle}
      </h2>
      <div
        className="flex w-full flex-col items-center px-4 h-[150px]"
        style={{ backgroundColor: getTailwindColor(innerBgColor) }}
      >
        <div className="flex w-full flex-col justify-start mt-4">
          <p className="text-[12px] text-brand-green-dark">{name}</p>
          <p className="text-[14px] text-brand-green-dark">{businessName}</p>
        </div>
        <div className="absolute bottom-0 -right-1 lg:right-0">
          <img src={imageSrc} alt="Sloane AI Platform - Marketing, Coaching, Onboarding, and Training" className="h-[130px] w-[145px] md:h-[125px] md:w-[125px] lg:h-[175px] lg:w-[185px]" />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
