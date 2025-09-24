import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-50 p-6 flex justify-center gap-40 items-center text-gray-700 font-sans">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold text-blue-700">Market</div>
        <a href="tel:+998991994555" className="text-blue-700 hover:underline">+998 99 199 45 55</a>
        <a href="#" className="text-blue-700 hover:underline">Somewhere, Toshkent</a>
        <a href="mailto:market@gmail.com" className="text-blue-700 hover:underline">market@gmail.com</a>
      </div>
      <div className="flex flex-col gap-2">
        <strong className="text-lg">Ma'lumot</strong>
        <a href="#" className="text-blue-700 hover:underline">Biz haqimizda</a>
        <a href="#" className="text-blue-700 hover:underline">Bo'sh ish o'rinlari</a>
        <a href="#" className="text-blue-700 hover:underline">Tovarlarni almashtirish va to'lovni qaytarish</a>
        <a href="#" className="text-blue-700 hover:underline">Yordam</a>
      </div>
      <div className="flex flex-col gap-2">
        <strong className="text-lg">Bonuslar</strong>
        <a href="#" className="text-blue-700 hover:underline">Aksiyalar</a>
        <a href="#" className="text-blue-700 hover:underline">Servis markazlari</a>
      </div>
  
    </footer>
  );
};

export default Footer;