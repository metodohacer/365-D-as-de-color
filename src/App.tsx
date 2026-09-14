import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { UnlockSection } from './components/UnlockSection';
import { NotArtistSection } from './components/NotArtistSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { SummarySection } from './components/SummarySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToOfferOrOpenModal = (directModal: boolean = false) => {
    if (directModal) {
      setIsModalOpen(true);
      return;
    }

    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      const yOffset = -70; // Header offset
      const y = offerElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-['Montserrat',sans-serif] bg-[#FAF7F2] text-[#221614]">
      {/* Sticky Quick Nav */}
      <Navbar onCtaClick={() => scrollToOfferOrOpenModal(false)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Primera Doble (Hero Section) */}
        <HeroSection onCtaClick={() => scrollToOfferOrOpenModal(false)} />

        {/* 2. Lo que vas a desbloquear */}
        <UnlockSection />

        {/* 3. No necesitas “ser artista”. Necesitas empezar. */}
        <NotArtistSection />

        {/* 4. Cómo funcionan tus 365 Días de Color */}
        <HowItWorksSection />

        {/* 5. Y además recibes 3 BONOS GRATIS */}
        <BonusesSection onCtaClick={() => scrollToOfferOrOpenModal(false)} />

        {/* 7. Tu año creativo por US$5.00 */}
        <PricingSection onCtaClick={() => scrollToOfferOrOpenModal(true)} />

        {/* 8. Resumiendo... */}
        <SummarySection onCtaClick={() => scrollToOfferOrOpenModal(true)} />

        {/* 9. Preguntas y Respuestas */}
        <FaqSection onCtaClick={() => scrollToOfferOrOpenModal(false)} />
      </main>

      {/* Footer & Trust */}
      <Footer />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
