import React, { useState } from 'react';
import { Stethoscope, Building2, Clock, Brain, Utensils, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function Services({ onOpenSchedule }) {
  const [activeCategory, setActiveCategory] = useState('terapeuticos');

  const residentialServices = [
    {
      title: 'Alojamiento en infraestructura propia',
      desc: 'Habitaciones confortables, ventiladas y seguras en un predio adaptado especialmente para la tranquilidad y movilidad de los residentes en Bogotá.',
    },
    {
      title: 'Nutrición y alimentación balanceada',
      desc: 'Cinco tiempos de comida diarios planificados según los requerimientos nutricionales específicos y los esquemas farmacológicos de cada residente.',
    },
    {
      title: 'Lavandería, limpieza y bioseguridad',
      desc: 'Servicio diario de aseo personal, lavado y cuidado de prendas, con protocolos rigurosos de desinfección en todas las áreas de convivencia.',
    },
    {
      title: 'Mantenimiento y zonas verdes',
      desc: 'Zonas comunes, jardines interiores y salas de descanso permanentemente cuidadas para propiciar un entorno relajante y hogareño.',
    },
  ];

  const medicalTherapeuticServices = [
    {
      title: 'Seguimiento psiquiátrico continuo',
      desc: 'Valoraciones periódicas, ajuste cuidadoso de esquemas psicofarmacológicos y enlace directo con especialistas e IPS tratantes.',
    },
    {
      title: 'Atención psicológica individual y grupal',
      desc: 'Psicoterapia orientada a la expresión emocional, resolución de conflictos, resignificación de vivencias y fortalecimiento del autoconcepto.',
    },
    {
      title: 'Terapia ocupacional y talleres cognitivos',
      desc: 'Entrenamiento en actividades de la vida diaria (AVD), estimulación cognitiva, motricidad fina y proyectos de expresión artística.',
    },
    {
      title: 'Enfermería permanente 24 horas',
      desc: 'Administración y custodia estricta de medicamentos, control de signos vitales y atención oportuna a contingencias médicas.',
    },
    {
      title: 'Actividades físicas, lúdicas y culturales',
      desc: 'Caminatas, ejercicios suaves, musicoterapia, lectura compartida y espacios recreativos que estimulan la mente y el cuerpo.',
    },
    {
      title: 'Reeducación de límites y manejo de crisis',
      desc: 'Acompañamiento especializado para el autocontrol de impulsos, prevención de recaídas y contención no invasiva en momentos de desestabilización.',
    },
    {
      title: 'Apoyo espiritual voluntario',
      desc: 'Acompañamiento en valores de fe y esperanza para los residentes que lo deseen, con absoluto respeto a las convicciones de cada familia.',
    },
    {
      title: 'Informes mensuales a familiares',
      desc: 'Reportes periódicos y transparentes para mantener a la familia enterada del estado de salud, evolución y bienestar de su familiar.',
    },
  ];

  return (
    <div className="relative bg-slate-50">
      <section id="servicios" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
              <span>Modelos de Atención Integral</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Servicios y Modalidades de Cuidado
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Combinamos la serenidad de una residencia familiar con el rigor de un equipo interdisciplinario 
              de salud mental para garantizar un cuidado humanizado, seguro y continuo.
            </p>
          </div>

          {/* Clean Selector */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            <button
              onClick={() => setActiveCategory('terapeuticos')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border shadow-2xs ${
                activeCategory === 'terapeuticos'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Stethoscope className="w-4 h-4 text-sky-400" />
              <span>Servicios Terapéuticos y Médicos</span>
            </button>

            <button
              onClick={() => setActiveCategory('residenciales')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border shadow-2xs ${
                activeCategory === 'residenciales'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Servicios Residenciales y Logísticos</span>
            </button>
          </div>

          {/* Therapeutic View */}
          {activeCategory === 'terapeuticos' && (
            <div>
              {/* Feature Showcase Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-2">
                      Abordaje Interdisciplinario Continuo
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      Psicoterapia, Terapia Ocupacional y Talleres Cognitivos
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                      A través de la estimulación artística, cognitiva y emocional, guiada por terapeutas ocupacionales 
                      y psicólogos clínicos, promovemos la reapropiación del espacio, la expresión libre y la tranquilidad.
                    </p>
                    <div className="flex flex-wrap gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-sky-700" />
                        Enfermería 24 Horas
                      </span>
                      <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                        <Brain className="w-3.5 h-3.5 text-emerald-700" />
                        Seguimiento Psiquiátrico
                      </span>
                      <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                        <HeartHandshake className="w-3.5 h-3.5 text-teal-700" />
                        Contención Biopsicosocial
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <img
                      src="/images/terapia.jpg"
                      alt="Taller de arte y terapia ocupacional en Soplando Vida"
                      className="w-full h-64 sm:h-72 object-cover rounded-xl border border-slate-200 shadow-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Grid of Medical Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {medicalTherapeuticServices.map((srv, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-2">
                        {srv.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Residential View */}
          {activeCategory === 'residenciales' && (
            <div>
              {/* Feature Showcase Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block mb-2">
                      Comodidad, Higiene y Convivencia
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      Un Verdadero Hogar: Calidez, Nutrición y Serenidad
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                      Nuestras instalaciones están concebidas para alejar la sensación fría de un hospital tradicional. 
                      Espacios iluminados, jardines interiores, comedores compartidos y dormitorios confortables que brindan seguridad y sosiego.
                    </p>
                    <div className="flex flex-wrap gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                        <Utensils className="w-3.5 h-3.5 text-emerald-700" />
                        Alimentación Balanceada 5 Tiempos
                      </span>
                      <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
                        Infraestructura Protegida en Bogotá
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <img
                      src="/images/residencia.jpg"
                      alt="Espacios residenciales y comedores iluminados en Soplando Vida"
                      className="w-full h-64 sm:h-72 object-cover rounded-xl border border-slate-200 shadow-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Grid of Residential Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {residentialServices.map((srv, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-2">
                        {srv.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schedule Consultation Callout Card */}
          <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                ¿Deseas conocer nuestras instalaciones y evaluar el perfil de tu familiar?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Coordinamos visitas guiadas con el equipo médico para orientarte y responder todas tus preguntas.
              </p>
            </div>
            <button
              onClick={onOpenSchedule}
              className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-sky-800 hover:bg-sky-900 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
            >
              Agendar Visita Guiada
            </button>
          </div>

        </div>
      </section>

      {/* Organic Wave Transition into MentalHealthWHO (#enfoque-oms, which has bg-white) */}
      <WaveDivider fillColor="#FFFFFF" />
    </div>
  );
}
