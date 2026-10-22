import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import TrustBanner from './components/TrustBanner';
import Objectives from './components/Objectives';
import Services from './components/Services';
import MentalHealthWHO from './components/MentalHealthWHO';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScheduleModal from './components/ScheduleModal';

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const handleOpenSchedule = () => {
    setIsScheduleOpen(true);
  };

  const handleCloseSchedule = () => {
    setIsScheduleOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-sky-800 selection:text-white">
      {/* 1. Thin Top Bar & Navbar */}
      <Navbar onOpenSchedule={handleOpenSchedule} />

      {/* Main Page Flow with Volume, Contrast & Hermetic Spacing */}
      <main className="flex-grow">
        {/* 2. Hero Section (Luminous, Brand Ambience, Clean Photography) */}
        <Hero onOpenSchedule={handleOpenSchedule} />

        {/* 3. Quiénes Somos (Misión, Visión, Calidad in Dynamic Tabs) */}
        <AboutUs onOpenSchedule={handleOpenSchedule} />

        {/* 4. Cintillo Intermedio de Autoridad y Fe (Deep Navy from-slate-950 via-sky-950) */}
        <TrustBanner onOpenSchedule={handleOpenSchedule} />

        {/* 5. Nuestros 6 Objetivos Institucionales (Relief Cards & Color Accents) */}
        <Objectives />

        {/* 6. Servicios y Modalidades de Cuidado (Logísticos & Médicos) */}
        <Services onOpenSchedule={handleOpenSchedule} />

        {/* 7. Orientación en Salud Mental Comunitaria (Lineamientos OMS) */}
        <MentalHealthWHO />

        {/* 8. Testimonios y Citas Inspiracionales (Warm Gradient & Faith Quotes) */}
        <Testimonials />

        {/* 9. Contacto, Ubicación y Formulario (1-Click Copy & Google Maps) */}
        <ContactSection />
      </main>

      {/* 10. Footer Institucional */}
      <Footer onOpenSchedule={handleOpenSchedule} />

      {/* Persistent Discrete Floating WhatsApp Button */}
      <WhatsAppFloat />

      {/* Interactive Schedule Visit Modal */}
      <ScheduleModal isOpen={isScheduleOpen} onClose={handleCloseSchedule} />
    </div>
  );
}