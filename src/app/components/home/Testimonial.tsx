// src/components/Testimonial.tsx
import React from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

interface TestimonialProps {
  image: string;
  name: string;
  company: string;
  description: string;
  onNext: () => void;
  onPrev: () => void;
}

const Testimonial: React.FC<TestimonialProps> = ({
  image,
  name,
  company,
  description,
  onNext,
  onPrev,
}) => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center justify-between gap-16 p-6 lg:flex-row">
        {/* image div */}
        <div className="w-2/3 rounded-b-[300px] rounded-tl-[300px] bg-brand-yellow lg:w-1/2">
          <img
            src={image}
            alt="Sloane AI Business Platform - Marketing, Business Coach, Social Media Strategy, Business Growth"
            className="w-full rounded-b-[300px]"
          />
        </div>
        {/* content div */}
        <div className="w-full lg:w-1/2 flex flex-col items-start relative">
          <div className="relative z-20 text-left lg:mb-4 h-[100px] flex items-center">
            <p className="text-left text-brand-green-dark">
              &quot;{description}&quot;
            </p>
          </div>
          <FormatQuoteRoundedIcon className="absolute top-0 left-0 text-[188px] text-brand-yellow opacity-50 -mt-28 transform rotate-180 -ml-12" />
          <div className="text-left mt-8">
            <h3 className="mb-1 font-Archivo text-4xl text-brand-orange">
              {company}
            </h3>
            <h4 className="mb-2 text-4xl lg:text-5xl font-Script text-gray-500">
              {name}
            </h4>
          </div>
          <div className="flex mt-4 gap-4">
            <button
              onClick={onPrev}
              className="transform cursor-pointer rounded-full bg-brand-cream p-2 px-8 ease-in-out hover:scale-110 border-[1px] border-brand-orange-light"
              aria-label="Previous testimonial"
            >
              <ArrowRightAltRoundedIcon className="rotate-180 text-brand-orange transform text-4xl opacity-30 hover:opacity-100" />
            </button>
            <button
              onClick={onNext}
              className="transform cursor-pointer rounded-full bg-brand-cream p-2 px-8 hover:scale-110 border-[1px] border-brand-orange-light"
              aria-label="Next testimonial"
            >
              <ArrowRightAltRoundedIcon className="text-4xl text-brand-orange opacity-30 hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
