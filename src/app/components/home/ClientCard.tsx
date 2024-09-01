// src/components/ClientCard.tsx
import React from 'react';
import { getTailwindColor } from '../../../utils/tailwindColors';

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
      className="relative min-w-[250px] rounded-xl px-4"
      style={{ backgroundColor: getTailwindColor(bgColor) }}
    >
      <h2
        className="py-2 text-left text-[20px] font-black uppercase xl:text-[22px]"
        style={{ color: getTailwindColor(jobTitleColor) }}
      >
        {jobTitle}
      </h2>
      <div
        className="flex h-[150px] w-full flex-col items-center px-4"
        style={{ backgroundColor: getTailwindColor(innerBgColor) }}
      >
        <div className="mt-4 flex w-full flex-col justify-start">
          <p className="text-[12px] text-brand-green-dark">{name}</p>
          <p className="text-[14px] text-brand-green-dark">{businessName}</p>
        </div>
        <div className="absolute -right-1 bottom-0 lg:right-0">
          <img
            src={imageSrc}
            alt="Sloane AI Platform - Marketing, Coaching, Onboarding, and Training"
            className="h-[130px] w-[145px] md:h-[125px] md:w-[125px] lg:h-[175px] lg:w-[185px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
