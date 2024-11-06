"use client";  // Diretriz de client-side
import "./global.css";  // Estilos globais

// Função App
export default function MyApp({ Component, pageProps }: { Component: React.ElementType; pageProps: any }) {
  // Renderiza o Componente
  return (
    <Component {...pageProps} />
  );
}
