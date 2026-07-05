import React from 'react';
import { Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contato() {
  const cards = [
    {
      title: 'Horário de atendimento',
      value: 'Segunda a sexta-feira',
      subValue: '09:00 às 18:00',
      description: 'Atendimento presencial com hora marcada ou consulta digital imediata.',
      icon: Clock,
      href: null,
    },
    {
      title: 'WhatsApp',
      value: '(27) 99794-5980',
      subValue: 'Iniciar conversa',
      description: 'Envie suas dúvidas previdenciárias ou contratuais direto no celular.',
      icon: Phone,
      href: 'https://wa.me/5527997945980?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+com+o+Dr.+Eribaldo.',
    },
    {
      title: 'E-mail',
      value: 'adv.eribaldo@outlook.com',
      subValue: 'Enviar mensagem',
      description: 'Para assuntos mais formais, envio de minutas contratuais ou análises.',
      icon: Mail,
      href: 'mailto:adv.eribaldo@outlook.com',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-[#FAFAFA] relative overflow-hidden border-t border-b border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#C88A1A] uppercase">
            Canais de Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight mt-3">
            Fale <span className="font-medium text-[#C88A1A] italic">Conosco</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#C88A1A] mx-auto mt-4" />
          <p className="font-sans text-sm sm:text-base text-gray-500 font-light mt-4">
            Escolha o canal mais adequado para sua necessidade jurídica e inicie seu contato.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            const content = (
              <>
                {/* Icon wrapper */}
                <div className="h-11 w-11 rounded-none bg-[#C88A1A]/5 border border-[#C88A1A]/10 text-[#C88A1A] flex items-center justify-center mb-6 group-hover:bg-[#C88A1A] group-hover:text-black transition-all duration-300">
                  <IconComponent size={18} />
                </div>

                {/* Card Title */}
                <span className="font-sans text-[10px] font-semibold text-gray-400 uppercase tracking-widest block mb-1">
                  {card.title}
                </span>

                {/* Primary value */}
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#C88A1A] transition-colors duration-300">
                  {card.value}
                </h3>

                {/* Secondary value / link status */}
                <p className="font-sans text-xs text-[#C88A1A] font-medium tracking-wide uppercase mb-3">
                  {card.subValue}
                </p>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  {card.description}
                </p>
              </>
            );

            if (card.href) {
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="bg-white border border-gray-150 p-8 rounded-none shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:border-[#C88A1A]/30 hover:shadow-[0_15px_40px_rgba(200,138,26,0.05)] transition-all duration-300 flex flex-col items-start relative group cursor-pointer"
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-white border border-gray-150 p-8 rounded-none shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 flex flex-col items-start relative group"
              >
                {content}
              </motion.div>
            );
          })}

          {/* Siga-nos Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 3 * 0.12 }}
            className="bg-white border border-gray-150 p-8 rounded-none shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:border-[#C88A1A]/30 hover:shadow-[0_15px_40px_rgba(200,138,26,0.05)] transition-all duration-300 flex flex-col items-start justify-between relative group"
          >
            <div>
              <div className="h-11 w-11 rounded-none bg-[#C88A1A]/5 border border-[#C88A1A]/10 text-[#C88A1A] flex items-center justify-center mb-6">
                <Instagram size={18} />
              </div>
              <span className="font-sans text-[10px] font-semibold text-gray-400 uppercase tracking-widest block mb-1">
                Siga-nos
              </span>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4 group-hover:text-[#C88A1A] transition-colors duration-300">
                Redes Sociais
              </h3>
            </div>
            
            <div className="space-y-3 w-full pt-1">
              <a
                href="https://www.instagram.com/eribaldo.pinheiro"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2 border border-gray-100 hover:border-[#C88A1A]/20 bg-[#FAFAFA] hover:bg-neutral-50 transition-all text-xs font-sans text-gray-700"
              >
                <Instagram size={14} className="text-[#C88A1A]" />
                <span>@eribaldo.pinheiro</span>
              </a>
              <a
                href="https://www.facebook.com/search/top?q=Eribaldo%20Pinheiro%20Advogado%20Previdenciario"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2 border border-gray-100 hover:border-[#C88A1A]/20 bg-[#FAFAFA] hover:bg-neutral-50 transition-all text-xs font-sans text-gray-700"
              >
                <Facebook size={14} className="text-blue-700" />
                <span>Eribaldo Pinheiro Advogado</span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
