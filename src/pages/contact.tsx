// src/pages/contact.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/sections/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contacto | Kakto Arquitectos</title>
        <meta name="description" content="Ponte en contacto con Kakto Arquitectos para consultas sobre proyectos, colaboraciones o información general." />
      </Head>

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2f3d4d] mb-6">Contacto</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para escuchar tus ideas y transformarlas en realidad. Contáctanos para discutir tu próximo proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Using the ContactForm component instead of inline form */}
            <ContactForm className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative overflow-hidden" />

            {/* Información de contacto mejorada - SIN MAPA */}
            <div>
              <div className="bg-[#2f3d4d] text-white p-8 rounded-lg shadow-md mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e94c46] opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#e94c46] opacity-10 rounded-full -ml-10 -mb-10"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center text-xl font-semibold">
                    <svg className="w-6 h-6 mr-3 text-[#e94c46]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Bogotá, Colombia</span>
                  </div>
                  
                  <div className="flex items-center text-xl font-semibold">
                    <svg className="w-6 h-6 mr-3 text-[#e94c46]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <a href="mailto:kaktoarquitectos@gmail.com" className="hover:text-[#e94c46] transition-colors">
                      kaktoarquitectos@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center text-xl font-semibold">
                    <svg className="w-6 h-6 mr-3 text-[#e94c46]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <a href="tel:+573182134982" className="hover:text-[#e94c46] transition-colors">
                      +57 318 213 4982
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-[#2f3d4d] mb-6 flex items-center">
                  <span className="bg-[#2f3d4d] p-1 rounded mr-2 inline-flex">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </span>
                  Síguenos
                </h2>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.linkedin.com/company/kaktoestudio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-gray-100 hover:bg-gray-200 p-3 px-5 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6 text-[#0A66C2] mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="text-gray-700 font-medium">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://www.behance.net/kaktoestudio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-gray-100 hover:bg-gray-200 p-3 px-5 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6 text-[#1769FF] mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                    </svg>
                    <span className="text-gray-700 font-medium">Behance</span>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/kakto.arq/?hl=es-la" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-gray-100 hover:bg-gray-200 p-3 px-5 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6 text-[#E4405F] mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;