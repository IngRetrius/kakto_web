import Head from 'next/head';
import { getAllProjects } from '@/lib/api';
import { ProjectType } from '@/types/project';
import ProjectGrid from '@/components/sections/ProjectGrid';
import Button from '@/components/ui/Button';
import Link from 'next/link';

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

      <div className="pt-24 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2f3d4d] mb-6">Nuestros Proyectos</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra colección de proyectos arquitectónicos en diferentes categorías.
          </p>
        </div>
        
        <ProjectGrid projects={projects} />
        
        <div className="mt-24 text-center">
          <Link href="/" className="inline-block">
            <Button variant="outline" className="shadow-md py-3 px-8 text-lg hover:shadow-lg">
              Ver todos los proyectos
            </Button>
          </Link>
        </div>
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