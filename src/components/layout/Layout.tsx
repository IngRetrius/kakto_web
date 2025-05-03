import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isProjectsPage = router.pathname.startsWith('/projects');
  
  // Agregamos un efecto para detectar cambios de ruta
  useEffect(() => {
    // Función para manejar cambios de ruta
    const handleRouteChange = (url: string) => {
      // Si la navegación es hacia la sección de proyectos, no hacemos nada especial
      // porque el componente Projects ya maneja su propio estado de carga
    };

    // Registramos los event listeners
    router.events.on('routeChangeStart', handleRouteChange);
    
    // Limpieza al desmontar
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

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
      
      {/* Añadimos el botón flotante de WhatsApp */}
      <WhatsAppButton phoneNumber="+573182134982" />
    </div>
  );
};

export default Layout;