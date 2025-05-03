// src/pages/projects/[slug].tsx
import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getAllProjects, getProjectBySlug } from '@/lib/api';
import { ProjectType } from '@/types/project';
import Button from '@/components/ui/Button';
import Loader from '@/components/ui/Loader';

interface ProjectDetailProps {
  project: ProjectType;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  // Corregido: Tipo adecuado para el array de refs
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Gestionar carga inicial
  useEffect(() => {
    document.body.classList.add('loading');
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('loading');
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

  // Navegar entre secciones
  const navigateToSection = (index: number) => {
    if (sectionsRef.current[index]) {
      setCurrentSection(index);
      sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Gestionar desplazamiento horizontal
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && containerRef.current) {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaX;
      }
    };

    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const containerWidth = containerRef.current.clientWidth;
        const newSectionIndex = Math.round(scrollLeft / containerWidth);
        
        if (newSectionIndex !== currentSection) {
          setCurrentSection(newSectionIndex);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentSection]);

  if (loading) {
    return <Loader message="Cargando proyecto..." />;
  }

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <>
      <Head>
        <title>{`${project.title} | Kakto Arquitectos`}</title>
        <meta name="description" content={project.excerpt} />
      </Head>

      {/* Botón de retorno */}
      <button 
        onClick={() => router.push('/projects')} 
        className="fixed top-24 left-6 z-50 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
        aria-label="Volver a proyectos"
      >
        <svg className="w-6 h-6 text-[#2f3d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      {/* Navegación de secciones */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-white bg-opacity-80 rounded-full px-4 py-2 shadow-md">
          {new Array(project.images.length + 1).fill(null).map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToSection(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSection === index ? 'bg-[#e94c46]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ver sección ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Contenedor principal con scroll horizontal */}
      <div 
        ref={containerRef}
        className="fixed inset-0 pt-20 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Secciones de imágenes */}
        {project.images.map((image, index) => (
          <div
            key={index}
            // Corrección importante: Manera correcta de asignar refs a elementos en un array
            ref={el => { sectionsRef.current[index] = el; }}
            className="snap-center shrink-0 w-full h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`${project.title} - Imagen ${index + 1}`}
                fill
                quality={100}
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              
              {index === 0 && (
                <div className="absolute bottom-12 left-12 max-w-xl bg-white bg-opacity-90 p-6 rounded-lg shadow-lg animate-fade-in">
                  <h1 className="text-3xl font-bold mb-2 text-[#2f3d4d]">{project.title}</h1>
                  <span className="inline-block bg-[#e94c46] text-white px-3 py-1 text-sm rounded-full mb-4">
                    {project.category}
                  </span>
                  <p className="text-gray-700">{project.excerpt}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Sección de información detallada */}
        <div
          // Corrección importante: Manera correcta de asignar refs a elementos en un array
          ref={el => { sectionsRef.current[project.images.length] = el; }}
          className="snap-center shrink-0 w-full h-full overflow-y-auto bg-white py-12"
        >
          <div className="max-w-5xl mx-auto px-6 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-6 text-[#2f3d4d]">Descripción</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>{project.description}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-24">
                <h2 className="text-xl font-semibold mb-4 text-[#2f3d4d]">Detalles del Proyecto</h2>
                <ul className="space-y-3 text-gray-700">
                  {project.client && (
                    <li className="flex justify-between">
                      <span className="font-medium">Cliente:</span>
                      <span>{project.client}</span>
                    </li>
                  )}
                  {project.location && (
                    <li className="flex justify-between">
                      <span className="font-medium">Ubicación:</span>
                      <span>{project.location}</span>
                    </li>
                  )}
                  {project.year && (
                    <li className="flex justify-between">
                      <span className="font-medium">Año:</span>
                      <span>{project.year}</span>
                    </li>
                  )}
                  <li className="flex justify-between">
                    <span className="font-medium">Categoría:</span>
                    <span>{project.category}</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link href="/contact">
                    <Button variant="primary" fullWidth>
                      Consultar sobre este proyecto
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/projects">
                <Button variant="outline">
                  Volver a Proyectos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getAllProjects();
  
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      project,
    },
    revalidate: 60,
  };
};