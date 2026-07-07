import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-0 min-h-screen pt-28 md:pt-32 pb-16 bg-[#0A0A0A] text-white flex items-start overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[8%] right-[-10%] w-[500px] h-[500px] bg-[#C88A1A]/10 blur-[120px]" />
        <div className="absolute bottom-[0%] left-[-10%] w-[400px] h-[400px] bg-white/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* TEXTO PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 pt-6 md:pt-10"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-[#C88A1A] block mb-6">
              Escritório Boutique de Advocacia
            </span>

            <h1 className="text-5xl md:text-[64px] font-light leading-[1.05] mb-6">
              Advocacia com <br />
              <span className="text-[#C88A1A] italic">
                seriedade,
              </span><br />
              estratégia e compromisso.
            </h1>

            <p className="text-gray-300 mb-10 max-w-xl">
              Atendimento jurídico especializado com foco em soluções eficientes,
              atendimento personalizado e atuação ética.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5527997945980"
                target="_blank"
                rel="noreferrer"
                className="bg-[#C88A1A] text-black px-8 py-3 text-xs uppercase font-semibold text-center hover:bg-white transition"
              >
                Falar pelo WhatsApp
              </a>

              <a
                href="mailto:adv.eribaldo@outlook.com"
                className="border border-white/20 px-8 py-3 text-xs uppercase flex items-center justify-center gap-2 hover:border-[#C88A1A] hover:text-[#C88A1A] transition"
              >
                <Mail size={14} />
                Enviar e-mail
              </a>
            </div>
          </motion.div>

          {/* CARD DE CONTATO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 pt-4 md:pt-8"
          >
            <div className="bg-[#111111] border border-white/10 p-6 md:p-8">
              <span className="text-xs text-[#C88A1A] uppercase">
                Atendimento e Localização
              </span>

              <h3 className="text-lg mb-6">
                Contato & Endereço
              </h3>

              <div className="flex justify-between gap-6 items-start">
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <p className="text-gray-400 text-xs">WhatsApp</p>
                    <p>(27) 99794-5980</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">E-mail</p>
                    <p>adv.eribaldo@outlook.com</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">Endereço</p>
                    <p>
                      Travessa Oscar da Costa Neiva, nº 20<br />
                      Guarapari - ES
                    </p>
                  </div>
                </div>

                <img
                  src="/images/logo.png"
                  alt="Logo Eribaldo Pinheiro"
                  className="w-[100px] object-contain"
                />
              </div>

              <div className="mt-8 text-center">
                <img
                  src="/images/dr-eribaldo.png"
                  alt="Dr. Eribaldo Silva Pinheiro"
                  className="w-[240px] mx-auto border-4 border-white"
                />

                <p className="mt-4 font-semibold">
                  Dr. Eribaldo Silva Pinheiro
                </p>

                <p className="text-[#C88A1A] text-sm">
                  OAB/ES 30.809
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}