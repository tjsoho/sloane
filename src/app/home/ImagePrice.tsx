'use client';
import Button from "../components/Button";


const ImagePrice = () => {
    const handleClick = () => {
    console.log("Button clicked!");
    }
  return (
    <div className="bg-brand-cream h-full w-full">
      <div className="mx-auto flex max-w-[1240px] 2xl:max-w-[1540px] flex-col lg:flex-row py-16 lg:py-24 px-4 justify-center items-center">
        {/* ---------------------------------------LEFT COL--------------------------------------- */}
        <div className="w-full lg:w-1/2">
            <img
                src="/images/price.png"
                alt="Sloane AI Business Platform - Marketing, Business Coach, Social Media Strategy, Business Growth"
                className="w-full h-full object-contain"
            />
        </div>

        {/* ---------------------------------------RIGHT COL--------------------------------------- */}
        <div className="flex w-full flex-col lg:w-1/2 text-brand-green justify-center items-center my-16">
          <h3 className="text-4xl lg:text-5xl">
            $79<span className="font-Quicksand text-lg">/mo</span>
          </h3>
          <div className="mt-2">
              <Button
                title="Get Sloane"
                textColor="brand-logo"
                textHoverColor="brand-logo"
                backgroundColor="brand-green"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePrice;
