import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Tengo que pagar en dólares?',
    answer: 'No, el precio se cobra en el valor de tu moneda local de forma automática. Al dar clic en cualquiera de los botones para conseguir tu acceso, serás redirigido a la pantalla segura donde verás el monto exacto convertido a la moneda de tu país (pesos colombianos, mexicanos, soles, euros, etc.).',
  },
  {
    id: 'faq-2',
    question: 'No tengo tarjeta de crédito, ¿puedo pagarlo de otra manera?',
    answer: 'Sí, también puedes realizar el pago en efectivo si te encuentras en los siguientes países: Colombia (Efecty), Perú (Pago Efectivo), Chile (Sencillito) y México (OXXO). Además, dispones de opciones como tarjeta de débito, PayPal y transferencias bancarias según tu país.',
  },
  {
    id: 'faq-3',
    question: '¿El pago es seguro?',
    answer: 'El pago se realiza de manera 100% segura por medio de la plataforma de Hotmart, la plataforma de venta de programas y productos digitales más grande y confiable de habla hispana con encriptación SSL de nivel bancario. Apenas hagas el pago, recibirás de inmediato a tu correo el acceso y las instrucciones para disfrutar de tu contenido.',
  },
  {
    id: 'faq-4',
    question: '¿Cómo accedo a 365 Días de Color y los 3 Bonos?',
    answer: 'Recibirás acceso instantáneo a tu correo electrónico inmediatamente después de completar el pago de solo US$5.00. Podrás abrir el PDF directamente en cualquier teléfono, tablet o computadora sin descargas complejas, guardarlo en tus dispositivos o imprimirlo para colorear sobre papel.',
  },
  {
    id: 'faq-5',
    question: '¿Hay algún costo mensual o suscripción oculta?',
    answer: 'No. Es un pago único de solo US$5.00. Obtienes acceso de por vida a 365 Días de Color y a los 3 Bonos de regalo sin mensualidades ni cobros recurrentes de ningún tipo.',
  },
  {
    id: 'faq-6',
    question: '¿Qué garantía tengo?',
    answer: 'Cuentas con 7 días de garantía incondicional. Puedes explorar el calendario, revisar los 3 bonos y comenzar a poner en práctica tus primeros retos. Si el producto no es adecuado para ti por cualquier motivo, puedes solicitar el reembolso del 100% de tu dinero dentro de los primeros 7 días.',
  },
  {
    id: 'faq-7',
    question: '¿Necesito tener experiencia previa o saber dibujar?',
    answer: 'En absoluto. 365 Días de Color está pensado precisamente para eliminar el bloqueo de la hoja en blanco y la autoexigencia. No compites con nadie ni buscas hacer obras maestras: se trata de soltar la mano, disfrutar del color y desconectar unos minutos al día.',
  },
  {
    id: 'faq-8',
    question: '¿Puedo imprimir las páginas o colorearlas en digital?',
    answer: '¡Ambas opciones son válidas! El material viene en formato PDF digital de alta calidad. Puedes imprimir el mes completo o las hojas que quieras colorear con lápices, rotuladores o acuarelas, o abrirlo en aplicaciones de iPad/tablet (como GoodNotes, Notability o Procreate) si prefieres pintar en digital.',
  },
];

interface FaqSectionProps {
  onCtaClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  // First item open by default, as in the reference page
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="bg-[#FAF7F2] text-[#241715] py-16 md:py-24 border-b border-[#E8DFD5]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c4998e]/20 text-[#834234] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Claras</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B110F] tracking-tight uppercase leading-tight">
            PREGUNTAS FRECUENTES
          </h2>
          <div className="w-16 h-1 bg-[#c4998e] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E7DCD1] overflow-hidden shadow-2xs transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4 hover:bg-[#FAF6F2] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#1E1210] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF5F0] border border-[#E5DAD0] flex items-center justify-center shrink-0 text-[#8C4A3A] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#c4998e] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#46332F] leading-relaxed border-t border-[#F2ECE4] pt-4 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt in FAQ */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#c4998e]/15 border border-[#c4998e]/35 text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#1F1412]">
            ¿Tienes todo listo para comenzar tus 365 días de inspiración?
          </h3>
          <p className="text-sm sm:text-base text-[#46322E] max-w-md mx-auto">
            Accede hoy al calendario completo y los 3 bonos incluidos por solo US$5.00 con garantía de 7 días.
          </p>
          <div className="pt-2">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-white bg-[#1F1513] hover:bg-[#342320] rounded-xl shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              <span>QUIERO MI ACCESO POR US$5.00</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
