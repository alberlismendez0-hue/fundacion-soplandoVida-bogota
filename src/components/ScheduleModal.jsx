import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Calendar, MapPin, Clock } from 'lucide-react';

export default function ScheduleModal({ isOpen, onClose }) {
  const [modalType, setModalType] = useState('presencial');
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    jornada: 'mañana',
    motivo: 'Estancia Residencial Integral (Cuidado 24/7)',
    observaciones: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppScheduleLink = () => {
    const msg = `Hola Soplando Vida, deseo agendar una ${
      modalType === 'presencial' ? 'visita presencial a la sede' : 'videollamada informativa'
    }. Mi nombre es ${form.nombre || 'un familiar'}, teléfono: ${form.telefono || 'sin especificar'}. Motivo de consulta: ${form.motivo}. Fecha tentativa: ${form.fecha || 'lo antes posible'}, jornada: ${form.jornada}. Observaciones: ${form.observaciones || 'Ninguna'}`;
    return `https://wa.me/573208554452?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div>
            <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block mb-1">
              Hogar Protegido Soplando Vida &bull; Bogotá
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Agendar Visita u Orientación
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Cra 72 Bis No. 75 A-35, Bogotá &bull; Tel: (601) 621 4798
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Solicitud Recibida con Éxito
              </h4>
              <p className="text-xs text-slate-600 mb-5 max-w-sm mx-auto leading-relaxed">
                Nos comunicaremos al número proporcionado para confirmar el horario disponible y orientarte en el ingreso.
              </p>

              <div className="space-y-2">
                <a
                  href={getWhatsAppScheduleLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmar por WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2 text-slate-600 hover:text-slate-900 text-xs transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Type Switcher */}
              <div className="flex gap-2 p-1 bg-slate-100 rounded-xl mb-4">
                <button
                  type="button"
                  onClick={() => setModalType('presencial')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    modalType === 'presencial'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Visita Presencial a Sede
                </button>
                <button
                  type="button"
                  onClick={() => setModalType('virtual')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    modalType === 'virtual'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Llamada / Videollamada
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre completo del familiar o acudiente *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Ej. Gloria Ramírez"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-700 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Teléfono celular o WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    placeholder="Ej. 320 855 4452"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-700 text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Fecha tentativa
                    </label>
                    <input
                      type="date"
                      value={form.fecha}
                      onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-700 text-xs text-slate-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Jornada preferida
                    </label>
                    <select
                      value={form.jornada}
                      onChange={(e) => setForm({ ...form, jornada: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-700 text-xs text-slate-700 bg-white"
                    >
                      <option value="mañana">Mañana (9:00 - 11:30 AM)</option>
                      <option value="tarde">Tarde (2:00 - 5:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Motivo o interés de atención
                  </label>
                  <select
                    value={form.motivo}
                    onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-700 text-xs text-slate-700 bg-white"
                  >
                    <option value="Estancia Residencial Integral (Cuidado 24/7)">Estancia Residencial Integral (Cuidado 24/7)</option>
                    <option value="Rehabilitación Psicosocial y Terapia Ocupacional">Rehabilitación Psicosocial y Terapia Ocupacional</option>
                    <option value="Acompañamiento Post-Hospitalario">Acompañamiento Post-Hospitalario</option>
                    <option value="Orientación a Familias y Respiro al Cuidador">Orientación a Familias y Respiro al Cuidador</option>
                    <option value="Visita Guiada Presencial">Visita Guiada Presencial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Notas adicionales (opcional)
                  </label>
                  <input
                    type="text"
                    value={form.observaciones}
                    onChange={(e) => setForm({ ...form, observaciones: e.target.value })}
                    placeholder="Preguntas sobre instalaciones, alimentación, etc."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-700 text-xs"
                  />
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-sky-800 hover:bg-sky-900 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    Confirmar Solicitud de Visita
                  </button>

                  <a
                    href={getWhatsAppScheduleLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>O coordinar directamente en WhatsApp</span>
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
