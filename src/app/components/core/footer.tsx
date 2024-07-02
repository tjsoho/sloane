"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer container className="bg-brand-green rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1   ">
          <div>
            <Footer.Brand
              href="https://sloane.biz"
              src="/images/logo.png"
              alt="Sloane AI Business Platform - Marketing, Business Coach, Social Media Strategy, Business Growth"
              
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div className="">
              <Footer.Title title="about" className="text-brand-logo"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-brand-green-dark">About</Footer.Link>
                <Footer.Link href="#" className="text-brand-green-dark">Pricing</Footer.Link>
                <Footer.Link href="#" className="text-brand-green-dark">FAQs</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#"></Footer.Link>
                <Footer.Link href="#"></Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            <div>
              <Footer.Title title="Legal" className="text-brand-logo"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-brand-green-dark">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-brand-green-dark">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by=" sloane." year={2024} className="text-brand-logo"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-brand-logo"/>
            <Footer.Icon href="#" icon={BsInstagram} className="text-brand-logo"/>
           
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
