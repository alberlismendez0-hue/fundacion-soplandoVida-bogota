import React, { useState } from 'react';
import { 
  Stethoscope, 
  Building2, 
  Clock, 
  Brain, 
  Utensils, 
  ShieldCheck, 
  HeartHandshake, 
  Calendar, 
  Activity, 
  Palette, 
  Sparkles, 
  UserCheck, 
  Users, 
  HeartPulse, 
  Smile, 
  ClipboardCheck, 
  FileText,
  Shirt
} from 'lucide-react';

export default function Services({ onOpenSchedule }) {
  const [activeCategory, setActiveCategory] = useState('terapeuticos');

  const residentialServices = [
    {
      title: 'Alojamiento en infraestructura propia',
      desc: 'Habitaciones confortables, ventiladas y seguras en un predio adaptado especialmente para la tranquilidad y movilidad de los residentes en Bogotá.',
      icon: Building2,
      accent: 'text-sky-700 bg-sky-50 border-sky-100',
    },
    {
      title: 'Nutrición y alimentación balanceada',
      desc: 'Alimentación planificada según requerimientos médicos y esquemas farmacológicos de cada residente.',
      icon: Utensils,
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Servicios de lavandería',
      desc: 'Cuidado diario de prendas de vestir y lencería con rigurosos estándares de higiene personal.',
      icon: Shirt,
      accent: 'text-teal-700 bg-teal-50 border-teal-100',
    },
    {
      title: 'Limpieza y mantenimiento permanente',
      desc: 'Zonas comunes, comedores y áreas de descanso permanentemente atendidas para garantizar un entorno seguro y digno.',
      icon: Sparkles,
      accent: 'text-blue-700 bg-blue-50 border-blue-100',
    },
  ];

  const medicalTherapeuticServices = [
    {
      title: 'Seguimiento y acompañamiento interdisciplinario',
      desc: 'Monitoreo continuo del tratamiento psiquiátrico, psicológico, terapéutico ocupacional, nutricional y espiritual.',
      icon: Stethoscope,
      accent: 'text-sky-700 bg-sky-50 border-sky-100',
    },
    {
      title: 'Estimulación física, deportiva y recreativa',
      desc: 'Actividades programadas para fomentar la movilidad corporal, la salud física y el bienestar general.',
      icon: Activity,
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Actividades lúdicas y culturales',
      desc: 'Talleres de expresión, juegos estructurados y dinámicas culturales que estimulan la creatividad y convivencia.',
      icon: Palette,
      accent: 'text-teal-700 bg-teal-50 border-teal-100',
    },
    {
      title: 'Apoyo espiritual individual y grupal',
      desc: 'Espacios voluntarios de contención afectiva y espiritual que fortalecen la esperanza y la paz interior.',
      icon: Sparkles,
      accent: 'text-blue-700 bg-blue-50 border-blue-100',
    },
    {
      title: 'Reeducación y rehabilitación individual',
      desc: 'Planes individualizados orientados a recuperar habilidades funcionales, hábitos de autocuidado e independencia.',
      icon: UserCheck,
      accent: 'text-cyan-700 bg-cyan-50 border-cyan-100',
    },
    {
      title: 'Manejo de límites sociales con la familia',
      desc: 'Orientación para el restablecimiento de normas de convivencia social y pautas de interacción familiar saludable.',
      icon: Users,
      accent: 'text-sky-700 bg-sky-50 border-sky-100',
    },
    {
      title: 'Manejo de impulsos ante situaciones frustrantes',
      desc: 'Acompañamiento especializado para la contención y manejo de impulsos depresivos o agresivos ante eventos retadores.',
      icon: HeartPulse,
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Mitigación de los efectos negativos del diagnóstico',
      desc: 'Intervención integral orientada a reducir el impacto deteriorante y los efectos nocivos de las afecciones crónicas.',
      icon: ShieldCheck,
      accent: 'text-teal-700 bg-teal-50 border-teal-100',
    },
    {
      title: 'Minimización de crisis maníacas y/o depresivas',
      desc: 'Protocolos de atención temprana y entorno predecible que previenen descompensaciones y reducen episodios de crisis.',
      icon: Smile,
      accent: 'text-blue-700 bg-blue-50 border-blue-100',
    },
    {
      title: 'Interacción con personas de similares condiciones',
      desc: 'Socialización entre pares con edades e historiales análogos, favoreciendo la empatía, el sentido de pertenencia y cero estigma.',
      icon: HeartHandshake,
      accent: 'text-cyan-700 bg-cyan-50 border-cyan-100',
    },
    {
      title: 'Personal capacitado para acompañamiento',
      desc: 'Equipo humano operativo, asistencial y de enfermería con la vocación y formación requerida para el cuidado permanente.',
      icon: ClipboardCheck,
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Informe mensual general sobre evolución',
      desc: 'Reportes periódicos y transparentes enviados a las familias para dar seguimiento documentado a los avances de cada usuario.',
      icon: FileText,
      accent: 'text-sky-700 bg-sky-50 border-sky-100',
    },
  ];

  return (
    <section id="servicios" className="py-14 lg:py-18 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
            <span>Modelos de Atención Integral</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Servicios y Modalidades de Cuidado
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Combinamos la calidez de un auténtico hogar con el rigor de un equipo interdisciplinario 
            especializado en el seguimiento, rehabilitación y mantenimiento integral del paciente crónico.
          </p>
        </div>

        {/* Dynamic Category Selector */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('terapeuticos')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border ${
              activeCategory === 'terapeuticos'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/15 scale-[1.01]'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/90'
            }`}
          >
            <Stethoscope className={`w-4 h-4 ${activeCategory === 'terapeuticos' ? 'text-sky-300' : 'text-slate-500'}`} />
            <span>Servicios Terapéuticos (12 Áreas)</span>
          </button>

          <button
            onClick={() => setActiveCategory('residenciales')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border ${
              activeCategory === 'residenciales'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/15 scale-[1.01]'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/90'
            }`}
          >
            <Building2 className={`w-4 h-4 ${activeCategory === 'residenciales' ? 'text-emerald-300' : 'text-slate-500'}`} />
            <span>Servicios Logísticos y Residenciales</span>
          </button>
        </div>

        {/* Vista Terapéutica */}
        {activeCategory === 'terapeuticos' && (
          <div>
            {/* Tarjeta de Presentación Principal */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-2">
                    Acompañamiento Interdisciplinario Continuo
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    Rehabilitación, Contención y Desarrollo Humano
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                    Nuestro equipo interdisciplinario (Psiquiatría, Psicología, Terapia Ocupacional, Enfermería y Apoyo Espiritual) trabaja de forma articulada para brindar un apoyo constante frente al mantenimiento de la calidad de vida y estabilidad emocional.
                  </p>
                  <div className="flex flex-wrap gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-700" />
                      Enfermería Permanente
                    </span>
                    <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                      <Brain className="w-3.5 h-3.5 text-emerald-700" />
                      Apoyo Psiquiátrico & Psicológico
                    </span>
                    <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                      <HeartHandshake className="w-3.5 h-3.5 text-teal-700" />
                      Acompañamiento a Familias
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                    <img
                      src="/images/terapia.jpg"
                      alt="Terapia y acompañamiento interdisciplinario en Soplando Vida"
                      className="w-full h-64 sm:h-72 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de los 12 Servicios Terapéuticos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {medicalTherapeuticServices.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white hover:bg-slate-50/70 rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-3.5 ${srv.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                        {srv.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Vista Residencial */}
        {activeCategory === 'residenciales' && (
          <div>
            {/* Feature Showcase Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
                    Comodidad, Nutrición y Convivencia
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    Un Verdadero Hogar: Calidez, Cuidados y Serenidad
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                    Nuestras instalaciones cuentan con infraestructura propia conformada por distintas áreas (comedor, salas de estar, habitaciones y espacios recreativos) diseñadas con las comodidades y el personal idóneo para albergar dignamente a quienes necesitan de nuestro apoyo.
                  </p>
                  <div className="flex flex-wrap gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-emerald-700" />
                      Alimentación Balanceada
                    </span>
                    <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
                      Infraestructura Propia en Bogotá
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                    <img
                      src="/images/residencia.jpg"
                      alt="Espacios residenciales en el Hogar Protegido Soplando Vida"
                      className="w-full h-64 sm:h-72 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de Servicios Residenciales con Iconos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {residentialServices.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white hover:bg-slate-50/70 rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-3.5 ${srv.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-2">
                        {srv.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tarjeta de Agendamiento de Visitas */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Visitas Guiadas a Nuestras Instalaciones</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              ¿Deseas conocer la sede y orientarte con el equipo profesional?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Coordinamos visitas presenciales para evaluar el perfil del usuario y resolver cualquier inquietud familiar con total discreción y calidez.
            </p>
          </div>
          <button
            onClick={onOpenSchedule}
            className="shrink-0 px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
          >
            Agendar Visita Guiada
          </button>
        </div>

      </div>
    </section>
  );
}