import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';


// Inicializar EmailJS con prioridad alta
try {
  emailjs.init({
    publicKey: "gLpQGSpLCrFU1czDe",
  });
  console.log('EmailJS initialized in _app.tsx');
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

export default function App({ Component, pageProps }: AppProps) {
  const [initialLoading, setInitialLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Mostrar loader durante la carga inicial de la aplicación
    const timer = setTimeout(() => {
      setInitialLoading(false);
      // IMPORTANTE: Eliminar la clase 'loading' del body
      document.body.classList.remove('loading');
    }, 2500);

    // Asegurar que la clase 'loading' esté presente al inicio
    document.body.classList.add('loading');

    return () => {
      clearTimeout(timer);
      // Limpiar la clase al desmontar
      document.body.classList.remove('loading');
    };
  }, []);

  // Eventos de enrutamiento para páginas que no son de proyectos
  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      if (url.startsWith('/projects')) {
        // No hacer nada, los componentes de proyectos manejan su propio loading
      } else {
        // Para otras páginas, no aplicamos loader
        document.body.classList.remove('loading');
      }
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router]);

  // Solo mostramos el componente Loader durante la primera carga
  if (initialLoading) {
    return <Loader />;
  }

  return (
    <main className="font-quicksand">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}