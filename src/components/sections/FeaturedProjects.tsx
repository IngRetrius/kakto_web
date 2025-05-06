import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectType } from '@/types/project';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import ProjectDetail from '@/components/sections/ProjectDetail';

interface FeaturedProjectsProps {
  projects: ProjectType[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  // Estado para manejar el proyecto seleccionado
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [initialScrollPosition, setInitialScrollPosition] = useState(0);

  // Si no hay proyectos, no mostramos nada
  if (projects.length === 0) {
    return null;
  }

  // Tomar solo los primeros 3 proyectos para mostrar como destacados
  const featuredProjects = projects.slice(0, 3);

  // Función para seleccionar un proyecto
  const handleSelectProject = (project: ProjectType) => {
    // Guardar la posición actual de scroll
    setInitialScrollPosition(window.scrollY);
    setSelectedProject(project);
    // Prevenir scroll del body mientras se muestra el detalle
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar el detalle
  const handleCloseDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
    // Volver a la posición original de scroll
    window.scrollTo(0, initialScrollPosition);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3d4d] mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre algunas de nuestras obras más representativas en diferentes categorías.
          </p>
        </div>
        
        {/* Usamos la misma estructura que project-grid pero con la clase featured-grid */}
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => handleSelectProject(project)}
              className={index === 0 ? "featured-item main" : "featured-item"}
            >
              <div className="relative w-full aspect-[6/4]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="featured-image object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="featured-overlay">
                <h3 className="featured-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/projects">
            <Button variant="outline" className="py-3 px-8">
              Ver todos los proyectos
            </Button>
          </Link>
        </div>
      </div>

      {/* Mostrar el detalle del proyecto cuando haya uno seleccionado */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={handleCloseDetail} 
        />
      )}
    </section>
  );
};

export default FeaturedProjects;