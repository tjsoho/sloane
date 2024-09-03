'use client';
import { Reveal } from '../components/Animations/Reveal';
import Button from '../components/Button';

const ImagePrice = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className="h-full w-full bg-brand-cream">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center px-4 pt-16 lg:flex-row lg:py-16 2xl:max-w-[1540px]">
        {/* ---------------------------------------LEFT COL--------------------------------------- */}
        <div className="w-full lg:w-2/3">
          <Reveal>
            <img
              src="/images/monitor2.png"
              alt="Sloane AI Business Platform - Marketing, Business Coach, Social Media Strategy, Business Growth"
              className="h-full w-full object-contain"
            />
          </Reveal>
        </div>

        {/* ---------------------------------------RIGHT COL--------------------------------------- */}
        <div className="my-16 flex w-full flex-col items-center justify-center text-brand-green lg:w-1/2">
          <div>
            <Reveal>
              <div className="flex flex-col items-center justify-center gap-6 text-center">
                <h3 className="text-center text-[32px] leading-tight lg:text-[44px] ">
                  What Makes Sloane Unique?
                </h3>
                <p className="text-left text-[22px] font-light md:text-[23px]">
                  Unlike other platforms, Sloane is a highly personalised tool
                  curated after a deep dive with one of our specialist.{' '}
                  <br></br>
                  <br></br>With over 10 hubs offering expert guidance 24/7, and
                  other features such as built-in Smart Prompts, you'll never
                  have to learn or purchase prompts online again. <br></br>
                  <br></br>It's like having a team of professionals at your
                  fingertips—all for just $79 AUD per month & no lock in contracts.
                </p>
                <h3 className="mt-8 text-4xl lg:text-5xl">
                  $79<span className="font-Quicksand text-lg">/mo</span>
                </h3>
              </div>
            </Reveal>
          </div>
          <div className="mt-2">
            <Reveal>
              <Button
                title="Get Sloane"
                textColor="brand-cream"
                textHoverColor="brand-logo"
                backgroundColor="brand-green"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="/pricing"
                ariaLabel="Sloane Pricing"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePrice;
