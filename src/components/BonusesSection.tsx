import React from 'react';
import { Gift, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets';

interface BonusesSectionProps {
  onCtaClick: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#FAF7F2] text-[#221614] py-16 md:py-24 border-b border-[#E7DDD3]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c4998e]/20 text-[#844335] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Gift className="w-4 h-4" />
            <span>Paquete de Regalo Sin Costo Adicional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A100E] tracking-tight uppercase leading-tight">
            Y además recibes <span className="text-[#8C4A3A]">3 BONOS GRATIS</span>
          </h2>
          <div className="w-16 h-1 bg-[#c4998e] mx-auto mt-4 mb-6 rounded-full" />

          <p className="text-base sm:text-lg text-[#3E2925] max-w-2xl mx-auto leading-relaxed">
            No quiero darte únicamente una lista de ideas.<br className="hidden sm:inline" />
            Quiero que tengas material para empezar, practicar y seguir creando.<br />
            <span className="font-semibold text-[#1F1412]">Por eso, al acceder hoy, recibes también:</span>
          </p>
        </div>

        {/* BONO 01 */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD6] shadow-sm mb-12 hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border-2 border-[#E7DCD2] shadow-lg bg-[#FAF8F5] group">
                <img
                  src={IMAGES.bono1}
                  alt="Bono 01 - Creativo y Alquimista"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3 bg-[#1F1412] text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                  Bono 01
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#3F6E4D]/10 text-[#2D5A3A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Incluido GRATIS con tu acceso</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B110F] uppercase">
                BONO 01 — CREATIVO Y ALQUIMISTA
              </h3>

              <p className="text-lg font-semibold text-[#8C4A3A]">
                Una herramienta para convertir ideas en nuevas posibilidades creativas
              </p>

              <div className="space-y-2 text-base text-[#46322E] leading-relaxed">
                <p>Cuando quieras ir más allá de la propuesta del día, entra en Creativo y Alquimista.</p>
                <p>Una herramienta complementaria para alimentar tu proceso creativo y ayudarte a transformar ideas en arte.</p>
                <div className="py-1 text-sm text-[#5C4641] space-y-1 pl-3 border-l-2 border-[#c4998e]">
                  <p>Úsala cuando necesites explorar.</p>
                  <p>Cuando quieras experimentar.</p>
                  <p>O cuando simplemente quieras darle otra dirección a tu creatividad.</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Más posibilidades para tus sesiones creativas</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Una herramienta adicional para acompañar tu año</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Ideal para esos días en los que quieres experimentar más</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#8C4A3A] hover:text-[#652E23] hover:underline cursor-pointer transition-colors"
                >
                  <span>Acceder a la herramienta Creativo y Alquimista</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BONO 02 */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD6] shadow-sm mb-12 hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border-2 border-[#E7DCD2] shadow-lg bg-[#FAF8F5]">
                <img
                  src={IMAGES.bono2}
                  alt="Bono 02 - BOHO para colorear 32 dibujos"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#1F1412] text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                  Bono 02
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 space-y-4">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#3F6E4D]/10 text-[#2D5A3A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Incluido GRATIS con tu acceso</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B110F] uppercase">
                BONO 02 — 32 DIBUJOS MINIMALISTAS BOHO
              </h3>

              <p className="text-lg font-semibold text-[#8C4A3A]">
                Empieza por diseños simples antes de complicarte
              </p>

              <div className="space-y-2 text-base text-[#46322E] leading-relaxed">
                <p>Si todavía sientes inseguridad al dibujar o colorear, empieza aquí.</p>
                <p>Recibes 32 diseños BOHO minimalistas pensados como una forma sencilla de comenzar a practicar.</p>
                <div className="py-1 text-sm text-[#5C4641] space-y-1 pl-3 border-l-2 border-[#c4998e]">
                  <p>Menos complejidad.</p>
                  <p>Más espacio para experimentar.</p>
                  <p>Más libertad para probar combinaciones de color.</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>32 diseños para practicar</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Estilo minimalista y agradable</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Ideal para empezar a soltar la mano</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Practica color sin enfrentarte primero a dibujos demasiado complejos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BONO 03 */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD6] shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border-2 border-[#E7DCD2] shadow-lg bg-[#FAF8F5]">
                <img
                  src={IMAGES.bono3}
                  alt="Bono 03 - Inspirational Quotes Coloring Book 200 dibujos"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#1F1412] text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                  Bono 03
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#3F6E4D]/10 text-[#2D5A3A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Incluido GRATIS con tu acceso</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B110F] uppercase">
                BONO 03 — 200 DIBUJOS CON FRASES INSPIRADORAS
              </h3>

              <p className="text-lg font-semibold text-[#8C4A3A]">
                Color + creatividad + mensajes positivos
              </p>

              <div className="space-y-2 text-base text-[#46322E] leading-relaxed">
                <p>Aquí subimos el nivel.</p>
                <p>Recibirás una colección de 200 dibujos acompañados de frases inspiradoras en inglés.</p>
                <div className="py-1 text-sm text-[#5C4641] space-y-1 pl-3 border-l-2 border-[#c4998e]">
                  <p>Puedes colorearlos.</p>
                  <p>Practicar combinaciones.</p>
                  <p>Elegir tus favoritos.</p>
                  <p>Incluso utilizarlos como una sesión creativa diferente cuando quieras descansar de los retos principales.</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>200 dibujos adicionales</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Diseños florales para colorear</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Frases inspiradoras en inglés</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Más material para mantener viva tu creatividad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
