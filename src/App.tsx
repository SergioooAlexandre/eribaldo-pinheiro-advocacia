import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Atendimento from './components/Atendimento';
import Sobre from './components/Sobre';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {

  // FORÇA COMEÇAR NO TOPO (RESOLVE BUG)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">

      <Header />

      {/* 🔥 EMPURRA O SITE PRA BAIXO DO HEADER */}
      <main className="flex-grow pt-[5 px]">

        <Hero />
        <Atendimento />
        <Sobre />
        <FAQ />
        <Localizacao />
        <Contato />

      </main>

      <Footer />

    </div>
  );
}