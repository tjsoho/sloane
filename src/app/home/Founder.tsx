// 1 row of 2 equal columnss. Left column contains another column with a image, title, paragraph and right column contains an image.

import { Reveal } from "../components/Animations/Reveal";
import { SlideReveal } from "../components/Animations/SlideReveal";
import { SlideReveal2 } from "../components/Animations/SlideReveal2";

const Founder = () => {
  return (
    <div className="h-full w-full bg-brand-green">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center lg:flex-row  2xl:max-w-[1540px]">
        {/* left col */}
        <div className="my-12 flex h-full w-full flex-col justify-start px-4 text-brand-cream lg:w-1/2">
          <Reveal>
            <div>
              <img src="/images/logo.png" alt="" className="w-[55%]" />
            </div>
          </Reveal>
          <SlideReveal>
            <div>
              <h3 className=" mb-8 text-right  text-8xl text-[44px] leading-none lg:px-6 lg:text-[78px]">
                FOUNDER
              </h3>
            </div>
          </SlideReveal>
          <Reveal>
            <p>
              From strumming guitar strings to stringing together code, I've
              traded live gigs for gigabytes to help your business hit all the
              right notes online. <br></br>
              <br></br>With a knack for crafting websites that you can't help
              but fall in love with and AI solutions that transform your digital
              strategy, I'm all about making your business sing.
            </p>
          </Reveal>
        </div>

        {/* right col */}
        <div className="flex h-full w-full flex-col justify-start lg:w-1/2">
          <img
            src="/images/founder.jpg"
            alt=""
            className="h-[350px] object-cover lg:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
