import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Building2 } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-sky-950 to-slate-950 text-white overflow-hidden my-0">
      
      {/* 1. Curva suave superior: conecta con el fondo blanco de la sección anterior */}
      <div className="w-full overflow-hidden leading-none -mt-px pointer-events-none">
        <svg 
          className="relative block w-full h-8 sm:h-12 md:h-16 text-white fill-current" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,70 600,20 1200,60 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Halo de luz sutil en el fondo (profundidad sin saturar) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Contenido Central */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900/60 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Compromiso Ético, Clínico y Humano</span>
        </div>

        {/* Lema central de la fundación */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-3">
          «Pensando en el ser humano que hay detrás del diagnóstico»[cite: 1]
        </h2>

        {/* Sub-lema */}
        <p className="text-emerald-400 font-semibold text-base sm:text-lg mb-6">
          ¡Lo que somos, lo somos por ti![cite: 2]
        </p>

        {/* Cita inspiracional de Ezequiel 37:9 */}
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xs mb-8">
          <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
            "Ven de los cuatro vientos, oh aliento de vida, y sopla sobre estos cuerpos para que revivan y se pongan en pie."[cite: 5]
          </p>
          <span className="block mt-1 text-[11px] font-semibold text-sky-400 tracking-wider uppercase">
            Ezequiel 37:9 &bull; Fundación Social Soplando Vida[cite: 1, 5]
          </span>
        </div>

        {/* 3 Pilares de Confianza en formato franja */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>NIT: 900.942.377-8 (Cámara de Comercio Bogotá)</span>[cite: 2]
          </div>
          <div className="flex items-center justify-center gap-2">
            <HeartHandshake className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Acompañamiento Biopsicosocial 24/7</span>[cite: 2, 6]
          </div>
          <div className="flex items-center justify-center gap-2">
            <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Sede Propia y Espacios Dignos</span>[cite: 4]
          </div>
        </div>

      </div>

      {/* 2. Curva suave inferior: conecta con el fondo slate-50 de la siguiente sección */}
      <div className="w-full overflow-hidden leading-none -mb-px pointer-events-none">
        <svg 
          className="relative block w-full h-8 sm:h-12 md:h-16 text-slate-50 fill-current" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,60 C400,10 800,90 1200,20 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </div>
  );
}