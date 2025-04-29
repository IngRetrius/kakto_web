import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import ProjectGrid from '@/components/sections/ProjectGrid';
import { getAllProjects } from '@/lib/api';
import { ProjectType } from '@/types/project';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface HomeProps {
  featuredProjects: ProjectType[];
}

export default function Home({ featuredProjects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Kakto Arquitectos | Diseño Arquitectónico Moderno</title>
        <meta name="description" content="Estudio de arquitectura especializado en diseños modernos, sostenibles e innovadores. Proyectos residenciales, comerciales y públicos." />
      </Head>

      <Hero 
        title="Diseñamos espacios que inspiran"
        subtitle="Soluciones arquitectónicas innovadoras y sostenibles para proyectos residenciales, comerciales y públicos."
        image="/images/hero-background.jpg"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Proyectos Destacados</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Descubre algunas de nuestras obras más representativas en diferentes categorías.</p>
          </div>
          
          <ProjectGrid projects={featuredProjects} />
          
          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="outline">Ver todos los proyectos</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Nuestra Filosofía</h2>
              <p className="text-lg text-gray-600 mb-6">
                En Kakto Arquitectos creemos que la arquitectura debe responder a las necesidades humanas, al contexto y al medio ambiente. Cada proyecto es una oportunidad para crear espacios funcionales, estéticos y sostenibles.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro enfoque combina innovación técnica con sensibilidad estética para diseñar espacios que mejoren la calidad de vida de las personas que los habitan.
              </p>
              <Link href="/about">
                <Button variant="primary">Conoce más sobre nosotros</Button>
              </Link>
            </div>
            <div className="md:w-1/2 relative h-96">
              {/* Aquí se insertaría una imagen representativa del estudio */}
              <div className="bg-gray-300 h-full w-full rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = await getAllProjects();
  const featuredProjects = allProjects.slice(0, 3); // Mostrar solo 3 proyectos destacados
  
  return {
    props: {
      featuredProjects,
    },
    revalidate: 60, // Regenerar la página cada 60 segundos si hay cambios
  };
}