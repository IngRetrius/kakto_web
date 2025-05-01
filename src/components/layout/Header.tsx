import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
    transparent && !scrolled 
      ? 'bg-black bg-opacity-30' 
      : 'bg-white shadow-sm'
  }`;

  const linkClasses = `px-2 py-1 text-base font-medium transition duration-200 ${
    transparent && !scrolled ? 'text-white' : 'text-[#2f3d4d]'
  }`;

  const activeLinkClasses = `px-2 py-1 text-base font-medium transition duration-200 ${
    transparent && !scrolled 
      ? 'text-[#e94c46] border-b-2 border-[#e94c46]' 
      : 'text-[#e94c46] border-b-2 border-[#e94c46]'
  }`;

  const logoContainerClasses = `relative h-20 w-40 ${
    transparent && !scrolled ? 'filter brightness-0 invert' : ''
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className={logoContainerClasses}>
            <Image 
              src="/images/logo/kakto-logo.png" 
              alt="Kakto Arquitectos" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            { name: 'Inicio', path: '/' },
            { name: 'Proyectos', path: '/projects' },
            { name: 'Servicios', path: '/services' },
            { name: 'Nosotros', path: '/about' },
            { name: 'Contacto', path: '/contact' },
          ].map((item) => (
            <Link 
              href={item.path} 
              key={item.name}
              className={router.pathname === item.path ? activeLinkClasses : linkClasses}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${transparent && !scrolled ? 'text-white' : 'text-[#2f3d4d]'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-white z-50 p-4">
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Proyectos', path: '/projects' },
                { name: 'Servicios', path: '/services' },
                { name: 'Nosotros', path: '/about' },
                { name: 'Contacto', path: '/contact' },
              ].map((item) => (
                <Link 
                  href={item.path} 
                  key={item.name}
                  className={`px-2 py-2 text-lg ${router.pathname === item.path ? 'text-[#e94c46] font-bold' : 'text-[#2f3d4d]'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;