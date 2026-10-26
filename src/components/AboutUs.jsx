import React, { useState } from 'react';
import { Target, Compass, Award, HeartHandshake, ShieldCheck, FileCheck, Building } from 'lucide-react';

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
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-sky-600" />
            <span>Nuestra Identidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quiénes Somos
          </h2>
        </div>

        {/* La descripción dividida en 3 cuadritos de acreditación */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Identificación Tributaria</span>
              <p className="text-xs sm:text-sm font-bold text-slate-800">NIT 900.942.377-8</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Personería Jurídica</span>
              <p className="text-xs sm:text-sm font-bold text-slate-800">Entidad sin ánimo de lucro</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Acreditación Oficial</span>
              <p className="text-xs sm:text-sm font-bold text-slate-800">Cámara de Comercio de Bogotá</p>
            </div>
          </div>
        </div>

        {/* Botones de navegación de pestañas */}
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

        {/* Tarjeta del contenido centrado */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xs text-center flex flex-col items-center">
            
            <div className="w-14 h-14 rounded-2xl bg-sky-100/90 text-sky-700 flex items-center justify-center mb-5 shadow-2xs">
              <ActiveIcon className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {content[activeTab].title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {content[activeTab].text}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}