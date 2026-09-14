import React from 'react';
import { BookOpen, Palette, Repeat, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    number: 'Paso 01',
    title: 'Abre tu reto del día',
    icon: BookOpen,
    body: (
      <div className="space-y-2.5 text-base text-[#46332F] leading-relaxed">
        <p>En lugar de mirar una hoja en blanco sin saber qué hacer, abre el calendario y encuentra tu propuesta.</p>
        <p className="font-semibold text-[#1F1412]">Cada mes tiene una temática diferente para mantener fresca tu inspiración.</p>
      </div>
    ),
  },
  {
    number: 'Paso 02',
    title: 'Dibuja y experimenta con color',
    icon: Palette,
    body: (
      <div className="space-y-2 text-base text-[#46332F] leading-relaxed">
        <p className="font-medium text-[#1F1412]">No importa si estás comenzando.</p>
        <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-[#301F1B] pt-1">
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#8C4A3A]" /> Haz tu propia interpretación.</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#8C4A3A]" /> Prueba colores.</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#8C4A3A]" /> Suelta la mano.</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#8C4A3A]" /> Equivócate.</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#8C4A3A]" /> Vuelve a intentar.</span>
        </div>
        <p className="pt-2 text-sm text-[#5C4540]">Aquí no estás compitiendo con nadie.</p>
        <p className="font-bold text-[#8C4A3A] text-lg">Estás creando.</p>
      </div>
    ),
  },
  {
    number: 'Paso 03',
    title: 'Repite hasta convertirlo en tu momento creativo',
    icon: Repeat,
    body: (
      <div className="space-y-2.5 text-base text-[#46332F] leading-relaxed">
        <p className="font-medium text-[#1F1412]">Vuelve mañana. Después pasado mañana.</p>
        <p>No tienes que completar los retos en orden ni castigarte si pierdes un día. El propio calendario está pensado para que puedas avanzar a tu ritmo.</p>
        <div className="mt-3 p-3 rounded-xl bg-[#FAF5F0] border border-[#E9DED5] text-center font-bold text-[#8C4A3A] text-sm sm:text-base">
          Un dibujo. Un día. Un pequeño paso a la vez.
        </div>
      </div>
    ),
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-white text-[#211513] py-16 md:py-24 border-b border-[#E8DFD6]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#c4998e]/15 text-[#8A493B] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            El Paso a Paso Sencillo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B110F] tracking-tight uppercase leading-tight">
            Cómo funcionan tus 365 Días de Color
          </h2>
          <div className="w-16 h-1 bg-[#c4998e] mx-auto mt-4 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#EADFD5] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-block px-3 py-1 bg-[#c4998e] text-white rounded-lg text-xs font-bold uppercase tracking-wider">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E4D7CC] flex items-center justify-center text-[#8C4A3A]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1B110F] mb-4 leading-snug">
                    {step.title}
                  </h3>

                  {/* Body text */}
                  {step.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
