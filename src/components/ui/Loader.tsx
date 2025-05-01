// src/components/ui/Loader.tsx
import React from 'react';
import Image from 'next/image';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center flex-col">
      {/* Contenedor con dimensiones fijas explícitas */}
      <div className="w-[200px] h-[100px] relative flex items-center justify-center">
        <Image 
          src="/images/logo/kakto-logo.png"
          alt="Kakto Arquitectos - Cargando"
          width={200}
          height={100}
          className="transform-none" // Previene transformaciones
          style={{ 
            objectFit: 'contain',
            transform: 'none' // Fuerza que no haya transformación
          }}
        />
      </div>
      <div className="spinner mt-6">
        <div className="bounce1 bg-[#e94c46]"></div>
        <div className="bounce2 bg-[#e94c46]"></div>
        <div className="bounce3 bg-[#e94c46]"></div>
      </div>
    </div>
  );
};

export default Loader;