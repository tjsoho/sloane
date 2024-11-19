'use client';
import Button from '../components/Button';
import * as fbq from "../../utils/fpixel"


const Pricing = () => {
  function handleClick(): void {
    console.log('Button clicked!');
     fbq.event('purchase', {
       content_name: 'pricing',
       content_category: 'purchase',
       location: 'pricing',
     });
  }

  return (
    <div className="w-full ">
      <div className="mx-auto flex  flex-col  lg:flex-row ">
        {/* --------------------------------Left Col-------------------------------- */}
        <div className="flex w-full flex-col lg:w-3/5">
          {/* ----------top row---------- */}
          <div className="flex h-[30%] w-full flex-col items-center justify-center bg-brand-green px-4 py-32">
            <h1 className="text-left text-[38px] leading-tight text-brand-logo lg:text-[78px] mt-4">
              Feel The Freedom
            </h1>
            <p className="text-brand-cream ">
              Get Started With Sloane Today And Never Look Back
            </p>
          </div>
          {/* ----------bottom row---------- */}
          <div className="flex h-[70%] w-full items-center justify-center bg-brand-cream p-8 lg:px-40 2xl:px-64 2xl:py-24">
            {/* ---------Pricing card ------------ */}
            <div className="flex flex-col  items-center justify-center rounded-[50px] border-2 border-brand-green p-2 py-8 text-brand-green lg:p-14">
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
                onClick={handleClick}
                path="https://app.sloane.biz/userform"
                ariaLabel='Sign Up To Sloane'
              />
              <ul className="ml-6 list-disc">
                <li>Free Cancellation Anytime</li>
                <li>Tailored Set Up with a Zoom Call</li>
                <li>1 Business/1 User</li>
                <li>10 Business Hubs with Built-in Prompts</li>
                <li>Built-in Workflows</li>
                <li>Built-in Smart Prompts</li>
                <li>Unlimited Support</li>
                <li>Unlimited Updates to Business voice, brand & Goals</li>
                <li>Data secured on an internal database</li>
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
              className="h-[100%] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
