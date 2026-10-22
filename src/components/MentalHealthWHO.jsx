import React from 'react';
import { Stethoscope, UserCheck, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function MentalHealthWHO() {
  const pilares = [
    {
      title: "1. Atención de la salud mental",
      desc: "Detección en fases tempranas, diagnóstico, suministro oportuno de medicamentos prescritos y atención ante crisis u hospitalización.",
      icon: Stethoscope
    },
    {
      title: "2. Recuperación Integral",
      desc: "Procesos psicoeducativos orientados al desarrollo de capacidades innatas y reeducación para la incorporación social y comunitaria.",
      icon: UserCheck
    },
    {
      title: "3. Reencuentro Social",
      desc: "Eliminación del estigma y discriminación, integración social activa, defensa de derechos humanos y respeto recíproco.",
      icon: HeartHandshake
    },
    {
      title: "4. Soporte Familiar y Redes",
      desc: "Apoyo integral al entorno familiar, equipo humano permanente capacitado y esquemas de provisión de relevo para cuidadores.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="enfoque-oms" className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Cabecera limpia y continua */}
        <div className="max-w-3xl mb-10 text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            LINEAMIENTOS DE LA OMS EN SALUD MENTAL[cite: 3]
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Orientación en Salud Mental Comunitaria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Adoptamos las directrices de la Organización Mundial de la Salud (OMS) para la atención integral en salud mental, reemplazando el viejo paradigma del asilo por un modelo de <strong>Hogar Protegido</strong> centrado en la dignidad, el acompañamiento continuo y un entorno afectivo seguro.
          </p>
        </div>

        {/* Grid de 4 pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((pilar, idx) => {
            const Icon = pilar.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4 border border-sky-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pilar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}