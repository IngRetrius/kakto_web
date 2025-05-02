import Head from 'next/head';
import { getAllProjects } from '@/lib/api';
import { ProjectType } from '@/types/project';
import ProjectGrid from '@/components/sections/ProjectGrid';
import { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';

interface ProjectsPageProps {
  projects: ProjectType[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mostrar loader al entrar a la página de proyectos
    document.body.classList.add('loading');
    
    // Simulamos un tiempo de carga para mejor experiencia de usuario
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('loading');
    }, 1500); // 1.5 segundos de carga

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

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
        {/* Primero se muestra el grid con los proyectos */}
        <ProjectGrid projects={projects} />
        
        {/* Este div actúa como un separador claro entre el grid y el footer */}
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