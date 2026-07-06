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
          
          {/* ESQUERDA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C88A1A] uppercase">
                Quem Somos
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Excelência Jurídica sob a condução de um <br className="hidden sm:inline" />
              <span className="font-medium text-[#C88A1A] italic">profissional experiente</span>
            </h2>
            
            <div className="h-[1px] w-12 bg-[#C88A1A] mt-5 mb-8" />
            
            <div className="space-y-6 text-base text-gray-600 leading-relaxed">
              <p>
                O escritório <strong className="text-gray-900">ERIBALDO PINHEIRO SOCIEDADE INDIVIDUAL DE ADVOCACIA</strong> é 
                fundado na solidez de uma atuação ética, de alta especialização e de compromisso irrestrito com 
                os direitos do cidadão. 
              </p>

              <p>
                Comandado pelo <strong className="text-[#C88A1A]">Dr. Eribaldo Silva Pinheiro</strong>, inscrito na 
                <strong className="text-gray-900"> OAB/ES 30.809</strong>, o escritório destaca-se pela 
                proximidade no atendimento e execução de soluções eficientes e assertivas nas áreas de 
                <strong className="text-gray-900"> Direito Previdenciário</strong>, 
                <strong className="text-gray-900"> Direito Bancário</strong> e 
                <strong className="text-gray-900"> Contratos</strong>.
              </p>

              <p>
                Nossa atuação vai além da mera representação legal: buscamos ser parceiros estratégicos de nossos clientes, 
                esclarecendo dúvidas com linguagem simples e construindo soluções jurídicas personalizadas.
              </p>
            </div>

          </motion.div>

          {/* DIREITA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 bg-neutral-950 border border-neutral-800 p-8 sm:p-10 text-white shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C88A1A]" />
            
            <div className="mb-8">
              <span className="text-[10px] font-semibold text-[#C88A1A] tracking-widest uppercase block mb-1">
                Nossos Diferenciais
              </span>

              <h3 className="text-2xl sm:text-3xl font-light">
                Por que escolher nosso escritório?
              </h3>
            </div>

            <div className="space-y-6">
              {differentials.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 items-start group">
                    
                    <div className="h-9 w-9 bg-neutral-900 border border-neutral-800 text-[#C88A1A] flex items-center justify-center group-hover:bg-[#C88A1A] group-hover:text-black transition">
                      <IconComponent size={16} />
                    </div>

                    <div>
                      <h4 className="font-semibold group-hover:text-[#C88A1A] transition">
                        {item.title}
                      </h4>

                      <p className="text-sm text-gray-400 mt-1">
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