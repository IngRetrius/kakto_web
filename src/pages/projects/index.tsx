import Head from 'next/head';
import { getAllProjects } from '@/lib/api';
import { ProjectType } from '@/types/project';
import ProjectGrid from '@/components/sections/ProjectGrid';

interface HomeProps {
  projects: ProjectType[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Kakto Arquitectos | Diseño Arquitectónico Moderno</title>
        <meta name="description" content="Estudio de arquitectura especializado en diseños modernos, sostenibles e innovadores. Proyectos residenciales, comerciales y públicos." />
      </Head>

      <main className="pt-0">
        <ProjectGrid projects={projects} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = await getAllProjects();
  
  return {
    props: {
      projects: allProjects,
    },
    revalidate: 60, // Regenerar la página cada 60 segundos si hay cambios
  };
}