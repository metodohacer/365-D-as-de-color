import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { IMAGES } from '../assets';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <header className="relative bg-[#c4998e] text-[#211613] pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle organic background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-[#f4eae6] blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-[#ae7f73] blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#211613]/10 shadow-xs text-xs md:text-sm font-semibold text-[#3D2620] tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-[#8C4A3A]" />
            <span>Acceso Inmediato al PDF Digital + 3 Bonos Exclusivos</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1E1210] uppercase leading-[1.08] mb-6">
            365 DÍAS DE COLOR
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#2E1D19] leading-relaxed max-w-3xl mx-auto mb-10">
            Convierte unos minutos al día en un hábito creativo que te ayude a dibujar, colorear y desconectar durante todo un año
          </p>
        </div>

        {/* Hero Content Grid with Image and Text Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          {/* Left Column: Pain Points & Relief */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="bg-white/75 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/60 shadow-md space-y-4">
              <div className="space-y-3 font-semibold text-[#301F1B] text-base sm:text-lg">
                <p className="flex items-start gap-2.5">
                  <span className="text-[#8C4A3A] font-bold text-xl leading-none">✕</span>
                  <span>No necesitas saber dibujar.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-[#8C4A3A] font-bold text-xl leading-none">✕</span>
                  <span>No necesitas esperar a sentirte inspirado.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-[#8C4A3A] font-bold text-xl leading-none">✕</span>
                  <span>Y no necesitas preguntarte cada día: “¿Qué dibujo hoy?”</span>
                </p>
              </div>

              <hr className="border-[#c4998e]/30 my-4" />

              <p className="text-[#2C1C19] text-base sm:text-lg leading-relaxed font-normal">
                <strong className="font-bold text-[#1E1210]">365 Días de Color</strong> te da una nueva propuesta creativa para cada día, organizada por meses y temáticas, para que simplemente abras tu PDF, elijas el reto y empieces.
              </p>

              <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-[#4A2D25]">
                <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                <span>Acceso al PDF + 3 BONOS incluidos sin costo adicional.</span>
              </div>
            </div>

            {/* Desktop / Large screen CTA */}
            <div className="hidden lg:block space-y-3">
              <button
                id="hero-cta-desktop"
                onClick={onCtaClick}
                className="w-full group relative inline-flex items-center justify-center px-8 py-5 text-base sm:text-lg font-extrabold text-white bg-[#1F1513] hover:bg-[#342320] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider text-center"
              >
                <span>QUIERO EMPEZAR MIS 365 DÍAS DE COLOR</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-6 text-xs text-[#3E2721] font-medium pt-1">
                <span className="inline-flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" /> Descarga instantánea
                </span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 7 días de garantía
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#1F1513]">
                  <Sparkles className="w-3.5 h-3.5 text-[#8C4A3A]" /> Acceso de por vida
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Mockup Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 bg-white/40 group">
                <img
                  src={IMAGES.heroCover}
                  alt="365 Días de Color - Portada y Bonos"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Badge */}
                <div className="absolute bottom-3 right-3 bg-[#1F1513]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide shadow-md">
                  Pack Completo Digital (PDF)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden space-y-3">
          <button
            id="hero-cta-mobile"
            onClick={onCtaClick}
            className="w-full group relative inline-flex items-center justify-center px-6 py-4 text-base font-extrabold text-white bg-[#1F1513] active:bg-[#342320] rounded-xl shadow-lg transition-all cursor-pointer uppercase tracking-wider text-center"
          >
            <span>QUIERO EMPEZAR MIS 365 DÍAS DE COLOR</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>

          <div className="flex items-center justify-center gap-4 text-xs text-[#3E2721] font-medium pt-1">
            <span className="inline-flex items-center gap-1">
              <Download className="w-3.5 h-3.5" /> Descarga instantánea
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 7 días garantía
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-[#1F1513]">
              <Sparkles className="w-3.5 h-3.5 text-[#8C4A3A]" /> Acceso de por vida
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
