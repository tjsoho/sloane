import { SlideReveal } from "../components/Animations/SlideReveal";

const Quote = () => {
  return (
    <div className="bg-brand-green-light h-full w-full flex justify-start">
      <div className="max-w-[1240px] 2xl:max-w-[1540px] mx-auto py-16 px-4 text-[32px] lg:text-[44px] leading-none ">
        <SlideReveal>
        <h3 className="text-brand-cream lg:w-1/2">
          The list is endless.<br></br> <span className="text-brand-logo">sloane</span>{" "}
          is here to get to know you, understand what you want, and help you
          with everything in your business.
        </h3>
        </SlideReveal>
      </div>
    </div>
  );
};

export default Quote;
