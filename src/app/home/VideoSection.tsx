"use client";
import Button from "../components/Button";

const VideoSection = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="bg-brand-logo h-full w-full">
      <div className="mx-auto flex h-full max-w-[1240px] 2xl:max-w-[1540px] flex-col items-center justify-center lg:justify-center lg:flex-row py-32">
        {/* left col */}
        <div className="flex w-full items-center justify-center p-4 lg:w-1/2 order-2 lg:order-1">
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_-TDVrrfu_A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* right col */}
        <div className="flex w-full flex-col items-center justify-center lg:w-1/2 order-1 mb-8 lg:mb-0">
          <h3 className="text-brand-green mb-4 text-[62px] font-bold leading-none lg:text-[78px]">
            What is <br />
            Sloane?
          </h3>
          <div className="mt-2">
            <Button
              title="Get Sloane"
              textColor="brand-green"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              borderColor="brand-green"
              hoverBG="brand-green"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
