import React from 'react';
import { Check, ShieldCheck, Zap, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets';

interface PricingSectionProps {
  onCtaClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="bg-[#EFE7E0] text-[#221513] py-16 md:py-24 border-b border-[#D8C9BC] relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Intro copy */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c4998e]/25 text-[#7E3E30] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Zap className="w-3.5 h-3.5 fill-[#c4998e]" />
            <span>Oferta Especial de Acceso Directo</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B110F] tracking-tight uppercase leading-tight">
            Tu año creativo por <span className="text-[#8C4A3A]">US$5.00</span>
          </h2>
          <div className="w-16 h-1 bg-[#c4998e] mx-auto mt-4 mb-8 rounded-full" />

          {/* Internal dialogue */}
          <div className="bg-white/80 rounded-2xl p-6 border border-[#E0D2C5] shadow-xs text-left sm:text-center space-y-2 text-[#3D2B27] text-base sm:text-lg">
            <p className="font-semibold text-[#1C1210]">Podrías seguir diciendo:</p>
            <div className="italic text-[#6B4F48] font-medium space-y-1">
              <p>“Mañana empiezo.”</p>
              <p>“Mañana dibujo.”</p>
              <p>“Cuando tenga más tiempo.”</p>
              <p>“Cuando tenga inspiración.”</p>
            </div>
            <p className="pt-2 font-medium text-[#291A17]">
              Pero mañana probablemente volverás a enfrentarte a la misma pregunta:
            </p>
            <p className="font-bold text-[#8C4A3A] text-xl">¿Qué dibujo?</p>
            <p className="pt-2 font-semibold text-[#1F1412]">
              Con 365 Días de Color, esa parte ya está resuelta.
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#c4998e] shadow-xl overflow-hidden">
          {/* Top highlight ribbon */}
          <div className="bg-[#c4998e] text-white py-2 px-4 text-center text-xs sm:text-sm font-bold uppercase tracking-widest -mx-6 sm:-mx-10 md:-mx-12 -mt-6 sm:-mt-10 md:-mt-12 mb-8">
            Acceso Completo Inmediato + 3 Bonos Incluidos
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: What you receive */}
            <div className="md:col-span-7 space-y-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#1E1210] uppercase tracking-wide border-b border-[#E8DFD6] pb-3">
                HOY RECIBES:
              </h3>

              <div className="space-y-4">
                {/* Product 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c4998e] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1C110F]">365 Días de Color</h4>
                    <p className="text-sm text-[#4E3934]">Un año de propuestas creativas organizadas por meses.</p>
                  </div>
                </div>

                {/* Bono 01 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c4998e] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1C110F]">BONO 01</h4>
                    <p className="text-sm text-[#4E3934]">Creativo y Alquimista.</p>
                  </div>
                </div>

                {/* Bono 02 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c4998e] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1C110F]">BONO 02</h4>
                    <p className="text-sm text-[#4E3934]">32 dibujos minimalistas BOHO.</p>
                  </div>
                </div>

                {/* Bono 03 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c4998e] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1C110F]">BONO 03</h4>
                    <p className="text-sm text-[#4E3934]">200 dibujos con frases inspiradoras.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs sm:text-sm text-[#543F3B] space-y-1 bg-[#FAF7F3] p-4 rounded-xl border border-[#E9DFD6]">
                <p className="font-semibold text-[#211613]">✓ No es una suscripción.</p>
                <p className="font-semibold text-[#211613]">✓ No necesitas comprar un curso enorme.</p>
                <p className="pt-1 text-[#3C2925]">
                  Es una forma simple de darte una razón para sentarte, tomar tus lápices y crear algo cada día.
                </p>
              </div>
            </div>

            {/* Right: Pricing Box & CTA */}
            <div className="md:col-span-5 bg-[#FAF7F3] rounded-2xl p-6 border border-[#E6DDD3] text-center flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#794134] font-extrabold">
                  TODO POR SOLO:
                </span>

                <div className="my-3">
                  <div className="text-sm text-[#7D6661] line-through font-semibold">Valor habitual $47.00 USD</div>
                  <div className="text-5xl sm:text-6xl font-black text-[#1F1412] tracking-tight my-1">
                    US$5.00
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#3F6E4D]/15 text-[#2B5E38] text-xs font-bold">
                    Pago único · Sin mensualidades
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <button
                  id="pricing-cta"
                  onClick={onCtaClick}
                  className="w-full group relative inline-flex items-center justify-center px-6 py-5 text-base sm:text-lg font-black text-white bg-[#1F1513] hover:bg-[#382623] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wide text-center"
                >
                  <span>QUIERO MIS 365 DÍAS DE COLOR</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-xs font-semibold text-[#543E3A]">
                  Acceso al producto + los 3 bonos incluidos.
                </p>

                <div className="pt-2 border-t border-[#E5DAD0] flex items-center justify-center gap-4 text-[11px] text-[#634E49]">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Lock className="w-3.5 h-3.5 text-[#3F6E4D]" /> Pago Seguro SSL
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8C4A3A]" /> 7 Días Garantía
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
