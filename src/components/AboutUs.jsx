import React, { useState } from 'react';
import { Target, Compass, Award, HeartHandshake } from 'lucide-react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('mision');

  const content = {
    mision: {
      title: 'Misión',
      icon: Target,
      text: 'Ser el puente idóneo que tiende sus brazos para apoyar el esfuerzo de las familias y los profesionales de la salud, en la búsqueda de la reducción, control y tratamiento de los síntomas y efectos nocivos que atentan contra las personas que presentan problemas crónicos de orden afectivo, cognitivo, adictivo como parte de un diagnostico dual, entre otros.',
    },
    vision: {
      title: 'Visión',
      icon: Compass,
      text: 'SOPLANDO VIDA FUNDACIÓN SOCIAL se constituirá en el 2025 como un equipo visionario especializado en la prestación de los servicios complementarios para el paciente crónico en salud mental, que se esmera en el cuidado de los usuarios que le han sido encomendados, haciendo el seguimiento respectivo y brindando apoyo para que éstos reciban y cumplan con las terapias ordenadas por el equipo médico tratante, en las áreas afectiva, cognitiva y adictiva respectivamente.',
    },
    calidad: {
      title: 'Política de Calidad',
      icon: Award,
      text: 'Inducir hacia la correcta satisfacción de las verdaderas necesidades de las personas en recuperación que se encuentran a nuestro cuidado. Nuestro compromiso para lograrlo será siempre mantener una línea de altos objetivos y mejoras, incorporando excelencia en el aspecto humano, planta física y ambiental, mediante la prestación de servicios de calidad y logística.',
    },
  };

  const ActiveIcon = content[activeTab].icon;

  return (
    <section id="quienes-somos" className="py-14 lg:py-18 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Cabecera centrada */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-sky-600" />
            <span>Nuestra Identidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Quiénes Somos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reconocida con el NIT número 900.942.377-8, SOPLANDO VIDA FUNDACIÓN SOCIAL se constituye en una entidad sin ánimo de lucro, que cuenta con su respectivo registro ante la Cámara de Comercio de Bogotá.
          </p>
        </div>

        {/* Botones de navegación de pestañas con el diseño original */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('mision')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
              activeTab === 'mision'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Target className="w-4 h-4 text-sky-400" />
            <span>Misión</span>
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
              activeTab === 'vision'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Visión</span>
          </button>

          <button
            onClick={() => setActiveTab('calidad')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
              activeTab === 'calidad'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Award className="w-4 h-4 text-sky-400" />
            <span>Política de Calidad</span>
          </button>
        </div>

        {/* Tarjeta de visualización con el diseño y caja original */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-sky-100/80 text-sky-700 flex items-center justify-center mb-6">
              <ActiveIcon className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {content[activeTab].title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {content[activeTab].text}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}