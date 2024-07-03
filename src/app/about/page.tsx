"use client";
import AboutCardLeft from "../components/AboutCardLeft";
import { Reveal } from "../components/Animations/Reveal";
import { SlideReveal } from "../components/Animations/SlideReveal";
import { SlideReveal2 } from "../components/Animations/SlideReveal2";

const About = () => {
  return (
    <div className="h-full w-full bg-brand-cream">
      <div className="mx-auto flex  flex-col items-center justify-center lg:flex-row 2xl:max-w-[1540px]">
        {/*------------------------ Heading row---------------------------------- */}
        <div className="my-12 mt-24 flex h-full w-full  flex-col  ">
          <Reveal>
            <div className="mx-auto max-w-[1240px] ">
              <h3 className="mb-8 text-left text-8xl text-[44px] leading-none text-brand-green lg:text-[78px] ">
                Welcome to Sloane, <br></br> where business is as easy <br></br>{" "}
                as taking a holiday!
              </h3>
            </div>
          </Reveal>

          {/*------------------------ Row 1 Right---------------------------------- */}
          <div className="mb-8 flex w-full justify-end">
            <div className="w-[70%]">
              <SlideReveal2>
                <AboutCardLeft
                  imageSrc="/images/5.jpg"
                  title="Our Mission"
                  content="Toby J is the mastermind behind Sloane. As a skilled web developer and coder, Toby’s technical expertise laid the foundation for Sloane. Driven by a desire to make business easy and fun, Toby’s vision was to create a tool that educates and empowers. With Sloane, Toby aims to make running a business as clear as day, giving you more time to enjoy life's precious moments—because isn't that why we all start a business in the first place?
          "
                  bgColor="brand-orange"
                />
              </SlideReveal2>
            </div>
          </div>
          {/*------------------------ Row 2 Left---------------------------------- */}
          <div className="justify- mb-8 flex w-full">
            <div className="w-[70%]">
              <SlideReveal>
                <AboutCardLeft
                  imageSrc="/images/1.jpg"
                  title="Who We Are"
                  content="We’re a dedicated team of specialists who understand the daily grind and the unique challenges that come with it. Why? Because we’ve been there ourselves! Each member of the Sloane team runs their own business. We know what it takes, and we get it. Our platform is designed to be your ultimate business companion, handling everything from marketing and emails to client communications and business planning—all tailored to fit your unique voice and goals.
          "
                  bgColor="brand-green-light"
                />
              </SlideReveal>
            </div>
          </div>
          {/*------------------------ Row 3 Right---------------------------------- */}
          <div className="mb-8 flex w-full justify-end">
            <div className="w-[70%]">
              <SlideReveal2>
                <AboutCardLeft
                  imageSrc="/images/6.jpg"
                  title="How We Started"
                  content="One day our founder Toby J, a talented web developer and coder, thought, 'Imagine creating something that could make business life easier for owners like myself. I wish I had it for my own business instead of having to handle things alone.' With a deep passion for simplifying complex processes and a knack for innovation, Toby set out to create a tool that feels like having a better version of yourself inside your business. And thus, Sloane was born.
                  With a sleek, aesthetically pleasing interface, Sloane isn't just your typical platform. She’s your go-to gal, your business BFF, making everything 70% quicker, freeing up your time to focus on what truly matters—like spending time with family or finally taking that long-deserved holiday.
                  
                  
          "
                  bgColor="brand-orange"
                />
              </SlideReveal2>
            </div>
          </div>
          {/*------------------------ Row 4 left---------------------------------- */}
          <div className="mb-8 flex w-full justify-start">
            <div className="w-[70%]">
              <SlideReveal>
                <AboutCardLeft
                  imageSrc="/images/founder.png"
                  title="Why We're Different"
                  content="Personal Touch: Our meticulously tailored platform gets to know your business inside and out after a deep-dive interview. We understand your voice your goals, and what makes you tick.

                  Smart Prompts: Never feel stuck again with built-in prompts that guide you through every task. Whether it’s social media posts, email campaigns, or blog content, our prompts have you covered.
                  
                  One-Click Magic: Each business hub is designed for ease. From your social media strategy to email marketing, all tasks are streamlined, efficient, and just a click away.
          "
                  bgColor="brand-green"
                />
              </SlideReveal>
            </div>
          </div>
          {/*------------------------ Row 5 Right---------------------------------- */}
          <div className="mb-8 flex w-full justify-end">
            <div className="w-[70%]">
              <SlideReveal2>
                <AboutCardLeft
                  imageSrc="/images/3.jpg"
                  title="Sloane’s heart & soul"
                  content="Our brand is built on empowering, relatable, and inspiring entrepreneurs, sprinkled with a touch of playfulness. We want you to feel supported and motivated every step of the way. With Sloane, you’re not just managing your business—you’re thriving. And because we all run our own businesses, we know the challenges you face and how to overcome them.
          "
                  bgColor="brand-orange"
                />
              </SlideReveal2>
            </div>
          </div>
          {/*------------------------ Row 6 left---------------------------------- */}
          <div className="mb-8 flex w-full justify-start">
            <div className="w-[70%]">
              <SlideReveal>
                <AboutCardLeft
                  imageSrc="/images/founder.png"
                  title="Meet TobyJ"
                  content="Toby J is the mastermind behind Sloane. As a skilled web developer and coder, Toby’s technical expertise laid the foundation for Sloane. Driven by a desire to make business easy and fun, Toby’s vision was to create a tool that educates and empowers. With Sloane, Toby aims to make running a business as clear as day, giving you more time to enjoy life's precious moments—because isn't that why we all start a business in the first place?
          "
                  bgColor="brand-green-light"
                />
              </SlideReveal>
            </div>
          </div>
          {/*------------------------ Row 7 Right---------------------------------- */}
          {/* <div className="mb-8 flex w-full justify-end">
            <div className="w-[70%]">
              <SlideReveal2>
                <AboutCardLeft
                  imageSrc="/images/founder.png"
                  title="Meet TobyJ"
                  content="Toby J is the mastermind behind Sloane. As a skilled web developer and coder, Toby’s technical expertise laid the foundation for Sloane. Driven by a desire to make business easy and fun, Toby’s vision was to create a tool that educates and empowers. With Sloane, Toby aims to make running a business as clear as day, giving you more time to enjoy life's precious moments—because isn't that why we all start a business in the first place?
          "
                  bgColor="brand-green"
                />
              </SlideReveal2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
