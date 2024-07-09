'use client';
import { Reveal } from '../components/Animations/Reveal';
import { SlideReveal } from '../components/Animations/SlideReveal';
import Testimonial from '../components/home/Testimonial';
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    image: '/images/rach.png',
    name: 'Rachel',
    company: 'Chevell Photography',
    description:
      "I’m currently writing the content for my next program, F@#K me!!! It’s brilliant. It literally speaks my language. I'm saving hours of time, thank you a million times over.",
  },
  {
    image: '/images/tahls2.png',
    name: 'Tahlia',
    company: 'CEO Collective',
    description:
      'This is actually insane! Where have you been all my life? I love Sloane.',
  },
  {
    image: '/images/dante.png',
    name: 'Dante',
    company: 'Dante Amato',
    description:
      "Sloane has given me something I've always wanted in my business. Another me!",
  },
  {
    image: '/images/danny.png',
    name: 'Danny',
    company: 'Danny Nico Productions',
    description:
      "I no longer procrastinate and feel like I don't know what Im doing to market my business. I have a plan and I'm sticking to it. I actually look forward to doing email marketing now.",
  },
  {
    image: '/images/tian.png',
    name: 'Tian',
    company: ' Sage Events',
    description:
      'I’m so excited about the opportunities this gives me with my business, its really got me thinking again.',
  },
  // Add more testimonials as needed
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(handleNext, 4000); // Change testimonial every 5 seconds
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="h-full w-full bg-brand-cream" ref={sectionRef}>
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center py-16 lg:py-32 2xl:max-w-[1540px]">
        <SlideReveal>
          <div className="mb-4 flex h-full w-full flex-col items-center justify-center text-center lg:mb-8">
            <h3 className="text-8xl text-[44px] leading-none text-brand-orange lg:text-[78px]">
              Hear From Our{' '}
              <span className="text-brand-orange-light">Members</span>
            </h3>
          </div>
        </SlideReveal>
        <div className="lg:w-3/4">
          {currentTestimonial && (
            <Reveal>
              <Testimonial
                image={currentTestimonial.image}
                name={currentTestimonial.name}
                company={currentTestimonial.company}
                description={currentTestimonial.description ?? ''}
                onNext={handleNext}
                onPrev={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
                  )
                }
              />
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
