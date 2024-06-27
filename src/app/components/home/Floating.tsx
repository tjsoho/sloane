"use client";
import Button2 from "../Button2";
import useRandomMovement from "../../../hooks/useRandomMovement";


const Floating = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const maxPixels = 20; // Maximum movement in pixels
  const controlsArray = Array.from({ length: 16 }, () =>
    useRandomMovement(maxPixels),
  );

  return (
    <div className="flex h-full w-full bg-brand-green py-8 lg:py-32">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center 2xl:max-w-[1540px]">
        {/* row 1 */}
        <div className="my-6 flex w-full justify-center">
          {controlsArray[0] && (
            <div className="mx-4">
              <Button2
                title="Your go-to for all how-tos"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[0]}
                animate={true}
              />
            </div>
          )}
          {controlsArray[1] && (
            <div className="mx-6">
              <Button2
                title="Product Ideation"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[1]}
                animate={true}
              />
            </div>
          )}
        </div>
        {/* row 2 */}
        <div className="my-6 flex">
          {controlsArray[2] && (
            <div className="mx-6">
              <Button2
                title="Business Planning"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[2]}
                animate={true}
              />
            </div>
          )}
          {controlsArray[3] && (
            <div className="mx-6">
              <Button2
                title="Client Communications"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-green-light"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[3]}
                animate={true}
              />
            </div>
          )}
          {controlsArray[4] && (
            <div className="mx-6">
              <Button2
                title="Marketing Strategies"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[4]}
                animate={true}
              />
            </div>
          )}
        </div>
        {/* row 3 */}
        <div className="mt-12 flex">
          {controlsArray[5] && (
            <div className="mx-6">
              <Button2
                title="Blog Ideas"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[5]}
                animate={true}
              />
            </div>
          )}
          {controlsArray[6] && (
            <div className="mx-6">
              <Button2
                title="SEO"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-green-light"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[6]}
                animate={true}
              />
            </div>
          )}
        </div>
        {/* main row */}
        <div className="my-6 flex w-full items-center justify-center">
          {controlsArray[7] && (
            <div className="mx-32">
              <Button2
                title="Social Media Captions"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[7]}
                animate={true}
              />
            </div>
          )}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[64px] leading-none text-brand-cream lg:text-[98px]">
              Create
            </h3>
            <h3 className="text-[32px] leading-none text-brand-cream lg:text-[48px]">
              with <span className="text-center text-brand-logo">sloane.</span>
            </h3>
          </div>
          {controlsArray[8] && (
            <div className="mx-32">
              <Button2
                title="Email Marketing"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[8]}
                animate={true}
              />
            </div>
          )}
        </div>
        {/* row 4 */}
        <div className="my-6 flex w-full justify-center">
          {controlsArray[9] && (
            <div className="mx-24">
              <Button2
                title="Training & Onboarding"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[9]}
                animate={true}
              />
            </div>
          )}
          {controlsArray[10] && (
            <div className="mx-24">
              <Button2
                title="Website Copy"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-green-light"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[10]}
                animate={true}
              />
            </div>
          )}
        </div>
        {/* row 5 */}
        <div className="my-6 flex">
          {controlsArray[11] && (
            <div className="mx-6">
              <Button2
                title="Sales Funnels"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[11]}
                animate={true}
              />
            </div>
          )}
          {controlsArray[12] && (
            <div className="mx-12">
              <Button2
                title="Efficient Workflows"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-green-light"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[12]}
                animate={true}
              />
            </div>
          )}
          {controlsArray[13] && (
            <div className="mx-6">
              <Button2
                title="Social Media Strategy"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[13]}
                animate={true}
              />
            </div>
          )}
        </div>
        {/* row 6 */}
        <div className="my-6 flex w-full justify-center">
          {controlsArray[14] && (
            <div className="mx-24">
              <Button2
                title="New Offerings"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[14]}
                animate={true}
              />
            </div>
          )}
          {controlsArray[15] && (
            <div className="mx-24">
              <Button2
                title="Course Creation"
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-green-light"
                hoverBG="brand-green"
                onClick={handleClick}
                path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
                controls={controlsArray[15]}
                animate={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Floating;
