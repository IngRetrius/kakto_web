import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectType } from '@/types/project';

interface ProjectGridProps {
  projects: ProjectType[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  // Verificar si hay suficientes proyectos
  if (projects.length === 0) {
    return <div>No hay proyectos disponibles</div>;
  }

  // Asegúrate de tener al menos un proyecto destacado
  const featuredProject = projects[0];
  const regularProjects = projects.slice(1);

  return (
    <div className="project-grid mb-8">
      {/* Proyecto destacado (más grande) */}
      <Link href={`/projects/${featuredProject.slug}`} className="project-item featured">
        <div className="relative w-full h-full">
          <Image
            src={featuredProject.coverImage}
            alt={featuredProject.title}
            fill
            className="project-image"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="project-overlay">
            <h3 className="project-title">{featuredProject.title}</h3>
          </div>
        </div>
      </Link>
      
      {/* Proyectos regulares */}
      {regularProjects.map((project) => (
        <Link key={project.id} href={`/projects/${project.slug}`} className="project-item">
          <div className="relative w-full h-full">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="project-image"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;