'use client';

import { Divider } from '@mui/material';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';

const FooterComponent = () => {
  return (
    <Footer
      container
      className="rounded-none border-t-[1px] border-brand-logo bg-brand-green"
    >
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
              <Footer.Title title="about" className="text-brand-logo" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about" className="text-brand-green-dark">
                  About
                </Footer.Link>
                <Footer.Link href="/pricing" className="text-brand-green-dark">
                  Pricing
                </Footer.Link>
                <Footer.Link href="/FAQS" className="text-brand-green-dark">
                  FAQs
                </Footer.Link>
                <Footer.Link href="/blog" className="text-brand-green-dark">
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-brand-logo" />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy" className="text-brand-green-dark">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="/terms&conditions"
                  className="text-brand-green-dark"
                >
                  Terms &amp; Conditions
                </Footer.Link>
               
                <Footer.Link href="/editor" className="text-brand-green-dark">
                  Admin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Divider
          orientation="horizontal"
          className="my-2 w-full bg-brand-logo lg:mt-2"
        />
        <div className="relative w-full">
          <Footer.Copyright
            href="#"
            by=" sloane."
            year={2024}
            className="text-brand-logo"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex space-x-6">
              <Footer.Icon
                href="#"
                icon={BsFacebook}
                className="text-brand-logo"
                aria-label="Sloane on Facebook"
              />
              <Footer.Icon
                href="https://www.instagram.com/sloane.biz/"
                icon={BsInstagram}
                className="text-brand-logo"
                aria-label="Sloane on Instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
