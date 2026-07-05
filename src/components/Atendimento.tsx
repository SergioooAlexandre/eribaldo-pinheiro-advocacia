import React from 'react';
import { PhoneCall, FileText, Gavel } from 'lucide-react';
import { motion } from 'motion/react';

export default function Atendimento() {
  const steps = [
    {
      number: '01',
      title: 'Primeiro contato',
      description: 'Você entra em contato conosco via WhatsApp ou e-mail. Agendamos uma consulta inicial para compreender a sua situação de forma individualizada.',
      icon: PhoneCall,
    },
    {
      number: '02',
      title: 'Análise do caso',
      description: 'Estudamos detalhadamente todos os seus documentos e o contexto jurídico aplicável, traçando a melhor estratégia jurídica para a proteção dos seus direitos.',
      icon: FileText,
    },
    {
      number: '03',
      title: 'Solução jurídica',
      description: 'Atuamos com maestria técnica e comprometimento, seja de forma preventiva ou judicial, para alcançar o resultado mais favorável e seguro para você.',
      icon: Gavel,
    },
  ];

  return (
    <section id="atendimento" className="py-24 bg-[#F9F9FB] relative overflow-hidden">
      {/* Decorative background line connecting cards */}
      <div className="absolute top-[55%] left-0 w-full h-[1px] bg-[#C88A1A]/10 hidden lg:block z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#C88A1A] uppercase">
              Metodologia de Trabalho
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
            Como funciona o <span className="font-medium text-[#C88A1A] italic">atendimento</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#C88A1A] mx-auto mt-4" />
          <p className="font-sans text-sm sm:text-base text-gray-500 font-light mt-4">
            Acompanhamento integral, transparente e ágil em cada etapa do seu processo de consulta e defesa legal.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white border border-gray-100 hover:border-[#C88A1A]/30 p-8 sm:p-10 rounded-none shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(200,138,26,0.05)] transition-all duration-500 flex flex-col items-start relative group"
              >
                {/* Step Number Badge */}
                <div className="absolute top-6 right-8 font-serif text-4xl sm:text-5xl font-extralight text-gray-100 group-hover:text-[#C88A1A]/10 transition-colors duration-500 select-none">
                  {step.number}
                </div>

                {/* Icon wrapper with gold square */}
                <div className="h-12 w-12 rounded-none bg-[#C88A1A]/5 border border-[#C88A1A]/10 flex items-center justify-center mb-8 text-[#C88A1A] group-hover:bg-[#C88A1A] group-hover:text-black transition-all duration-500">
                  <IconComponent size={20} className="transition-transform duration-500 group-hover:rotate-12" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide group-hover:text-[#C88A1A] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-gray-600 font-light leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom elegant color strip */}
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C88A1A] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
