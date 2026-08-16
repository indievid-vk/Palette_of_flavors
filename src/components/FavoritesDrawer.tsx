import React from 'react';
import { X, Heart, Trash2, Sparkles, Copy } from 'lucide-react';
import { Combination } from '../types';
import { ResultCard } from './ResultCard';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Combination[];
  onToggleFavorite: (item: Combination) => void;
  onSelectTag: (tag: string) => void;
  onOpenAiForPairing: (item: Combination) => void;
  onClearAllFavorites: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onToggleFavorite,
  onSelectTag,
  onOpenAiForPairing,
  onClearAllFavorites,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-modal w-full max-w-lg h-full p-6 relative flex flex-col justify-between overflow-y-auto rounded-l-3xl rounded-r-none border-y-0 border-r-0">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#DAE8DF] pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl glass-button-primary text-white flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#23372B] font-serif">
                  Избранные сочетания
                </h2>
                <p className="text-xs text-[#556E5F]">
                  Сохранено пар: {favorites.length}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full glass-button text-[#23372B] hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List or Empty */}
          {favorites.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Heart className="w-12 h-12 text-[#556E5F]/30 mx-auto stroke-1" />
              <p className="text-sm font-medium text-[#23372B]">
                У вас пока нет сохранённых вкусовых пар
              </p>
              <p className="text-xs text-[#556E5F] max-w-xs mx-auto">
                Нажимайте на сердечко на карточках результатa, чтобы формировать своё профессиональное меню.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#556E5F]">Ваша рабочая коллекция</span>
                <button
                  onClick={onClearAllFavorites}
                  className="text-rose-600 hover:underline flex items-center gap-1 font-medium cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Очистить список
                </button>
              </div>

              {favorites.map((item) => (
                <ResultCard
                  key={item.id}
                  item={item}
                  searchQuery=""
                  isFavorite={true}
                  onToggleFavorite={onToggleFavorite}
                  onSelectTag={onSelectTag}
                  onOpenAiForPairing={onOpenAiForPairing}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#DAE8DF] mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl glass-button text-[#23372B] font-semibold text-xs hover:bg-white transition-colors cursor-pointer"
          >
            Закрыть панель
          </button>
        </div>

      </div>
    </div>
  );
};
