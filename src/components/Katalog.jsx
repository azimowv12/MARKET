import React from 'react';
import { 
  GiPresent, 
  GiLipstick, 
  GiKitchenTap, 
  GiWashingMachine,
  GiLaptop,      
  GiSmartphone,
  GiPocketWatch
} from 'react-icons/gi';
import { FaCarAlt, FaTv } from 'react-icons/fa'; 
import { BsGearFill } from 'react-icons/bs';

const CatalogGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Sovg'alar va suvenirlar",
      icon: <GiPresent className="w-10 h-10 text-blue-600" />
    },
    {
      id: 2,
      name: "Go'zallik va salomatlik",
      icon: <GiLipstick className="w-10 h-10 text-pink-600" />
    },
    {
      id: 3,
      name: "Uy ro'zg'or buyumlari",
      icon: <GiKitchenTap className="w-10 h-10 text-green-600" />
    },
    {
      id: 4,
      name: "Maishiy texnika",
      icon: <GiWashingMachine className="w-10 h-10 text-gray-600" />
    },
    {
      id: 5,
      name: "Kompyuter texnikasi",
      icon: <GiLaptop className="w-10 h-10 text-purple-600" />
    },
    {
      id: 6,
      name: "Televizorlar va videotexnika",
      icon: <FaTv className="w-10 h-10 text-red-600" /> 
    },
    {
      id: 7,
      name: "Smartfonlar va telefonlar",
      icon: <GiSmartphone className="w-10 h-10 text-indigo-600" />
    },
    {
      id: 8,
      name: "Avtomobil jihozlari",
      icon: <FaCarAlt className="w-10 h-10 text-yellow-600" />
    },
    {
      id: 9,
      name: "Avto jihozlar",
      icon: <BsGearFill className="w-10 h-10 text-orange-600" />
    },
    {
      id: 10,
      name: "Qo'l soatlari",
      icon: <GiPocketWatch className="w-10 h-10 text-cyan-600" />
    }
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Katalog</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg cursor-pointer border border-gray-200"
            >
              <div className="mb-3">{category.icon}</div>
              <h3 className="text-center font-medium text-sm md:text-base">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogGrid;
