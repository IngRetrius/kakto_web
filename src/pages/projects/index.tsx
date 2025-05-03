// src/pages/projects/index.tsx
import Head from 'next/head';
import { getAllProjects } from '@/lib/api';
import { ProjectType } from '@/types/project';
import ProjectGrid from '@/components/sections/ProjectGrid';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';

interface ProjectsPageProps {
  projects: ProjectType[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [initialScrollPosition, setInitialScrollPosition] = useState(0);

  useEffect(() => {
    document.body.classList.add('loading');
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('loading');
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

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

  if (loading) {
    return <Loader message="Cargando proyectos..." />;
  }

  return (
    <>
      <Head>
        <title>Proyectos | Kakto Arquitectos</title>
        <meta name="description" content="Proyectos arquitectónicos de Kakto Arquitectos" />
      </Head>

      <div className="projects-main pt-24">
        <ProjectGrid 
          projects={projects} 
          onSelectProject={handleSelectProject}
        />
        
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={handleCloseDetail} 
          />
        )}
        
        <div className="footer-separator" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = await getAllProjects();
  
  return {
    props: {
      projects: allProjects,
    },
    revalidate: 60,
  };
}