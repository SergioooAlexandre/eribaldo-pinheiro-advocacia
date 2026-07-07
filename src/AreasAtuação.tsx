import React from 'react';
import { Landmark, FileText, ShieldCheck, Scale } from 'lucide-react';

const areas = [
  {
    icon: Landmark,
    title: 'Direito Previdenciário',
    description:
      'Atuação em aposentadorias, benefícios, revisões, auxílios e demandas junto ao INSS, sempre com análise individualizada de cada caso.',
  },
  {
    icon: ShieldCheck,
    title: 'Direito Bancário',
    description:
      'Defesa dos direitos do consumidor em questões envolvendo bancos, empréstimos, financiamentos, cobranças indevidas e revisão contratual.',
  },
  {
    icon: FileText,
    title: 'Contratos',
    description:
      'Elaboração, análise e revisão de contratos com foco em segurança jurídica, prevenção de riscos e proteção dos interesses do cliente.',
  },
  {
    icon: Scale,
    title: 'Direito Civil',
    description:
      'Atendimento em demandas cíveis, obrigações, responsabilidade civil, acordos, notificações e orientações jurídicas preventivas.',
  },
];

export default function AreasAtuacao() {
  return (
    <section
      id="areas"
      className="w-full bg-[#0A0A0A] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C88A1A] block mb-4">
            Especialidades Jurídicas
          </span>

          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Áreas de Atuação
          </h2>

          <div className="w-20 h-[2px] bg-[#C88A1A] mb-8"></div>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Atendimento jurídico estratégico, humanizado e técnico para pessoas
            físicas e empresas, com foco em soluções seguras e eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <div
                key={index}
                className="group bg-[#111111] border border-white/10 p-6 md:p-8 hover:border-[#C88A1A]/70 transition duration-300"
              >
                <div className="w-12 h-12 bg-[#C88A1A]/10 flex items-center justify-center mb-6 group-hover:bg-[#C88A1A] transition">
                  <Icon
                    size={24}
                    className="text-[#C88A1A] group-hover:text-black transition"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-light mb-4">
                  {area.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-light mb-2">
              Precisa de orientação jurídica?
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Entre em contato e solicite uma análise inicial do seu caso.
            </p>
          </div>

          <a
            href="https://wa.me/5527997945980"
            target="_blank"
            rel="noreferrer"
            className="bg-[#C88A1A] text-black px-6 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-white transition w-full md:w-auto text-center"
          >
            Falar com o escritório
          </a>
        </div>
      </div>
    </section>
  );
}