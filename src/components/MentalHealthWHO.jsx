import React from 'react';
import { Globe2, CheckCircle2, ShieldCheck, Stethoscope, TrendingUp, Users2, HeartHandshake } from 'lucide-react';

export default function MentalHealthWHO() {
  const stages = [
    {
      step: '01',
      title: 'Atención de la salud mental',
      icon: Stethoscope,
      accent: 'border-l-sky-600',
      tagColor: 'text-sky-800 bg-sky-50 border-sky-200',
      points: [
        'Certificación sobre diagnóstico y tratamiento.',
        'Corroboración de cobertura de prestación de servicios de salud.',
        'Seguro de salud.',
        'Apoyo sicosocial.',
        'Suministro de medicamentos prescritos.',
        'Atención en caso de crisis u hospitalización.',
      ],
    },
    {
      step: '02',
      title: 'Recuperación',
      icon: TrendingUp,
      accent: 'border-l-emerald-600',
      tagColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      points: [
        'Orientación hacia sus capacidades innatas o aprendidas.',
        'Inducción para la incorporación socio-laboral.',
        'Asistencia según las necesidades del paciente.',
      ],
    },
    {
      step: '03',
      title: 'Reencuentro con la sociedad6',
      icon: Users2,
      accent: 'border-l-teal-600',
      tagColor: 'text-teal-800 bg-teal-50 border-teal-200',
      points: [
        'Integración al acontecer social.',
        'Énfasis en derechos humanos, en el amor recíproco y el respeto.',
        'Correcta utilización de los servicios sociales.',
      ],
    },
    {
      step: '04',
      title: 'Aportes de la familia y de los custodios de su salud',
      icon: HeartHandshake,
      accent: 'border-l-indigo-600',
      tagColor: 'text-indigo-800 bg-indigo-50 border-indigo-200',
      points: [
        'Amparo de tipo económico.',
        'Capacidad y capacitación del personal a cargo.',
        'Equipo humano permanente y suficiente.',
        'Redes de cooperación.',
        'Provisión de relevo.',
      ],
    },
  ];

  return (
    <section id="enfoque-oms" className="py-14 lg:py-18 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header Centrado */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <Globe2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Lineamientos de la OMS en Salud Mental</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Orientación en Salud Mental Comunitaria
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Las afecciones de este tipo se consideran un síndrome caracterizado por una alteración clínicamente significativa del 
            estado cognitivo, la regulación emocional o el comportamiento de un individuo. La atención comunitaria integral ha de orientarse 
            hacia las siguientes etapas clave.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 mb-10">
          {stages.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border-l-4 ${st.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className={`px-2.5 py-0.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wide border ${st.tagColor}`}>
                      ETAPA {st.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mb-3.5">
                    {st.subtitle}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {st.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {st.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Enfoque de Derechos y Dignidad</span>
                  <ShieldCheck className="w-4 h-4 text-sky-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* OMS Callout Box */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              El Modelo del Hogar Protegido según la Salud Pública Moderna
            </h4>
            <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
              La OMS recomienda sustituir los internamientos psiquiátricos prolongados y despersonalizados por 
              <strong> estructuras residenciales intermedias protegidas</strong> en el entorno comunitario, donde el residente conserve sus rutinas, su dignidad y un entorno afectivo seguro[cite: 3].
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 flex-shrink-0 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            OMS &bull; Directriz de Salud Mental
          </span>
        </div>

      </div>
    </section>
  );
}