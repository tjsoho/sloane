'use client';

import React from 'react';
import OneHero from './components/OneHero';
import TwoIntro from './components/TwoIntro';
import ThreeExplore from './components/ThreeExplore';
import NineTimer from './components/NineTimer';
import SevenDontMiss from './components/SevenDontMiss';
import SixToby from './components/SixToby';
import FiveCost from './components/FiveCost';
import FourBizLect from './components/FourBizLect';
import EightQuestions from './components/EightQuestions';


function AiPage() {
  return (
    <div className="flex h-full w-screen-1 flex-col">
      <OneHero />
      <TwoIntro />
      <ThreeExplore />
      <FourBizLect />
      <FiveCost />
      
      <SixToby />
      <SevenDontMiss />
      <EightQuestions />
      <NineTimer /> 
    </div>
  );
}

export default AiPage;
