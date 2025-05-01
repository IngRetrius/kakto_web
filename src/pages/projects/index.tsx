import Head from 'next/head';
import { getAllProjects } from '@/lib/api';
import { ProjectType } from '@/types/project';
import ProjectGrid from '@/components/sections/ProjectGrid';

interface ProjectsPageProps {
  projects: ProjectType[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
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