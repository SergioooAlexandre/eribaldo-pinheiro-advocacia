import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="w-full">
      
      {/* Upper Footer (Solid White Background with Logo, Details, Navigation, and Lawyer Photo) */}
      <div className="bg-white border-t border-gray-200 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Column 1: Logo & Office Details (OAB, CNPJ, Razão Social) */}
            <div className="lg:col-span-4 space-y-6">
              <Logo variant="dark" className="h-12" />
              
              <div className="space-y-3 pt-2">
                <span className="font-sans text-[10px] font-bold text-gray-400 tracking-widest uppercase block">
                  Razão Social & Credenciais
                </span>
                <p className="font-serif text-sm font-semibold text-gray-900 leading-relaxed">
                  ERIBALDO PINHEIRO SOCIEDADE INDIVIDUAL DE ADVOCACIA
                </p>
                <div className="font-sans text-xs text-gray-500 space-y-1">
                  <p>CNPJ: <strong className="font-medium text-gray-700">66.649.529/0001-49</strong></p>
                  <p>Inscrição OAB: <strong className="font-medium text-gray-700">OAB/ES 30.809</strong></p>
                  <p>Advogado Responsável: <strong className="font-medium text-gray-700">Dr. Eribaldo Silva Pinheiro</strong></p>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="font-sans text-[10px] font-bold text-gray-400 tracking-widest uppercase block mb-4">
                  Navegação
                </span>
                <ul className="space-y-3 font-sans text-xs sm:text-sm font-light">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <a 
                        href={item.href} 
                        className="text-gray-600 hover:text-[#C88A1A] transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: Contact & Location */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <span className="font-sans text-[10px] font-bold text-gray-400 tracking-widest uppercase block mb-4">
                  Contato & Endereço
                </span>
                <ul className="space-y-3.5 font-sans text-xs sm:text-sm font-light">
                  <li className="flex items-start gap-2.5">
                    <Phone size={14} className="text-[#C88A1A] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider mb-0.5">WhatsApp / Telefone</span>
                      <a href="https://wa.me/5527997945980" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-[#C88A1A] transition-colors font-medium">
                        (27) 99794-5980
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Mail size={14} className="text-[#C88A1A] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider mb-0.5">E-mail de Contato</span>
                      <a href="mailto:adv.eribaldo@outlook.com" className="text-gray-700 hover:text-[#C88A1A] transition-colors font-medium">
                        adv.eribaldo@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin size={14} className="text-[#C88A1A] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider mb-0.5">Endereço Presencial</span>
                      <span className="text-gray-600 leading-relaxed">
                        Tv. Oscar da Costa Neiva, 20, Apt 902<br />
                        Centro, Guarapari - ES, 29200-125
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Attorney Real Portrait (Solid White Background Frame) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="font-sans text-[10px] font-bold text-gray-400 tracking-widest uppercase block">
                Advogado Responsável
              </span>
              
              <div className="relative bg-white p-3 rounded-none border border-gray-200 shadow-md w-full max-w-[210px] overflow-hidden">
                <div className="relative w-full aspect-[3/4] bg-white rounded-none overflow-hidden flex items-center justify-center border border-gray-100">
                  <img
                    src="/images/dr-eribaldo.png"
                    alt="Dr. Eribaldo Silva Pinheiro"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="text-left max-w-[210px]">
                <span className="font-serif text-xs font-semibold text-gray-900 block leading-tight">
                  Dr. Eribaldo Silva Pinheiro
                </span>
                <span className="font-sans text-[10px] text-[#C88A1A] uppercase tracking-wider block mt-0.5">
                  Fundador • OAB/ES 30.809
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Rodapé final (Solid Black Background) */}
      <div className="bg-[#0A0A0A] text-gray-400 py-8 border-t border-gray-900 font-sans text-xs font-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left Side: Copyright */}
            <div className="text-center md:text-left leading-relaxed">
              &copy; 2026 <strong className="font-medium text-white">Eribaldo Pinheiro Sociedade Individual de Advocacia</strong>. Todos os direitos reservados.
            </div>

            {/* Right Side: Development Signature */}
            <div className="text-center md:text-right">
              Desenvolvido por{' '}
              <a
                href="https://nexus-sites-br.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-[#C88A1A] hover:text-[#DFAC4B] font-semibold transition-colors"
              >
                Nexus Sites BR
              </a>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
