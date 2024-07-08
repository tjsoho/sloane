'use client';

import { Divider } from '@mui/material';
import FAQ from '../pricing/FAQ';
import PricingComponent from '../pricing/PricingComponent';

const FAQS = () => {
  return (
    <div className="h-full w-full">
      <div className='pt-12 bg-brand-green'>
        <FAQ />
      </div>
      <Divider orientation="horizontal" className=" w-full  bg-brand-logo" />
      <PricingComponent />
    </div>
  );
};

export default FAQS;
