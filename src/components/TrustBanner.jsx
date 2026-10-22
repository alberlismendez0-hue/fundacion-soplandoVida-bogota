import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Building2 } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white overflow-hidden">
      
      {/* 1. Curva fluida superior: une la sección anterior blanca con el fondo oscuro */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mt-px">
        <svg 
          className="relative block w-full h-8 sm:h-12 md:h-16 text-white fill-current" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0 C320,80 750,15 1200,65 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Halo de luz sutil en el centro para dar volumen y profundidad */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Contenido Central */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900/70 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Compromiso Ético, Clínico y Humano</span>
        </div>

        {/* Lema central oficial */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-3">
          «Pensando en el ser humano que hay detrás del diagnóstico»
        </h2>

        {/* Sublema */}
        <p className="text-emerald-400 font-semibold text-base sm:text-lg mb-6">
          ¡Lo que somos, lo somos por ti!
        </p>

        {/* Tarjeta de la cita bíblica translúcida */}
        <div className="max-w-2xl mx-auto bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-md mb-8 shadow-inner">
          <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
            "Ven de los cuatro vientos, oh aliento de vida, y sopla sobre estos cuerpos para que revivan y se pongan en pie."
          </p>
          <span className="block mt-2 text-xs font-bold text-sky-300 tracking-wider uppercase">
            Ezequiel 37:9 &bull; Fundación Social Soplando Vida
          </span>
        </div>

        {/* 3 Pilares en tarjetas oscuras con acento */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 px-4 backdrop-blur-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>NIT: 900.942.377-8 (Cámara de Comercio Bogotá)</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 px-4 backdrop-blur-xs">
            <HeartHandshake className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Acompañamiento Biopsicosocial 24/7</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 px-4 backdrop-blur-xs">
            <Building2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Sede Propia y Espacios Dignos</span>
          </div>
        </div>

      </div>

      {/* 2. Curva fluida inferior: une el fondo oscuro con la siguiente sección clara */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mb-px">
        <svg 
          className="relative block w-full h-8 sm:h-12 md:h-16 text-slate-50 fill-current" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,60 C380,110 820,10 1200,65 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </div>
  );
}