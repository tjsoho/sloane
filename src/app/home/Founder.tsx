// 1 row of 2 equal columns. Left column contains another column with an image, title, paragraph and right column contains an image.

import { Reveal } from "../components/Animations/Reveal";
import { SlideReveal } from "../components/Animations/SlideReveal";

const Founder = () => {
  return (
    <div className="h-full w-full bg-brand-green">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center lg:flex-row 2xl:max-w-[1540px]">
        {/* left col */}
        <div className="my-12 flex h-full w-full flex-col justify-start px-4 text-brand-cream lg:w-1/2">
          <Reveal>
            <div>
              <h3 className="mb-8 text-left text-8xl text-[44px] leading-none text-brand-logo lg:text-[78px]">
                Our Why?
              </h3>
            </div>
          </Reveal>

          <Reveal>
            <p>
              Toby J is the visionary founder of Sloane, driven by a mission to
              make business easy, fun, and ridiculously efficient.<br></br><br></br>
              With a deep understanding of the challenges faced by business
              owners, Toby aimed to create a platform that not only simplifies
              day-to-day tasks, but also empowers users to unlock the full
              potential of AI. Transforming the entire experience of building
              and running a business.<br></br><br></br>
              Toby recognises that the primary reason many of us start a business is to have the freedom to enjoy life. With Sloane, Toby wants to make it an indispensable tool for every entrepreneur, equipping them with the ability to tackle tasks confidently and efficiently. <br></br><br></br>

His innovative approach and unwavering commitment to user satisfaction have made Sloane a go-to solution for business owners aiming to grow and succeed while reclaiming their time and reducing stress.
            </p>
          </Reveal>
        </div>

        {/* right col */}
        <div className="flex h-full w-full flex-col lg:w-1/2 lg:ml-8 justify-center">
          <img
            src="/images/founder.png"
            alt=""
            className="h-[550px] object-cover lg:h-[100%] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
