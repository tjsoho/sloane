'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import PowerSuit from './PowerSuit';
import Jumper from './Jumper';
import Wings from './Wings';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="heroSlider"
      >
        <SwiperSlide>
          <PowerSuit />
        </SwiperSlide>
        <SwiperSlide>
          <Jumper />
        </SwiperSlide>
        <SwiperSlide>
          <Wings />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev !text-brand-cream transition-colors hover:!text-brand-logo" />
      <div className="swiper-button-next !text-brand-cream transition-colors hover:!text-brand-logo" />

      {/* Custom Pagination */}
      <div className="swiper-pagination !bottom-4" />

      {/* Custom styles for pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ffe7c3;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #c1ff72;
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
