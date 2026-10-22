import React from 'react';
import { 
  Heart, 
  Smile, 
  HeartHandshake, 
  Compass, 
  Users, 
  Sparkles, 
  Home, 
  ShieldCheck 
} from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function Objectives() {
  const pillars = [
    {
      num: '01',
      title: 'Mejorar la calidad de vida',
      accent: 'border-t-sky-600',
      numColor: 'text-sky-700 bg-sky-50',
      icon: Smile,
      desc: 'Promovemos un día a día significativo con bienestar físico, nutrición saludable, descanso reparador y actividades que devuelven el sentido de propósito a cada residente.',
    },
    {
      num: '02',
      title: 'Fortalecer lazos afectivos y autoestima',
      accent: 'border-t-emerald-600',
      numColor: 'text-emerald-700 bg-emerald-50',
      icon: HeartHandshake,
      desc: 'Reconstruimos la autoconfianza y la autoimagen positiva, fomentando vínculos afectivos saludables con sus familias y compañeros de residencia.',
    },
    {
      num: '03',
      title: 'Favorecer la autogestión y compromiso',
      accent: 'border-t-teal-600',
      numColor: 'text-teal-700 bg-teal-50',
      icon: Compass,
      desc: 'Estimulamos la participación activa del paciente en su rutina diaria, el autocuidado y la adherencia responsable a sus tratamientos farmacológicos.',
    },
    {
      num: '04',
      title: 'Acompañamiento biopsicosocial',
      accent: 'border-t-blue-600',
      numColor: 'text-blue-700 bg-blue-50',
      icon: Users,
      desc: 'Integramos las dimensiones biológica, psicológica, social y espiritual en un plan de intervención continuo que facilita la adaptabilidad comunitaria.',
    },
    {
      num: '05',
      title: 'Estabilidad emocional y contención',
      accent: 'border-t-indigo-600',
      numColor: 'text-indigo-700 bg-indigo-50',
      icon: Sparkles,
      desc: 'Generamos un ambiente sereno y predecible que minimiza episodios de crisis y proporciona contención afectiva profesional en todo momento.',
    },
    {
      num: '06',
      title: 'Espacios dignos, seguros y adecuados',
      accent: 'border-t-slate-700',
      numColor: 'text-slate-700 bg-slate-100',
      icon: Home,
      desc: 'Garantizamos una infraestructura física diseñada para la protección y el confort, libre de estigmas hospitalarios y con la calidez de un auténtico hogar.',
    },
  ];

  return (
    <div className="relative bg-white">
      <section id="objetivos" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
              <span>Propósitos Fundacionales</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nuestros 6 Objetivos Institucionales
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Cada acción, terapia y cuidado diario se articula en torno a seis metas esenciales que guían nuestra labor 
              hacia la recuperación y la dignidad del paciente psiquiátrico crónico.
            </p>
          </div>

          {/* 6-Pillar Grid - With Top Accent Border & Elevation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between border-t-4 ${pillar.accent}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`w-9 h-9 rounded-lg font-mono font-bold text-xs flex items-center justify-center ${pillar.numColor}`}>
                        {pillar.num}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Pilar Institucional</span>
                    <span className="font-medium text-slate-600">Soplando Vida</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Organic Wave Transition into Services (#servicios, which has bg-slate-50) */}
      <WaveDivider fillColor="#F8FAFC" />
    </div>
  );
}