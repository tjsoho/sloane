"use client";
import { Accordion } from "../components/Accordion";
import accordionData from "../components/accordionData";

const FAQ = () => {
  return (
    <div className="h-full w-full bg-brand-green" id="FAQ">
      <div className="mx-auto max-w-[1240px] px-4 py-16 text-[32px] leading-none lg:text-[44px] 2xl:max-w-[1540px] ">
        <h1 className="text-center text-[38px] leading-none text-brand-logo lg:text-[78px] hidden lg:block mb-8 ">
          Frequently Asked Questions
        </h1>
        <h1 className="text-center text-[48px] leading-none text-brand-logo lg:text-[78px] lg:hidden mb-8 lg:mb-16">
          FAQs
        </h1>
        <div className="flex w-full flex-col items-center justify-center">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
