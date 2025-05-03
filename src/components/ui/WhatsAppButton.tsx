import React from 'react';
import Link from 'next/link';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hola, me gustaría obtener más información sobre sus servicios."
}) => {
  // Eliminar cualquier carácter no numérico del número telefónico
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // Crear la URL de WhatsApp con el mensaje codificado
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in group">
      <div className="absolute right-16 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#2f3d4d] font-medium py-2 px-4 rounded-lg shadow-md text-sm whitespace-nowrap">
        Chatea con nosotros
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
      </div>
      
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2f3d4d] text-white shadow-lg hover:bg-[#263442] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2f3d4d] pulse-animation"
        aria-label="Contáctanos por WhatsApp"
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.94L4 20l4.15-1.14A7.93 7.93 0 0 0 20 12.05a7.9 7.9 0 0 0-2.4-5.73zM12.05 18.34a6.6 6.6 0 0 1-3.77-1.18l-.27-.17-2.78.77.77-2.85-.17-.27a6.6 6.6 0 0 1-1.1-3.65 6.64 6.64 0 0 1 6.63-6.63 6.58 6.58 0 0 1 4.68 1.94 6.62 6.62 0 0 1 1.95 4.69 6.65 6.65 0 0 1-5.94 6.35zm3.7-4.93c-.2-.1-1.2-.59-1.4-.66-.18-.07-.32-.1-.45.1-.13.2-.5.66-.62.8-.1.13-.22.15-.42.05a5.27 5.27 0 0 1-1.56-.96 5.85 5.85 0 0 1-1.08-1.34c-.1-.2-.01-.31.1-.41.1-.1.2-.26.32-.4.11-.12.15-.2.22-.34.08-.13.04-.25-.02-.35-.06-.1-.45-1.08-.62-1.47-.16-.4-.33-.33-.45-.33-.12 0-.25-.03-.39-.03s-.35.05-.54.25c-.18.2-.7.69-.7 1.67s.72 1.93.81 2.06c.1.13 1.4 2.13 3.38 2.99.47.2.84.33 1.13.42.48.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.85.12-.94-.05-.08-.19-.13-.4-.23z" 
          />
        </svg>
      </Link>
    </div>
  );
};

export default WhatsAppButton;