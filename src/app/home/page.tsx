import Hero from "./Hero";
import Section2 from "./Section2";
import VideoSection from "./VideoSection";
import ResponsiveFloating from "../components/home/ResponsiveFloating";
import Quote from "./Quote";
import ImagePrice from "./ImagePrice";
import SecretSource from "./SecretSource";
import Founder from "./Founder";
import TestimonialSection from "./TestimonialSection";
import GetStarted from "./GetStarted";


const Home = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-screen-1 h-screen">
        <Hero />
      </div>
      <div className="h-contain w-screen">
        <Section2 />
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
