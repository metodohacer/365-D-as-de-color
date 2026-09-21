import React from 'react';
import { CheckCircle2, Sparkles, Clock, SunMedium, Compass } from 'lucide-react';
import { IMAGES } from '../assets';

interface UnlockItem {
  title: string;
  desc: string;
  image?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const UNLOCK_ITEMS: UnlockItem[] = [
  {
    title: 'Una idea para crear cada día',
    desc: 'Deja de perder tiempo pensando qué dibujar. Una propuesta clara y guiada para cada día del año.',
    image: IMAGES.unlock1,
    icon: CheckCircle2,
  },
  {
    title: 'Una rutina creativa fácil de mantener',
    desc: 'Abre tu material, elige la propuesta del día y comienza sin complicarte con horas libres.',
    image: IMAGES.unlock2,
    icon: Clock,
  },
  {
    title: 'Un momento para desconectar',
    desc: 'Cambia unos minutos de pantalla y ruido por lápiz, papel y color. Un respiro diario para calmar la mente.',
    image: IMAGES.unlock3,
    icon: SunMedium,
  },
  {
    title: 'Inspiración durante todo el año',
    desc: 'Y si un día no puedes hacerlo, simplemente continúas cuando quieras. Sin presiones y a tu propio ritmo.',
    image: IMAGES.unlock4,
    icon: Compass,
  },
];

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

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {UNLOCK_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#E9DFD6] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col h-full"
              >
                {/* Image for Cards */}
                {item.image && (
                  <div className="relative w-full rounded-2xl overflow-hidden border border-[#E8DDD2] mb-5 shadow-xs bg-[#FAF7F3] flex items-center justify-center p-1 sm:p-2 h-72 sm:h-80 md:h-[360px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain rounded-xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c4998e]/20 text-[#8C4A3A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#c4998e] group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1E1310] leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4E3934] leading-relaxed font-normal">
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
