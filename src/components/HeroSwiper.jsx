import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const HeroSwiper = () => {
  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="heroSwiper"
      >
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Yangi Mahsulotlar</h1>
                <p className="text-xl mb-6">Eng yangi va zamonaviy mahsulotlar faqat bizda</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Hozir xarid qiling
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Chegirmalar</h1>
                <p className="text-xl mb-6">50% gacha chegirmalar faqat shu hafta</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Chegirmalarni ko'ring
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Tez Yetkazib Berish</h1>
                <p className="text-xl mb-6">Buyurtmalaringiz 24 soat ichida yetkazib beriladi</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Ko'proq ma'lumot
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .heroSwiper {
          width: 100%;
          height: 500px;
        }
        
        :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
        }
        
        :global(.swiper-pagination-bullet-active) {
          opacity: 1;
          background: #3B82F6;
        }
        
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: white;
          background: rgba(0,0,0,0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 20px;
          font-weight: bold;
        }
        
        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background: rgba(59, 130, 246, 0.8);
        }
      `}</style>
    </div>
  );
};

export default HeroSwiper;