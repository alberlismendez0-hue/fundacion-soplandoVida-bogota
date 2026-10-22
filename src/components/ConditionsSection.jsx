import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

export default function ConditionsSection({ onOpenSchedule }) {
  const conditions = [
    {
      name: 'Esquizofrenia',
      tag: 'Trastornos del Espectro Psicótico',
      accent: 'border-l-sky-600',
      tagColor: 'text-sky-800 bg-sky-50',
      details:
        'Acompañamiento integral en variantes paranoide, residual y afines. Enfoque centrado en la adherencia médica continua, reducción de síntomas intrusivos y reconstrucción de rutinas comunitarias.',
    },
    {
      name: 'Trastorno Afectivo Bipolar (TAB)',
      tag: 'Trastornos del Ánimo',
      accent: 'border-l-emerald-600',
      tagColor: 'text-emerald-800 bg-emerald-50',
      details:
        'Estabilización anímica y prevención de recaídas en episodios maníacos o depresivos, mediante hábitos de descanso estructurados, supervisión farmacológica y contención afectiva permanente.',
    },
    {
      name: 'Trastorno Obsesivo Compulsivo (TOC)',
      tag: 'Ansiedad y Obsesiones',
      accent: 'border-l-teal-600',
      tagColor: 'text-teal-800 bg-teal-50',
      details:
        'Intervención en pensamientos obsesivos y conductas ritualizadas que interfieren con la vida diaria, promoviendo espacios de calma, flexibilización cognitiva y acompañamiento terapéutico respetuoso.',
    },
    {
      name: 'Depresión Mayor Crónica',
      tag: 'Sintomatología Recurrente',
      accent: 'border-l-blue-600',
      tagColor: 'text-blue-800 bg-blue-50',
      details:
        'Atención a cuadros depresivos resistentes y persistentes, favoreciendo la revinculación social paulatina, la reactivación emocional, el autocuidado y la recuperación de la autoestima.',
    },
    {
      name: 'Patología Dual',
      tag: 'Diagnóstico Psiquiátrico + Adicción Estabilizada',
      accent: 'border-l-indigo-600',
      tagColor: 'text-indigo-800 bg-indigo-50',
      details:
        'Cuidado especializado cuando coexisten un diagnóstico psiquiátrico crónico y antecedentes de consumo estabilizado, bajo protocolos específicos de seguimiento médico y prevención de crisis.',
    },
    {
      name: 'Trastornos Afectivos y Cognitivos',
      tag: 'Mantenimiento Funcional del Adulto',
      accent: 'border-l-slate-700',
      tagColor: 'text-slate-800 bg-slate-100',
      details:
        'Programas adaptados de estimulación neurocognitiva, psicomotricidad y talleres lúdicos para personas que requieren supervisión continua para conservar su independencia en la vida diaria.',
    },
  ];

  return (
   <section id="condiciones" className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <Activity className="w-3.5 h-3.5 text-sky-600" />
              <span>Área de Acompañamiento Clínico</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Condiciones que Acompañamos
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Nuestro equipo interdisciplinario atiende a cada persona desde una perspectiva biopsicosocial, 
              diseñando planes de estancia y rehabilitación individualizados acordes con su diagnóstico médico.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-800 hover:text-sky-900 transition-colors group cursor-pointer"
            >
              <span>Consultar por un diagnóstico específico</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Depth Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between border-l-4 ${item.accent}`}
            >
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold tracking-wide uppercase mb-3 ${item.tagColor}`}>
                  {item.tag}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {item.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Atención Biopsicosocial</span>
                <span className="font-semibold text-sky-700">Soplando Vida</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote card */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
            <strong>Criterio de Admisión Ética:</strong> El ingreso al hogar protegido se realiza previa valoración del perfil psiquiátrico y médico de cada solicitante, asegurando que nuestras instalaciones y equipo representen la mejor alternativa para su seguridad, tranquilidad y evolución.
          </p>
          <button
            onClick={onOpenSchedule}
            className="flex-shrink-0 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Solicitar Valoración
          </button>
        </div>

      </div>
    </section>
  );
}
