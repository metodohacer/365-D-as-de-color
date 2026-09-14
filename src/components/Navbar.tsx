import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 180);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E7DDD3] py-2.5'
          : 'bg-[#c4998e] border-b border-[#b78b80] py-3 text-[#211613]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer focus:outline-hidden"
        >
          <div className="w-8 h-8 rounded-lg bg-[#1F1513] text-white flex items-center justify-center font-black text-xs tracking-tighter">
            365
          </div>
          <div className="flex flex-col">
            <span
              className={`font-black text-sm sm:text-base tracking-tight leading-none uppercase ${
                scrolled ? 'text-[#1F1513]' : 'text-[#1F1513]'
              }`}
            >
              365 DÍAS DE COLOR
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wider ${
                scrolled ? 'text-[#7D5C54]' : 'text-[#442822]'
              }`}
            >
              HÁBITO CREATIVO
            </span>
          </div>
        </a>

        {/* Subtitle / Badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#3F2B26] bg-white/40 px-3 py-1.5 rounded-full border border-white/60">
            <Sparkles className="w-3.5 h-3.5 text-[#8C4A3A]" />
            <span>PDF Digital + 3 Bonos Exclusivos</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
