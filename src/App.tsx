import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Atendimento from './components/Atendimento';
import Sobre from './components/Sobre';
import AreasAtuacao from './components/AreasAtuacao';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-[70px]">
        <Hero />
        <Atendimento />
        <Sobre />
        <AreasAtuacao />
        <FAQ />
        <Localizacao />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}