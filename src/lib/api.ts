import { ProjectType } from '@/types/project';

// Datos de ejemplo para desarrollo
const projects: ProjectType[] = [
  {
    id: '1',
    title: 'Edificio Corporativo Altura',
    slug: 'edificio-corporativo-altura',
    coverImage: '/images/projects/project1.jpg',
    images: [
      '/images/projects/project1.jpg',
      '/images/projects/project1-2.jpg',
      '/images/projects/project1-3.jpg',
    ],
    category: 'Comercial',
    excerpt: 'Torre de oficinas moderna con fachada acristalada y espacios colaborativos.',
    description: 'Edificio corporativo de 20 pisos con una fachada acristalada que maximiza la luz natural. El diseño incluye espacios colaborativos, áreas verdes en terrazas y tecnología de eficiencia energética.',
    client: 'Grupo Empresarial XYZ',
    location: 'Ciudad de México',
    year: 2023,
    completed: true,
  },
  {
    id: '2',
    title: 'Residencia Miravalle',
    slug: 'residencia-miravalle',
    coverImage: '/images/projects/project2.jpg',
    images: [
      '/images/projects/project2.jpg',
      '/images/projects/project2-2.jpg',
    ],
    category: 'Residencial',
    excerpt: 'Casa contemporánea con amplia iluminación natural y conexión con la naturaleza.',
    description: 'Residencia contemporánea diseñada para una familia, con amplios espacios abiertos, grandes ventanales que conectan con el jardín, y materiales naturales como piedra y madera.',
    client: 'Familia Rodríguez',
    location: 'Valle de Bravo',
    year: 2022,
    completed: true,
  },
  {
    id: '3',
    title: 'Centro Comunitario Nuevo Amanecer',
    slug: 'centro-comunitario-nuevo-amanecer',
    coverImage: '/images/projects/project3.jpg',
    images: [
      '/images/projects/project3.jpg',
    ],
    category: 'Público',
    excerpt: 'Espacio cultural y recreativo para la comunidad con diseño sostenible.',
    description: 'Centro comunitario que integra biblioteca, espacios para talleres y áreas recreativas. Diseñado con criterios de sostenibilidad, incluyendo sistemas de captación de agua pluvial y paneles solares.',
    client: 'Municipio de Santa Clara',
    location: 'Santa Clara',
    year: 2023,
    completed: true,
  },
  {
    id: '4',
    title: 'Complejo Residencial Vista Azul',
    slug: 'complejo-residencial-vista-azul',
    coverImage: '/images/projects/project4.jpg',
    images: [
      '/images/projects/project4.jpg',
    ],
    category: 'Residencial',
    excerpt: 'Conjunto de apartamentos con vista al mar y áreas comunes de lujo.',
    description: 'Complejo residencial con 40 apartamentos distribuidos en 3 torres. Incluye piscina, gimnasio, áreas verdes compartidas y diseño que maximiza las vistas panorámicas al mar.',
    client: 'Desarrolladora Oceánica',
    location: 'Cancún',
    year: 2023,
    completed: true,
  },
];

// Funciones para obtener datos
export async function getAllProjects(): Promise<ProjectType[]> {
  // Aquí conectarías con tu API/CMS en producción
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectType | null> {
  // Aquí conectarías con tu API/CMS en producción
  const project = projects.find(p => p.slug === slug);
  return project || null;
}

export async function getProjectsByCategory(category: string): Promise<ProjectType[]> {
  // Aquí conectarías con tu API/CMS en producción
  return projects.filter(p => p.category === category);
}