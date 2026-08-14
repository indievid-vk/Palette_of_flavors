import React, { useState } from 'react';
import { Combination } from '../types';
import { CATEGORIES } from '../data/categories';
import { Heart, Copy, Check, AlertTriangle, Flame, Sparkles, Tag, Scale, Compass } from 'lucide-react';

interface ResultCardProps {
  item: Combination;
  searchQuery: string;
  isFavorite: boolean;
  onToggleFavorite: (item: Combination) => void;
  onSelectTag: (tag: string) => void;
  onOpenAiForPairing: (item: Combination) => void;
  onSelectIngredient?: (ingredientName: string) => void;
  onOpenChefCalculator?: (item: Combination) => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  item,
  searchQuery,
  isFavorite,
  onToggleFavorite,
  onSelectTag,
  onOpenAiForPairing,
  onSelectIngredient,
  onOpenChefCalculator,
}) => {
  const [copied, setCopied] = useState(false);

  // Check if search matched secondary name to flip card headline orientation
  const isSecondaryMatched = searchQuery.trim().length > 0 && 
    item.secondary_name.toLowerCase().includes(searchQuery.toLowerCase().trim());

  const firstIng = isSecondaryMatched ? item.secondary_name : item.primary_name;
  const secondIng = isSecondaryMatched ? item.primary_name : item.secondary_name;

  const primaryCategoryObj = CATEGORIES.find((c) => c.id === item.primary_category);
  const secondaryCategoryObj = CATEGORIES.find((c) => c.id === item.secondary_category);

  const handleCopy = () => {
    const text = `${firstIng} + ${secondIng}\nТип: ${item.type === 'classic' ? 'Классика' : 'Экзотика'}\nИнтенсивность: ${item.intensity}/5, Риск: ${item.risk}/5\nОписание: ${item.description}\nПрименение: ${item.applications.map(a => '#' + a).join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card glass-card-hover rounded-3xl p-5 flex flex-col justify-between relative group">
      
      <div>
        {/* Top Badges & Actions Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Type Badge */}
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border glass-pill ${
                item.type === 'classic'
                  ? 'bg-emerald-50/80 text-emerald-800 border-emerald-200'
                  : 'bg-purple-50/80 text-purple-800 border-purple-200'
              }`}
            >
              {item.type === 'classic' ? 'Классика' : 'Экзотика'}
            </span>

            {/* Category tags */}
            <span className="text-[10px] text-[#7C5A52] glass-pill px-2.5 py-0.5 rounded-full font-medium">
              {primaryCategoryObj?.name} &bull; {secondaryCategoryObj?.name}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleFavorite(item)}
              className={`p-1.5 rounded-xl border transition-all glass-pill ${
                isFavorite
                  ? 'bg-[#FF4D6D]/15 text-[#FF4D6D] border-[#FF4D6D]/40'
                  : 'text-[#7C5A52] hover:bg-white/90'
              }`}
              title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#FF4D6D] text-[#FF4D6D]' : ''}`} />
            </button>

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-xl glass-pill text-[#7C5A52] hover:text-[#3D231D] transition-all"
              title="Скопировать карточку"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Dynamic Title with Clickable Ingredients */}
        <h3 className="text-lg sm:text-xl font-bold text-[#3D231D] font-serif mb-2 leading-snug">
          {onSelectIngredient ? (
            <button
              onClick={() => onSelectIngredient(firstIng)}
              className="hover:text-[#E87A90] transition-colors hover:underline text-left"
              title={`Фильтровать сочетания с "${firstIng}"`}
            >
              {firstIng}
            </button>
          ) : (
            <span>{firstIng}</span>
          )}
          <span className="text-[#E87A90] mx-1.5">+</span>
          {onSelectIngredient ? (
            <button
              onClick={() => onSelectIngredient(secondIng)}
              className="hover:text-[#E87A90] transition-colors hover:underline text-left"
              title={`Фильтровать сочетания с "${secondIng}"`}
            >
              {secondIng}
            </button>
          ) : (
            <span>{secondIng}</span>
          )}
          {isSecondaryMatched && (
            <span className="text-[10px] font-sans font-normal text-[#E87A90] ml-2 block sm:inline">
              (авто-поворот поиска)
            </span>
          )}
        </h3>

        {/* Description */}
        <p className="text-xs text-[#7C5A52] leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Dynamic Warnings */}
        <div className="space-y-1.5 mb-4">
          {item.risk >= 4 && (
            <div className="flex items-start gap-1.5 p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-950 text-xs font-medium">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>⚠️ Нишевое сочетание. Рекомендуется для авторских дегустаций</span>
            </div>
          )}

          {item.intensity === 5 && (
            <div className="flex items-start gap-1.5 p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-950 text-xs font-medium">
              <Flame className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>🔥 Используйте акцентно, не как основу десерта</span>
            </div>
          )}
        </div>

        {/* Visual Progress Scales */}
        <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl glass-pill mb-4">
          
          {/* Intensity Bar */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#3D231D] mb-1">
              <span>Интенсивность</span>
              <span className="text-[#E87A90] font-bold">{item.intensity}/5</span>
            </div>
            <div className="w-full bg-[#E87A90]/15 rounded-full h-2 overflow-hidden flex gap-0.5 p-0.5 shadow-2xs">
              {[1, 2, 3, 4, 5].map((lvl) => (
                <div
                  key={lvl}
                  className={`h-full flex-1 rounded-sm transition-all ${
                    lvl <= item.intensity ? 'bg-amber-500' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Exotics Bar */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#3D231D] mb-1">
              <span>Экзотика</span>
              <span className="text-purple-700 font-bold">{item.risk}/5</span>
            </div>
            <div className="w-full bg-purple-500/15 rounded-full h-2 overflow-hidden flex gap-0.5 p-0.5 shadow-2xs">
              {[1, 2, 3, 4, 5].map((lvl) => (
                <div
                  key={lvl}
                  className={`h-full flex-1 rounded-sm transition-all ${
                    lvl <= item.risk ? 'bg-purple-600' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Applications & Action Triggers */}
      <div className="space-y-3 pt-3 border-t border-white/60">
        
        {/* Tags */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <Tag className="w-3.5 h-3.5 text-[#7C5A52]" />
          {item.applications.map((app) => (
            <button
              key={app}
              onClick={() => onSelectTag(app)}
              className="text-[11px] font-medium text-[#3D231D] glass-pill hover:bg-white px-2.5 py-0.5 rounded-full transition-colors"
            >
              #{app}
            </button>
          ))}
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {onOpenChefCalculator && (
            <button
              onClick={() => onOpenChefCalculator(item)}
              className="w-full py-2.5 px-2.5 rounded-xl glass-button text-[#4A2E2B] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-98"
            >
              <Scale className="w-3.5 h-3.5 text-[#E29578]" />
              <span>Калькулятор & Техкарта</span>
            </button>
          )}

          <button
            onClick={() => onOpenAiForPairing(item)}
            className={`w-full py-2.5 px-2.5 rounded-xl glass-button-primary text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-98 ${
              !onOpenChefCalculator ? 'col-span-2' : ''
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>AI Трио-десерт</span>
          </button>
        </div>

      </div>

    </div>
  );
};
