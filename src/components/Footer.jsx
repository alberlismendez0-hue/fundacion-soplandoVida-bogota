import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Clock, 
  ArrowUp
} from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onOpenSchedule }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Identity & Legal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo lightMode={true} />
            
            <p className="mt-4 text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Hogar protegido especializado en el cuidado, rehabilitación y acompañamiento biopsicosocial 
              del paciente psiquiátrico crónico. Brindamos un entorno seguro, profesional y con calor de hogar en Bogotá.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NIT: 900.942.377-8 &bull; Bogotá, Colombia</span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOpenSchedule}
                className="px-4 py-2 rounded-lg bg-sky-800 hover:bg-sky-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Agendar Visita
              </button>
              <a
                href="https://wa.me/573208554452?text=Hola,%20deseo%20comunicarme%20con%20el%20Hogar%20Protegido%20Soplando%20Vida"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-medium transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Oficial</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Navegación Institucional
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#condiciones" className="text-slate-400 hover:text-white transition-colors">Condiciones que acompañamos</a>
              </li>
              <li>
                <a href="#quienes-somos" className="text-slate-400 hover:text-white transition-colors">Quiénes Somos (Misión / Visión)</a>
              </li>
              <li>
                <a href="#objetivos" className="text-slate-400 hover:text-white transition-colors">6 Objetivos Institucionales</a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-white transition-colors">Servicios & Modalidades</a>
              </li>
              <li>
                <a href="#enfoque-oms" className="text-slate-400 hover:text-white transition-colors">Enfoque de Salud Mental OMS</a>
              </li>
              <li>
                <a href="#testimonios" className="text-slate-400 hover:text-white transition-colors">Testimonios de Familias</a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-400 hover:text-white transition-colors">Contacto & Ubicación</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contact & Sede (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Sede Central Bogotá
            </h4>
            
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Cra 72 Bis No. 75 A-35, Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:576016214798" className="text-slate-300 hover:text-white">(601) 621 4798</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/573208554452" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-300 hover:text-white font-medium"
                >
                  320 855 4452 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:soplandovidafs@gmail.com" className="text-slate-300 hover:text-white truncate">
                  soplandovidafs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>Horario de Atención Administrativa y Visitas: Lunes a Sábado de 8:00 AM a 5:30 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} <strong>Hogar Protegido SOPLANDO VIDA - Fundación Social</strong>. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span>Bogotá, Colombia</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
