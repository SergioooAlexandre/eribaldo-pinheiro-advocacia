import React from 'react';
import { Award, Shield, Target, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Sobre() {
  const differentials = [
    {
      title: 'Atendimento personalizado',
      description: 'Tratamos cada cliente de forma única. Compreendemos a sua história e construímos defesas sob medida.',
      icon: Award,
    },
    {
      title: 'Ética profissional',
      description: 'Atuação pautada pela transparência absoluta, honestidade de chances e respeito ao cliente.',
      icon: Shield,
    },
    {
      title: 'Estratégia jurídica',
      description: 'Aliamos inteligência, profunda pesquisa técnica e experiência prática para a melhor solução.',
      icon: Target,
    },
    {
      title: 'Compromisso com resultados',
      description: 'Nossa prioridade é entregar soluções reais e ágeis que resultem em plena satisfação.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sobre o escritório (Light Background / Text) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#C88A1A] uppercase">
                Quem Somos
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight">
              Excelência Jurídica sob a condução de um <br className="hidden sm:inline" />
              <span className="font-medium text-[#C88A1A] italic">profissional experiente</span>
            </h2>
            
            <div className="h-[1px] w-12 bg-[#C88A1A] mt-5 mb-8" />
            
            <div className="space-y-6 font-sans text-base text-gray-600 font-light leading-relaxed">
              <p>
                O escritório <strong className="font-medium text-gray-900">ERIBALDO PINHEIRO SOCIEDADE INDIVIDUAL DE ADVOCACIA</strong> é 
                fundado na solidez de uma atuação ética, de alta especialização e de compromisso irrestrito com 
                os direitos do cidadão. 
              </p>
              <p>
                Comandado pelo <strong className="font-semibold text-[#C88A1A]">Dr. Eribaldo Silva Pinheiro</strong>, inscrito na 
                <strong className="font-medium text-gray-900"> OAB/ES 30.809</strong>, o escritório destaca-se pela 
                proximidade no atendimento e execução de soluções eficientes e assertivas nas áreas de 
                <strong className="font-medium text-gray-900"> Direito Previdenciário</strong>, 
                <strong className="font-medium text-gray-900"> Direito Bancário</strong> e 
                <strong className="font-medium text-gray-900"> Contratos</strong>.
              </p>
              <p>
                Nossa atuação vai além da mera representação legal: buscamos ser parceiros estratégicos de nossos clientes, 
                esclarecendo dúvidas com linguagem simples, fornecendo andamentos em tempo real e desenhando teses jurídicas 
                personalizadas para cada situação.
              </p>
            </div>

            {/* Official Credentials Box */}
            <div className="mt-10 p-6 bg-[#FAFAFA] rounded-none border border-gray-150 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="font-sans text-[10px] font-semibold text-gray-400 tracking-widest uppercase block">
                  Razão Social Oficial
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-gray-800 mt-1 block">
                  ERIBALDO PINHEIRO SOCIEDADE INDIVIDUAL DE ADVOCACIA
                </span>
              </div>
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <span className="font-sans text-[10px] font-semibold text-gray-400 tracking-widest uppercase block">
                    Inscrição CNPJ
                  </span>
                  <span className="font-sans text-sm font-medium text-gray-700 mt-1 block">
                    66.649.529/0001-49
                  </span>
                </div>
                <div>
                  <span className="font-sans text-[10px] font-semibold text-gray-400 tracking-widest uppercase block">
                    Advogado Responsável
                  </span>
                  <span className="font-sans text-sm font-medium text-gray-700 mt-0.5 block">
                    Eribaldo Silva Pinheiro <span className="text-[#C88A1A] font-semibold ml-1">(OAB/ES 30.809)</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: "Por que escolher nosso escritório?" (Elegant Dark Box) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 bg-neutral-950 border border-neutral-800 p-8 sm:p-10 text-white shadow-2xl relative"
          >
            {/* Top decorative bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C88A1A]" />
            
            <div className="mb-8">
              <span className="font-sans text-[10px] font-semibold text-[#C88A1A] tracking-widest uppercase block mb-1">
                Nossos Diferenciais
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight">
                Por que escolher nosso escritório?
              </h3>
            </div>

            <div className="space-y-6">
              {differentials.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 items-start group">
                    <div className="h-9 w-9 shrink-0 bg-neutral-900 border border-neutral-800 text-[#C88A1A] flex items-center justify-center transition-colors group-hover:bg-[#C88A1A] group-hover:text-black">
                      <IconComponent size={16} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-white group-hover:text-[#C88A1A] transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-gray-400 font-light mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
