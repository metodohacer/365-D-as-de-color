import React from 'react';
import { Gift, CheckCircle2, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets';

interface BonusesSectionProps {
  onCtaClick?: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#FAF7F2] text-[#221614] py-16 md:py-24 border-b border-[#E7DDD3]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c4998e]/20 text-[#844335] text-xs md:text-sm font-bold tracking-wider uppercase mb-3">
            <Gift className="w-4 h-4" />
            <span>Paquete de Regalos Exclusivos Sin Costo Adicional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A100E] tracking-tight uppercase leading-tight">
            Y además recibes <span className="text-[#8C4A3A]">3 BONOS GRATIS</span>
          </h2>
          <div className="w-16 h-1 bg-[#c4998e] mx-auto mt-4 mb-6 rounded-full" />

          <p className="text-base sm:text-lg text-[#3E2925] max-w-2xl mx-auto leading-relaxed">
            No quiero darte únicamente una lista de ideas.<br className="hidden sm:inline" />
            Quiero que tengas material para empezar, practicar y seguir creando.
          </p>
        </div>

        {/* BONO 01 */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD6] shadow-sm mb-12 hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center py-2">
              {/* Smartphone Mockup */}
              <div className="relative mx-auto w-[250px] sm:w-[275px] rounded-[40px] p-2.5 sm:p-3 bg-[#1A1210] shadow-2xl ring-1 ring-black/25 border-4 border-[#3D2924]">
                {/* Speaker / Dynamic Island notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/95 rounded-full z-20 flex items-center justify-center pointer-events-none shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#2A1D1A] mr-2" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4A322C]" />
                </div>

                {/* Screen with 9:16 aspect ratio */}
                <div className="relative w-full aspect-[9/16] rounded-[30px] overflow-hidden bg-black shadow-inner">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/30O9W6mUC1o?rel=0&playsinline=1"
                    title="Bono 01 - Herramienta Creativa y Alquimista"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                {/* Home bar indicator */}
                <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-20 pointer-events-none" />

                {/* Bono 01 Badge */}
                <div className="absolute -top-3 -left-3 bg-[#8C4A3A] text-white text-xs font-black px-3.5 py-1.5 rounded-xl uppercase tracking-wider shadow-lg border border-white/20 z-30">
                  Bono 01
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#3F6E4D]/10 text-[#2D5A3A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Incluido GRATIS con tu acceso de hoy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B110F] uppercase">
                BONO 01 — HERRAMIENTA CREATIVA Y ALQUIMISTA
              </h3>

              <p className="text-lg font-semibold text-[#8C4A3A]">
                Despierta tu creatividad cuando no sabes qué dibujar
              </p>

              <div className="space-y-2.5 text-base text-[#46322E] leading-relaxed">
                <p>
                  Encuentra ideas e inspiración para crear, experimentar con el color y convertir cada momento creativo en algo único.
                </p>
                <p className="text-sm sm:text-base font-medium text-[#2E1E1B] bg-[#FAF5F0] p-3 rounded-xl border border-[#EBE1D7]">
                  📱 <strong>Acceso 100% online y multidispositivo:</strong> Puedes acceder y utilizar la herramienta desde cualquier dispositivo (celular, tablet o computadora) sin necesidad de instalar nada.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Disponible para usar desde cualquier dispositivo en cualquier momento</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Más posibilidades para tus sesiones creativas diarias</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Ideal para esos días en los que quieres experimentar más con el color</span>
                </div>
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
                  alt="Bono 02 - BOHO de colores"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
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
                <span>Incluido GRATIS con tu acceso de hoy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B110F] uppercase">
                BONO 02 — BOHO DE COLORES
              </h3>

              <p className="text-lg font-semibold text-[#8C4A3A]">
                Una forma sencilla de empezar a dibujar y colorear sin sentirse abrumado
              </p>

              <div className="space-y-2.5 text-base text-[#46322E] leading-relaxed">
                <p>
                  Estos dibujos BOHO ofrecen una forma sencilla de empezar a dibujar y colorear sin sentirse abrumado.
                </p>
                <p>
                  Sus trazos limpios permiten practicar el control de la mano, experimentar con combinaciones de color y, al mismo tiempo, convertir unos minutos de creatividad en un momento de relajación y desconexión.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>32 diseños limpios listos para imprimir</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Práctica de trazo y combinaciones de color para soltar la mano</span>
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
                  alt="Bono 03 - Inspiración de Colores con frases inspiradoras"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
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
                <span>Incluido GRATIS con tu acceso de hoy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B110F] uppercase">
                BONO 03 — INSPIRACIÓN DE COLORES
              </h3>

              <p className="text-lg font-semibold text-[#8C4A3A]">
                Aquí subimos el nivel: Dibujos con frases inspiradoras
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Dibujos adicionales listos para imprimir</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Diseños florales para colorear y relajarte</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Frases inspiradoras en inglés que elevan tu estado de ánimo</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#2C1D1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Más material para mantener viva tu creatividad todo el año</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
