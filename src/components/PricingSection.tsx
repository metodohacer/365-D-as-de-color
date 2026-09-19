import React from 'react';
import { Check, ShieldCheck, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets';
import { HOTMART_CHECKOUT_URL } from '../constants';

interface PricingSectionProps {
  onCtaClick?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="bg-[#EFE7E0] text-[#221513] py-16 md:py-24 border-b border-[#D8C9BC] relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Intro copy */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          {/* Internal dialogue */}
          <div className="bg-white/85 rounded-2xl p-6 border border-[#E0D2C5] shadow-xs text-left sm:text-center space-y-2 text-[#3D2B27] text-base sm:text-lg">
            <p className="font-semibold text-[#1C1210]">Podrías seguir diciendo:</p>
            <div className="italic text-[#6B4F48] font-medium space-y-1">
              <p>“Mañana empiezo.”</p>
              <p>“Mañana dibujo.”</p>
              <p>“Cuando tenga más tiempo o inspiración.”</p>
            </div>
            <p className="pt-2 font-medium text-[#291A17]">
              Pero mañana volverás a enfrentarte a la misma pregunta:
            </p>
            <p className="font-extrabold text-[#8C4A3A] text-xl sm:text-2xl">¿Qué dibujo hoy?</p>
            <p className="pt-1 font-bold text-[#1F1412]">
              Con 365 Días de Color, esa parte ya está resuelta para todo el año.
            </p>
          </div>
        </div>

        {/* Pricing Card & Bundle Stack */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#c4998e] shadow-xl overflow-hidden">
          {/* Top highlight ribbon */}
          <div className="bg-[#c4998e] text-white py-2 px-4 text-center text-xs sm:text-sm font-bold uppercase tracking-widest -mx-6 sm:-mx-10 md:-mx-12 -mt-6 sm:-mt-10 md:-mt-12 mb-8">
            Acceso Completo Inmediato + 3 Bonos Incluidos de Regalo
          </div>

          {/* Bundle Mockup Visual */}
          <div className="mb-10 text-center">
            <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#E8DDD2] shadow-md bg-[#FAF8F5]">
              <img
                src={IMAGES.bundleMockup}
                alt="Pack Completo 365 Días de Color y Bonos de Regalo"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
              <div className="p-3 bg-[#FAF5F0] border-t border-[#E8DCD1] text-xs font-semibold text-[#5B433E] flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#8C4A3A]" />
                <span>Todo lo que recibes al instante en tu correo electrónico en formato PDF listo para descargar e imprimir</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: What you receive with Value Stack */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E8DFD6] pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-[#1E1210] uppercase tracking-wide">
                  TODO LO QUE RECIBES HOY:
                </h3>
                <span className="text-xs font-bold text-[#794134] uppercase tracking-wider">
                  Valor Normal
                </span>
              </div>

              <div className="space-y-4">
                {/* Product 1 */}
                <div className="flex items-start justify-between gap-3 bg-[#FAF7F3] p-3.5 rounded-xl border border-[#EAE0D6]">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c4998e] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-[#1C110F]">
                        365 Días de Color (PDF Completo)
                      </h4>
                      <p className="text-xs sm:text-sm text-[#543F3B]">
                        12 retos mensuales · 30 ideas por mes · 24 inspiraciones extra (384 propuestas).
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#8C7670] shrink-0">$27.00</span>
                </div>

                {/* Bono 01 */}
                <div className="flex items-start justify-between gap-3 bg-[#FAF7F3] p-3.5 rounded-xl border border-[#EAE0D6]">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3F6E4D] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base sm:text-lg text-[#1C110F]">
                          BONO 1: Creativo y Alquimista
                        </h4>
                        <span className="text-[10px] font-extrabold bg-[#3F6E4D]/15 text-[#2B5E38] px-2 py-0.5 rounded-sm">GRATIS</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#543F3B]">
                        Herramienta de inspiración para cuando no sabes qué dibujar.
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#8C7670] shrink-0 line-through">$17.00</span>
                </div>

                {/* Bono 02 */}
                <div className="flex items-start justify-between gap-3 bg-[#FAF7F3] p-3.5 rounded-xl border border-[#EAE0D6]">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3F6E4D] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base sm:text-lg text-[#1C110F]">
                          BONO 2: BOHO de Colores
                        </h4>
                        <span className="text-[10px] font-extrabold bg-[#3F6E4D]/15 text-[#2B5E38] px-2 py-0.5 rounded-sm">GRATIS</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#543F3B]">
                        32 dibujos minimalistas limpios para soltar la mano y relajarte.
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#8C7670] shrink-0 line-through">$14.00</span>
                </div>

                {/* Bono 03 */}
                <div className="flex items-start justify-between gap-3 bg-[#FAF7F3] p-3.5 rounded-xl border border-[#EAE0D6]">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3F6E4D] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base sm:text-lg text-[#1C110F]">
                          BONO 3: Inspiración de Colores
                        </h4>
                        <span className="text-[10px] font-extrabold bg-[#3F6E4D]/15 text-[#2B5E38] px-2 py-0.5 rounded-sm">GRATIS</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#543F3B]">
                        98 dibujos florales con frases inspiradoras en inglés.
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#8C7670] shrink-0 line-through">$19.00</span>
                </div>
              </div>

              {/* Stack Summary */}
              <div className="flex items-center justify-between p-4 bg-[#FAF5F0] rounded-xl border border-[#E3D6C9] font-bold">
                <span className="text-[#3F2B26] text-sm sm:text-base">VALOR TOTAL ACUMULADO:</span>
                <span className="text-lg sm:text-xl text-[#7A645E] line-through">$77.00 USD</span>
              </div>
            </div>

            {/* Right: Pricing Box & CTA */}
            <div className="md:col-span-5 bg-[#FAF7F3] rounded-2xl p-6 sm:p-7 border border-[#E6DDD3] text-center flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#794134] font-extrabold">
                  PRECIO ESPECIAL:
                </span>

                <div className="my-3">
                  <div className="text-sm text-[#7D6661] line-through font-semibold">Valor habitual $77.00 USD</div>
                  <div className="text-5xl sm:text-6xl font-black text-[#E03A1E] tracking-tight my-1">
                    $5 USD
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <a
                  id="pricing-hotmart-cta"
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group relative inline-flex items-center justify-center px-6 py-5 text-base sm:text-lg font-black text-white bg-[#E03A1E] hover:bg-[#C83017] active:scale-[0.98] rounded-xl shadow-lg shadow-[#E03A1E]/30 hover:shadow-xl transition-all duration-200 cursor-pointer uppercase tracking-wide text-center"
                >
                  <span>QUIERO DIBUJAR TODO EL AÑO POR 5$USD</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="space-y-1.5 pt-1">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#3F6E4D]/15 text-[#2B5E38] text-xs font-bold">
                    Pago único · Acceso de por vida
                  </span>
                  <p className="text-xs font-semibold text-[#543E3A]">
                    Descarga inmediata en PDF + los 3 bonos incluidos.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5DAD0] flex items-center justify-center gap-4 text-[11px] text-[#634E49]">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Lock className="w-3.5 h-3.5 text-[#3F6E4D]" /> Pago Seguro en Hotmart
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8C4A3A]" /> 7 Días de Garantía
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
