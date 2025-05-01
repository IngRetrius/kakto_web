// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Precarga del logo para el loader */}
        <link 
          rel="preload" 
          href="/images/logo/kakto-logo.png" 
          as="image" 
        />
      </Head>
      <body className="antialiased loading">
        <div id="page-loader" className="fixed inset-0 bg-white z-[9999] flex items-center justify-center flex-col">
          {/* Contenedor con estilo inline para máxima prioridad */}
          <div style={{width: "200px", height: "100px", transform: "none"}}>
            <img 
              src="/images/logo/kakto-logo.png" 
              alt="Kakto Arquitectos" 
              style={{
                width: "200px", 
                height: "auto", 
                objectFit: "contain",
                transform: "none",
                transition: "none",
                animation: "none"
              }}
            />
          </div>
          <div className="spinner mt-6">
            <div className="bounce1" style={{backgroundColor: "#e94c46"}}></div>
            <div className="bounce2" style={{backgroundColor: "#e94c46"}}></div>
            <div className="bounce3" style={{backgroundColor: "#e94c46"}}></div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}