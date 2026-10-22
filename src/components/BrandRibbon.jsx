import React from 'react';
import { HeartHandshake, ShieldCheck, Clock, Award } from 'lucide-react';

export default function BrandRibbon() {
  const items = [
    {
      icon: Clock,
      title: "Atención Continua 24/7",
      subtitle: "Cuidado y enfermería permanente",
      accent: "text-emerald-400"
    },
    {
      icon: HeartHandshake,
      title: "Modelo Biopsicosocial",
      subtitle: "Acompañamiento clínico integral",
      accent: "text-sky-400"
    },
    {
      icon: ShieldCheck,
      title: "Entorno Protegido",
      subtitle: "Instalaciones seguras y dignas",
      accent: "text-teal-400"
    },
    {
      icon: Award,
      title: "Entidad Registrada",
      subtitle: "NIT: 900.942.377-8 · Bogotá",
      accent: "text-emerald-400"
    }
  ];

  return (
    <div className="relative bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 text-white border-y border-sky-900/40 shadow-sm overflow-hidden">
      
      {/* Línea superior con gradiente de color del logotipo (Verde Lima a Azul Cielo) */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-sky-400 to-teal-300" />

      {/* Contenedor de elementos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 text-left border-l border-white/10 pl-4 first:border-l-0"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Icon className={`w-5 h-5 ${item.accent}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Línea inferior sutil */}
      <div className="h-[1px] w-full bg-white/10" />
    </div>
  );
}