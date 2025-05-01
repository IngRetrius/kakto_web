import React from 'react';
import Link from 'next/link';
import { ProjectType } from '@/types/project';

interface ProjectGridProps {
  projects: ProjectType[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  // Si no hay proyectos, muestra un mensaje
  if (projects.length === 0) {
    return <div>No hay proyectos disponibles</div>;
  }

  return (
    <div className="project-grid-outer">
      <div className="project-grid-wrapper">
        <div className="project-grid">
          {/* Aquí mapeamos cada proyecto a un elemento del grid */}
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
      </div>
      
      {/* Indicador de proyectos totales (invisible para el usuario) */}
      <div className="projects-debug">
        <span style={{ display: 'none' }}>Total proyectos: {projects.length}</span>
      </div>
      
      {/* Separador para el footer */}
      <div className="grid-footer-spacer"></div>
    </div>
  );
};

export default ProjectGrid;