import React, { useState } from 'react';
import { Target, Compass, Award, Building, HeartHandshake } from 'lucide-react';

export default function AboutUs({ onOpenSchedule }) {
  const [activeTab, setActiveTab] = useState('mision');

  const tabs = [
    { id: 'mision', label: 'Misión', icon: Target },
    { id: 'vision', label: 'Visión', icon: Compass },
    { id: 'calidad', label: 'Política de Calidad', icon: Award },
  ];

  return (
    <section id="quienes-somos" className="py-14 lg:py-18 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado centrado */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-sky-600" />
            <span>Nuestra Identidad</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Quiénes Somos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reconocida con el NIT número 900.942.377-8, SOPLANDO VIDA FUNDACIÓN SOCIAL se constituye en una entidad sin ánimo de lucro, que cuenta con su respectivo registro ante la Cámara de Comercio de Bogotá.
          </p>
        </div>

        {/* Pestañas de Navegación centradas */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Contenido de la Pestaña Activa con relieve */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'mision' && (
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs text-center sm:text-left transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-5 mx-auto sm:mx-0 shadow-2xs">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Misión
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Ser el puente idóneo que tiende sus brazos para apoyar el esfuerzo de las familias y los profesionales de la salud, en la búsqueda de la reducción, control y tratamiento de los síntomas y efectos nocivos que atentan contra las personas que presentan problemas crónicos de orden afectivo, cognitivo, adictivo como parte de un diagnostico dual, entre otros.
              </p>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs text-center sm:text-left transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5 mx-auto sm:mx-0 shadow-2xs">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Visión
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                SOPLANDO VIDA FUNDACIÓN SOCIAL se constituirá en el 2025 como un equipo visionario especializado en la prestación de los servicios complementarios para el paciente crónico en salud mental, que se esmera en el cuidado de los usuarios que le han sido encomendados, haciendo el seguimiento respectivo y brindando apoyo para que éstos reciban y cumplan con las terapias ordenadas por el equipo médico tratante, en las áreas afectiva, cognitiva y adictiva respectivamente.
              </p>
            </div>
          )}

          {activeTab === 'calidad' && (
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs text-center sm:text-left transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-5 mx-auto sm:mx-0 shadow-2xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Política de Calidad
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Inducir hacia la correcta satisfacción de las verdaderas necesidades de las personas en recuperación que se encuentran a nuestro cuidado. Nuestro compromiso para lograrlo será siempre mantener una línea de altos objetivos y mejoras, incorporando excelencia en el aspecto humano, planta física y ambiental, mediante la prestación de servicios de calidad y logística.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}