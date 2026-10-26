import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      title: "«Dignidad, atención profesional y paz espiritual»",
      quote:
        "Más de 20 años acompañando a nuestro hijo y hermano en el padecimiento de una enfermedad psiquiátrica. Los dos últimos años presenciamos con angustia indescriptible su degradación a niveles de indigencia, noches en vela, temor por su vida, ¡mucho dolor! Hasta cuando Dios nos presentó Soplando Vida Fundación Social, un verdadero hogar protegido que brinda toda la atención necesaria tanto a nivel profesional como espiritual. ¡Mil gracias y bendiciones a tan gran equipo!",
      author: "Familia Vera Fernández",
      role: "Familiares de residente en la sede"
    },
    {
      title: "«Un entorno seguro atendido por personas capaces»",
      quote:
        "Muy agradecida con la labor que hace la fundación Soplando Vida teniendo en cuenta que en Colombia hace mucha falta instituciones como esta para apoyar la recuperación de enfermos mentales; es saber que nuestro familiar, amigo, vecino, está protegido y siendo atendido y acogido por personas dispuestas, capaces y con la mejor disposición cada día. ¡Por siempre Gracias!",
      author: "Jimena Castillo Rojas",
      role: "Acudiente de residente"
    }
  ];

  return (
    <section id="testimonios" className="py-14 lg:py-18 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado centrado */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-emerald-600" />
            <span>Voces de Familias y Redes de Apoyo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Testimonios y Experiencias
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            El compromiso de nuestro equipo humano se refleja en la tranquilidad de las familias y el bienestar integral de cada residente.
          </p>
        </div>

        {/* Grid de 2 columnas balanceadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Estrellas e icono de cita */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-sky-200" />
                </div>

                {/* Título y Testimonio */}
                <div className="bg-sky-50/70 text-sky-900 text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl mb-4">
                  {item.title}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Pie de la tarjeta con autor */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role}
                  </p>
                </div>
                <span className="self-start sm:self-auto text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}