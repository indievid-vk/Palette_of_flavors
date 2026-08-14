import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, Heart, X } from 'lucide-react';

export const StandaloneWelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone && !localStorage.getItem('pwa_welcome_shown')) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('pwa_welcome_shown', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Confetti / Celebration Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#FF758F] rounded-full animate-bounce duration-700 opacity-80" />
        <div className="absolute top-1/3 right-12 w-4 h-4 bg-[#A7F3D0] rounded-full animate-ping duration-1000 opacity-70" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#60A5FA] rounded-full animate-pulse duration-500 opacity-80" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#FDE68A] rounded-full animate-bounce duration-1000 opacity-90" />
      </div>

      <div className="glass-modal rounded-3xl max-w-md w-full p-6 text-center space-y-4 relative shadow-2xl border border-white/90 bg-white/95 backdrop-blur-lg">
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full glass-button text-[#2C1E1C] hover:bg-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-[#FF758F] via-[#FF8FA3] to-[#FDE68A] flex items-center justify-center text-white shadow-lg animate-pulse">
          <Sparkles className="w-8 h-8 text-white" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold font-serif text-[#3D231D]">
            С возвращением в «Палитру»!
          </h3>
          <p className="text-xs text-[#6B5A57] leading-relaxed">
            Приложение успешно установлено на ваше устройство и работает в автономном режиме PWA. Все записи и комбинации будут всегда доступны под рукой — даже без интернета!
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 text-emerald-950 text-xs flex items-center gap-2 justify-center">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Готово к автономной работе без сети</span>
        </div>

        <button
          onClick={handleClose}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#FF758F] to-[#E87A90] text-white font-semibold text-xs shadow-md hover:opacity-95 transition-all cursor-pointer active:scale-98"
        >
          Начать работу
        </button>

        <div className="flex items-center justify-center gap-1 text-[11px] text-[#A08882]">
          <Heart className="w-3 h-3 text-[#FF758F] fill-[#FF758F]/30" />
          <span>Команда «Индивид СтуИИя»</span>
        </div>
      </div>
    </div>
  );
};
