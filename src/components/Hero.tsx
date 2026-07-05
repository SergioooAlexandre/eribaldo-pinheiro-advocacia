import React from 'react';
import { Mail, UserCheck, Landmark, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const areas = [
    {
      title: 'Direito Previdenciário',
      icon: UserCheck,
      description: 'Planejamento de aposentadoria, concessão e revisão de benefícios, pensões e BPC/LOAS com foco no seu direito.',
      linkText: 'Consultar Direito Previdenciário'
    },
    {
      title: 'Direito Bancário',
      icon: Landmark,
      description: 'Combate a juros abusivos, defesa contra busca e apreensão de veículos, renegociação de dívidas e fraudes.',
      linkText: 'Consultar Direito Bancário'
    },
    {
      title: 'Contratos',
      icon: FileText,
      description: 'Elaboração, análise e rescisão de contratos civis e comerciais com total clareza e segurança jurídica.',
      linkText: 'Consultar Contratos'
    }
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 md:pt-36 md:pb-24 bg-[#0A0A0A] text-white flex items-center overflow-hidden"
    >
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-[#C88A1A]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-[5%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-white/2 to-[#C88A1A]/5 blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#C88A1A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-[1px] w-8 bg-[#C88A1A]" />
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C88A1A] uppercase">
                Escritório Boutique de Advocacia
              </span>
            </div>

            {/* Title */}
            <h1 className="font-sans text-4xl sm:text-5xl md:text-[56px] font-light text-white leading-[1.15] mb-6 tracking-tight">
              Advocacia com <br />
              <span className="font-medium text-[#C88A1A] italic">seriedade,</span> <br />
              estratégia e <br />
              compromisso.
            </h1>

            {/* Subtext */}
            <p className="font-sans text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-xl">
              Atendimento jurídico especializado com foco em soluções eficientes, 
              atendimento personalizado e atuação ética. Proporcionamos a segurança jurídica 
              que os seus direitos exigem.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/5527997945980?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+com+o+Dr.+Eribaldo."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#C88A1A] hover:bg-[#DFAC4B] text-black font-sans font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-none shadow-lg shadow-[#C88A1A]/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Custom WhatsApp Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.13-1.345a9.921 9.921 0 004.873 1.277h.005c5.507 0 9.99-4.478 9.99-9.985A9.993 9.993 0 0012.012 2zm5.82 14.072c-.32.903-1.576 1.644-2.184 1.708-.553.058-1.274.088-2.023-.153a10.026 10.026 0 01-4.103-2.316 11.238 11.238 0 01-2.483-3.667c-.454-.78-.732-1.637-.732-2.52 0-1.78.93-2.658 1.258-3.003.26-.272.548-.344.732-.344.183 0 .367.001.527.009.167.008.384-.064.601.464.225.547.773 1.884.84 2.019.067.136.111.294.02.476-.09.182-.136.294-.272.453-.136.159-.285.355-.407.476-.136.136-.28.284-.12.56.16.273.708 1.168 1.517 1.887.653.58 1.206.958 1.525 1.117.319.16.503.136.687-.07.184-.206.772-.897.979-1.205.207-.308.414-.26.688-.158.272.102 1.727.813 2.025.96.299.148.497.216.57.344.074.127.074.74-.246 1.643z"/>
                </svg>
                Falar pelo WhatsApp
              </a>
              
              <a
                href="mailto:adv.eribaldo@outlook.com"
                className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-[#C88A1A] text-white hover:text-[#C88A1A] font-sans font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-none transition-all duration-300"
              >
                <Mail size={16} />
                Enviar e-mail
              </a>
            </div>
          </motion.div>

          {/* Right Column: Practice Area Cards */}
          <motion.div 
            id="areas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 space-y-5 scroll-mt-36"
          >
            <div className="mb-2">
              <span className="font-sans text-[11px] font-semibold text-[#C88A1A] tracking-widest uppercase block mb-1">
                Especialidades do Escritório
              </span>
              <h3 className="font-sans text-2xl font-light text-white">
                Áreas de Atuação
              </h3>
            </div>

            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <a
                  key={area.title}
                  href={`https://wa.me/5527997945980?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+%C3%A1rea+de+${encodeURIComponent(area.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/5 hover:border-[#C88A1A]/50 p-6 rounded-none transition-all duration-300 group shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 shrink-0 rounded-none bg-white/5 border border-white/10 text-gray-300 group-hover:text-[#C88A1A] group-hover:bg-[#C88A1A]/5 group-hover:border-[#C88A1A]/30 flex items-center justify-center transition-all duration-300">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-sans text-lg font-semibold text-white group-hover:text-[#C88A1A] transition-colors duration-300">
                        {area.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-gray-400 font-light mt-1.5 leading-relaxed">
                        {area.description}
                      </p>
                      <div className="flex items-center gap-1.5 font-sans text-[11px] font-semibold text-[#C88A1A] tracking-wider uppercase mt-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>{area.linkText}</span>
                        <ArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
