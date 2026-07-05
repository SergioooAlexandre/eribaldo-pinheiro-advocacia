import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Localizacao() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Travessa+Oscar+da+Costa+Neiva,+20,+Apto+902,+Centro,+Guarapari,+ES,+29200-125";
  
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Address Text & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#C88A1A] uppercase">
                Onde Atendemos
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight">
              Unidades de <br className="hidden sm:inline" />
              <span className="font-medium text-[#C88A1A] italic">Atuação</span>
            </h2>
            
            <div className="h-[1px] w-12 bg-[#C88A1A] mt-5 mb-8" />
            
            <p className="font-sans text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-8">
              Atendemos de forma totalmente digital em todo o Brasil e presencialmente em nosso moderno e estruturado escritório boutique localizado no coração de Guarapari, Espírito Santo. Venha nos visitar ou agende seu horário com antecedência.
            </p>

            {/* Address Details Card */}
            <div className="bg-white border border-gray-150 p-6 rounded-none shadow-[0_4px_25px_rgba(0,0,0,0.01)] mb-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-none bg-[#C88A1A]/5 border border-[#C88A1A]/10 text-[#C88A1A] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-sans text-[10px] font-semibold text-gray-400 tracking-widest uppercase">
                    Endereço Presencial
                  </span>
                  <span className="font-serif text-base sm:text-lg font-semibold text-gray-800 mt-1 block">
                    Travessa Oscar da Costa Neiva, nº 20, Apto 902
                  </span>
                  <span className="font-sans text-sm text-gray-500 font-light block mt-0.5">
                    Centro, Guarapari/ES • CEP: 29200-125
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clickable Custom Visual Map Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="block group relative overflow-hidden bg-neutral-950 border border-neutral-800 p-2 shadow-[0_15px_45px_rgba(0,0,0,0.15)] h-[450px] w-full transition-all duration-500 hover:border-[#C88A1A]/40"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center overflow-hidden">
                {/* SVG Schematic Map Design */}
                <svg
                  viewBox="0 0 800 450"
                  className="w-full h-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid background */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.04" />
                    </pattern>
                  </defs>
                  <rect width="800" height="450" fill="pattern(#grid)" />
                  <rect width="800" height="450" fill="#0A0A0A" opacity="0.9" />

                  {/* Ocean / Water */}
                  <path
                    d="M 0,0 L 800,0 L 800,140 Q 620,90 410,150 T 0,110 Z"
                    fill="#1E293B"
                    opacity="0.25"
                  />
                  <path
                    d="M 0,0 L 800,0 L 800,125 Q 600,100 400,135 T 0,100 Z"
                    fill="#0F172A"
                    opacity="0.4"
                  />

                  {/* Land Grid Lines (Streets) */}
                  {/* Main Avenues */}
                  <path d="M-50,220 L850,280" stroke="#334155" strokeWidth="10" strokeLinecap="round" opacity="0.4" />
                  <path d="M-50,340 L850,400" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" opacity="0.3" />

                  {/* Crossing Streets */}
                  <path d="M120,-50 L90,500" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
                  <path d="M320,-50 L290,500" stroke="#334155" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
                  
                  {/* Target Street: Travessa Oscar da Costa Neiva */}
                  <path d="M530,-50 L500,500" stroke="#C88A1A" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
                  
                  <path d="M680,-50 L650,500" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" opacity="0.4" />

                  {/* Minor Streets */}
                  <path d="M-50,170 L850,140" stroke="#1E293B" strokeWidth="3" opacity="0.3" />
                  <path d="M-50,290 L850,310" stroke="#1E293B" strokeWidth="3" opacity="0.3" />
                  <path d="M-50,410 L850,430" stroke="#1E293B" strokeWidth="3" opacity="0.3" />

                  {/* Water waves/textures */}
                  <path d="M 150,45 Q 180,40 210,45" stroke="#334155" strokeWidth="1" opacity="0.3" />
                  <path d="M 450,55 Q 480,50 510,55" stroke="#334155" strokeWidth="1" opacity="0.3" />
                  
                  {/* Glowing Radar Rings at (508, 255) */}
                  <circle cx="508" cy="255" r="50" stroke="#C88A1A" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
                  <circle cx="508" cy="255" r="30" stroke="#C88A1A" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="508" cy="255" r="12" fill="#C88A1A" opacity="0.2" />
                  <circle cx="508" cy="255" r="6" fill="#C88A1A" />

                  {/* Text Labels */}
                  <text x="80" y="55" fill="#475569" fontFamily="sans-serif" fontSize="10" letterSpacing="3" fontWeight="bold" opacity="0.6">CANAL DE GUARAPARI</text>
                  <text x="525" y="245" fill="#C88A1A" fontFamily="sans-serif" fontSize="10" fontWeight="bold" letterSpacing="0.5">Tv. Oscar da Costa Neiva, 20</text>
                  <text x="320" y="325" fill="#475569" fontFamily="sans-serif" fontSize="11" letterSpacing="2" opacity="0.5">CENTRO</text>
                </svg>
              </div>

              {/* Centered Glassmorphism Click Trigger CTA Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                <div className="bg-neutral-900/90 backdrop-blur-md border border-[#C88A1A]/30 px-6 py-4 flex flex-col items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:border-[#C88A1A] group-hover:bg-black/95">
                  <div className="h-9 w-9 bg-[#C88A1A]/10 text-[#C88A1A] flex items-center justify-center rounded-none border border-[#C88A1A]/20 transition-all duration-300 group-hover:bg-[#C88A1A] group-hover:text-black group-hover:border-[#C88A1A]">
                    <MapPin size={16} />
                  </div>
                  <span className="font-sans text-[11px] font-bold text-white uppercase tracking-[0.2em]">
                    Abrir no Google Maps
                  </span>
                  <span className="font-sans text-[9px] text-[#C88A1A] uppercase tracking-wider">
                    Ver rotas e direções
                  </span>
                </div>
              </div>

              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C88A1A] opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
