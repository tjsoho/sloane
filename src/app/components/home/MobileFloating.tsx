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

  const maxPixels = 64; // Maximum movement in pixels
  const position1 = useRandomMovement(maxPixels);
  const position2 = useRandomMovement(maxPixels);
  const position3 = useRandomMovement(maxPixels);
  const position4 = useRandomMovement(maxPixels);
  const position5 = useRandomMovement(maxPixels);
  const position6 = useRandomMovement(maxPixels);
  const position7 = useRandomMovement(maxPixels);
  const position8 = useRandomMovement(maxPixels);
  const position9 = useRandomMovement(maxPixels);
  const position10 = useRandomMovement(maxPixels);
  const position11 = useRandomMovement(maxPixels);
  const position12 = useRandomMovement(maxPixels);
  const position13 = useRandomMovement(maxPixels);
  const position14 = useRandomMovement(maxPixels);

  return (
    <div className="bg-brand-green flex h-full w-full py-8 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center">
        {/* ---------------------------------------------------------row 1 ---------------------------------------------------------*/}
        <div className="my-6 flex w-full justify-center">
          <div className="mx-2">
            <Button2
              title="Your go-to for all how-to's"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position1}
              animate={!isMobile} // Conditional animation
            />
          </div>
        </div>
        {/* ---------------------------------------------------------row 2 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-6">
            <Button2
              title="Product Ideation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position2}
              animate={!isMobile} // Conditional animation
            />
          </div>
          <div className="mx-6">
            <Button2
              title="Blog Ideas"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position3}
              animate={!isMobile} // Conditional animation
            />
          </div>
        </div>
        {/* ---------------------------------------------------------row 3 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-2">
            <Button2
              title="SEO"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position4}
              animate={!isMobile} // Conditional animation
            />
          </div>
          <div className="mx-6">
            <Button2
              title="Business Planning"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position5}
              animate={!isMobile} // Conditional animation
            />
          </div>
        </div>
        {/* ---------------------------------------------------------row 4 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-2">
            <Button2
              title="Content Ideation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position6}
              animate={!isMobile} // Conditional animation
            />
          </div>
          <div className="mx-6">
            <Button2
              title="Sales Funnels"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position7}
              animate={!isMobile} // Conditional animation
            />
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
            <Button2
              title="Client Communication"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position8}
              animate={!isMobile} // Conditional animation
            />
          </div>
        </div>
        {/* ---------------------------------------------------------row 5 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-4">
            <Button2
              title="Training & Onboarding"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position9}
              animate={!isMobile} // Conditional animation
            />
          </div>
          <div className="mx-4">
            <Button2
              title="Website Copy"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position10}
              animate={!isMobile} // Conditional animation
            />
          </div>
        </div>
        {/* ---------------------------------------------------------row 6 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-2">
            <Button2
              title="Sales Funnels"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position11}
              animate={!isMobile} // Conditional animation
            />
          </div>
          <div className="mx-6">
            <Button2
              title="Socials Strategy"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position12}
              animate={!isMobile} // Conditional animation
            />
          </div>
        </div>
        {/* ---------------------------------------------------------row 7 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <div className="mx-6 mt-4">
            <Button2
              title="New Offerings"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position13}
              animate={!isMobile} // Conditional animation
            />
          </div>
          <div className="mx-8 mt-2">
            <Button2
              title="Course Creation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
              position={position14}
              animate={!isMobile} // Conditional animation
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFloating;
