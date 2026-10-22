import React from 'react';
import { ArrowRight, Phone, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export default function Hero({ onOpenSchedule }) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50/40 py-14 lg:py-20">
      
      {/* Brand Visual Identity: Subtle life-spiral atmospheric waves and light halos in background */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sky-300/15 via-emerald-200/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-emerald-300/15 via-sky-200/10 to-transparent blur-3xl pointer-events-none" />

      {/* Aerodynamic life breeze SVG background watermark (low opacity) */}
      <svg
        className="absolute inset-y-0 right-1/4 w-[600px] h-full opacity-[0.04] pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 300 C150 150, 450 150, 500 300 C550 450, 250 500, 200 380 C150 260, 350 240, 380 320"
          stroke="#0284C7"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M180 320 C220 220, 420 220, 440 320 C460 400, 320 440, 280 370"
          stroke="#10B981"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Human Value & Clean Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Brand Subtitle */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/70 border border-sky-200/80 text-sky-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Hogar Protegido &bull; Fundación Social &bull; Bogotá</span>
            </div>

            {/* Central Slogan */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-4">
              Pensando en el ser humano que hay detrás del diagnóstico.
            </h1>

            {/* Sub-slogan */}
            <p className="text-base sm:text-xl font-bold text-sky-800 mb-4 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>«¡Lo que somos, lo somos por ti!»</span>
            </p>

            {/* Human Value Proposition Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Brindamos un entorno digno, cálido y seguro para personas que requieren acompañamiento 
              psicosocial continuo. Apoyamos a las familias con atención médica especializada, terapia ocupacional 
              y un auténtico calor de hogar que devuelve la tranquilidad y la esperanza.
            </p>

            {/* Single Solid Primary CTA + Direct Phone */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <button
                onClick={onOpenSchedule}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-sky-800 hover:bg-sky-900 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <span>Conoce Nuestro Hogar</span>
                <ArrowRight className="w-4 h-4 text-sky-200" />
              </button>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <span className="text-slate-400">o llámanos directamente:</span>
                <a 
                  href="tel:576016214798" 
                  className="font-bold text-slate-900 hover:text-sky-800 flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-700" />
                  (601) 621 4798
                </a>
              </div>
            </div>

            {/* Subtle Accreditation Strip */}
            <div className="mt-8 pt-5 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                NIT: 900.942.377-8
              </span>
              <span className="text-slate-300">&bull;</span>
              <span>Registro Cámara de Comercio de Bogotá</span>
              <span className="text-slate-300">&bull;</span>
              <span>Cra 72 Bis No. 75 A-35</span>
            </div>

          </div>

          {/* Right Column: Clean, Prominent Photography with Depth */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer soft aura layer */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200/50 via-emerald-100/40 to-amber-100/30 rounded-[32px] blur-sm transform -rotate-1"></div>

              {/* Clean, undisturbed photograph with depth border */}
              <div className="relative rounded-3xl overflow-hidden shadow-md border-2 border-white bg-white">
                <img
                  src="/images/hero.jpg"
                  alt="Instalaciones luminosas y jardín del Hogar Protegido Soplando Vida"
                  className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}