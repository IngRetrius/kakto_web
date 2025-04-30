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

      <div className="pt-20 overflow-hidden"> {/* Solo padding-top para espacio bajo el header */}
        <ProjectGrid projects={projects} />
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