import React from 'react';
import { UserCheck, Landmark, FileText, ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Localizacao() {
  const areas = [
    {
      title: 'Direito Previdenciário',
      icon: UserCheck,
      description:
        'Planejamento de aposentadoria, concessão e revisão de benefícios, pensões e BPC/LOAS com foco no seu direito.',
      linkText: 'Consultar Direito Previdenciário',
    },
    {
      title: 'Direito Bancário',
      icon: Landmark,
      description:
        'Combate a juros abusivos, defesa contra busca e apreensão de veículos, renegociação de dívidas e fraudes.',
      linkText: 'Consultar Direito Bancário',
    },
    {
      title: 'Contratos',
      icon: FileText,
      description:
        'Elaboração, análise e rescisão de contratos civis e comerciais com total clareza e segurança jurídica.',
      linkText: 'Consultar Contratos',
    },
  ];

  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Travessa+Oscar+da+Costa+Neiva,+20,+Apto+902,+Centro,+Guarapari,+ES,+29200-125';

  return (
    <section id="localizacao" className="bg-white py-20 md:py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">

          {/* ===== ESQUERDA ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="mb-6">
              <span className="text-[11px] font-semibold text-[#C88A1A] tracking-widest uppercase block mb-2">
                Onde Atendemos
              </span>

              <h2 className="text-2xl font-light text-[#111111]">
                Localização
              </h2>

              <div className="mt-3 h-[1px] w-12 bg-[#C88A1A]" />
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex-1 block border border-[#C88A1A]/30 bg-[#0A0A0A] overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-full">

                {/* Fundo */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80')",
                  }}
                />

                {/* Botão */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border border-[#C88A1A]/40 bg-[#111111]/90 px-6 py-4 text-center">
                    <MapPin className="mx-auto mb-2 text-[#C88A1A]" size={16} />
                    <p className="text-sm font-semibold uppercase text-white">
                      Abrir no Maps
                    </p>
                    <p className="text-[11px] uppercase text-[#C88A1A] mt-1">
                      Ver rotas
                    </p>
                  </div>
                </div>

              </div>
            </a>
          </motion.div>

          {/* ===== DIREITA ===== */}
          <motion.div
            id="areas"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div className="mb-6 pb-1">
              <span className="text-[11px] font-semibold text-[#C88A1A] tracking-widest uppercase block mb-2">
                Especialidades do Escritório
              </span>

              <h3 className="text-2xl font-light text-[#111111]">
                Áreas de Atuação
              </h3>

              {/* LINHA DOURADA ADICIONADA */}
              <div className="mt-3 h-[1px] w-12 bg-[#C88A1A]" />
            </div>

            <div className="flex flex-col gap-6 flex-1">
              {areas.map((area) => {
                const IconComponent = area.icon;

                return (
                  <a
                    key={area.title}
                    href={`https://wa.me/5527997945980?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+%C3%A1rea+de+${encodeURIComponent(area.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-[#0A0A0A] hover:bg-[#111111] border border-[#C88A1A]/20 hover:border-[#C88A1A]/50 p-8 flex-1 transition-all duration-300 group shadow-xl"
                  >
                    <div className="flex items-start gap-4">

                      <div className="h-12 w-12 flex items-center justify-center border border-white/10 text-gray-300 group-hover:text-[#C88A1A] group-hover:border-[#C88A1A]/30 transition">
                        <IconComponent size={22} />
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-[#C88A1A]">
                          {area.title}
                        </h4>

                        <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                          {area.description}
                        </p>

                        <div className="flex items-center gap-1 text-[11px] font-semibold text-[#C88A1A] uppercase mt-4">
                          {area.linkText}
                          <ArrowRight size={12} />
                        </div>
                      </div>

                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}