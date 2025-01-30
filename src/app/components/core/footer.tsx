'use client';

import { Divider } from '@mui/material';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';

const FooterComponent = () => {
  return (
    <Footer className="rounded-none border-t-[1px] border-brand-green bg-brand-cream">
      <div className="w-full">
        <div className="grid w-full justify-between py-12 sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex items-center">
            <div className="flex flex-col items-start">
              <div className="rounded-r-lg bg-brand-green px-4 py-2">
                <img
                  src="/images/logo.png"
                  alt="Sloane Logo"
                  className="h-12"
                />
              </div>
              <h3 className="my-4 pl-4 font-Archivo text-4xl text-brand-green md:my-0 lg:mt-4 lg:text-5xl">
                feel the freedom.
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 px-4 sm:mt-4 lg:px-16">
            {/* First Column */}
            <Footer.LinkGroup col className="space-y-2">
              <Footer.Link
                href="/about"
                className="font-poppins font-semibold text-brand-green"
              >
                About
              </Footer.Link>
              <Footer.Link
                href="/pricing"
                className="font-poppins font-semibold text-brand-green"
              >
                Pricing
              </Footer.Link>
              <Footer.Link
                href="/FAQS"
                className="font-poppins font-semibold text-brand-green"
              >
                FAQs
              </Footer.Link>
              <Footer.Link
                href="/blog"
                className="font-poppins font-semibold text-brand-green"
              >
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
            {/* Second Column */}
            <Footer.LinkGroup col className="space-y-2">
              <Footer.Link
                href="/privacy"
                className="font-poppins font-semibold text-brand-green"
              >
                Privacy Policy
              </Footer.Link>
              <Footer.Link
                href="/terms&conditions"
                className="font-poppins font-semibold text-brand-green"
              >
                Terms &amp; Conditions
              </Footer.Link>
              <Footer.Link
                href="/editor"
                className="font-poppins font-semibold text-brand-green"
              >
                Admin
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Divider
          orientation="horizontal"
          className="my-2 w-full bg-brand-green lg:mt-2"
        />
        <div className="relative flex items-center px-4 py-4">
          <div className="flex space-x-8 pl-4">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-5xl text-brand-green hover:text-brand-green-dark"
              aria-label="Sloane on Facebook"
            />
            <Footer.Icon
              href="https://www.instagram.com/sloane.biz/"
              icon={BsInstagram}
              className="text-5xl text-brand-green hover:text-brand-green-dark"
              aria-label="Sloane on Instagram"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Footer.Copyright
              href="#"
              by=" sloane."
              year={2024}
              className="font-poppins font-semibold text-brand-green"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
