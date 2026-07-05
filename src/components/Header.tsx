import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        id="app-header"
        className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#C88A1A]/30 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="transition-transform duration-300 hover:scale-[1.02]">
              <Logo className="h-12" variant="light" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-[11px] uppercase tracking-widest font-medium text-white/80 hover:text-[#C88A1A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C88A1A] hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Action Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/5527997945980?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+com+o+Dr.+Eribaldo."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#C88A1A] text-[#C88A1A] hover:bg-[#C88A1A] hover:text-black font-sans font-semibold text-[11px] uppercase tracking-widest py-2.5 px-6 rounded-none transition-all duration-300"
              >
                <PhoneCall size={12} />
                Entrar em contato
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded md:hidden text-white/90 hover:text-[#C88A1A] focus:outline-none transition-colors"
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[80px] z-45 bg-black/95 backdrop-blur-lg border-b border-[#C88A1A]/30 shadow-2xl md:hidden"
          >
            <div className="px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-xs font-semibold text-white/80 hover:text-[#C88A1A] py-2 transition-colors border-b border-white/5 uppercase tracking-wider"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/5527997945980?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+com+o+Dr.+Eribaldo."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 border border-[#C88A1A] text-[#C88A1A] hover:bg-[#C88A1A] hover:text-black font-sans font-semibold text-xs uppercase tracking-widest py-3 px-6 rounded-none transition-all duration-300"
                >
                  <PhoneCall size={14} />
                  Entrar em contato
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
