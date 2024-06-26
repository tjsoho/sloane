'use client';
import Button from "../components/Button";
import SecretCard from "../components/home/SecretCard"

const SecretSource = () => {

    const handleClick = () => {
        console.log("Button clicked!");};

  return (
    <div className="bg-brand-cream h-full w-full">
      <div className="mx-auto flex max-w-[1240px] 2xl:max-w-[1540px] flex-col items-center justify-center px-4 py-16 lg:py-24">
        <div className="flex h-full w-full flex-col justify-center items-center lg:items-start text-center">
          <h3 className="text-brand-orange text-8xl text-[44px]  leading-none lg:text-[78px]">The Secret Ingredient.</h3>
        </div>
        {/* 1 row of 3 x imported SecretCard component */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-center my-8 px-4">
          <div className="mb-8">
          <SecretCard
            title="The Deep Dive Interview"
            para="In a 60-minute Zoom, our specialists dive into your brand’s heart and soul, uncovering hidden gems and goals that only you know. By asking the right questions and using precise prompts, we programme and curate a tool tailored to your unique business requirements, ambitions, and language. "
            cardBG="brand-orange"
            titleColor="brand-yellow"
            paraColor="brand-cream"
          />
          </div>
          <div className="mb-8">
          <SecretCard
            title="Up and running 
            within a day
            "
            para="After our deep-dive interview, we fast-track your tool's setup. You'll be up and running within the next day ready to enjoy the ease and efficiency Sloane brings. Start experiencing seamless business operations and newfound free time almost instantly!"
            cardBG="brand-orange"
            titleColor="brand-yellow"
            paraColor="brand-cream"
          />
          </div>
          <div className="mb-8">
          <SecretCard
            title="Ongoing Support"
            para="Once you're set up, you'll have unlimited support to get the most out of the tool. As your business evolves, simply share your new needs with us, and we’ll adapt the tool to grow with you."
            cardBG="brand-orange"
            titleColor="brand-yellow"
            paraColor="brand-cream"
          />
          </div>
        </div>
      <div className="">
              <Button
                title="Get Sloane"
                textColor="brand-cream"
                textHoverColor="brand-logo"
                backgroundColor="brand-orange-light"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              />
            </div>
      </div>
    </div>
  );
};

export default SecretSource;
