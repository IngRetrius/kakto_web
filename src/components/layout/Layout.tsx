import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isProjectsPage = router.pathname.startsWith('/projects');

  return (
    <div className={`flex flex-col min-h-screen ${isProjectsPage ? 'projects-layout' : ''}`}>
      <Header transparent={isHomePage} />
      
      {/* Agregamos clase especial para páginas de proyectos */}
      <main className={`flex-grow ${isHomePage ? 'pt-0' : 'pt-20'}`}>
        <div className={isProjectsPage ? 'projects-page-container' : ''}>
          {children}
        </div>
      </main>
      
      {/* El footer se mantendrá al final gracias a la estructura flex */}
      <Footer />
    </div>
  );
};

export default Layout;