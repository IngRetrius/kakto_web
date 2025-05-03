// src/components/sections/ProjectDetail.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectType } from '@/types/project';

interface ProjectDetailProps {
  project: ProjectType;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  
  // Cambiar a una imagen específica
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Navegar entre imágenes
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Toggle panel de información en móvil
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="project-detail-overlay">
      {/* Botón de cierre (X) */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 z-50 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
        aria-label="Cerrar detalle"
      >
        <svg className="w-6 h-6 text-[#2f3d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Botón para mostrar/ocultar info en móvil */}
      <button 
        onClick={toggleInfo} 
        className="lg:hidden absolute top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
        aria-label="Mostrar información"
      >
        <svg className="w-6 h-6 text-[#2f3d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      <div className="project-detail-container flex flex-col lg:flex-row h-full">
        {/* Panel lateral izquierdo - Información del proyecto (visible en desktop, condicional en móvil) */}
        <div className={`project-info-sidebar w-full lg:w-64 flex-shrink-0 p-4 lg:p-6 bg-white border-b lg:border-r lg:border-b-0 border-gray-200 flex flex-col ${showInfo ? 'block' : 'hidden'} lg:block`}>
          <div className="mt-6 lg:mt-20">
            <div className="mb-4 flex items-center lg:flex-col lg:items-start">
              <div className="relative w-16 h-16 lg:w-24 lg:h-24 lg:mb-4">
                <Image 
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4 lg:ml-0">
                <h1 className="text-xl font-bold text-[#2f3d4d]">{project.title}</h1>
                <p className="text-gray-600 text-sm">{project.location}</p>
                <p className="text-gray-600 text-sm">{project.year}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="mb-4">
                <p className="text-gray-400 text-xs uppercase">CLIENTE</p>
                <p className="text-gray-700 text-sm">{project.client || "—"}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-400 text-xs uppercase">TIPOLOGÍA</p>
                <p className="text-gray-700 text-sm">{project.category}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-400 text-xs uppercase">STATUS</p>
                <p className="text-gray-700 text-sm">{project.completed ? "COMPLETADO" : "EN DESARROLLO"}</p>
              </div>
            </div>
          </div>
          
          {/* Sección de compartir */}
          <div className="mt-auto pt-4">
            <p className="text-gray-400 text-xs uppercase mb-2">SHARE</p>
            <div className="flex space-x-2">
              {/* Instagram */}
              <a href="https://www.instagram.com/kakto.arq/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/kaktoestudio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              {/* Behance */}
              <a href="https://www.behance.net/kaktoestudio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contenido principal - Imagen */}
        <div className="project-detail-main flex-grow relative">
          <div className="relative w-full h-full">
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
              fill
              quality={100}
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />

            {/* Navegación con flechas (izquierda/derecha) */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition"
              aria-label="Imagen anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition"
              aria-label="Siguiente imagen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Previsualización de imágenes en la parte inferior */}
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 py-3">
            <div className="flex justify-center items-center space-x-2 px-4 overflow-x-auto thumbnail-container">
              {project.images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`thumbnail-image cursor-pointer transition-opacity ${currentImageIndex === index ? 'opacity-100 border-2 border-[#e94c46]' : 'opacity-60 hover:opacity-80'}`}
                >
                  <div className="relative w-12 h-10 md:w-16 md:h-12">
                    <Image 
                      src={image}
                      alt={`Miniatura ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Panel lateral derecho - Descripción (sólo visible en desktop) */}
        <div className="project-desc-sidebar hidden lg:block w-72 flex-shrink-0 p-6 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="mt-20">
            <h2 className="text-gray-400 text-xs uppercase mb-4">DESCRIPCIÓN</h2>
            <div className="prose">
              <p className="text-gray-700 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;