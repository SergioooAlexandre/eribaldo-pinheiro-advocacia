import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Atendimento from './components/Atendimento';
import Sobre from './components/Sobre';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#C88A1A]/30 selection:text-[#C88A1A] overflow-x-hidden antialiased">
      {/* Header (fixed-top black header) */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* 1 & 2. Hero Section with Title and Practice Area Cards */}
        <Hero />

        {/* 4. How Client Service Works Section */}
        <Atendimento />

        {/* 5. About the Firm & Why Choose Us Side-by-Side */}
        <Sobre />

        {/* 6. Map & Location Section (Unidades de Atuação) */}
        <Localizacao />

        {/* 8. Frequently Asked Questions Section */}
        <FAQ />

        {/* 7. Contact Cards Grid (Horário, WhatsApp, E-mail, Siga-nos) */}
        <Contato />
      </main>

      {/* 9 & 10. Multi-column Footer + Bottom Signature Strip */}
      <Footer />


    </div>
  );
}
