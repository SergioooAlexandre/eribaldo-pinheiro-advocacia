import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Localizacao() {
  return (
    <section
      id="atendimento"
      className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-visible"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LADO ESQUERDO - LOCALIZAÇÃO */}
          <div className="w-full">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C88A1A] block mb-4">
              Atendimento e Localização
            </span>

            <h2 className="text-3xl md:text-5xl font-light text-[#0A0A0A] mb-6">
              Onde Atendemos
            </h2>

            <div className="w-20 h-[2px] bg-[#C88A1A] mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
              O escritório está localizado em Guarapari/ES, oferecendo atendimento
              jurídico com seriedade, discrição e compromisso com cada cliente.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="min-w-10 w-10 h-10 bg-[#C88A1A]/10 flex items-center justify-center">
                  <MapPin size={20} className="text-[#C88A1A]" />
                </div>
                <div>
                  <p className="text-[#0A0A0A] font-semibold mb-1">Endereço</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Travessa Oscar da Costa Neiva, nº 20<br />
                    Guarapari - ES
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-10 w-10 h-10 bg-[#C88A1A]/10 flex items-center justify-center">
                  <Clock size={20} className="text-[#C88A1A]" />
                </div>
                <div>
                  <p className="text-[#0A0A0A] font-semibold mb-1">Horário</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Segunda a sexta, das 09h às 18h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-10 w-10 h-10 bg-[#C88A1A]/10 flex items-center justify-center">
                  <Phone size={20} className="text-[#C88A1A]" />
                </div>
                <div>
                  <p className="text-[#0A0A0A] font-semibold mb-1">WhatsApp</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    (27) 99794-5980
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Travessa%20Oscar%20da%20Costa%20Neiva%2020%20Guarapari%20ES"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#0A0A0A] text-white px-6 py-4 text-xs uppercase tracking-widest hover:bg-[#C88A1A] hover:text-black transition w-full sm:w-auto"
            >
              Abrir no Google Maps
            </a>
          </div>

          {/* LADO DIREITO - CARD/MAPA */}
          <div className="w-full">
            <div className="w-full bg-[#0A0A0A] text-white p-6 md:p-10 border border-black/10">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C88A1A] block mb-4">
                Mapa
              </span>

              <h3 className="text-2xl md:text-3xl font-light mb-6">
                Localização do Escritório
              </h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Travessa%20Oscar%20da%20Costa%20Neiva%2020%20Guarapari%20ES"
                target="_blank"
                rel="noreferrer"
                className="block w-full min-h-[260px] md:min-h-[360px] bg-[#111111] border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C88A1A]/20 via-transparent to-white/5"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-[#C88A1A] flex items-center justify-center mb-5 group-hover:scale-110 transition">
                    <MapPin size={30} className="text-black" />
                  </div>

                  <p className="text-white text-lg font-semibold mb-2">
                    Guarapari - ES
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                    Travessa Oscar da Costa Neiva, nº 20
                  </p>

                  <span className="mt-6 text-[#C88A1A] text-xs uppercase tracking-widest">
                    Clique para abrir no mapa
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}