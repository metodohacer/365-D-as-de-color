import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets';

interface GuaranteeSectionProps {
  onCtaClick?: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = () => {
  return (
    <section id="garantia" className="bg-[#FAF7F2] text-[#241715] py-16 md:py-24 border-b border-[#E7DDD3] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 border border-[#E8DFD6] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Columna Izquierda: Información de la garantía */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c4998e]/20 text-[#844335] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Garantía Incondicional de 7 Días</span>
              </div>

              <p className="text-base sm:text-lg text-[#3E2925] leading-relaxed">
                Queremos que sientas total tranquilidad al dar este paso. Por eso, al adquirir <strong className="font-bold text-[#1F1412]">365 Días de Color</strong> hoy por solo <span className="font-bold text-[#8C4A3A]">$5 USD</span>, cuentas con una <strong>garantía de satisfacción de 7 días completos</strong>.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#F0E6DC]">
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#2D1E1B]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Devolución del 100% de tu dinero de forma automática</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#2D1E1B]">
                  <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0" />
                  <span>Reembolso gestionado directamente por Hotmart sin preguntas</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Imagen del sello de garantía */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-52 sm:w-64 md:w-72 max-w-full flex items-center justify-center p-3">
                <div className="absolute inset-0 bg-[#c4998e]/15 rounded-full filter blur-xl" />
                <img
                  src={IMAGES.garantia}
                  alt="Garantía de Satisfacción de 7 Días"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="relative w-full h-auto object-contain drop-shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
