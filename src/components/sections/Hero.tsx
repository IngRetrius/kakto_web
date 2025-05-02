import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Ver Proyectos',
  ctaLink = '/projects',
  image
}) => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Kakto Arquitectos"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-0"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-2/3">
            {/* Cambiado de text-white a text-[#2f3d4d] para el título */}
            <h1 className="text-[#2f3d4d] text-4xl md:text-6xl font-bold mb-4 md:mb-6">{title}</h1>
            {/* Cambiado de text-white a text-[#2f3d4d] para el subtítulo */}
            <p className="text-[#2f3d4d] text-xl md:text-2xl mb-8 md:max-w-2xl">{subtitle}</p>
            <Link href={ctaLink}>
              <Button variant="primary" size="lg" className="shadow-md hover:shadow-lg transition-all">
                {ctaText}
              </Button>
            </Link>
          </div>
          
          {/* Logo animado */}
          <div className="hidden md:block md:w-2/4 mt-10 md:mt-0">
            <div className="relative w-100 h-100 mx-auto animate-float">
              <Image 
                src="/images/logo/kakto-logo-animated.gif" 
                alt="Kakto Logo Animado"
                width={800}
                height={800}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;