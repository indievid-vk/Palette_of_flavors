import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../data/categories';
import { CategoryId, Combination, FilterOptions } from '../types';
import { 
  Cookie, Apple, Cherry, Flame, Flower2, Milk, Nut, Sparkles, 
  LayoutGrid, Layers, ChevronDown, ChevronUp, Check, X, Search, 
  Utensils, Compass, HelpCircle, RotateCcw 
} from 'lucide-react';

interface CategoryGridProps {
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (category: CategoryId | 'all') => void;
  categoryCounts: Record<CategoryId | 'all', number>;
  onQuickSearchIngredient: (ingredientName: string) => void;
  activeQuickIngredient: string;
  allCombinations?: Combination[];
  filters?: FilterOptions;
  onFilterChange?: (updated: Partial<FilterOptions>) => void;
  onResetFilters?: () => void;
  onOpenGlossary?: () => void;
  totalResults?: number;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  onQuickSearchIngredient,
  activeQuickIngredient,
  allCombinations = [],
  filters,
  onFilterChange,
  onResetFilters,
  onOpenGlossary,
  totalResults = 0,
}) => {
  const [activeTab, setActiveTab] = useState<'categories' | 'ingredients' | 'search'>('categories');
  const [ingredientFilterQuery, setIngredientFilterQuery] = useState('');

  const quickIngredients = [
    'Шоколад', 'Малина', 'Лимон', 'Ваниль', 'Карамель', 'Фисташка', 'Черника', 'Матча', 'Мед', 'Кофе'
  ];

  // Map category ID to unique list of ingredient names in that category
  const categoryIngredientsMap = useMemo(() => {
    const setMap: Record<CategoryId, Set<string>> = {
      chocolates: new Set(),
      fruits: new Set(),
      berries: new Set(),
      nuts: new Set(),
      creamy: new Set(),
      spices: new Set(),
      floral: new Set(),
    };

    allCombinations.forEach((item) => {
      if (setMap[item.primary_category]) {
        setMap[item.primary_category].add(item.primary_name);
      }
      if (setMap[item.secondary_category]) {
        setMap[item.secondary_category].add(item.secondary_name);
      }
    });

    const result: Record<CategoryId, string[]> = {
      chocolates: [],
      fruits: [],
      berries: [],
      nuts: [],
      creamy: [],
      spices: [],
      floral: [],
    };

    (Object.keys(setMap) as CategoryId[]).forEach((catId) => {
      result[catId] = Array.from(setMap[catId]).sort((a, b) => a.localeCompare(b, 'ru'));
    });

    return result;
  }, [allCombinations]);

  // All unique ingredients across all combinations with pairing counts
  const allUniqueIngredients = useMemo(() => {
    const map = new Map<string, { name: string; count: number }>();

    allCombinations.forEach((item) => {
      const pName = item.primary_name;
      const sName = item.secondary_name;

      if (!map.has(pName)) {
        map.set(pName, { name: pName, count: 1 });
      } else {
        map.get(pName)!.count += 1;
      }

      if (!map.has(sName)) {
        map.set(sName, { name: sName, count: 1 });
      } else {
        map.get(sName)!.count += 1;
      }
    });

    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  }, [allCombinations]);

  // Filtered ingredients for Tab 2
  const filteredIngredientsList = useMemo(() => {
    if (!ingredientFilterQuery.trim()) return allUniqueIngredients;
    const q = ingredientFilterQuery.toLowerCase().trim();
    return allUniqueIngredients.filter((ing) => ing.name.toLowerCase().includes(q));
  }, [allUniqueIngredients, ingredientFilterQuery]);

  const renderCategoryIcon = (id: CategoryId, className: string = "w-4 h-4") => {
    switch (id) {
      case 'chocolates': return <Cookie className={className} />;
      case 'fruits': return <Apple className={className} />;
      case 'berries': return <Cherry className={className} />;
      case 'nuts': return <Nut className={className} />;
      case 'creamy': return <Milk className={className} />;
      case 'spices': return <Flame className={className} />;
      case 'floral': return <Flower2 className={className} />;
      default: return null;
    }
  };

  return (
    <aside className="glass-card rounded-3xl p-4 sm:p-5 flex flex-col gap-4 transition-all">
      
      {/* 3 Main Tabs Header */}
      <div className="grid grid-cols-3 gap-1 glass-pill p-1 rounded-2xl text-xs font-semibold">
        <button
          onClick={() => setActiveTab('categories')}
          className={`py-2 px-1 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'categories'
              ? 'glass-button-primary text-white font-bold'
              : 'text-[#556E5F] hover:text-[#23372B] hover:bg-white/50'
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Категории</span>
        </button>

        <button
          onClick={() => setActiveTab('ingredients')}
          className={`py-2 px-1 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'ingredients'
              ? 'glass-button-primary text-white font-bold'
              : 'text-[#556E5F] hover:text-[#23372B] hover:bg-white/50'
          }`}
        >
          <Utensils className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Ингредиенты</span>
        </button>

        <button
          onClick={() => setActiveTab('search')}
          className={`py-2 px-1 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'search'
              ? 'glass-button-primary text-white font-bold'
              : 'text-[#556E5F] hover:text-[#23372B] hover:bg-white/50'
          }`}
        >
          <Search className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Поиск</span>
        </button>
      </div>

      {/* TAB 1: CATEGORIES */}
      {activeTab === 'categories' && (
        <div className="space-y-3 animate-fadeIn">
          
          {/* Header info */}
          <div className="flex items-center justify-between pb-2 border-b border-[#DAE8DF]">
            <span className="text-xs font-bold text-[#23372B] font-serif">
              Категории вкусов ({CATEGORIES.length})
            </span>

            {activeQuickIngredient && (
              <button
                onClick={() => onQuickSearchIngredient('')}
                className="text-[10px] font-semibold text-[#5E8A6E] bg-[#E8F1EB] hover:bg-[#DAE8DF] px-2 py-0.5 rounded-full flex items-center gap-1 transition-colors"
                title="Сбросить выбранный ингредиент"
              >
                <X className="w-3 h-3" />
                <span>Сброс</span>
              </button>
            )}
          </div>

          {/* "All Categories" Button */}
          <button
            onClick={() => onSelectCategory('all')}
            className={`w-full p-2.5 rounded-2xl border text-left text-xs font-semibold flex items-center justify-between transition-all active:scale-98 cursor-pointer ${
              selectedCategory === 'all'
                ? 'glass-button-primary text-white shadow-sm font-bold'
                : 'glass-pill text-[#23372B] hover:bg-white/90 border-[#DAE8DF]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Все категории</span>
            </div>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              selectedCategory === 'all' ? 'bg-white/30 text-white' : 'bg-[#E8F1EB] text-[#345741]'
            }`}>
              {categoryCounts['all'] || 0}
            </span>
          </button>

          {/* Category Accordion List */}
          <div className="space-y-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              const ingredients = categoryIngredientsMap[cat.id] || [];

              return (
                <div
                  key={cat.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#2F4F3B]/95 via-[#3B5F48]/95 to-[#2F4F3B]/95 backdrop-blur-md text-white border-[#B6CEBE]/50 shadow-md ring-2 ring-[#7E9F86]/60'
                      : 'glass-pill text-[#23372B] hover:bg-white/90 border-[#DAE8DF]'
                  }`}
                >
                  {/* Category Header Bar */}
                  <button
                    onClick={() => onSelectCategory(isSelected ? 'all' : cat.id)}
                    className="w-full p-2.5 text-left flex items-center justify-between text-xs font-medium cursor-pointer active:scale-98"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`p-1.5 rounded-xl shrink-0 ${
                        isSelected ? 'bg-white/20 text-white shadow-2xs' : 'bg-[#E8F1EB] text-[#345741]'
                      }`}>
                        {renderCategoryIcon(cat.id, "w-4 h-4")}
                      </span>

                      <div className="truncate">
                        <span className="truncate font-serif font-bold block text-xs">
                          {cat.name}
                        </span>
                        {isSelected && ingredients.length > 0 && (
                          <span className="text-[10px] font-normal text-white/80 block">
                            {ingredients.length} ингредиентов
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-1">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        isSelected ? 'bg-white/25 text-white' : 'bg-[#E8F1EB] text-[#345741]'
                      }`}>
                        {count}
                      </span>
                      
                      {isSelected ? (
                        <ChevronUp className="w-4 h-4 text-white/90" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#556E5F]" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Ingredients Panel */}
                  {isSelected && ingredients.length > 0 && (
                    <div className="p-3 pt-2 bg-black/20 backdrop-blur-md border-t border-white/15 space-y-2 animate-fadeIn">
                      <div className="flex items-center justify-between text-[10px] uppercase font-bold text-white/80 tracking-wider">
                        <span>Ингредиенты:</span>
                        <span className="text-[9px] text-[#A8C3B3] lowercase">нажмите для выбора</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                        {ingredients.map((ing) => {
                          const isActive = activeQuickIngredient.toLowerCase() === ing.toLowerCase();
                          return (
                            <button
                              key={ing}
                              onClick={(e) => {
                                e.stopPropagation();
                                onQuickSearchIngredient(isActive ? '' : ing);
                              }}
                              className={`text-[11px] font-medium px-2.5 py-1 rounded-xl transition-all flex items-center gap-1 border cursor-pointer ${
                                isActive
                                  ? 'glass-button-primary text-white font-bold scale-102 ring-2 ring-white/60 shadow-sm'
                                  : 'bg-white/15 text-white hover:bg-white/30 border-white/20 backdrop-blur-xs'
                              }`}
                            >
                              {isActive && <Check className="w-3 h-3 text-white" />}
                              <span>{ing}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Frequent Tags */}
          <div className="pt-3 border-t border-[#DAE8DF] space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#556E5F] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#5E8A6E]" />
              Частые ингредиенты:
            </span>

            <div className="flex flex-wrap gap-1.5">
              {quickIngredients.map((ing) => {
                const isActive = activeQuickIngredient.toLowerCase() === ing.toLowerCase();
                return (
                  <button
                    key={ing}
                    onClick={() => onQuickSearchIngredient(isActive ? '' : ing)}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'glass-button-primary text-white shadow-xs font-bold'
                        : 'glass-pill text-[#23372B] hover:bg-white/90 border-[#DAE8DF]'
                    }`}
                  >
                    #{ing}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: INGREDIENTS */}
      {activeTab === 'ingredients' && (
        <div className="space-y-3 animate-fadeIn">
          
          {/* Header & Inner Search */}
          <div className="space-y-2 pb-2 border-b border-[#DAE8DF]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#23372B] font-serif">
                Все ингредиенты ({allUniqueIngredients.length})
              </span>
              {activeQuickIngredient && (
                <button
                  onClick={() => onQuickSearchIngredient('')}
                  className="text-[10px] font-semibold text-[#5E8A6E] glass-pill px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-colors"
                >
                  <X className="w-3 h-3" />
                  <span>Сброс ({activeQuickIngredient})</span>
                </button>
              )}
            </div>

            {/* Quick Filter Input for Ingredients List */}
            <div className="relative">
              <input
                type="text"
                value={ingredientFilterQuery}
                onChange={(e) => setIngredientFilterQuery(e.target.value)}
                placeholder="Фильтр ингредиентов..."
                className="w-full pl-8 pr-8 py-2 rounded-xl glass-input text-[#23372B] text-xs placeholder:text-[#556E5F]/60 focus:outline-none focus:ring-2 focus:ring-[#5E8A6E]/50"
              />
              <Search className="w-3.5 h-3.5 text-[#556E5F] absolute left-2.5 top-1/2 -translate-y-1/2" />
              {ingredientFilterQuery && (
                <button
                  onClick={() => setIngredientFilterQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#556E5F] hover:text-[#23372B]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Clickable Ingredients Tag List */}
          <div className="flex flex-wrap gap-1.5 max-h-[60vh] overflow-y-auto pr-1 custom-scrollbar">
            {filteredIngredientsList.length === 0 ? (
              <p className="text-xs text-[#556E5F] py-4 text-center w-full italic">
                Ингредиенты не найдены
              </p>
            ) : (
              filteredIngredientsList.map((ingObj) => {
                const isActive = activeQuickIngredient.toLowerCase() === ingObj.name.toLowerCase();
                return (
                  <button
                    key={ingObj.name}
                    onClick={() => onQuickSearchIngredient(isActive ? '' : ingObj.name)}
                    className={`text-xs font-medium px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'glass-button-primary text-white font-bold scale-102 ring-2 ring-white/60 shadow-xs'
                        : 'glass-pill text-[#23372B] hover:bg-white/90 border-[#DAE8DF]'
                    }`}
                  >
                    <span>{ingObj.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/30 text-white' : 'bg-[#E8F1EB] text-[#345741]'
                    }`}>
                      {ingObj.count}
                    </span>
                  </button>
                );
              })
            )}
          </div>

        </div>
      )}

      {/* TAB 3: SEARCH & FILTERS */}
      {activeTab === 'search' && filters && onFilterChange && (
        <div className="space-y-4 animate-fadeIn">
          
          {/* Top Search Bar */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#23372B] font-serif flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-[#5E8A6E]" />
                Двусторонний поиск
              </span>
              <span className="text-[10px] text-[#556E5F] glass-pill px-2.5 py-0.5 rounded-full">
                найдено: <strong className="text-[#23372B]">{totalResults}</strong>
              </span>
            </label>

            <div className="relative">
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                placeholder="Поиск ингредиента..."
                className="w-full pl-8 pr-8 py-2.5 rounded-xl glass-input text-[#23372B] placeholder:text-[#556E5F]/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#5E8A6E]/50"
              />
              <Search className="w-3.5 h-3.5 text-[#556E5F] absolute left-2.5 top-1/2 -translate-y-1/2" />
              {filters.searchQuery && (
                <button
                  onClick={() => onFilterChange({ searchQuery: '' })}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#556E5F] hover:text-[#23372B]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Type Filter Segment */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#23372B] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#5E8A6E]" />
              Тип сочетания
            </label>
            <div className="grid grid-cols-3 gap-1 glass-pill p-1 rounded-xl text-xs font-medium">
              <button
                onClick={() => onFilterChange({ typeFilter: 'all' })}
                className={`py-1.5 rounded-lg transition-all cursor-pointer ${
                  filters.typeFilter === 'all'
                    ? 'bg-[#5E8A6E] text-white shadow-xs font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                Все
              </button>
              <button
                onClick={() => onFilterChange({ typeFilter: 'classic' })}
                className={`py-1.5 rounded-lg transition-all cursor-pointer ${
                  filters.typeFilter === 'classic'
                    ? 'bg-[#345741] text-white shadow-xs font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                Классика
              </button>
              <button
                onClick={() => onFilterChange({ typeFilter: 'exotic' })}
                className={`py-1.5 rounded-lg transition-all cursor-pointer ${
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
              {onOpenGlossary && (
                <button
                  onClick={onOpenGlossary}
                  className="text-[10px] text-[#5E8A6E] hover:underline flex items-center gap-0.5"
                >
                  <HelpCircle className="w-3 h-3" />
                  Шкалы
                </button>
              )}
            </div>

            <div className="grid grid-cols-4 gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#DAE8DF] text-[10px] font-medium">
              <button
                onClick={() => onFilterChange({ minIntensity: 1, maxIntensity: 5 })}
                className={`py-1 rounded-md transition-all cursor-pointer ${
                  filters.minIntensity === 1 && filters.maxIntensity === 5
                    ? 'bg-[#E28751] text-white font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                1–5
              </button>
              <button
                onClick={() => onFilterChange({ minIntensity: 1, maxIntensity: 2 })}
                className={`py-1 rounded-md transition-all cursor-pointer ${
                  filters.minIntensity === 1 && filters.maxIntensity === 2
                    ? 'bg-[#E28751] text-white font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                1–2
              </button>
              <button
                onClick={() => onFilterChange({ minIntensity: 3, maxIntensity: 3 })}
                className={`py-1 rounded-md transition-all cursor-pointer ${
                  filters.minIntensity === 3 && filters.maxIntensity === 3
                    ? 'bg-[#E28751] text-white font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                3
              </button>
              <button
                onClick={() => onFilterChange({ minIntensity: 4, maxIntensity: 5 })}
                className={`py-1 rounded-md transition-all cursor-pointer ${
                  filters.minIntensity === 4 && filters.maxIntensity === 5
                    ? 'bg-[#E28751] text-white font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                4–5
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
          </div>

          {/* Exotics Range Control */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#23372B] flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-[#D96B84]" />
                Экзотика: <span className="text-[#D96B84] font-bold">{filters.minRisk}–{filters.maxRisk}</span>
              </label>
              {onOpenGlossary && (
                <button
                  onClick={onOpenGlossary}
                  className="text-[10px] text-[#5E8A6E] hover:underline flex items-center gap-0.5"
                >
                  <HelpCircle className="w-3 h-3" />
                  Шкалы
                </button>
              )}
            </div>

            <div className="grid grid-cols-4 gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#DAE8DF] text-[10px] font-medium">
              <button
                onClick={() => onFilterChange({ minRisk: 1, maxRisk: 5 })}
                className={`py-1 rounded-md transition-all cursor-pointer ${
                  filters.minRisk === 1 && filters.maxRisk === 5
                    ? 'bg-[#D96B84] text-white font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                1–5
              </button>
              <button
                onClick={() => onFilterChange({ minRisk: 1, maxRisk: 2 })}
                className={`py-1 rounded-md transition-all cursor-pointer ${
                  filters.minRisk === 1 && filters.maxRisk === 2
                    ? 'bg-[#D96B84] text-white font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                1–2
              </button>
              <button
                onClick={() => onFilterChange({ minRisk: 3, maxRisk: 3 })}
                className={`py-1 rounded-md transition-all cursor-pointer ${
                  filters.minRisk === 3 && filters.maxRisk === 3
                    ? 'bg-[#D96B84] text-white font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                3
              </button>
              <button
                onClick={() => onFilterChange({ minRisk: 4, maxRisk: 5 })}
                className={`py-1 rounded-md transition-all cursor-pointer ${
                  filters.minRisk === 4 && filters.maxRisk === 5
                    ? 'bg-[#D96B84] text-white font-bold'
                    : 'text-[#556E5F] hover:text-[#23372B]'
                }`}
              >
                4–5
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
                className="w-1/2 accent-[#D96B84] cursor-pointer"
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
                className="w-1/2 accent-[#D96B84] cursor-pointer"
              />
            </div>
          </div>

          {/* Reset Filters button */}
          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="w-full py-2 rounded-xl text-xs text-[#5E8A6E] hover:bg-[#E8F1EB] border border-[#B6CEBE] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Сбросить все фильтры
            </button>
          )}

        </div>
      )}

    </aside>
  );
};
