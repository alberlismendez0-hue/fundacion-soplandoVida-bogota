import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';
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
    { label: 'Objetivos', href: '#objetivos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Enfoque OMS', href: '#enfoque-oms' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Thin institutional top bar with direct contacts */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="tel:576016214798" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>(601) 621 4798</span>
            </a>
            <a 
              href="https://wa.me/573208554452?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20el%20Hogar%20Protegido%20Soplando%20Vida" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp: 320 855 4452</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3 h-3 text-sky-400" />
              <span>Cra 72 Bis No. 75 A-35, Bogotá</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden sm:inline">Lun a Sáb 8:00 AM - 5:30 PM</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="font-mono text-slate-300">NIT: 900.942.377-8</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3' 
            : 'bg-white py-3.5 sm:py-4'
        } border-b border-slate-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#inicio" className="group focus:outline-none">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13.5px] font-medium text-slate-600 hover:text-sky-800 transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-800 hover:bg-sky-900 text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-200" />
              <span>Agendar Visita</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSchedule}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-sky-800 text-white text-xs font-semibold"
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
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-800 font-medium text-sm transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-3 rounded-xl bg-sky-800 hover:bg-sky-900 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Visita Guiada</span>
              </button>

              <a
                href="https://wa.me/573208554452?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20el%20Hogar%20Protegido%20Soplando%20Vida"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-center font-medium text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Directo (320 855 4452)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
