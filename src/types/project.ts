export interface ProjectType {
    id: string;
    title: string;
    slug: string;
    coverImage: string;
    images: string[];
    category: string;
    excerpt: string;
    description: string;
    client?: string;
    location?: string;
    year?: number;
    completed?: boolean;
  }