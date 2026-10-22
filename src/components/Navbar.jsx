import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenSchedule }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Enfoque OMS', href: '#enfoque-oms' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top subtle bar - light, minimal, institutional */}
      <div className="bg-slate-50 text-slate-600 text-xs py-1.5 px-4 sm:px-6 hidden sm:block border-b border-slate-200/70 font-normal">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span>
              Teléfono: <a href="tel:576016214798" className="text-slate-800 font-medium hover:underline">(601) 621 4798</a>
            </span>
            <span className="text-slate-300">|</span>
            <span>
              WhatsApp: <a href="https://wa.me/573208554452" target="_blank" rel="noreferrer" className="text-emerald-700 font-medium hover:underline">320 855 4452</a>
            </span>
            <span className="text-slate-300 hidden md:inline">|</span>
            <span className="hidden md:inline text-slate-500">
              Cra 72 Bis No. 75 A-35, Bogotá
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span>Atención a familias: Lun a Sáb 8:00 AM - 5:30 PM</span>
            <span className="text-slate-300 hidden lg:inline">|</span>
            <span className="hidden lg:inline text-slate-500 font-mono text-[11px]">NIT: 900.942.377-8</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-xs py-3' 
            : 'bg-white py-4'
        } border-b border-slate-200/80`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#inicio" className="group">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13.5px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Clean, Non-Competing CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/573208554452?text=Hola,%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20el%20Hogar%20Protegido%20Soplando%20Vida"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Consultar por WhatsApp
            </a>

            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              Agendar Visita
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSchedule}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-sky-700 text-white text-xs font-medium"
            >
              Agendar
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-lg">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-2.5 rounded-lg bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs transition-colors"
              >
                Agendar Visita Guiada
              </button>
              <a
                href="https://wa.me/573208554452?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20el%20Hogar%20Protegido%20Soplando%20Vida"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg border border-slate-300 text-slate-700 text-center font-medium text-xs hover:bg-slate-50 transition-colors"
              >
                Escribir a WhatsApp (320 855 4452)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
