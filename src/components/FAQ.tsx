import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Como funciona o atendimento?',
      answer: 'Nosso atendimento é planejado para ser o mais cômodo e eficiente possível. Após o primeiro contato via WhatsApp ou e-mail, agendamos uma consulta. Nessa reunião inicial, ouvimos o seu relato, analisamos as particularidades e apresentamos os caminhos jurídicos possíveis. A consulta pode ser presencial em nosso escritório ou totalmente online por videoconferência.',
    },
    {
      question: 'Quais documentos preciso levar / enviar?',
      answer: 'Para Direito Previdenciário, traga documentos pessoais (RG, CPF, comprovante de residência), Carteira de Trabalho, extrato do CNIS e laudos médicos (se houver). Para Direito Bancário, traga cópias dos contratos de empréstimo ou financiamento, extratos bancários e notificações recebidas. Para Contratos, envie a minuta atual ou as diretrizes do negócio que deseja formalizar.',
    },
    {
      question: 'Posso ser atendido online?',
      answer: 'Sim, com total comodidade e segurança jurídica! Oferecemos atendimento digital completo por chamadas de vídeo e voz no WhatsApp ou Google Meet. A troca de documentos é feita de maneira eletrônica e as assinaturas de procurações e contratos são realizadas através de plataformas digitais regulamentadas, com total validade jurídica, sem que você precise sair de casa.',
    },
    {
      question: 'Como agendar uma consulta?',
      answer: 'Para agendar uma consulta, basta clicar em qualquer botão de contato em nosso site para abrir o WhatsApp diretamente no número (27) 99794-5980, ou encaminhar sua mensagem para o e-mail adv.eribaldo@outlook.com. Nossa equipe responderá prontamente com as datas e horários disponíveis.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#C88A1A] uppercase">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight mt-3">
            Perguntas <span className="font-medium text-[#C88A1A] italic">Frequentes</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#C88A1A] mx-auto mt-4" />
          <p className="font-sans text-sm sm:text-base text-gray-500 font-light mt-4">
            Confira as respostas para as principais dúvidas de nossos clientes sobre consultas, documentação e atendimento online.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-none transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#C88A1A] bg-[#FAFAFA] shadow-[0_4px_25px_rgba(200,138,26,0.03)]' 
                    : 'border-gray-200 bg-white hover:border-[#C88A1A]/30'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={18} className={`${isOpen ? 'text-[#C88A1A]' : 'text-gray-400'} transition-colors`} />
                    <span className="font-serif text-base sm:text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <span className={`p-1 rounded-none ${isOpen ? 'bg-[#C88A1A]/10 text-[#C88A1A]' : 'bg-gray-50 text-gray-400'} transition-all`}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-100 font-sans text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
