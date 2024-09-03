'use client';
import { SlideReveal2 } from '../components/Animations/SlideReveal2';
import { SlideReveal } from '../components/Animations/SlideReveal';
import Button from '../components/Button';
import { Reveal } from '../components/Animations/Reveal';

const VideoSection = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="h-full w-full bg-brand-green">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col items-center justify-center py-32 lg:flex-row lg:justify-center 2xl:max-w-[1540px]">
        {/* left col */}
        <div className="order-2 flex w-full items-center justify-center p-4 lg:order-1 lg:w-1/2">
          <SlideReveal>
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/2xxJynNuRRw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SlideReveal>
        </div>
        {/* right col */}
        <div className="order-1 mb-8 flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2">
          <div>
            <SlideReveal2>
              <h3 className="mb-4 text-[62px] font-bold leading-none text-brand-logo lg:text-[78px]">
                What is <br />
                Sloane Ai?
              </h3>
            </SlideReveal2>
          </div>
          <div className="mt-2">
            <Reveal>
              <Button
                title="Get Sloane"
                textColor="brand-green"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                borderColor="brand-green"
                hoverBG="brand-green-dark"
                onClick={handleClick}
                path="/pricing"
                ariaLabel="Go to Sloane Pricing"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
