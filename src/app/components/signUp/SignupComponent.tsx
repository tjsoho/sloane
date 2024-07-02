'use client';
import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const SignupComponent: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return <StepOne nextStep={() => setStep(2)} />;
      case 2:
        return <StepTwo nextStep={() => setStep(3)} />;
      case 3:
        return <StepThree />;
      default:
        return null;
    }
  };

  return (
    <div className='w-full h-full bg-brand-green flex flex-col lg:flex-row'>
      {/* left col half width with image  */}
      <div className="hidden lg:flex w-1/2 h-screen bg-brand-green">
        <div className='w-3/5 h-full'><img src="/images/signup.png" alt="Signup" className="object-cover w-full h-full" /></div>
        <div className='w-2/5 h-full flex items-center ml-4'>
          <h1 className='leading-none text-brand-logo text-6xl'>Let's<br></br>make<br></br>biz a<br></br>breeze.</h1>
        </div>
        
      </div>

      {/* rightr col */}
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-green px-16 w-full lg:w-1/2 h-full">
      <div className="flex justify-start gap-12 lg:gap-16 mb-8 w-full font-Archivo ml-8">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-brand-logo text-brand-green-dark' : 'bg-brand-cream opacity-30'}`}>
          1
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-brand-logo text-brand-green-dark' : 'bg-brand-cream opacity-30'}`}>
          2
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 3 ? 'bg-brand-logo text-brand-green-dark' : 'bg-brand-cream opacity-30'}`}>
          3
        </div>
      </div>
      
      <div className="w-full lg:py-8  h-full">
        {renderStep()}
      </div>
      
    </div>
    </div>
  );
};

export default SignupComponent;
