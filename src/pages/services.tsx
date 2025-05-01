import React from 'react';
import Head from 'next/head';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Servicios | Kakto Arquitectos</title>
        <meta name="description" content="Servicios de Kakto Arquitectos" />
      </Head>
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold">Nuestros Servicios</h1>
          <p>Próximamente compartiremos información detallada sobre nuestros servicios.</p>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;