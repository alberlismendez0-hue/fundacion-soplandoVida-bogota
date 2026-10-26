import React from 'react';
import { ShieldCheck, Heart, Stethoscope, Clock, MessageCircle, Sparkles } from 'lucide-react';

export default function TrustBanner({ onOpenSchedule }) {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Respaldo Institucional',
      detail: 'Entidad sin ánimo de lucro · NIT: 900.942.377-8 · Cámara de Comercio de Bogotá',
    },
    {
      icon: Stethoscope,
      title: 'Seguimiento Psiquiátrico',
      detail: 'Articulación permanente con médicos tratantes y supervisión de esquemas clínicos',
    },
    {
      icon: Clock,
      title: 'Enfermería Permanente 24/7',
      detail: 'Custodia rigurosa de medicamentos y respuesta asistencial continua día y noche',
    },
    {
      icon: Heart,
      title: 'Sede Propia y Calor de Hogar',
      detail: 'Infraestructura segura, jardines interiores y un ambiente de convivencia sin estigma',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white py-12 lg:py-16 relative overflow-hidden shadow-inner">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-600/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Core Slogan & Spiritual Foundation */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Compromiso Asistencial y Vocación de Servicio</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            «Pensando en el ser humano que hay detrás del diagnóstico»
          </h2>

          <p className="mt-2 text-base sm:text-lg font-bold text-emerald-400">
            ¡Lo que somos, lo somos por ti!
          </p>

         <p className="mt-3.5 text-xs sm:text-sm text-slate-300 italic max-w-xl mx-auto font-serif leading-relaxed text-balance">
            «Ven de los cuatro vientos, oh aliento de vida, y sopla sobre estos cuerpos
            <br className="hidden sm:inline" /> para que revivan y se pongan en pie.»
            <span className="block mt-1.5 font-sans not-italic text-[10.5px] font-bold text-sky-400 uppercase tracking-widest">
              — Ezequiel 37:9
            </span>
          </p>
        </div>

        {/* 4 Pillars of Institutional Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8 border-t border-slate-800">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-sky-800/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center mb-3 border border-sky-800/60">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Banner Action */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>Sede Bogotá: Cra 72 Bis No. 75 A-35 &bull; Tel: (601) 621 4798</span>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSchedule}
              className="px-4 py-2 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-semibold transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
            >
              Agendar Visita
            </button>
            <a
              href="https://wa.me/573208554452?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20el%20Hogar%20Protegido%20Soplando%20Vida"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp 320 855 4452</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}