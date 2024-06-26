// 1 row of 2 equal columnss. Left column contains another column with a image, title, paragraph and right column contains an image.

const Founder = () => {
  return (
    <div className="bg-brand-green h-full w-full">
      <div className="mx-auto flex max-w-[1240px] flex-col lg:flex-row items-center justify-center  2xl:max-w-[1540px]">
        {/* left col */}
        <div className="flex h-full w-full flex-col justify-start lg:w-1/2 px-4 text-brand-cream my-12">
          <img src="/images/logo.png" alt="" className="w-[55%]"/>
          <h3 className=" text-8xl text-[44px]  leading-none lg:text-[78px] text-right lg:px-6 mb-8">
            FOUNDER
          </h3>
          <p>
            From strumming guitar strings to stringing together code, I've
            traded live gigs for gigabytes to help your business hit all the
            right notes online. <br></br><br></br>With a knack for crafting websites that you
            can't help but fall in love with and AI solutions that transform
            your digital strategy, I'm all about making your business sing.
          </p>
        </div>

        {/* right col */}
        <div className="flex h-full w-full flex-col justify-start lg:w-1/2">
            <img src="/images/founder.jpg" alt="" className="h-[350px] lg:h-[600px] object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Founder;
