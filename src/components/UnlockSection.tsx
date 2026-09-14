import React from 'react';
import { CheckCircle2, Sparkles, Calendar, Palette, Clock, SunMedium, Compass } from 'lucide-react';

const UNLOCK_ITEMS = [
  {
    icon: LightbulbIcon,
    title: 'Una idea para crear cada día',
    desc: 'Deja de perder tiempo pensando qué dibujar.',
  },
  {
    icon: Calendar,
    title: '12 temáticas mensuales',
    desc: 'Naturaleza, flores, animales, paisajes, fantasía, creatividad y mucho más.',
  },
  {
    icon: Clock,
    title: 'Una rutina creativa fácil de mantener',
    desc: 'Abre, elige tu propuesta del día y comienza.',
  },
  {
    icon: SunMedium,
    title: 'Un momento para desconectar',
    desc: 'Cambia unos minutos de pantalla y ruido por lápiz, papel y color.',
  },
  {
    icon: Compass,
    title: 'Inspiración durante todo el año',
    desc: 'Y si un día no puedes hacerlo, simplemente continúas cuando quieras. No tienes que seguir los dibujos estrictamente en orden.',
  },
];

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

export const UnlockSection: React.FC = () => {
  return (
    <section className="bg-[#FAF7F2] text-[#241A18] py-16 md:py-24 border-b border-[#EADFD5]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c4998e]/15 text-[#8A493B] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Beneficios Inmediatos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1412] tracking-tight uppercase">
            Lo que vas a desbloquear
          </h2>
          <div className="w-16 h-1 bg-[#c4998e] mx-auto mt-4 rounded-full" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {UNLOCK_ITEMS.map((item, idx) => {
            const isLast = idx === UNLOCK_ITEMS.length - 1;
            return (
              <div
                key={idx}
                className={`group bg-white rounded-2xl p-6 sm:p-7 border border-[#E9DFD6] shadow-xs hover:shadow-md transition-all duration-200 ${
                  isLast ? 'md:col-span-2 md:max-w-2xl md:mx-auto w-full' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c4998e]/20 text-[#8C4A3A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#c4998e] group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1E1310] leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#4E3934] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
