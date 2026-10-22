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
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-slate-800 selection:text-white">
      {/* 1. Slim, Light Top Navbar */}
      <Navbar onOpenSchedule={handleOpenSchedule} />

      {/* Main Page Flow with Organic Alternating Rhythm */}
      <main className="flex-grow">
        {/* A. Hero Section */}
        <Hero onOpenSchedule={handleOpenSchedule} />

        {/* C. Quiénes Somos */}
        <AboutUs onOpenSchedule={handleOpenSchedule} />

        {/* D. Cintillo Intermedio de Valor, Autoridad y Fe */}
        <TrustBanner onOpenSchedule={handleOpenSchedule} />

        {/* E. 6 Objetivos Institucionales */}
        <Objectives />

        {/* F. Servicios y Modalidades */}
        <Services onOpenSchedule={handleOpenSchedule} />

        {/* G. Orientación OMS en Salud Mental */}
        <MentalHealthWHO />

        {/* H. Testimonios y Citas de Fe */}
        <Testimonials />

        {/* I. Contacto y Ubicación */}
        <ContactSection />
      </main>

      {/* J. Footer */}
      <Footer onOpenSchedule={handleOpenSchedule} />

      {/* Persistent Discrete Floating WhatsApp Button */}
      <WhatsAppFloat />

      {/* Interactive Schedule Visit Modal */}
      <ScheduleModal isOpen={isScheduleOpen} onClose={handleCloseSchedule} />
    </div>
  );
}