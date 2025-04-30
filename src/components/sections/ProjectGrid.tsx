import React from 'react';
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

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <Link 
          key={project.id} 
          href={`/projects/${project.slug}`} 
          className={index === 0 ? "project-item featured" : "project-item"}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="project-image"
          />
          <div className="project-overlay">
            <h3 className="project-title">{project.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;