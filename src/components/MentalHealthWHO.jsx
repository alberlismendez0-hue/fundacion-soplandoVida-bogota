import React from 'react';
import { Globe2, CheckCircle2, ShieldCheck, Stethoscope, TrendingUp, Users2, HeartHandshake } from 'lucide-react';

export default function MentalHealthWHO() {
  const stages = [
    {
      step: '01',
      title: 'Atención Temprana y Continuidad Médica',
      subtitle: 'Detección, adherencia farmacológica y articulación con el sistema de salud',
      icon: Stethoscope,
      accent: 'border-l-sky-600',
      tagColor: 'text-sky-800 bg-sky-50 border-sky-200',
      description:
        'La Organización Mundial de la Salud enfatiza que la estabilidad en procesos psiquiátricos crónicos depende de la adherencia estricta al tratamiento médico, la supervisión de efectos secundarios y el acceso continuo a valoraciones especializadas sin interrupciones.',
      points: [
        'Administración y custodia profesional de medicamentos.',
        'Prevención oportuna de descompensaciones y crisis.',
        'Monitoreo clínico y articulación con EPS / IPS tratante.',
      ],
    },
    {
      step: '02',
      title: 'Recuperación Integral Biopsicosocial',
      subtitle: 'Procesos psicosociales, hábitos y orientación socio-laboral',
      icon: TrendingUp,
      accent: 'border-l-emerald-600',
      tagColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      description:
        'La recuperación va más allá de la ausencia de síntomas. Supone reconstruir la identidad de la persona, sus habilidades de la vida diaria (autocuidado, higiene, rutinas) y actividades con propósito vocacional, físico o lúdico.',
      points: [
        'Talleres de entrenamiento para la vida cotidiana.',
        'Estimulación neurocognitiva y psicomotriz activa.',
        'Desarrollo de proyectos manuales, artísticos y expresivos.',
      ],
    },
    {
      step: '03',
      title: 'Reencuentro con la Sociedad sin Estigma',
      subtitle: 'Derechos humanos, dignidad, inclusión, amor y respeto irrestricto',
      icon: Users2,
      accent: 'border-l-teal-600',
      tagColor: 'text-teal-800 bg-teal-50 border-teal-200',
      description:
        'La OMS promueve la superación del aislamiento asilar tradicional. Los hogares protegidos proporcionan una comunidad afectiva donde se restituyen los derechos ciudadanos, promoviendo el respeto mutuo y la convivencia armónica.',
      points: [
        'Eliminación del aislamiento y del estigma psiquiátrico.',
        'Salidas estructuradas y vinculación comunitaria.',
        'Ambiente de convivencia cimentado en la empatía y la dignidad.',
      ],
    },
    {
      step: '04',
      title: 'Soporte Familiar y Redes de Cuidado',
      subtitle: 'Contención emocional, psicoeducación y descanso al cuidador',
      icon: HeartHandshake,
      accent: 'border-l-indigo-600',
      tagColor: 'text-indigo-800 bg-indigo-50 border-indigo-200',
      description:
        'El desgaste del cuidador primario («síndrome de burnout») es una realidad crítica en los hogares. Ofrecemos a las familias un respiro seguro y profesional, complementado con orientación y acompañamiento psicoeducativo.',
      points: [
        'Descanso real y sosiego emocional para los padres y hermanos.',
        'Psicoeducación sobre el manejo del diagnóstico en el hogar.',
        'Visitas programadas que fortalecen el lazo afectivo sano.',
      ],
    },
  ];

  return (
    <section id="enfoque-oms" className="py-14 lg:py-18 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <Globe2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Lineamientos de la OMS en Salud Mental</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Orientación en Salud Mental Comunitaria
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Adoptamos las directrices de la Organización Mundial de la Salud (OMS) para la atención integral 
            en salud mental, reemplazando el viejo paradigma del asilo por un modelo de <strong>Hogar Protegido</strong> centrado en la persona.
          </p>
        </div>

        {/* 4 Stages Grid - With Border Accent and Card Depth */}
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
              <strong> estructuras residenciales intermedias protegidas</strong> en el entorno comunitario, donde el residente conserve sus rutinas, su dignidad y un entorno afectivo seguro.
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