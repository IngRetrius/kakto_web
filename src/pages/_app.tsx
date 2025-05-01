// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mostrar loader por exactamente 2.5 segundos
    const timer = setTimeout(() => {
      setLoading(false);
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

  // Solo mostramos el componente Loader durante la primera carga
  if (loading) {
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