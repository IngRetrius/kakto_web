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
    { name: 'Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  const handleClick = () => {
    if (isMobile && closeMenu) {
      closeMenu();
    }
  };

  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-3' : 'flex space-x-6'}`}>
      {navItems.map((item) => {
        const isActive = router.pathname === item.path;
        return (
          <Link 
            href={item.path} 
            key={item.name}
            className={`px-2 py-1 text-base font-medium transition duration-200 ${
              isActive
              ? 'text-[#e94c46] border-b-2 border-[#e94c46]'
              : 'text-[#2f3d4d] hover:text-[#e94c46]'
            }`}
            onClick={handleClick}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;