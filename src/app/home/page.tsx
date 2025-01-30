'use client';

import Hero from './Hero';
import BusinessPartner from './BusinessPartner';
import VideoSection from './VideoSection';
import ResponsiveFloating from '../components/home/ResponsiveFloating';
// import Quote from './Quote';
import ImagePrice from './ImagePrice';
import SecretSource from './SecretSource';
import Founder from './Founder';
import TestimonialSection from './TestimonialSection';
import GetStarted from './GetStarted';
import SloaneIsFor from './SloaneIsFor';
import Gelato from './Gelato';
import Quote2 from './Quote2';
import Focus from './Focus';
import React, { useState, useEffect } from 'react';
// import Popup from '../components/Popup';
import Personalisation from './Personalisation';
import Hubs from './Hubs';
import OptIn from './OptIn';
import NewsReel from '../components/NewsReel';
import HeroSlider from './HeroSlider';

const newsWords = [
  'MARKETING',
  'SUPPORT',
  'GUIDANCE',
  "HOW TO'S",
  'SOCIAL MEDIA',
  'NEW IDEAS',
  'COURSE CREATION',
];

const newWords2 = [
  'Photographers',
  'Business Coaches',
  'Chiropractors',
  'E-commerce',
  'Pilates Instructors',
  'Personal Trainers',
  'Financial Planners',
  'Life Coaches',
  'Accountants',
  'Videographers',
  'Artists',
  'Writers',
  'Musicians',
 
  'Designers',

  'Marketers',
  'Business Owners',
  'Freelancers',
  'Entrepreneurs',
  'Creatives',
 
];

const Home: React.FC = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 5000); // Show popup after 5 seconds

  //   return () => clearTimeout(timer); // Cleanup the timer on component unmount
  // }, []);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-screen-1 h-full">
        <Hero />
      </div>
       <NewsReel words={newsWords} />
       
      <div className="h-contain w-screen-1">
        <BusinessPartner />
      </div>
      
      <div className="h-contain w-screen-1">
        <Personalisation />
      </div>
      <div className="h-contain w-screen-1">
        <Quote2 />
      </div>
      <div className="h-contain w-screen-1">
        <HeroSlider />
      </div>
      <NewsReel words={newWords2} />
      <div className="h-contain w-screen-1">
        <OptIn />
      </div>
      <NewsReel words={newWords2} />
      <div className="h-contain w-screen-1">
        <Hubs />
      </div>
      <div className="h-contain w-screen-1">
        <SloaneIsFor />
      </div> 
         
      
    </div>
  );
};

export default Home;
