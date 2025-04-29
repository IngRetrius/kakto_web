import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMobile = false, closeMenu }) => {
  const router = useRouter();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Servicios', path: '/services' },
    { name: 'Sobre Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  const handleClick = () => {
    if (isMobile && closeMenu) {
      closeMenu();
    }
  };

  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-3' : 'flex space-x-6'}`}>
      {navItems.map((item) => (
        <Link 
          href={item.path} 
          key={item.name}
          className={`px-2 py-1 text-base font-medium transition duration-200 ${
            router.pathname === item.path
            ? 'text-orange-500 border-b-2 border-orange-500'
            : 'text-gray-700 hover:text-orange-500'
          }`}
          onClick={handleClick}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;