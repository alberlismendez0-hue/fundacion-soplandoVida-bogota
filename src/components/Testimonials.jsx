import React from 'react';
import { Star, Heart, Quote, Sparkles, BookOpen } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Familia Vera Fernández',
      relation: 'Familiares de residente con Esquizofrenia',
      duration: 'Residente desde hace 3 años',
      quote:
        'Llevábamos más de 20 años de lucha incansable, tocando puertas en clínicas donde solo veían al paciente como una cifra o una medicación más. En Soplando Vida encontramos verdadera dignidad, protección profesional permanente y una paz espiritual que le devolvió el sosiego a nuestro hogar. Ver a nuestro hermano sonreír y sentirse en casa no tiene precio.',
      highlight: '«Dignidad, protección profesional y paz tras más de 20 años de lucha»',
    },
    {
      name: 'Jimena Castillo Rojas',
      relation: 'Acudiente de paciente con Trastorno Bipolar & Afectivo',
      duration: 'Residente desde hace 2 años',
      quote:
        'Soplando Vida es una institución modelo y necesaria en Colombia. El trato empático de las terapeutas y la supervisión de enfermería han logrado estabilizar episodios que antes requerían urgencias cada tres meses. Lo más hermoso es que no lo etiquetan por su diagnóstico, sino que lo abrazan como persona digna.',
      highlight: '«Una institución modelo que no etiqueta, sino que abraza al ser humano»',
    },
    {
      name: 'Dra. Martha Patricia Gómez',
      relation: 'Médico Psiquiatra y Docente Universitaria',
      duration: 'Especialista en Salud Mental',
      quote:
        'Como especialista en salud mental, recomiendo con plena confianza el hogar protegido Soplando Vida. Es admirable la disciplina en el suministro de la medicación, el seguimiento de evolución mensual que entregan a las familias y los talleres de terapia ocupacional que mantienen activo el funcionamiento cognitivo de los residentes.',
      highlight: '«Rigor clínico, excelente adherencia farmacológica y seguimiento transparente»',
    },
  ];

  const scriptureQuotes = [
    {
      text: '«Porque yo te devolveré la salud y sanaré tus heridas, dice el Señor.»',
      reference: 'Jeremías 30:17',
      theme: 'Promesa de Sanidad y Restauración',
    },
    {
      text: '«Ven de los cuatro vientos, oh aliento de vida, y sopla sobre estos cuerpos para que revivan y se pongan en pie.»',
      reference: 'Ezequiel 37:9',
      theme: 'El Aliento de Vida que inspira nuestra Fundación',
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-sky-50/50 via-slate-50 to-white">
      <section id="testimonios" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <Heart className="w-3.5 h-3.5 text-sky-600" />
              <span>Voces de Familias y Profesionales</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Testimonios y Experiencias de Acompañamiento
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              La mayor satisfacción de nuestro equipo es presenciar la estabilidad emocional de cada residente 
              y el alivio sincero que experimentan sus seres queridos.
            </p>
          </div>

          {/* Testimonials Cards Grid - Elevated & Warm */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-sky-200" />
                  </div>

                  <p className="text-xs font-bold text-sky-900 bg-sky-50/80 px-2.5 py-1 rounded-md mb-3.5 inline-block">
                    {t.highlight}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500">{t.relation}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {t.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Citas de Fe y Esperanza - Editorial & Dignified */}
          <div className="bg-slate-900 text-slate-200 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-md">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                <span>Inspiración Espiritual y Humana</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                El Sentido de «Soplando Vida»
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Nuestra labor social se sustenta en la convicción de que ninguna vida pierde su valor ante la dificultad, 
                y que el amor, la paciencia y el cuidado constante restauran la esperanza.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scriptureQuotes.map((sq, i) => (
                <div
                  key={i}
                  className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
                      {sq.theme}
                    </span>
                    <p className="text-sm sm:text-base text-white font-serif italic leading-relaxed mb-4">
                      {sq.text}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-700 text-xs font-mono text-sky-300">
                    {sq.reference}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Wave transition into ContactSection (#contacto, which has bg-slate-50) */}
      <WaveDivider fillColor="#F8FAFC" />
    </div>
  );
}
