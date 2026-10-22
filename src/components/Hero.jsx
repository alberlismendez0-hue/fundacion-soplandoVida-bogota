import React from 'react';
import { ArrowRight, Phone, ShieldCheck, HeartHandshake } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function Hero({ onOpenSchedule }) {
  return (
    <div className="relative bg-white">
      <section id="inicio" className="bg-white pt-8 pb-4 lg:pt-12 lg:pb-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Clean Editorial Typography & Single Solid CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Sober Small Subtitle */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/70 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <HeartHandshake className="w-3.5 h-3.5 text-sky-700" />
                <span>HOGAR PROTEGIDO &bull; FUNDACIÓN SOCIAL &bull; BOGOTÁ</span>
              </div>

              {/* Clean Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-5">
                Pensando en el ser humano que hay detrás del diagnóstico.
              </h1>

              {/* Sub-slogan integrated naturally */}
              <p className="text-base sm:text-lg font-medium text-sky-800 mb-4">
                «¡Lo que somos, lo somos por ti!»
              </p>

              {/* Human support paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Brindamos un entorno digno, seguro y estructurado para personas con trastornos psiquiátricos crónicos, 
                acompañando a las familias con atención médica, terapéutica y calor de hogar.
              </p>

              {/* Single Solid CTA + Subtle Direct Contact */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <button
                  onClick={onOpenSchedule}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-800 hover:bg-sky-900 text-white font-semibold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  <span>Conocer Nuestro Hogar</span>
                  <ArrowRight className="w-4 h-4 text-sky-200" />
                </button>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="text-slate-400">o llámanos directamente:</span>
                  <a 
                    href="tel:576016214798" 
                    className="font-semibold text-slate-900 hover:text-sky-800 flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-700" />
                    (601) 621 4798
                  </a>
                </div>
              </div>

              {/* Subtle accreditation footnote */}
              <div className="mt-10 pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  NIT: <strong>900.942.377-8</strong>
                </span>
                <span className="text-slate-300">&bull;</span>
                <span>Cámara de Comercio de Bogotá</span>
                <span className="text-slate-300">&bull;</span>
                <span>Cra 72 Bis No. 75 A-35</span>
              </div>

            </div>

            {/* Right Column: Clean, Uncluttered Photography with Soft Shadow */}
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src="/images/hero.jpg"
                  alt="Instalaciones y jardín interior del Hogar Protegido Soplando Vida"
                  className="w-full h-80 sm:h-[430px] object-cover rounded-3xl shadow-sm border border-slate-200/90"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Organic transition wave to next section (#condiciones, which has bg-slate-50) */}
      <WaveDivider fillColor="#F8FAFC" />
    </div>
  );
}