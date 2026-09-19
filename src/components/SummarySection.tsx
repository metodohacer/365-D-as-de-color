import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../constants';

interface SummarySectionProps {
  onCtaClick: () => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#FAF7F2] text-[#221614] py-16 md:py-24 border-b border-[#E8DFD5]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c4998e]/20 text-[#834234] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>El Momento Es Ahora</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B110F] tracking-tight uppercase leading-tight">
            Resumiendo...
          </h2>
          <div className="w-16 h-1 bg-[#c4998e] mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-7 sm:p-12 border border-[#E7DCD1] shadow-md space-y-6">
          <div className="space-y-3 text-lg sm:text-xl text-[#382622] leading-relaxed">
            <div className="py-2 space-y-1 text-xl sm:text-2xl font-bold text-[#8C4A3A]">
              <p>Solo necesitas una idea para empezar.</p>
              <p className="text-lg sm:text-xl text-[#2B1B18] font-semibold">Y después otra mañana.</p>
              <p className="text-lg sm:text-xl text-[#2B1B18] font-semibold">Y otra al día siguiente.</p>
            </div>

            <p className="text-base sm:text-lg text-[#44312D] pt-1">
              Eso es lo que <strong>365 Días de Color</strong> pone delante de ti: un año entero de inspiración para dibujar, colorear y disfrutar.
            </p>
          </div>

          {/* Detailed Item Breakdown */}
          <div className="bg-[#FAF5F0] p-6 sm:p-7 rounded-2xl border border-[#E7DDD2] space-y-4">
            <p className="text-lg sm:text-xl font-extrabold text-[#1F1412]">
              Por solo $5 USD, todo esto es lo que te llevas hoy:
            </p>

            <div className="space-y-3 text-sm sm:text-base font-semibold text-[#2D1B17]">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E9DFD6]">
                <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1F1412]">Libro digital 365 Días de Color</h4>
                  <p className="text-xs sm:text-sm text-[#553E3A] font-normal mt-0.5">
                    365 dibujos y retos creativos organizados por meses para dibujar todo el año.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E9DFD6]">
                <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-[#1F1412]">BONO 1: Herramienta Creativa y Alquimista</h4>
                    <span className="text-[10px] font-extrabold bg-[#3F6E4D]/15 text-[#2B5E38] px-2 py-0.5 rounded-sm">GRATIS</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#553E3A] font-normal mt-0.5">
                    Herramienta interactiva para experimentar con paletas de color y desbloquear tu creatividad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E9DFD6]">
                <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-[#1F1412]">BONO 2: BOHO de Colores</h4>
                    <span className="text-[10px] font-extrabold bg-[#3F6E4D]/15 text-[#2B5E38] px-2 py-0.5 rounded-sm">GRATIS</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#553E3A] font-normal mt-0.5">
                    32 dibujos minimalistas limpios listos para imprimir y soltar la mano.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E9DFD6]">
                <CheckCircle2 className="w-5 h-5 text-[#3F6E4D] shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-[#1F1412]">BONO 3: Inspiración de Colores</h4>
                    <span className="text-[10px] font-extrabold bg-[#3F6E4D]/15 text-[#2B5E38] px-2 py-0.5 rounded-sm">GRATIS</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#553E3A] font-normal mt-0.5">
                    Dibujos florales con frases inspiradoras para colorear y relajarte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2 max-w-xl mx-auto text-center">
            <a
              id="summary-cta"
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group relative inline-flex items-center justify-center px-8 py-5 text-base sm:text-lg font-black text-white bg-[#E03A1E] hover:bg-[#C83017] rounded-xl shadow-lg shadow-[#E03A1E]/30 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer uppercase tracking-wider text-center"
            >
              <span>QUIERO DIBUJAR TODO EL AÑO POR 5$USD</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="space-y-1.5 pt-3.5 text-xs sm:text-sm font-semibold text-[#543E3A] text-center">
              <p>Pago único · Acceso de por vida</p>
              <p>Descarga inmediata en PDF + los 3 bonos incluidos · Pago Seguro en Hotmart · 7 Días de Garantía</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
