import React from 'react';
import { Sparkles } from 'lucide-react';
import { IMAGES } from '../assets';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <header className="relative bg-[#c4998e] text-[#211613] pt-8 pb-14 sm:pt-10 sm:pb-18 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle organic background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-25">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#f8efec] blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#b8867a] blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-xs border border-white/60 shadow-xs text-xs sm:text-sm font-bold text-[#3D2620] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#8C4A3A]" />
            <span>Descarga Digital Inmediata (PDF) · Para Imprimir</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1E1210] uppercase leading-[1.08] mb-3">
            365 DÍAS DE COLOR
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#321E19] leading-snug max-w-2xl mx-auto mb-2">
            El Micro-Hábito Diario de 10 Minutos para Dibujar, Colorear y Desconectar del Estrés
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#46312D] font-medium max-w-xl mx-auto">
            Elimina el bloqueo de la hoja en blanco con 384 disparadores creativos guiados. Sin necesidad de ser artista, sin horas libres y a tu propio ritmo.
          </p>
        </div>

        {/* Hero Cover Image Display */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl lg:max-w-3xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white/40 group">
              <img
                src={IMAGES.heroCover}
                alt="365 Días de Color - Portada"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-3 right-3 bg-[#1F1513]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-md">
                Pack Digital Imprimible (PDF)
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

