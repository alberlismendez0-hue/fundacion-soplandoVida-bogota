import React, { useState } from 'react';
import { Target, Eye, Award, CheckCircle2, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function AboutUs({ onOpenSchedule }) {
  const [activeTab, setActiveTab] = useState('mision');

  const tabs = [
    {
      id: 'mision',
      title: 'Nuestra Misión',
      icon: Target,
      short: 'Puente idóneo entre familia, medicina y bienestar',
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
      short: 'Referente ético en salud mental integral',
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
      short: 'Seguridad asistencial e infraestructura idónea',
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
    <div className="relative bg-white">
      <section id="quienes-somos" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5 text-sky-700" />
              <span>Nuestra Identidad Institucional</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Quiénes Somos en Soplando Vida
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Nacemos de la convicción de que toda persona con un diagnóstico psiquiátrico merece un entorno 
              donde no sea juzgada, sino acogida, protegida y rehabilitada con respeto y dignidad.
            </p>
          </div>

          {/* Clean, Non-Glitzy Tab Selector */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-4xl mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3.5 px-5 rounded-xl text-left border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/90'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-sky-300' : 'text-slate-500'}`} />
                    <span className="text-sm font-bold">{tab.title}</span>
                  </div>
                  <p className={`text-xs mt-1.5 line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {tab.short}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Depth Content Box */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-wider mb-2">
                  <CurrentIcon className="w-3.5 h-3.5" />
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
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenSchedule}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-800 hover:text-sky-900 group cursor-pointer"
                >
                  <span>Solicitar una visita guiada a nuestras instalaciones</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Right Quote Card - Clean & Sober with Elevation */}
              <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Principio rector
                  </p>
                  <p className="text-slate-800 text-sm sm:text-base italic font-serif leading-relaxed mb-5">
                    {currentTab.content.quote}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
                    Fundación Social Soplando Vida
                  </span>
                  <span className="font-mono text-[11px]">NIT: 900.942.377-8</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Wave transition into TrustBanner (fillColor matches slate-900: #0F172A) */}
      <WaveDivider fillColor="#0F172A" />
    </div>
  );
}
