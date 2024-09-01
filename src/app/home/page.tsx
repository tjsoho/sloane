import Hero from './Hero';
import BusinessPartner from './BusinessPartner';
import VideoSection from './VideoSection';
import ResponsiveFloating from '../components/home/ResponsiveFloating';
import Quote from './Quote';
import ImagePrice from './ImagePrice';
import SecretSource from './SecretSource';
import Founder from './Founder';
import TestimonialSection from './TestimonialSection';
import GetStarted from './GetStarted';
import SloaneIsFor from './SloaneIsFor';
import Gelato from './Gelato';
import Quote2 from './Quote2';
import Focus from './Focus';

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-screen-1 h-full">
        <Hero />
      </div>
      <div className="h-contain w-screen-1">
        <Gelato />
      </div>
      <div className="h-contain w-screen-1">
        <BusinessPartner />
      </div>
      <div className="h-contain w-screen-1">
        <SloaneIsFor />
      </div>
      <div className="h-contain w-screen-1">
        <Quote2 text='I’ve been in Sloane everyday and safe to say WOW, I am blown away!' author='Chani - Personal Coach' />
      </div>
      <div className="h-contain w-screen-1">
        <Focus />
      </div>
      <div className="h-contain w-screen-1">
        <VideoSection />
      </div>
      <div className="h-contain w-screen-1 lg:h-screen">
        <ResponsiveFloating />
      </div>
      <div className="h-contain w-screen-1">
        <Quote />
      </div>
      <div className="h-contain w-screen-1">
        <GetStarted />
      </div>
      <div className="h-contain w-screen-1">
        <ImagePrice />
      </div>
      <div className="h-contain w-screen-1">
        <SecretSource />
      </div>
      <div className="h-contain w-screen-1">
        <Founder />
      </div>
      <div className="h-contain w-screen-1">
        <TestimonialSection />
      </div>
    </div>
  );
};

export default Home;
