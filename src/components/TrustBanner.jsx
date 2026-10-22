import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Building2 } from 'lucide-react';

export default function TrustBanner() {
  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-sky-50/50 to-slate-50 border-y border-slate-200/60 overflow-hidden">
      
      {/* Luz ambiental sutil en tonos cian/esmeralda */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[280px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Badge superior sobrio */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Compromiso Ético, Clínico y Humano</span>
        </div>

        {/* Lema central con tipografía clínica y elegante */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto mb-2">
          «Pensando en el ser humano que hay detrás del diagnóstico»
        </h2>

        {/* Sub-lema de esperanza */}
        <p className="text-sky-700 font-semibold text-base sm:text-lg mb-6">
          ¡Lo que somos, lo somos por ti!
        </p>

        {/* Tarjeta de la cita bíblica con acabado cristal/claro */}
        <div className="max-w-2xl mx-auto bg-white/80 border border-sky-100/80 rounded-2xl p-5 shadow-xs backdrop-blur-xs mb-8">
          <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
            "Ven de los cuatro vientos, oh aliento de vida, y sopla sobre estos cuerpos para que revivan y se pongan en pie."
          </p>
          <span className="block mt-2 text-xs font-bold text-sky-600 tracking-wider uppercase">
            Ezequiel 37:9 &bull; Fundación Social Soplando Vida
          </span>
        </div>

        {/* 3 Pilares en tarjetas claras */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/70 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center justify-center gap-2 bg-white/60 py-2 px-3 rounded-xl border border-slate-200/60 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium text-slate-700">NIT: 900.942.377-8 (Cámara de Comercio Bogotá)</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/60 py-2 px-3 rounded-xl border border-slate-200/60 shadow-2xs">
            <HeartHandshake className="w-4 h-4 text-sky-600 shrink-0" />
            <span className="font-medium text-slate-700">Acompañamiento Biopsicosocial 24/7</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/60 py-2 px-3 rounded-xl border border-slate-200/60 shadow-2xs">
            <Building2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span className="font-medium text-slate-700">Sede Propia y Espacios Dignos</span>
          </div>
        </div>

      </div>

    </section>
  );
}