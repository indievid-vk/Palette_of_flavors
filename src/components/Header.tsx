import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, PlusCircle, Download, Info } from 'lucide-react';

interface HeaderProps {
  onOpenGlossary: () => void;
  onOpenAiGenerator: () => void;
  onOpenAddModal: () => void;
  onOpenFavorites: () => void;
  onOpenTeamCredits: () => void;
  onOpenAbout: () => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAiGenerator,
  onOpenAddModal,
  onOpenFavorites,
  onOpenAbout,
  favoritesCount,
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 glass-header transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col gap-2.5">
          
          {/* App Title with Pastel Accent Badges & Subtitle */}
          <div className="flex items-start sm:items-center justify-between gap-2">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#23372B] font-serif flex items-center gap-2">
                  Палитра вкусов
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-[#556E5F] uppercase glass-pill px-3 py-1 rounded-full shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#7E9F86] shadow-2xs"></span>
                  <span className="w-2 h-2 rounded-full bg-[#F5A66B] shadow-2xs"></span>
                  <span className="w-2 h-2 rounded-full bg-[#E8899E] shadow-2xs"></span>
                  <span className="w-2 h-2 rounded-full bg-[#7F9CB9] shadow-2xs"></span>
                  <span className="w-2 h-2 rounded-full bg-[#23372B] shadow-2xs"></span>
                  Palette of Flavors
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#556E5F] font-medium leading-snug">
                Интерактивный гид по кондитерским и гастрономическим сочетаниям
              </p>
            </div>

            {/* Info (i) Button in top right corner */}
            <button
              onClick={onOpenAbout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold glass-button text-[#23372B] hover:bg-white/90 transition-all active:scale-95 cursor-pointer shrink-0 mt-0.5 sm:mt-0 border border-[#B6CEBE]/50"
              title="О приложении"
              aria-label="О приложении"
            >
              <Info className="w-4 h-4 text-[#5E8A6E]" />
              <span className="hidden sm:inline">О приложении</span>
            </button>
          </div>

          {/* Action Buttons under Title */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-0.5 scrollbar-none flex-wrap">
            
            {/* AI Generator Button */}
            <button
              onClick={onOpenAiGenerator}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold glass-button-primary text-white hover:opacity-95 transition-all whitespace-nowrap active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white drop-shadow-xs" />
              <span>AI Трио</span>
            </button>

            {/* Add Custom Pairing */}
            <button
              onClick={onOpenAddModal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold glass-button text-[#23372B] hover:bg-white/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-[#5E8A6E]" />
              <span>+ Пара</span>
            </button>

            {/* Favorites Button */}
            <button
              onClick={onOpenFavorites}
              className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold glass-button text-[#23372B] hover:bg-white/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-[#E0657F] fill-[#E0657F]' : 'text-[#718577]'}`} />
              <span>Избранное</span>
              {favoritesCount > 0 && (
                <span className="ml-0.5 bg-[#E0657F] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full shadow-2xs">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Install PWA Prompt button if available */}
            {deferredPrompt && (
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold glass-button text-[#446882] hover:bg-[#EBF2F8] transition-all whitespace-nowrap active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#5C7C99]" />
                <span>Установить</span>
              </button>
            )}

          </div>

        </div>
      </div>
    </header>
  );
};

