import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function HeroSwiper() {
  const images = [
    "https://rayyon.uz/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fa28631f5-rayyon%2Fa28631f5-rayyon%2Fbanner%2Fuz%2FDesktop_Jmary_PW8_Ru1.jpg&w=1920&q=100",
    "https://rayyon.uz/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fa28631f5-rayyon%2Fa28631f5-rayyon%2Fbanner%2Fuz%2Frayyon_sayt_banner_desktop_uz-min.jpg&w=1920&q=100",
  ];

  return (
    <div className="px-2" id="hero">
      {/* Swiper faqat md va undan katta ekranlarda */}
      <div className="hidden md:block">
        <Swiper
          spaceBetween={5}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper bg-white dark:bg-gray-900 rounded-2xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`banner-${index}`}
                className="w-full h-[220px] md:h-[320px] lg:h-[400px] object-cover object-center rounded-xl sm:rounded-2xl md:rounded-3xl"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobil ekranlar uchun oddiy banner */}
      <div className="block md:hidden">
        <img
          src="https://rayyon.uz/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fa28631f5-rayyon%2Fa28631f5-rayyon%2Fbanner%2Fuz%2FDesktop_Jmary_PW8_Ru1.jpg&w=640&q=80"
          alt="mobile-banner"
          className="w-full h-[140px] object-cover rounded-xl bg-white dark:bg-gray-900"
        />
      </div>
    </div>
  );
}
