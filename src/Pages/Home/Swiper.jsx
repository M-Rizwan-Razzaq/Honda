import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import Hero from './Hero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';

export default () => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay, EffectFlip]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect="flip" 
      speed={600}
      pagination={{ clickable: true }} 
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
      <SwiperSlide>
        <Hero2 />
      </SwiperSlide>
      <SwiperSlide>
        <Hero3 />
      </SwiperSlide>
    </Swiper>
  );
};
