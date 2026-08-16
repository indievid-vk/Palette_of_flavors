import React from 'react';
import { Search, X, HelpCircle, Flame, Sparkles, RotateCcw, Compass } from 'lucide-react';
import { FilterOptions } from '../types';

interface SearchAndFilterProps {
  filters: FilterOptions;
  onFilterChange: (updated: Partial<FilterOptions>) => void;
  onResetFilters: () => void;
  onOpenGlossary: () => void;
  totalResults: number;
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  onOpenGlossary,
  totalResults,
}) => {
  return (
    <div className="glass-card rounded-3xl p-4 sm:p-5 space-y-4">
      
      {/* Top Search Bar */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-[#23372B] uppercase tracking-wider flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-serif">
            <Search className="w-4 h-4 text-[#5E8A6E]" />
            Двусторонний поиск ингредиентов
          </span>
          <span className="text-[11px] font-medium text-[#556E5F] lowercase glass-pill px-3 py-0.5 rounded-full">
            найдено: <strong className="text-[#23372B] font-bold">{totalResults}</strong>
          </span>
        </label>

        <div className="relative">
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            placeholder="Введите ингредиент (напр. Черный кунжут, Лимон, Малина, Фисташка...)"
            className="w-full pl-10 pr-10 py-3 rounded-2xl glass-input text-[#23372B] placeholder:text-[#556E5F]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#5E8A6E]/50 transition-all shadow-2xs"
          />
          <Search className="w-4 h-4 text-[#556E5F] absolute left-3.5 top-1/2 -translate-y-1/2" />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#556E5F] hover:text-[#23372B] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="text-[11px] text-[#556E5F] flex items-center gap-1 italic">
          💡 Находит сочетания, где ингредиент выступает как основным, так и вторым акцентом (авто-поворот карточки).
        </p>
      </div>

      {/* Filter Controls Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-[#DAE8DF]">
        
        {/* Type Filter Segment */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-[#23372B] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#5E8A6E]" />
              Тип сочетания
            </label>
          </div>
          <div className="grid grid-cols-3 gap-1 glass-pill p-1 rounded-2xl text-xs font-medium">
            <button
              onClick={() => onFilterChange({ typeFilter: 'all' })}
              className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                filters.typeFilter === 'all'
                  ? 'glass-button-primary text-white font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              Все
            </button>
            <button
              onClick={() => onFilterChange({ typeFilter: 'classic' })}
              className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                filters.typeFilter === 'classic'
                  ? 'bg-[#345741] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              Классика
            </button>
            <button
              onClick={() => onFilterChange({ typeFilter: 'exotic' })}
              className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                filters.typeFilter === 'exotic'
                  ? 'bg-[#934F22] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              Экзотика
            </button>
          </div>
        </div>

        {/* Intensity Range Control */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-[#23372B] flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#E28751]" />
              Интенсивность: <span className="text-[#E28751] font-bold">{filters.minIntensity}–{filters.maxIntensity}</span>
            </label>
            <button
              onClick={onOpenGlossary}
              className="text-[11px] text-[#5E8A6E] hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <HelpCircle className="w-3 h-3" />
              Справка
            </button>
          </div>

          {/* Preset Level Buttons */}
          <div className="grid grid-cols-4 gap-1 bg-[#FAF7F2] p-1 rounded-2xl border border-[#DAE8DF] text-[11px] font-medium">
            <button
              onClick={() => onFilterChange({ minIntensity: 1, maxIntensity: 5 })}
              className={`py-1 rounded-lg transition-all cursor-pointer ${
                filters.minIntensity === 1 && filters.maxIntensity === 5
                  ? 'bg-[#E28751] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              1–5
            </button>
            <button
              onClick={() => onFilterChange({ minIntensity: 1, maxIntensity: 2 })}
              className={`py-1 rounded-lg transition-all cursor-pointer ${
                filters.minIntensity === 1 && filters.maxIntensity === 2
                  ? 'bg-[#E28751] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              1–2 Мягкая
            </button>
            <button
              onClick={() => onFilterChange({ minIntensity: 3, maxIntensity: 3 })}
              className={`py-1 rounded-lg transition-all cursor-pointer ${
                filters.minIntensity === 3 && filters.maxIntensity === 3
                  ? 'bg-[#E28751] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              3 Баланс
            </button>
            <button
              onClick={() => onFilterChange({ minIntensity: 4, maxIntensity: 5 })}
              className={`py-1 rounded-lg transition-all cursor-pointer ${
                filters.minIntensity === 4 && filters.maxIntensity === 5
                  ? 'bg-[#E28751] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              4–5 Яркая
            </button>
          </div>

          <div className="flex items-center gap-2 pt-0.5">
            <span className="text-[10px] text-[#556E5F]">Мин:</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={filters.minIntensity}
              onChange={(e) => {
                const val = Number(e.target.value);
                onFilterChange({
                  minIntensity: val,
                  maxIntensity: Math.max(val, filters.maxIntensity),
                });
              }}
              className="w-1/2 accent-[#E28751] cursor-pointer"
            />
            <span className="text-[10px] text-[#556E5F]">Макс:</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={filters.maxIntensity}
              onChange={(e) => {
                const val = Number(e.target.value);
                onFilterChange({
                  maxIntensity: val,
                  minIntensity: Math.min(val, filters.minIntensity),
                });
              }}
              className="w-1/2 accent-[#E28751] cursor-pointer"
            />
          </div>
          <p className="text-[10px] text-[#556E5F]">1 — Мягкая гармония &rarr; 5 — Взрывная яркость</p>
        </div>

        {/* Exotics Range Control */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-[#23372B] flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-[#E0657F]" />
              Экзотика: <span className="text-[#E0657F] font-bold">{filters.minRisk}–{filters.maxRisk}</span>
            </label>
            <button
              onClick={onOpenGlossary}
              className="text-[11px] text-[#5E8A6E] hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <HelpCircle className="w-3 h-3" />
              Справка
            </button>
          </div>

          {/* Preset Exotics Buttons */}
          <div className="grid grid-cols-4 gap-1 bg-[#FAF7F2] p-1 rounded-2xl border border-[#DAE8DF] text-[11px] font-medium">
            <button
              onClick={() => onFilterChange({ minRisk: 1, maxRisk: 5 })}
              className={`py-1 rounded-lg transition-all cursor-pointer ${
                filters.minRisk === 1 && filters.maxRisk === 5
                  ? 'bg-[#E0657F] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              1–5
            </button>
            <button
              onClick={() => onFilterChange({ minRisk: 1, maxRisk: 2 })}
              className={`py-1 rounded-lg transition-all cursor-pointer ${
                filters.minRisk === 1 && filters.maxRisk === 2
                  ? 'bg-[#E0657F] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              1–2 Канон
            </button>
            <button
              onClick={() => onFilterChange({ minRisk: 3, maxRisk: 3 })}
              className={`py-1 rounded-lg transition-all cursor-pointer ${
                filters.minRisk === 3 && filters.maxRisk === 3
                  ? 'bg-[#E0657F] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              3 Автор
            </button>
            <button
              onClick={() => onFilterChange({ minRisk: 4, maxRisk: 5 })}
              className={`py-1 rounded-lg transition-all cursor-pointer ${
                filters.minRisk === 4 && filters.maxRisk === 5
                  ? 'bg-[#E0657F] text-white shadow-xs font-bold'
                  : 'text-[#556E5F] hover:text-[#23372B]'
              }`}
            >
              4–5 Высокая
            </button>
          </div>

          <div className="flex items-center gap-2 pt-0.5">
            <span className="text-[10px] text-[#556E5F]">Мин:</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={filters.minRisk}
              onChange={(e) => {
                const val = Number(e.target.value);
                onFilterChange({
                  minRisk: val,
                  maxRisk: Math.max(val, filters.maxRisk),
                });
              }}
              className="w-1/2 accent-[#E0657F] cursor-pointer"
            />
            <span className="text-[10px] text-[#556E5F]">Макс:</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={filters.maxRisk}
              onChange={(e) => {
                const val = Number(e.target.value);
                onFilterChange({
                  maxRisk: val,
                  minRisk: Math.min(val, filters.minRisk),
                });
              }}
              className="w-1/2 accent-[#E0657F] cursor-pointer"
            />
          </div>
          <p className="text-[10px] text-[#556E5F]">1 — Традиционный канон &rarr; 5 — Высокая экзотика</p>
        </div>

      </div>

      {/* Active Application Tag or Reset Row */}
      {(filters.searchQuery || filters.typeFilter !== 'all' || filters.minIntensity > 1 || filters.maxIntensity < 5 || filters.minRisk > 1 || filters.maxRisk < 5 || filters.applicationTag) && (
        <div className="flex items-center justify-between pt-2 border-t border-[#DAE8DF] text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#556E5F]">Активные фильтры:</span>
            {filters.applicationTag && (
              <span className="bg-[#E8F1EB] text-[#345741] border border-[#B6CEBE] px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                #{filters.applicationTag}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-rose-600" 
                  onClick={() => onFilterChange({ applicationTag: null })}
                />
              </span>
            )}
          </div>

          <button
            onClick={onResetFilters}
            className="text-xs text-[#5E8A6E] hover:text-[#23372B] font-medium flex items-center gap-1 hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Сбросить все фильтры
          </button>
        </div>
      )}

    </div>
  );
};

