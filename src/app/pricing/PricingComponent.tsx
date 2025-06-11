'use client';

import * as fbq from '../../utils/fpixel';
import Link from 'next/link';
const Pricing = () => {
  function handleClick(): void {
    console.log('Button clicked!');
    fbq.event('purchase', {
      content_name: 'pricing',
      content_category: 'purchase',
      location: 'pricing',
    });
  }


  const handleGetStartedClick = () => {
    fbq.event('initiate_checkout', {
      content_name: 'Get Started Click',
      content_category: 'purchase',
      location: 'desktop_header',
    });
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/surfPrice.png)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative flex h-screen w-full flex-col lg:flex-row">
        {/* Left Column - Empty or for future content */}
        <div className="hidden lg:block lg:w-1/2" />

        {/* Right Column */}
        <div className="flex w-full flex-col justify-center space-y-6 px-6 py-12 md:px-12 lg:w-1/2 lg:px-16">
          {/* Row 1 - Heading */}
          <div>
            <h1 className="font-Archivo text-3xl font-bold text-brand-cream sm:text-4xl lg:text-5xl">
              ONE EASY PLAN
            </h1>
            <p className="mt-1 text-base text-brand-cream/90 sm:text-lg">
              FREE 14 DAY TRIAL. NO LOCK INS. NO CONTRACT.
            </p>
          </div>

          {/* Row 2 - Pricing */}
          <div>
            <div className="flex items-baseline">
              <span className="font-Archivo text-4xl font-bold text-brand-cream sm:text-5xl lg:text-6xl">
                79
              </span>
              <span className="text-brand-cream mr-1 font-Archivo text-xl">AUD</span>
              <span className="ml-2 text-lg font-light text-brand-cream sm:text-xl">
                PER MONTH
              </span>
            </div>
          </div>

          {/* Row 3 - Features List */}
          <div className="group relative overflow-hidden rounded-xl">
            {/* Animated Border */}
            <span>
              <span
                className="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
              />
            </span>
            {/* Content Background */}
            <span className="absolute inset-px rounded-xl bg-brand-green/40 backdrop-blur-md" />
            {/* Content */}
            <div className="relative z-10 p-5">
              <ul className="space-y-1.5 text-[15px] text-brand-cream sm:text-base">
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  One Business
                </li>
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  All AI Experts
                </li>
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Create Your Own Experts
                </li>
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Built In Workflows
                </li>
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Built In Prompts
                </li>
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Daily Mindfulness tools
                </li>
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.7s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Goal Tracker
                </li>
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Action Planner
                </li>
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.9s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Unlimited Access to update Personalisation
                </li>
                <li className="flex items-center group opacity-0 animate-fade-in-right" style={{ animationDelay: '1s' }}>
                  <svg className="mr-3 h-5 w-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-50" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="0.5" />
                    <path className="group-hover:opacity-75 transition-opacity" d="M8.5 12.5l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Data Secured on Internal Database
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full sm:w-auto">
            <Link
              href="https://app.sloane.biz/sign-up"
              className="group relative inline-flex items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-brand-cream via-[#f5e6d3] to-brand-cream px-6 py-3 font-Archivo text-brand-green transition-all duration-300 hover:bg-transparent hover:border-brand-logo hover:text-brand-logo hover:bg-brand-green"
              onClick={handleGetStartedClick}
            >
              <span className="relative z-10 font-medium text-lg">START FREE TRIAL</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
