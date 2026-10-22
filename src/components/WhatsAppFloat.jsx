import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <a
        href="https://wa.me/573208554452?text=Hola,%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n%20sobre%20el%20Hogar%20Protegido%20Soplando%20Vida"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
        aria-label="Contactar a Soplando Vida por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
