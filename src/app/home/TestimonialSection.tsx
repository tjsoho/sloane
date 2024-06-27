"use client";
import { Reveal } from "../components/Animations/Reveal";
import Testimonial from "../components/home/Testimonial";
import React, { useState } from "react";

const testimonials = [
  {
    image: "/images/client1.png",
    name: "Toby",
    company: "Ai GUY",
    description:
      "I’m currently writing the content for my next program, F@#K me!!! It’s brilliant. It literally speaks my language. I'm saving hours of time, thank you a million times over.",
  },
  {
    image: "/images/client2.png",
    name: "Tian",
    company: " Sage Events",
    description: "I’m so excited about the opportunities this gives me with my business, its really got me thinking again.",
  },
  {
    image: "/images/client3.png",
    name: "Shani Timms",
    company: "Fygmnt",
    description: "It’s literally a clone of  me but better. I use it several times a day for offerings, course creation, and everything in between.",
  },
  // Add more testimonials as needed
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="h-full w-full bg-brand-cream">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center py-16 lg:py-32 2xl:max-w-[1540px]">
        <div className="lg:w-3/4">
          {currentTestimonial && (
            <Reveal>
              <Testimonial
                image={currentTestimonial.image}
                name={currentTestimonial.name}
                company={currentTestimonial.company}
                description={currentTestimonial.description ?? ""}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
