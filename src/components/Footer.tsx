import React from 'react';
import { ShieldCheck, Lock, CreditCard, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A110F] text-[#EDE4DE] py-14 border-t border-[#31201D]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Trust Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 border-b border-[#30211E] text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#c4998e]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider">Compra 100% Segura</h4>
              <p className="text-xs text-[#A89893]">Encriptación SSL de 256 bits mediante Hotmart</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#c4998e]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider">Garantía de 7 Días</h4>
              <p className="text-xs text-[#A89893]">Reembolso total garantizado sin riesgos</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#c4998e]">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider">Pago en Moneda Local</h4>
              <p className="text-xs text-[#A89893]">Tarjetas, efectivo y métodos locales</p>
            </div>
          </div>
        </div>

        {/* Payment logos / text badges */}
        <div className="py-8 border-b border-[#30211E] text-center">
          <p className="text-xs uppercase tracking-wider text-[#A2918B] font-semibold mb-4">
            Métodos de pago aceptados y procesados de forma segura
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[#D4C5BE]">
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">VISA</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">MasterCard</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">American Express</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">PayPal</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">OXXO (México)</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">Efecty (Colombia)</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">PagoEfectivo (Perú)</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">Sencillito (Chile)</span>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 text-center space-y-3 text-xs text-[#95847F] leading-relaxed">
          <p className="font-semibold text-[#D3C4BD]">
            365 DÍAS DE COLOR — Todos los derechos reservados © {new Date().getFullYear()}
          </p>
          <p className="max-w-3xl mx-auto">
            Este sitio web no forma parte ni está respaldado por Facebook, Instagram, Google o Hotmart Inc. Las marcas registradas pertenecen a sus respectivos propietarios. Los resultados pueden variar de persona a persona según el compromiso y la práctica personal.
          </p>
        </div>
      </div>
    </footer>
  );
};
