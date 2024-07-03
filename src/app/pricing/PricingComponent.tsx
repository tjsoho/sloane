"use client";
import Button from "../components/Button";

const Pricing = () => {
  return (
    <div className="w-full ">
      <div className="mx-auto flex  flex-col  lg:flex-row ">
        {/* --------------------------------Left Col-------------------------------- */}
        <div className="flex w-full flex-col lg:w-3/5">
          {/* ----------top row---------- */}
          <div className="h-[30%] w-full bg-brand-green px-4 py-20 flex flex-col justify-center items-center">
            <h1 className="text-left text-[38px] leading-tight text-brand-logo lg:text-[78px]">
              Feel The Freedom
            </h1>
            <p className="text-brand-cream ">
              Get Started With Sloane Today And Never Look Back
            </p>
          </div>
          {/* ----------bottom row---------- */}
          <div className="h-[70%] w-full bg-brand-cream p-8 lg:px-40 2xl:px-64 2xl:py-24 flex justify-center items-center">
            {/* ---------Pricing card ------------ */}
            <div className="flex p-2  flex-col items-center justify-center rounded-[50px] border-2 border-brand-green py-8 lg:p-14 text-brand-green">
              <h3 className="text-4xl lg:text-5xl">
                $79
                <span className="font-Quicksand text-lg">
                  /mo* - Billed Monthly
                </span>
              </h3>
              <Button
                title="Get Started"
                textColor="brand-cream"
                textHoverColor="brand-logo"
                backgroundColor="brand-green"
                hoverBG="brand-green-dark"
                className="my-4"
              />
              <ul className="ml-6 list-disc">
                <li>Free Cancellation Anytime</li>
                <li>Tailored Set Up with a Zoom Call</li>
                <li>1 Business</li>
                <li>10 Business Hubs with Built-in Prompts</li>
                <li>Built-in Workflows</li>
                <li>Built-in Smart Prompts</li>
                <li>Unlimited Support</li>
                <li>Unlimited Updates to Business voice, brand & Goals</li>
              </ul>
            </div>
          </div>
        </div>
        {/* --------------------------------Right Col-------------------------------- */}
        <div className="w-full lg:w-2/5">
          <div className="h-full w-full">
            <img
              src="/images/4.jpg"
              alt=""
              className="w-full h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
