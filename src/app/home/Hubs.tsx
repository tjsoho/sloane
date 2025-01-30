'use client';
import React from 'react';
import { SlideReveal } from '../components/Animations/SlideReveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Define the slides data
const slides = [
  { image: '/images/pool2.jpeg', text: 'Time' },
  { image: '/images/beds.jpg', text: 'Confidence' },
  { image: '/images/hanging.jpg', text: 'Ease' },
  { image: '/images/hair.jpg', text: 'Freedom' },
  { image: '/images/her.jpg', text: 'Support' },
  { image: '/images/besties1.jpg', text: 'Community' },
  { image: '/images/jumper1.jpg', text: 'Planning' },
  { image: '/images/powersuit1.jpg', text: 'Strategies' },
];

const Hubs = () => {
  return (
    <div className="h-contain w-full bg-brand-cream pb-4">
      {/* Content Container with Background */}
      <div className="relative mb-4 overflow-hidden lg:py-12">
        <div className="absolute inset-0">
          <img
            src="/images/avos1.png"
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-4 py-16 lg:px-8">
          <SlideReveal>
            <h2 className="font-Archivo text-4xl font-bold leading-none text-brand-cream lg:text-6xl 2xl:text-7xl">
              What <span className="text-brand-logo">sloane</span> gives you...
            </h2>
          </SlideReveal>
        </div>
      </div>

      {/* Portrait Image Slider */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg">
                <img
                  src={slide.image}
                  alt={slide.text}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <h3 className="font-Archivo text-3xl font-bold text-brand-cream lg:text-4xl">
                    {slide.text}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hubs;
