import Head from 'next/head';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllProjects, getProjectBySlug } from '@/lib/api';
import { ProjectType } from '@/types/project';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';

interface ProjectDetailProps {
  project: ProjectType;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mostrar loader al entrar a la página de detalle de proyecto
    document.body.classList.add('loading');
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('loading');
    }, 1200); // 1.2 segundos de carga, un poco más rápido que la página principal de proyectos

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

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

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm">
            <Link href="/" className="text-gray-500 hover:text-orange-500">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/projects" className="text-gray-500 hover:text-orange-500">Proyectos</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">{project.title}</span>
          </div>

          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">{project.title}</h1>
            <div className="flex items-center">
              <span className="inline-block bg-orange-500 text-white px-3 py-1 text-sm rounded-full mr-4">
                {project.category}
              </span>
              {project.completed && (
                <span className="text-green-600 text-sm font-medium">Proyecto Completado</span>
              )}
            </div>
          </div>

          {/* Main Image Showcase */}
          <div className="mb-8">
            <div className="relative h-96 md:h-[600px] w-full rounded-lg overflow-hidden">
              <Image
                src={project.images[activeImage]}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            
            {/* Thumbnail Navigation */}
            {project.images.length > 1 && (
              <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-20 w-32 rounded-md overflow-hidden ${
                      activeImage === index ? 'ring-2 ring-orange-500' : ''
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} imagen ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">Descripción</h2>
              <div className="prose max-w-none text-gray-700">
                <p>{project.description}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h2 className="text-xl font-semibold mb-4 text-navy-800">Detalles del Proyecto</h2>
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
          
          {/* Back to Projects */}
          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="outline">
                Volver a Proyectos
              </Button>
            </Link>
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