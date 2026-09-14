import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { IMAGES } from '../assets';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl?: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  checkoutUrl = 'https://pay.hotmart.com/',
}) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to checkout URL
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E9DFD6] overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#c4998e] text-[#1E1210] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#1E1210]" />
            <span className="font-extrabold text-sm uppercase tracking-wider">
              Resumen de Tu Pedido Seguro
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/40 hover:bg-white/70 flex items-center justify-center text-[#1E1210] transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
          {/* Bundle Item */}
          <div className="flex items-center gap-4 p-3 bg-[#FAF7F3] rounded-2xl border border-[#EADFD5]">
            <img
              src={IMAGES.heroCover}
              alt="Pack 365 Días de Color"
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-xl object-cover border border-[#E5DAD0]"
            />
            <div className="flex-1">
              <h4 className="font-bold text-sm sm:text-base text-[#1E1210]">
                365 Días de Color + 3 Bonos
              </h4>
              <p className="text-xs text-[#634E49]">Acceso digital de por vida en PDF</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#8C756F] line-through block">$47.00</span>
              <span className="font-extrabold text-lg text-[#8C4A3A]">US$5.00</span>
            </div>
          </div>

          {/* Value Items Checklist */}
          <div className="space-y-2 text-xs sm:text-sm text-[#3E2B27]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3F6E4D]" />
                <span>365 Días de Color (Calendario anual)</span>
              </span>
              <span className="font-semibold text-[#3F6E4D]">Incluido</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3F6E4D]" />
                <span>Bono 01: Creativo y Alquimista</span>
              </span>
              <span className="font-semibold text-[#3F6E4D]">GRATIS</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3F6E4D]" />
                <span>Bono 02: 32 Dibujos BOHO</span>
              </span>
              <span className="font-semibold text-[#3F6E4D]">GRATIS</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3F6E4D]" />
                <span>Bono 03: 200 Dibujos Frases Inspiradoras</span>
              </span>
              <span className="font-semibold text-[#3F6E4D]">GRATIS</span>
            </div>
          </div>

          <hr className="border-[#EBDED3]" />

          {/* Total */}
          <div className="flex items-center justify-between bg-[#FAF7F2] p-4 rounded-xl border border-[#E7DCD0]">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#6B554F] block">
                Total a pagar hoy:
              </span>
              <span className="text-xs text-[#3F6E4D] font-medium">Un único pago · Sin suscripción</span>
            </div>
            <span className="text-3xl font-black text-[#1E1210]">US$5.00</span>
          </div>

          {/* Action Button */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#3B2824] uppercase tracking-wider mb-1.5">
                Ingresa tu correo para recibir el acceso:
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#D9CBC0] focus:border-[#c4998e] focus:ring-2 focus:ring-[#c4998e]/20 outline-hidden bg-white text-[#211513]"
              />
            </div>

            <button
              type="submit"
              className="w-full group inline-flex items-center justify-center px-6 py-4 text-base font-extrabold text-white bg-[#1F1513] hover:bg-[#342320] rounded-xl shadow-lg transition-all cursor-pointer uppercase tracking-wider text-center"
            >
              <span>IR AL PAGO SEGURO (US$5.00)</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Guarantees */}
          <div className="flex items-center justify-center gap-4 text-xs text-[#634E48] pt-1">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#3F6E4D]" /> Garantía 7 días
            </span>
            <span className="inline-flex items-center gap-1">
              <Lock className="w-4 h-4 text-[#8C4A3A]" /> Procesado por Hotmart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
