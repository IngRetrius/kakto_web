import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const ServicesPage = () => {
  const services = [
    {
      title: "Diseño arquitectónico",
      description: "Proyectos residenciales, comerciales e institucionales a medida.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
        </svg>
      ),
    },
    {
      title: "Diseño interior",
      description: "Espacios funcionales, estéticos y alineados con las necesidades de cada cliente.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "Remodelaciones y ampliaciones",
      description: "Transformamos espacios existentes para darles nueva vida.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "Consultoría",
      description: "Asesoría especializada en diseño, planeación y ejecución de proyectos.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "Dirección y gerencia de obra",
      description: "Acompañamiento integral, desde la planificación hasta la entrega final.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      ),
    },
    {
      title: "Servicios de obra",
      description: "Ejecución de proyectos constructivos con altos estándares de calidad.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "Mantenimiento de proyectos",
      description: "Conservación, adecuación y mejora de espacios construidos.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "Diseño conceptual y anteproyectos",
      description: "Ideas creativas que sirven como base para desarrollos futuros.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
        </svg>
      ),
    },
    {
      title: "Planificación urbana y diseño de espacio público",
      description: "Propuestas que mejoran la calidad de vida en comunidades.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Servicios | Kakto Arquitectos</title>
        <meta name="description" content="Servicios de arquitectura, diseño interior y consultoría ofrecidos por Kakto Arquitectos." />
      </Head>

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2f3d4d] mb-6">Nuestros Servicios</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              En Kakto Arquitectos ofrecemos soluciones integrales que abarcan todo el ciclo de vida de un proyecto arquitectónico, desde el concepto inicial hasta la ejecución y mantenimiento.
            </p>
          </div>

          {/* Barra decorativa con degradado */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#2f3d4d] to-[#e94c46] mx-auto mb-16"></div>

          {/* Servicios en grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${index % 2 === 0 ? 'bg-[#2f3d4d] text-white' : 'bg-[#e94c46] text-white'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2f3d4d] mb-3">{service.title}</h3>
                <div className={`w-12 h-1 mb-4 transition-all duration-300 ${index % 2 === 0 ? 'bg-[#2f3d4d]' : 'bg-[#e94c46]'}`}></div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Sección adicional de enfoque */}
          <div className="bg-gray-50 p-10 rounded-lg shadow-sm mb-16 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2f3d4d] to-[#e94c46]"></div>
            <h2 className="text-2xl font-bold text-[#2f3d4d] mb-6 text-center">Nuestro Enfoque</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              En cada proyecto, buscamos equilibrar estética, funcionalidad y sostenibilidad, trabajando en estrecha colaboración con nuestros clientes para transformar sus visiones en realidades arquitectónicas excepcionales.
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#2f3d4d] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#2f3d4d]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#2f3d4d] mb-2">Personalizado</h3>
                  <p className="text-gray-600 text-center text-sm">Cada proyecto es único y recibe atención individualizada.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#e94c46] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#e94c46]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#2f3d4d] mb-2">Creativo</h3>
                  <p className="text-gray-600 text-center text-sm">Enfoque innovador para resolver desafíos arquitectónicos.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#2f3d4d] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#2f3d4d]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#2f3d4d] mb-2">Integral</h3>
                  <p className="text-gray-600 text-center text-sm">Acompañamiento completo en todas las fases del proyecto.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#2f3d4d] mb-6">Listo para dar vida a tu proyecto?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Estamos aquí para transformar tus ideas en espacios excepcionales. Contáctanos y juntos haremos realidad tu visión arquitectónica.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="px-8 py-3 text-lg shadow-md hover:shadow-lg">
                Conversemos sobre tu proyecto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;