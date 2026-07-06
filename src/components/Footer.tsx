import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full">

      {/* 🔥 BARRA FINAL (ÚNICA PARTE DO FOOTER) */}
      <div className="bg-[#0A0A0A] text-gray-400 py-6 text-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-center md:text-left">
            © 2026 Eribaldo Pinheiro. Todos os direitos reservados.
          </p>

          <p className="text-center md:text-right">
            Desenvolvido por{' '}
            <a
              href="https://nexus-sites-br.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-[#C88A1A] hover:underline transition"
            >
              Nexus Sites BR
            </a>
          </p>

        </div>
      </div>

    </footer>
  );
}