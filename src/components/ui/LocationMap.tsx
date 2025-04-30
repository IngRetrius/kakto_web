import React from 'react';

const LocationMap: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-[#2f3d4d] rounded-lg overflow-hidden">
      {/* Mapa estilizado */}
      <div className="absolute inset-0 bg-[#1f2a38]">
        {/* Rejilla simulando calles */}
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array(96).fill(0).map((_, i) => (
            <div key={i} className="border border-[#2a3b4d] opacity-30"></div>
          ))}
        </div>
        
        {/* Calles principales */}
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-[#3e4e60] opacity-60"></div>
        <div className="absolute left-1/2 top-0 w-[3px] h-full bg-[#3e4e60] opacity-70"></div>
        <div className="absolute left-3/4 top-0 w-[2px] h-full bg-[#3e4e60] opacity-60"></div>
        <div className="absolute top-1/4 left-0 h-[2px] w-full bg-[#3e4e60] opacity-60"></div>
        <div className="absolute top-1/2 left-0 h-[3px] w-full bg-[#3e4e60] opacity-70"></div>
        <div className="absolute top-3/4 left-0 h-[2px] w-full bg-[#3e4e60] opacity-60"></div>
      </div>
      
      {/* Marcador de ubicación */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-6 h-6 bg-[#e94c46] rounded-full animate-pulse shadow-lg">
            <div className="absolute inset-0 bg-[#e94c46] rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-[#e94c46]"></div>
        </div>
      </div>
      
      {/* Etiqueta de ubicación */}
      <div className="absolute bottom-4 left-4 bg-white py-2 px-4 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-[#e94c46]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          <span className="font-medium text-gray-700">Bogotá, Colombia</span>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;