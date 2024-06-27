"use client";
import Button2 from "../Button2";
import useRandomMovement from "../../../hooks/useRandomMovement";
import { useState, useEffect } from "react";
import { Reveal } from "../Animations/Reveal";

const MobileFloating = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const maxPixels = 12; // Maximum movement in pixels
  const controlsArray = Array.from({ length: 16 }, () => useRandomMovement(maxPixels));

  return (
    <div className="bg-brand-green flex h-full w-full py-8 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center">
        {/* ---------------------------------------------------------row 1 ---------------------------------------------------------*/}
        <div className="my-6 flex w-full justify-center">
          <div className="mx-2">
            {controlsArray[0] && (
              <Button2
                title="Your go-to for all how-to's"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[0]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
        </div>
        {/* ---------------------------------------------------------row 2 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-6">
            {controlsArray[1] && (
              <Button2
                title="Product Ideation"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[1]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
          <div className="mx-6">
            {controlsArray[2] && (
              <Button2
                title="Blog Ideas"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-green-light"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[2]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
        </div>
        {/* ---------------------------------------------------------row 3 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-2">
            {controlsArray[3] && (
              <Button2
                title="SEO"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[3]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
          <div className="mx-6">
            {controlsArray[4] && (
              <Button2
                title="Business Planning"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[4]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
        </div>
        {/* ---------------------------------------------------------row 4 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-2">
            {controlsArray[5] && (
              <Button2
                title="Content Ideation"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-green-light"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[5]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
          <div className="mx-6">
            {controlsArray[6] && (
              <Button2
                title="Sales Funnels"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[6]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
        </div>
        {/* ------------------------------------------------ MAIN ROW ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center"></div>
        {/* ----------------------------- main row ----------------------------- */}
        <div className="my-8 flex w-full items-center justify-center">
          <Reveal>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-brand-cream text-[64px] leading-none lg:text-[98px]">
                Create
              </h3>
              <h3 className="text-brand-cream text-[32px] leading-none lg:text-[48px]">
                with <span className="text-brand-logo text-center">sloane.</span>
              </h3>
            </div>
          </Reveal>
        </div>
        {/* row 4 */}
        <div className="my-4 flex w-full justify-center">
          <div className="mx-6">
            {controlsArray[7] && (
              <Button2
                title="Client Communication"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[7]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
        </div>
        {/* ---------------------------------------------------------row 5 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-4">
            {controlsArray[8] && (
              <Button2
                title="Training & Onboarding"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[8]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
          <div className="mx-4">
            {controlsArray[9] && (
              <Button2
                title="Website Copy"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-green-light"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[9]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
        </div>
        {/* ---------------------------------------------------------row 6 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-2">
            {controlsArray[10] && (
              <Button2
                title="Sales Funnels"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[10]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
          <div className="mx-6">
            {controlsArray[11] && (
              <Button2
                title="Socials Strategy"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[11]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
        </div>
        {/* ---------------------------------------------------------row 7 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-6 mt-4">
            {controlsArray[12] && (
              <Button2
                title="New Offerings"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-green-light"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[12]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
          <div className="mx-8 mt-2">
            {controlsArray[13] && (
              <Button2
                title="Course Creation"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[13]}
                animate={!isMobile} // Conditional animation
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFloating;
