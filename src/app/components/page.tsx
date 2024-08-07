"use client";

import AboutCardLeft from "./AboutCardLeft";
import Button from "./Button";
import ClientCard from "./home/ClientCard";
import Statistic from "./home/Statistic";

const components = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex w-screen flex-col lg:p-16">
      <div>
        <h1 className="mb-16 text-4xl">Components</h1>
      </div>
      <div className="w-[70%] bg-brand-orange">
        <AboutCardLeft
          imageSrc="/images/founder.png"
          title="Meet TobyJ"
          content="Toby J is the mastermind behind Sloane. As a skilled web developer and coder, Toby’s technical expertise laid the foundation for Sloane. Driven by a desire to make business easy and fun, Toby’s vision was to create a tool that educates and empowers. With Sloane, Toby aims to make running a business as clear as day, giving you more time to enjoy life's precious moments—because isn't that why we all start a business in the first place?
          "
          bgColor="brand-orange-dark"
        />
      </div>
    
      <div className="flex w-full lg:w-1/3">
        {/* left col */}
        <div className="flex w-1/2 flex-col">
          <div className="p-2">
            <ClientCard
              imageSrc="/images/client1.png"
              jobTitle="Designer"
              jobTitleColor="brand-green"
              name="Dana Tsibil"
              businessName="Tsibil Designs"
              bgColor="brand-green-light"
              innerBgColor="brand-cream"
            />
          </div>
          <div className="p-2">
            <ClientCard
              imageSrc="/images/client3.png"
              jobTitle="Photographer"
              jobTitleColor="brand-yellow"
              name="Dan Murphy"
              businessName="Bleek Studios"
              bgColor="brand-orange"
              innerBgColor="brand-orange-light"
            />
          </div>
          <div className="p-2">
            <ClientCard
              imageSrc="/images/client6.png"
              jobTitle="Business Coach"
              jobTitleColor="brand-green-light"
              name="Shani Timms"
              businessName="Business Coach"
              bgColor="brand-green"
              innerBgColor="brand-logo"
            />
          </div>
          <ClientCard
            imageSrc="/images/client2.png"
            jobTitle="Naturopath"
            jobTitleColor="brand-orange"
            name="Deborah O'Neil"
            businessName="Simply Natural"
            bgColor="brand-yellow"
            innerBgColor="brand-orange-light"
          />
          <ClientCard
            imageSrc="/images/client4.png"
            jobTitle="Caterer"
            jobTitleColor="brand-green"
            name="Tian Evans"
            businessName="Sage Events"
            bgColor="brand-logo"
            innerBgColor="brand-green-light"
          />
          <ClientCard
            imageSrc="/images/client5.png"
            jobTitle="Product"
            jobTitleColor="brand-orange"
            name="Shani Tim Shoal"
            businessName="Products 1st"
            bgColor="brand-orange-light"
            innerBgColor="brand-cream"
          />
        </div>
        {/* right */}
        <div className="flex w-1/2 flex-col">
          <div className="p-2">
            <ClientCard
              imageSrc="/images/client2.png"
              jobTitle="Naturopath"
              jobTitleColor="brand-orange"
              name="Deborah O'Neil"
              businessName="Simply Natural"
              bgColor="brand-yellow"
              innerBgColor="brand-orange-light"
            />
          </div>
          <div className="p-2">
            <ClientCard
              imageSrc="/images/client4.png"
              jobTitle="Caterer"
              jobTitleColor="brand-green"
              name="Tian Evans"
              businessName="Sage Events"
              bgColor="brand-logo"
              innerBgColor="brand-green-light"
            />
          </div>
          <div className="p-2">
            <ClientCard
              imageSrc="/images/client5.png"
              jobTitle="Product"
              jobTitleColor="brand-orange"
              name="Shani Tim Shoal"
              businessName="Products 1st"
              bgColor="brand-orange-light"
              innerBgColor="brand-cream"
            />
          </div>
          <ClientCard
            imageSrc="/images/client1.png"
            jobTitle="Designer"
            jobTitleColor="brand-green"
            name="Dana Tsibil"
            businessName="Tsibil Designs"
            bgColor="brand-green-light"
            innerBgColor="brand-cream"
          />
          <ClientCard
            imageSrc="/images/client3.png"
            jobTitle="Photographer"
            jobTitleColor="brand-yellow"
            name="Dan Murphy"
            businessName="Bleek Studios"
            bgColor="brand-orange"
            innerBgColor="brand-orange-light"
          />
          <ClientCard
            imageSrc="/images/client6.png"
            jobTitle="Business Coach"
            jobTitleColor="brand-green-light"
            name="Shani Timms"
            businessName="Business Coach"
            bgColor="brand-green"
            innerBgColor="brand-logo"
          />
        </div>
      </div>
      <div className="my-4">
        <Button
          title="Get Sloane"
          textColor="brand-cream"
          textHoverColor="brand-logo"
          backgroundColor="brand-green"
          hoverBG="brand-green"
          onClick={handleClick}
          path="/home" // Internal path
          ariaLabel="Find Sloane Pricing"
        />
      </div>
      <div className="flex h-full">
        <div className="my-4">
          <Statistic
            percentage={70}
            subheading="Faster Task Completion"
            imageUrl="/images/graph.png"
          />
        </div>
        <div className="my-4">
          <Statistic
            percentage={100}
            subheading="User Happiness"
            imageUrl="/images/thumbs.png"
          />
        </div>
        <div className="my-4">
          <Statistic
            percentage={100}
            subheading="No Brainer"
            imageUrl="/images/light.png"
          />
        </div>
      </div>
    </div>
  );
};

export default components;
