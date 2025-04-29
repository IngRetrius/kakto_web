import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  slug?: string;
  category?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, image, slug, category, children }) => {
  const content = (
    <div className="group bg-white overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-full">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 text-sm rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-navy-800">{title}</h3>
        {children && <div className="text-gray-600">{children}</div>}
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/projects/${slug}`} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;