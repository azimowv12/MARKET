import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Hero() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://rayyon.uz/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fa28631f5-rayyon%2Fa28631f5-rayyon%2Fbanner%2Fuz%2FDesktop_Jmary_PW8_Ru1.jpg&w=1920&q=100" alt="img" className='rounded-4xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rayyon.uz/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fa28631f5-rayyon%2Fa28631f5-rayyon%2Fbanner%2Fuz%2Frayyon_sayt_banner_desktop_uz-min.jpg&w=1920&q=100" alt="" className='rounded-4xl' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
