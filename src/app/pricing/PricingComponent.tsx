'use client';
import Button from '../components/Button';
import * as fbq from '../../utils/fpixel';

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
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/surfPrice.png)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Container */}
      <div className="relative flex h-screen w-full flex-col lg:flex-row">
        {/* Left Column - Empty or for future content */}
        <div className="hidden lg:block lg:w-1/2" />

        {/* Right Column */}
        <div className="flex w-full flex-col justify-center px-6 py-16 md:px-12 lg:w-1/2 lg:px-16">
          {/* Row 1 - Heading */}
          <div className="mb-6">
            <h1 className="font-Archivo text-4xl font-bold text-brand-cream sm:text-5xl lg:text-6xl">
              One Easy Plan
            </h1>
            <p className="mt-2 text-lg text-brand-cream/90 sm:text-xl">
              No Lock Ins. No Contracts. Full Freedom.
            </p>
          </div>

          {/* Row 2 - Pricing */}
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="font-Archivo text-5xl font-bold text-brand-logo sm:text-6xl lg:text-7xl">
                $79
              </span>
              <span className="ml-2 text-xl font-light text-brand-cream sm:text-2xl">
                AUD/PM
              </span>
            </div>
          </div>

          {/* Row 3 - Features List */}
          <div className="mb-8 rounded-xl bg-white/20 p-6 backdrop-blur-md sm:p-8">
            <ul className="space-y-2 text-[16px] text-brand-cream sm:text-base">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Deep-Dive Interview to Personalise Sloane
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>1 Business
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>All Hubs
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Built-in Workflows
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Built-in Smart Prompts
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Unlimited Support
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Unlimited Updates to Business
                voice, brand & Goals
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Data secured on an internal
                database
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="w-full sm:w-auto">
            <Button
              title="Get Started"
              textColor="brand-green"
              textHoverColor="brand-cream"
              backgroundColor="brand-logo"
              hoverBG="brand-green"
              onClick={handleClick}
              path="https://app.sloane.biz/userform"
              ariaLabel="Sign Up To Sloane"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
