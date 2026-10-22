import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Copy,
  Check,
  ShieldCheck
} from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    parentesco: '',
    telefono: '',
    email: '',
    diagnostico: 'Esquizofrenia',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const createWhatsAppLink = () => {
    const text = `Hola Fundación Soplando Vida, mi nombre es ${formData.nombre || 'un familiar'} (${formData.parentesco || 'Acudiente'}). Me pongo en contacto para consultar sobre estancia para paciente con diagnóstico de ${formData.diagnostico}. Mensaje: ${formData.mensaje || 'Deseo coordinar una visita y conocer tarifas.'}`;
    return `https://wa.me/573208554452?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative bg-slate-50">
      <section id="contacto" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <MessageCircle className="w-3.5 h-3.5 text-sky-600" />
              <span>Atención a Familias y Redes de Apoyo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contacto, Ubicación y Solicitud de Información
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Sabemos lo crucial que es tomar la mejor decisión para tu ser querido. 
              Comunícate con nuestro equipo psicosocial para recibir orientación con discreción y calidez humana.
            </p>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Left Column: Official Info */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Address */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Dirección Sede Bogotá
                  </span>
                  <p className="text-slate-900 font-bold text-base">Cra 72 Bis No. 75 A-35</p>
                  <p className="text-xs text-slate-500 mt-0.5">Barrio Santa María del Lago / Boyacá Real, Bogotá</p>
                  <a
                    href="https://maps.google.com/?q=Cra+72+Bis+No.+75+A-35+Bogota"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-sky-800 font-semibold hover:underline mt-2.5"
                  >
                    <span>Ver ubicación en Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <button
                  onClick={() => handleCopy('Cra 72 Bis No. 75 A-35, Bogotá', 'dir')}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Copiar dirección"
                >
                  {copiedField === 'dir' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                    Celular y WhatsApp Oficial
                  </span>
                  <p className="text-slate-900 font-bold text-base">320 855 4452</p>
                  <p className="text-xs text-slate-500 mt-0.5">Atención directa para consultas y disponibilidad de cupos</p>
                  <a
                    href="https://wa.me/573208554452?text=Hola,%20deseo%20comunicarme%20con%20el%20Hogar%20Protegido%20Soplando%20Vida"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold hover:underline mt-2.5"
                  >
                    <span>Iniciar chat de WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <button
                  onClick={() => handleCopy('3208554452', 'wa')}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Copiar número"
                >
                  {copiedField === 'wa' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Landline */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Teléfono Fijo Sede
                  </span>
                  <a href="tel:576016214798" className="text-slate-900 font-bold text-base hover:text-sky-800 transition-colors block">
                    (601) 621 4798
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Horario administrativo: Lun a Sáb 8:00 AM - 5:30 PM</p>
                </div>
                <button
                  onClick={() => handleCopy('6016214798', 'fijo')}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Copiar teléfono"
                >
                  {copiedField === 'fijo' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Correo Electrónico Institucional
                </span>
                <a href="mailto:soplandovidafs@gmail.com" className="text-sm font-semibold text-sky-800 hover:underline block truncate">
                  soplandovidafs@gmail.com
                </a>
                <p className="text-xs text-slate-500 mt-1">Sitio web oficial: www.fundacionsoplandovida.com</p>
              </div>

            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              {isSuccess ? (
                <div className="py-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Solicitud Enviada con Éxito
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
                    Gracias, {formData.nombre}. Un profesional de Soplando Vida se comunicará contigo para brindarte orientación.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Continuar por WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Formulario de Consulta o Visita
                  </h3>
                  <p className="text-xs text-slate-500 mb-5">
                    Diligencia tus datos para coordinar una llamada o una visita presencial a nuestras instalaciones.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Nombre completo del solicitante *
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Ej. Carlos Mendoza"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Parentesco o relación con el paciente *
                        </label>
                        <input
                          type="text"
                          name="parentesco"
                          required
                          value={formData.parentesco}
                          onChange={handleChange}
                          placeholder="Ej. Hermano(a), Padre, Acudiente"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800 text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Teléfono / WhatsApp de contacto *
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="Ej. 310 123 4567"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Correo electrónico (opcional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="correo@ejemplo.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Diagnóstico principal o motivo de consulta *
                      </label>
                      <select
                        name="diagnostico"
                        value={formData.diagnostico}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800 text-xs bg-white text-slate-700"
                      >
                        <option value="Esquizofrenia">Esquizofrenia</option>
                        <option value="Trastorno Afectivo Bipolar (TAB)">Trastorno Afectivo Bipolar (TAB)</option>
                        <option value="Trastorno Obsesivo Compulsivo (TOC)">Trastorno Obsesivo Compulsivo (TOC)</option>
                        <option value="Depresión Mayor Crónica">Depresión Mayor Crónica</option>
                        <option value="Patología Dual">Patología Dual</option>
                        <option value="Trastornos Afectivos y Cognitivos">Trastornos Afectivos y Cognitivos</option>
                        <option value="Otro diagnóstico en proceso">Otro diagnóstico en proceso de valoración</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Comentarios adicionales o disponibilidad para visita
                      </label>
                      <textarea
                        name="mensaje"
                        rows={3}
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Indícanos brevemente la situación actual de tu familiar o tus preguntas..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800 text-xs resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors cursor-pointer disabled:opacity-50 shadow-xs"
                      >
                        {isSubmitting ? 'Enviando solicitud...' : 'Enviar Solicitud'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

          </div>

          {/* Embedded Map Card with Elevation */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Ubicación en Bogotá &bull; Cra 72 Bis No. 75 A-35
                </h4>
                <p className="text-xs text-slate-500">
                  Sector residencial accesible y tranquilo en Engativá, noroccidente de Bogotá.
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Cra+72+Bis+No.+75+A-35+Bogota"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-sky-800 hover:underline"
              >
                Abrir en Google Maps / Waze
              </a>
            </div>

            <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
              <iframe
                title="Ubicación Hogar Protegido Soplando Vida"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.626786045437!2d-74.09543162402126!3d4.695627795279482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b20d39e3cb5%3A0x6b49e831fbb70e79!2sCra.%2072%20Bis%20%2375a-35%2C%20Engativ%C3%A1%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* Wave transition into Footer (fillColor matches slate-900: #0F172A) */}
      <WaveDivider fillColor="#0F172A" />
    </div>
  );
}
