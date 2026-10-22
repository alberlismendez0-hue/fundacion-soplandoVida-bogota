import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConditionsSection from './components/ConditionsSection';
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
        {/* A. Hero Section (White + Wave transition into Slate-50) */}
        <Hero onOpenSchedule={handleOpenSchedule} />

        {/* B. Condiciones que Acompañamos (Slate-50 + Depth Cards) */}
        <ConditionsSection onOpenSchedule={handleOpenSchedule} />

        {/* C. Quiénes Somos (White + Depth Tabs + Wave transition into Navy) */}
        <AboutUs onOpenSchedule={handleOpenSchedule} />

        {/* D. Cintillo Intermedio de Valor, Autoridad y Fe (Navy + Wave into White) */}
        <TrustBanner onOpenSchedule={handleOpenSchedule} />

        {/* E. 6 Objetivos Institucionales (White + Top-Accented Cards + Wave into Slate-50) */}
        <Objectives />

        {/* F. Servicios y Modalidades (Slate-50 + Showcase Cards + Wave into White) */}
        <Services onOpenSchedule={handleOpenSchedule} />

        {/* G. Orientación OMS en Salud Mental (White + Depth Cards + Wave into Gradient) */}
        <MentalHealthWHO />

        {/* H. Testimonios y Citas de Fe (Warm Gradient + Wave into Slate-50) */}
        <Testimonials />

        {/* I. Contacto y Ubicación (Slate-50 + Elevated Cards & Map + Wave into Navy) */}
        <ContactSection />
      </main>

      {/* J. Footer (Deep Navy bg-slate-900) */}
      <Footer onOpenSchedule={handleOpenSchedule} />

      {/* Persistent Discrete Floating WhatsApp Button */}
      <WhatsAppFloat />

      {/* Interactive Schedule Visit Modal */}
      <ScheduleModal isOpen={isScheduleOpen} onClose={handleCloseSchedule} />
    </div>
  );
}
