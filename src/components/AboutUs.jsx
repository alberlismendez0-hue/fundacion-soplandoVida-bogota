import React, { useState } from 'react';
import { Target, Eye, Award, CheckCircle2, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function AboutUs({ onOpenSchedule }) {
  const [activeTab, setActiveTab] = useState('mision');

  const tabs = [
    {
      id: 'mision',
      title: 'Nuestra Misión',
      icon: Target,
      accentColor: 'text-sky-700 bg-sky-50 border-sky-200',
      content: {
        headline: 'Ser el puente idóneo que apoya el esfuerzo conjunto de familias y médicos.',
        description:
          'Trabajamos de manera dedicada en la reducción, control y tratamiento de síntomas nocivos en personas con diagnósticos psiquiátricos crónicos. Brindamos un acompañamiento clínico, humano y estructurado que transforma el aislamiento en participación activa, promoviendo la máxima estabilidad emocional y autonomía posible.',
        highlights: [
          'Reducción y control sistemático de síntomas nocivos.',
          'Articulación estrecha con los médicos tratantes y psiquiatras de cabecera.',
          'Acompañamiento biopsicosocial continuo con calor de hogar.',
          'Alivio y soporte integral para la familia y cuidadores primarios.'
        ],
        quote: '«Detrás de cada síntoma hay una historia personal y un ser amado que merece vivir en paz, seguridad y dignidad.»'
      }
    },
    {
      id: 'vision',
      title: 'Nuestra Visión',
      icon: Eye,
      accentColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      content: {
        headline: 'Consolidarnos como un equipo visionario especializado en servicios complementarios de salud mental.',
        description:
          'Proyectamos ser la institución referente en Bogotá y Colombia en modelos residenciales y comunitarios de salud mental integral (afectiva, cognitiva y adictiva), con rigor profesional, innovación asistencial y un profundo sentido ético y humano.',
        highlights: [
          'Modelo de atención integral en salud afectiva, cognitiva y adictiva.',
          'Desestigmatización activa de la condición psiquiátrica crónica.',
          'Comunidad terapéutica basada en el respeto y la empatía.',
          'Programas continuos de adaptación comunitaria y calidad de vida.'
        ],
        quote: '«Visualizamos una sociedad donde el diagnóstico no sea una condena, sino el punto de partida hacia una vida protegida y digna.»'
      }
    },
    {
      id: 'calidad',
      title: 'Política de Calidad',
      icon: Award,
      accentColor: 'text-teal-700 bg-teal-50 border-teal-200',
      content: {
        headline: 'Satisfacción permanente de las necesidades del residente y su red familiar.',
        description:
          'Nuestra política de calidad se fundamenta en la idoneidad del talento humano, la seguridad asistencial, una infraestructura física confortable y segura, y procesos evaluados permanentemente para garantizar el bienestar integral de cada beneficiario.',
        highlights: [
          'Custodia y administración rigurosa de medicamentos según prescripción.',
          'Espacios residenciales limpios, ventilados, seguros y libres de barreras.',
          'Equipo interdisciplinario con vocación de servicio y formación continua.',
          'Informes mensuales de evolución clínica y conductual a las familias.'
        ],
        quote: '«La calidad en salud mental se mide en protocolos rigurosos y en la calidez con que se acompaña cada día.»'
      }
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
  const CurrentIcon = currentTab.icon;

  return (
    <section id="quienes-somos" className="py-14 lg:py-18 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-sky-600" />
            <span>Nuestra Identidad Institucional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quiénes Somos en Soplando Vida
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Nacemos de la convicción de que toda persona que vive con un diagnóstico psiquiátrico merece un entorno 
            donde no sea juzgada, sino comprendida, protegida y rehabilitada con profundo respeto y dignidad humana.
          </p>
        </div>

        {/* Dynamic Interactive Tab Bar with Visual Feedback */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-4xl mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3.5 px-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10 scale-[1.01]'
                    : 'bg-slate-50 hover:bg-slate-100/80 text-slate-700 border-slate-200/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-sky-300' : 'text-slate-500'}`} />
                    <span className="text-sm font-bold">{tab.title}</span>
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isActive ? 'bg-white/15 text-sky-200' : 'bg-white text-slate-500'
                  }`}>
                    {tab.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Elevated Contrast Content Card */}
        <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider mb-2.5">
                <CurrentIcon className="w-4 h-4" />
                <span>{currentTab.title}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                {currentTab.content.headline}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {currentTab.content.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 mb-6">
                {currentTab.content.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenSchedule}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-800 hover:text-sky-950 group cursor-pointer"
              >
                <span>Solicitar una visita guiada a nuestras instalaciones</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Quote Card with Relief */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Principio rector
                </p>
                <p className="text-slate-800 text-sm sm:text-base italic font-serif leading-relaxed mb-6">
                  {currentTab.content.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-sky-700" />
                  Soplando Vida
                </span>
                <span className="font-mono text-[11px]">NIT: 900.942.377-8</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
