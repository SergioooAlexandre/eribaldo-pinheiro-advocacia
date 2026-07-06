import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-10 object-contain"
          />
          <div>
            <p className="text-white text-sm font-semibold">
              Eribaldo Pinheiro
            </p>
            <p className="text-[#C88A1A] text-[10px] tracking-widest">
              — ADVOGADO —
            </p>
          </div>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-300">
          <a href="#inicio" className="hover:text-[#C88A1A] transition">Início</a>
          <a href="#sobre" className="hover:text-[#C88A1A] transition">Sobre</a>
          <a href="#areas" className="hover:text-[#C88A1A] transition">Áreas</a>
          <a href="#atendimento" className="hover:text-[#C88A1A] transition">Atendimento</a>
          <a href="#contato" className="hover:text-[#C88A1A] transition">Contato</a>
        </nav>

        {/* BOTÃO */}
        <a
          href="https://wa.me/5527997945980"
          target="_blank"
          rel="noreferrer"
          className="border border-[#C88A1A] px-5 py-2 text-xs text-[#C88A1A] hover:bg-[#C88A1A] hover:text-black transition"
        >
          Entrar em contato
        </a>

      </div>
    </header>
  );
}