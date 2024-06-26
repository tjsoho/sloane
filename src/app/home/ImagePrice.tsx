"use client";
import { Reveal } from "../components/Animations/Reveal";
import Button from "../components/Button";

const ImagePrice = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="h-full w-full bg-brand-cream">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center px-4 py-16 lg:flex-row lg:py-24 2xl:max-w-[1540px]">
        {/* ---------------------------------------LEFT COL--------------------------------------- */}
        <div className="w-full lg:w-1/2">
          <Reveal>
            <img
              src="/images/price.png"
              alt="Sloane AI Business Platform - Marketing, Business Coach, Social Media Strategy, Business Growth"
              className="h-full w-full object-contain"
            />
          </Reveal>
        </div>

        {/* ---------------------------------------RIGHT COL--------------------------------------- */}
        <div className="my-16 flex w-full flex-col items-center justify-center text-brand-green lg:w-1/2">
          <div>
          <Reveal>
            <h3 className="text-4xl lg:text-5xl">
              $79<span className="font-Quicksand text-lg">/mo</span>
            </h3>
          </Reveal>
          </div>
          <div className="mt-2">
            <Reveal>
            <Button
              title="Get Sloane"
              textColor="brand-logo"
              textHoverColor="brand-logo"
              backgroundColor="brand-green"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePrice;
