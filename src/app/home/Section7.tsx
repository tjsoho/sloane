'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TextGenerateEffect } from '../components/TextGenerateEffect';
import * as fbq from '../../utils/fpixel';

const Section7: React.FC = () => {
  const handleGetStartedClick = () => {
    fbq.event('initiate_checkout', {
      content_name: 'Get Started Click',
      content_category: 'purchase',
      location: 'desktop_header',
    });
  };

  return (
    <section className="bg-brand-cream">
      <div className="flex flex-col-reverse md:flex-row">
        {/* Left Content */}
        <div className="flex items-center p-8 py-12 md:w-2/3 md:p-24">
          <div>
            <TextGenerateEffect
              text="TRY SLOANE FOR FREE"
              className="mb-4 font-Archivo text-3xl font-bold text-brand-green md:text-5xl"
              duration={1}
              viewport={{ once: false }}
              initialDelay={0.1}
            />
            <p className="mb-8 text-lg text-brand-green md:text-xl">
              $79/month after. No Lock Ins. No Contract. Just Ease.
            </p>
            <Link
                href="https://app.sloane.biz/userform"
                className="group relative inline-flex items-center justify-center rounded-full border border-brand-green-light bg-brand-green px-5 py-2 font-Archivo text-xs uppercase text-brand-cream transition-all duration-300 hover:border-brand-logo hover:text-brand-logo overflow-hidden"
                onClick={handleGetStartedClick}
              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 -skew-x-12 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent"></div>
                </div>
                <span className="relative z-10 font-medium text-lg">Try For Free</span>
              </Link>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/3">
          <div className="relative h-[400px] w-full ">
            <Image
              src="/images/couch2.png"
              alt="Sloane Mobile App"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
