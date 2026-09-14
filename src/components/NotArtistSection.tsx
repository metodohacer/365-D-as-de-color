import React from 'react';
import { Sparkles, Compass, Check } from 'lucide-react';

export const NotArtistSection: React.FC = () => {
  return (
    <section className="bg-[#EFE8E1] text-[#241715] py-16 md:py-24 border-b border-[#E3D6CA]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c4998e]/20 text-[#7F4133] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>El Verdadero Hábito Creativo</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B110F] tracking-tight uppercase leading-tight">
            No necesitas “ser artista”.<br />
            <span className="text-[#8C4A3A]">Necesitas empezar.</span>
          </h2>
          <div className="w-16 h-1 bg-[#c4998e] mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative Box 1: The Problem */}
        <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-6 sm:p-10 border border-[#DDD0C3] shadow-xs mb-8">
          <div className="space-y-3 text-lg sm:text-xl text-[#3A2824] leading-relaxed">
            <p className="font-semibold text-[#1C1210]">Muchas personas quieren dibujar.</p>
            <div className="pl-4 border-l-2 border-[#c4998e] space-y-1.5 my-4 text-base sm:text-lg text-[#523B36]">
              <p>Compran lápices.</p>
              <p>Guardan referencias.</p>
              <p>Miran tutoriales.</p>
            </div>
            <p className="font-medium text-[#291A17]">Pero llega el momento de sentarse frente al papel…</p>
            <p className="font-bold text-[#8C4A3A] text-xl sm:text-2xl">Y no saben qué hacer.</p>
            <p className="text-base sm:text-lg text-[#4E3935] pt-1">
              Ahí es donde el hábito desaparece.
            </p>
          </div>
        </div>

        {/* Narrative Box 2: The Solution */}
        <div className="bg-[#FAF7F3] rounded-2xl p-6 sm:p-10 border-2 border-[#c4998e]/40 shadow-sm space-y-6">
          <div className="inline-block px-3 py-1 bg-[#c4998e] text-white rounded-lg text-xs font-bold uppercase tracking-wider">
            La Solución
          </div>

          <p className="text-xl sm:text-2xl font-bold text-[#1D1210] leading-snug">
            365 Días de Color elimina esa primera barrera.
          </p>

          <p className="text-base sm:text-lg text-[#3E2B27] leading-relaxed">
            Tienes un año de inspiración organizado para que siempre tengas una idea clara sobre la cual trabajar.
          </p>

          {/* Examples Grid / Pills */}
          <div className="bg-white rounded-xl p-5 border border-[#E7DCD0]">
            <p className="text-xs uppercase tracking-wider text-[#7E4537] font-bold mb-3">
              Ideas que encontrarás en el calendario:
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {[
                'Un bosque tranquilo',
                'Un mandala',
                'Flores silvestres',
                'Animales',
                'Paisajes',
                'Viajes',
                'Fantasía',
                'Escenas creativas',
              ].map((theme, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF5F0] border border-[#E8DDD1] text-xs sm:text-sm font-semibold text-[#3D2824]"
                >
                  <Sparkles className="w-3 h-3 text-[#8C4A3A]" />
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Calendar division highlight */}
          <div className="bg-[#c4998e]/15 rounded-xl p-5 border border-[#c4998e]/30 text-[#2B1B17]">
            <p className="text-base sm:text-lg font-bold text-[#1C110F] mb-3">
              El calendario está dividido en 12 retos mensuales con 30 propuestas por mes y 24 inspiraciones extra.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center pt-2">
              <div className="bg-white/80 rounded-lg p-3 border border-[#E4D7CA]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#8C4A3A]">12</div>
                <div className="text-xs font-medium text-[#4D3833]">Meses temáticos</div>
              </div>
              <div className="bg-white/80 rounded-lg p-3 border border-[#E4D7CA]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#8C4A3A]">360</div>
                <div className="text-xs font-medium text-[#4D3833]">Retos diarios</div>
              </div>
              <div className="bg-white/80 rounded-lg p-3 border border-[#E4D7CA]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#8C4A3A]">+24</div>
                <div className="text-xs font-medium text-[#4D3833]">Inspiraciones extra</div>
              </div>
            </div>
          </div>

          {/* Emotional closing of block */}
          <div className="space-y-3 pt-2 text-[#2D1D19] text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-lg sm:text-xl text-[#1E1210]">
              No tienes que crear una obra maestra.
            </p>
            <p className="font-bold text-xl sm:text-2xl text-[#8C4A3A]">
              Tienes que crear hoy.
            </p>
            <p className="font-semibold text-lg sm:text-xl text-[#1E1210]">
              Y mañana, volver a hacerlo.
            </p>
            <p className="text-[#4E3935] pt-2">
              Porque cuando reduces la dificultad de empezar, crear puede dejar de ser algo que “algún día harás” y convertirse en parte de tu rutina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
