import React from 'react';
import { Users, Landmark, FileText } from 'lucide-react';

const areas = [
  {
    icon: Users,
    title: 'Direito Previdenciário',
    description:
      'Aposentadorias, benefícios do INSS, auxílio-doença, BPC/LOAS, revisão de benefícios e outros.',
  },
  {
    icon: Landmark,
    title: 'Direito Bancário',
    description:
      'Empréstimos, financiamentos, revisão de contratos, juros abusivos e defesa do consumidor.',
  },
  {
    icon: FileText,
    title: 'Contratos',
    description:
      'Elaboração, análise e revisão de contratos com segurança jurídica para você e sua empresa.',
  },
];

export default function AreasAtuacao() {
  return (
    <section
      id="areas"
      className="w-full bg-[#0A0A0A] text-white py-14 md:py-20 px-4 sm:px-6 lg:px-8 -mt-1"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C88A1A] block mb-4">
            Especialidades Jurídicas
          </span>

          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Áreas de Atuação
          </h2>

          <div className="w-20 h-[2px] bg-[#C88A1A] mx-auto mb-8"></div>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Atuação jurídica especializada com foco em soluções seguras,
            atendimento humanizado e defesa dos interesses de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <div
                key={index}
                className="bg-white text-[#0A0A0A] border border-white/10 rounded-sm p-8 md:p-10 text-center shadow-sm hover:shadow-xl hover:border-[#C88A1A]/60 transition duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-7 flex items-center justify-center">
                  <Icon
                    size={58}
                    strokeWidth={1.7}
                    className="text-[#C88A1A]"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-[#0A0A0A] mb-6">
                  {area.title}
                </h3>

                <p className="text-gray-600 leading-8 text-sm md:text-base">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}