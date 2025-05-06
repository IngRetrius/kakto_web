import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Sobre Nosotros | Kakto Arquitectos</title>
        <meta name="description" content="Conoce al equipo detrás de Kakto Arquitectos y nuestra visión innovadora en diseño arquitectónico." />
      </Head>

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2f3d4d] mb-6">Sobre Nosotros</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos un estudio de arquitectura dedicado a crear espacios que inspiran, transformando ideas en realidades construidas que responden a las necesidades humanas, el contexto y el medio ambiente.
            </p>
          </div>

          {/* Equipo - Versión mejorada con balance */}
          <div className="mb-20 bg-gray-50 p-8 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2f3d4d] opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e94c46] opacity-5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-[#2f3d4d] mb-6">Nuestro Equipo</h2>
                <p className="mb-8 text-gray-600">
                  En Kakto Arquitectos creemos en la colaboración, la innovación y el diseño centrado en las personas. Nuestro equipo combina experiencia técnica con sensibilidad estética para crear proyectos que trascienden lo ordinario.
                </p>
                <div className="w-20 h-1 bg-[#e94c46] mb-6"></div>
                <p className="text-gray-600">
                  Contamos con profesionales especializados en distintas áreas de la arquitectura, desde el diseño hasta la ejecución de proyectos, siempre con un enfoque sostenible y orientado a mejorar la calidad de vida.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image 
                    src="/images/about/team.png" 
                    alt="Equipo Kakto Arquitectos" 
                    width={500} 
                    height={350}
                    className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#e94c46] rounded-lg z-[-1]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Fundadores - Versión mejorada con descripciones actualizadas */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#2f3d4d] mb-12 text-center">Nuestros Fundadores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Arquitecto 1 - Sergio */}
              <div className="text-center group relative">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full transition-all duration-300 transform group-hover:scale-105 cursor-pointer shadow-md group-hover:shadow-lg border-4 border-transparent group-hover:border-[#e94c46]">
                  <Image 
                    src="/images/about/arquitecto1.jpg" 
                    alt="Sergio Andrés Calderón" 
                    fill
                    style={{ objectFit: 'cover' }} 
                    className="transition-all duration-500 group-hover:saturate-150"
                  />
                  <div className="absolute inset-0 bg-[#2f3d4d] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-[#2f3d4d] mb-2">Sergio Andrés Calderón</h3>
                  <p className="text-[#e94c46] font-medium mb-4">Director General | Cofundador</p>
                  <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
                  <p className="text-gray-600 text-sm mb-4">
                    Arquitecto comprometido con la creación de espacios innovadores y sostenibles, con experiencia en la dirección estratégica y creativa de proyectos arquitectónicos de alto impacto.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Como Director General en Kakto, lidera la visión global de la empresa, integrando diseño, gestión y desarrollo de negocio para garantizar que cada proyecto exprese nuestros valores de excelencia, innovación y responsabilidad social.
                  </p>
                </div>
              </div>

              {/* Arquitecto 2 - Ana */}
              <div className="text-center group relative">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full transition-all duration-300 transform group-hover:scale-105 cursor-pointer shadow-md group-hover:shadow-lg border-4 border-transparent group-hover:border-[#e94c46]">
                  <Image 
                    src="/images/about/arquitecto2.jpg" 
                    alt="Ana Catalina Sarmiento" 
                    fill
                    style={{ objectFit: 'cover' }} 
                    className="transition-all duration-500 group-hover:saturate-150"
                  />
                  <div className="absolute inset-0 bg-[#2f3d4d] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-[#2f3d4d] mb-2">Ana Catalina Sarmiento</h3>
                  <p className="text-[#e94c46] font-medium mb-4">Directora de Proyectos | Cofundadora</p>
                  <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
                  <p className="text-gray-600 text-sm mb-4">
                    Arquitecta apasionada por el diseño con propósito, con experiencia en la gestión integral de proyectos arquitectónicos que generan impacto social y fortalecen el tejido comunitario.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Como directora de proyectos en Kakto, lidera procesos creativos, técnicos y estratégicos, desde la conceptualización hasta la ejecución, asegurando que cada proyecto refleje los valores de sostenibilidad, inclusión y funcionalidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Misión y visión - Versión actualizada */}
          <div className="bg-gray-50 p-10 rounded-lg shadow-sm mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2f3d4d] to-[#e94c46]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#2f3d4d] -mt-2 -ml-2"></div>
                <h2 className="text-2xl font-bold text-[#2f3d4d] mb-4">Nuestra Misión</h2>
                <p className="text-gray-600 mb-4">
                  Diseñamos espacios innovadores y sostenibles que mejoran la vida de las personas y aportan valor a su entorno.
                </p>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#2f3d4d] -mb-2 -mr-2"></div>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e94c46] -mt-2 -ml-2"></div>
                <h2 className="text-2xl font-bold text-[#2f3d4d] mb-4">Nuestra Visión</h2>
                <p className="text-gray-600 mb-4">
                  Ser un estudio de referencia en arquitectura contemporánea, creando proyectos que inspiren y generen impacto positivo en la sociedad.
                </p>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e94c46] -mb-2 -mr-2"></div>
              </div>
            </div>
          </div>

          {/* Valores - Versión mejorada con nuevos contenidos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#2f3d4d] mb-8 text-center">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#2f3d4d] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#2f3d4d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2f3d4d] mb-3 text-center">Innovación</h3>
                <div className="w-12 h-1 bg-[#e94c46] mx-auto mb-3"></div>
                <p className="text-gray-600 text-center">
                  Buscamos soluciones creativas que marquen la diferencia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#e94c46] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#e94c46]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2f3d4d] mb-3 text-center">Sostenibilidad</h3>
                <div className="w-12 h-1 bg-[#2f3d4d] mx-auto mb-3"></div>
                <p className="text-gray-600 text-center">
                  Diseñamos con responsabilidad hacia el medio ambiente y la comunidad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#2f3d4d] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#2f3d4d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2f3d4d] mb-3 text-center">Calidad</h3>
                <div className="w-12 h-1 bg-[#e94c46] mx-auto mb-3"></div>
                <p className="text-gray-600 text-center">
                  Nos exigimos excelencia en cada detalle, de principio a fin.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#e94c46] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#e94c46]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2f3d4d] mb-3 text-center">Empatía</h3>
                <div className="w-12 h-1 bg-[#2f3d4d] mx-auto mb-3"></div>
                <p className="text-gray-600 text-center">
                  Escuchamos y entendemos las necesidades de las personas para crear espacios significativos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#2f3d4d] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#2f3d4d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2f3d4d] mb-3 text-center">Colaboración</h3>
                <div className="w-12 h-1 bg-[#e94c46] mx-auto mb-3"></div>
                <p className="text-gray-600 text-center">
                  Creemos en el trabajo en equipo como motor de grandes ideas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#e94c46] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#e94c46]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2f3d4d] mb-3 text-center">Compromiso social</h3>
                <div className="w-12 h-1 bg-[#2f3d4d] mx-auto mb-3"></div>
                <p className="text-gray-600 text-center">
                  Queremos que nuestra arquitectura genere impacto positivo en la sociedad.
                </p>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="px-8 py-3 text-lg shadow-md hover:shadow-lg">
                Contáctanos para tu próximo proyecto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;