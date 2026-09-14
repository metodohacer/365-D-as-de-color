import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

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
            <p className="font-semibold text-[#1C1210]">No necesitas convertirte en artista mañana.</p>
            <p className="font-semibold text-[#1C1210]">No necesitas hacer dibujos perfectos.</p>
            <p className="font-semibold text-[#1C1210]">Ni siquiera necesitas tener experiencia.</p>

            <div className="py-2 space-y-1 text-xl sm:text-2xl font-bold text-[#8C4A3A]">
              <p>Solo necesitas una idea para empezar.</p>
              <p className="text-lg sm:text-xl text-[#2B1B18] font-semibold">Y después otra mañana.</p>
              <p className="text-lg sm:text-xl text-[#2B1B18] font-semibold">Y otra al día siguiente.</p>
            </div>

            <p className="text-base sm:text-lg text-[#44312D] pt-2">
              Eso es lo que <strong>365 Días de Color</strong> pone delante de ti: un año entero de inspiración para dibujar, colorear y disfrutar.
            </p>
          </div>

          <div className="bg-[#FAF5F0] p-6 rounded-2xl border border-[#E7DDD2] space-y-3">
            <p className="text-lg font-bold text-[#1F1412]">
              Por US$5.00, recibes el producto principal y los 3 bonos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm font-semibold text-[#3D2925]">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-[#E9DFD6]">
                <CheckCircle2 className="w-4 h-4 text-[#3F6E4D] shrink-0" />
                <span>Puedes comenzar desde cero.</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-[#E9DFD6]">
                <CheckCircle2 className="w-4 h-4 text-[#3F6E4D] shrink-0" />
                <span>Puedes hacerlo a tu ritmo.</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-[#E9DFD6]">
                <CheckCircle2 className="w-4 h-4 text-[#3F6E4D] shrink-0" />
                <span>Vuelve cuando quieras.</span>
              </div>
            </div>
            <p className="text-sm text-[#5A433E] pt-1">
              Y puedes volver a cualquier mes cuando necesites una nueva dosis de inspiración.
            </p>
          </div>

          {/* Guarantee Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-[#c4998e]/15 border border-[#c4998e]/35">
            <div className="w-16 h-16 rounded-2xl bg-white text-[#8C4A3A] flex items-center justify-center shrink-0 shadow-xs border border-[#E2D5CA]">
              <ShieldCheck className="w-9 h-9 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-extrabold text-lg text-[#1E1210] uppercase tracking-wide mb-1">
                Garantía Incondicional de 7 Días
              </h4>
              <p className="text-sm sm:text-base text-[#3E2A26] leading-relaxed">
                Además, tienes <strong>7 días para pedir tu reembolso</strong> si el producto no es para ti. Pruébalo sin ningún riesgo.
              </p>
            </div>
          </div>

          {/* Emotional Pitch Closing */}
          <div className="pt-4 text-center space-y-4">
            <div className="text-lg sm:text-xl font-medium text-[#382622] space-y-1">
              <p className="text-[#654C46]">El PDF puede seguir guardado como una idea para “algún día”.</p>
              <p className="font-bold text-2xl sm:text-3xl text-[#1E1210]">O hoy puede convertirse en el Día 1.</p>
              <p className="font-semibold text-lg text-[#8C4A3A] pt-1">La oportunidad está aquí. Solo falta empezar.</p>
            </div>

            <div className="pt-4 max-w-xl mx-auto">
              <button
                id="summary-cta"
                onClick={onCtaClick}
                className="w-full group relative inline-flex items-center justify-center px-8 py-5 text-base sm:text-lg font-black text-white bg-[#1F1513] hover:bg-[#342320] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider text-center"
              >
                <span>EMPEZAR MIS 365 DÍAS DE COLOR POR US$5.00</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-xs text-[#5D4642] font-semibold mt-3">
                Acceso inmediato a tu correo · Pago único de US$5.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
