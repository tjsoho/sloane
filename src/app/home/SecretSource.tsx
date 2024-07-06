"use client";
import { Reveal } from "../components/Animations/Reveal";
import { SlideReveal } from "../components/Animations/SlideReveal";
import { SlideReveal2 } from "../components/Animations/SlideReveal2";
import Button from "../components/Button";
import SecretCard from "../components/home/SecretCard";

const SecretSource = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="h-full w-full bg-brand-cream">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center px-4 py-16 lg:py-24 2xl:max-w-[1540px]">
        <SlideReveal>
          <div className="flex h-full w-full flex-col items-center justify-center text-center lg:items-start">
            <h3 className="text-8xl text-[44px] leading-none  text-brand-orange lg:text-[78px]">
              The Secret Ingredient.
            </h3>
          </div>
        </SlideReveal>
        {/* 1 row of 3 x imported SecretCard component */}
        <div className="my-8 flex w-full flex-col items-center justify-between px-4 lg:flex-row">
          <div className="mb-8">
            <SlideReveal>
              <SecretCard
                title="The Deep Dive Interview"
                para="In a 60-minute Zoom, our specialists dive into your brand’s heart and soul, uncovering hidden gems and goals that only you know. By asking the right questions and using precise prompts, we programme and curate a tool tailored to your unique business requirements, ambitions, and language. "
                cardBG="brand-orange"
                titleColor="brand-yellow"
                paraColor="brand-cream"
              />
            </SlideReveal>
          </div>
          <div className="mb-8">
            <Reveal>
              <SecretCard
                title="Up and running 
            within a day
            "
                para="After our deep-dive interview, we fast-track your tool's setup. You'll be up and running within the next day ready to enjoy the ease and efficiency Sloane brings. Start experiencing seamless business operations and newfound free time almost instantly!"
                cardBG="brand-orange"
                titleColor="brand-yellow"
                paraColor="brand-cream"
              />
            </Reveal>
          </div>
          <div className="mb-8">
            <SlideReveal2>
              <SecretCard
                title="Ongoing Support"
                para="Once you're set up, you'll have unlimited support to get the most out of the tool. As your business evolves, simply share your new needs with us, and we’ll adapt the tool to grow with you."
                cardBG="brand-orange"
                titleColor="brand-yellow"
                paraColor="brand-cream"
              />
            </SlideReveal2>
          </div>
        </div>
        <div className="">
          <Button
            title="Get Sloane"
            textColor="brand-cream"
            textHoverColor="brand-logo"
            backgroundColor="brand-green"
            hoverBG="brand-green-dark"
            onClick={handleClick}
            path="https://app.sloane.biz/userform"
          />
        </div>
      </div>
    </div>
  );
};

export default SecretSource;
