import React, { useState, useMemo } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './lib/db';
import { SEED_COMBINATIONS } from './data/seedData';
import { CATEGORIES } from './data/categories';
import { Combination, CategoryId, FilterOptions } from './types';

// Components
import { Header } from './components/Header';
import { CategoryGrid } from './components/CategoryGrid';
import { ResultCard } from './components/ResultCard';
import { GlossaryModal } from './components/GlossaryModal';
import { AiTrioGeneratorModal } from './components/AiTrioGeneratorModal';
import { AddPairingModal } from './components/AddPairingModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { TeamCreditsModal } from './components/TeamCreditsModal';
import { ChefCalculatorModal } from './components/ChefCalculatorModal';
import { AboutAppModal } from './components/AboutAppModal';
import { InstallPrompt } from './components/InstallPrompt';
import { StandaloneWelcomeModal } from './components/StandaloneWelcomeModal';
import { BackToTopButton } from './components/BackToTopButton';

import { Sparkles, Utensils, RotateCcw, Plus, BookmarkCheck, LayoutGrid, Table, Heart, Flame, Compass, Sparkle, Scale, ShieldAlert } from 'lucide-react';

export default function App() {
  // Live Dexie IndexedDB query
  const liveCombinations = useLiveQuery(() => db.combinations.toArray());
  const liveFavorites = useLiveQuery(() => db.favorites.toArray());

  // Use live data or fallback to SEED_COMBINATIONS
  const allCombinations: Combination[] = liveCombinations && liveCombinations.length > 0 
    ? liveCombinations 
    : SEED_COMBINATIONS;

  const favoriteIds = new Set((liveFavorites || []).map((f) => f.pairingId));

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  // Display View Mode: Grid or Compact Table
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Filter options state
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    selectedCategory: 'all',
    typeFilter: 'all',
    minIntensity: 1,
    maxIntensity: 5,
    minRisk: 1,
    maxRisk: 5,
    applicationTag: null,
  });

  // Modal open states
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isAiGeneratorOpen, setIsAiGeneratorOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isTeamCreditsOpen, setIsTeamCreditsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [presetAiFlavor, setPresetAiFlavor] = useState('');

  // Chef Calculator modal state
  const [selectedChefPairing, setSelectedChefPairing] = useState<Combination | null>(null);
  const [isChefModalOpen, setIsChefModalOpen] = useState(false);

  const handleOpenChefCalculator = (item: Combination) => {
    setSelectedChefPairing(item);
    setIsChefModalOpen(true);
  };

  // Calculate counts for categories
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId | 'all', number> = {
      all: allCombinations.length,
      chocolates: 0,
      fruits: 0,
      berries: 0,
      nuts: 0,
      creamy: 0,
      spices: 0,
      floral: 0,
    };

    allCombinations.forEach((item) => {
      if (counts[item.primary_category] !== undefined) counts[item.primary_category]++;
      if (counts[item.secondary_category] !== undefined && item.secondary_category !== item.primary_category) {
        counts[item.secondary_category]++;
      }
    });

    return counts;
  }, [allCombinations]);

  // Handle Favorite toggle
  const handleToggleFavorite = async (item: Combination) => {
    try {
      const existing = await db.favorites.where('pairingId').equals(item.id).first();
      if (existing && existing.id) {
        await db.favorites.delete(existing.id);
      } else {
        await db.favorites.add({
          pairingId: item.id,
          savedAt: new Date().toISOString(),
        });
      }
    } catch (err) {
      console.error('Failed to toggle favorite:', err);
    }
  };

  // Clear all favorites
  const handleClearAllFavorites = async () => {
    try {
      await db.favorites.clear();
    } catch (err) {
      console.error('Failed to clear favorites:', err);
    }
  };

  // Add custom pairing to IndexedDB
  const handleSaveCustomPairing = async (newPairing: Combination) => {
    try {
      await db.combinations.add(newPairing);
    } catch (err) {
      console.error('Failed to add custom pairing:', err);
    }
  };

  // Filter update handler
  const handleFilterChange = (updated: Partial<FilterOptions>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setFilters({
      searchQuery: '',
      selectedCategory: 'all',
      typeFilter: 'all',
      minIntensity: 1,
      maxIntensity: 5,
      minRisk: 1,
      maxRisk: 5,
      applicationTag: null,
    });
  };

  // Filter Combinations (OR-Logic Search)
  const filteredCombinations = allCombinations.filter((item) => {
    // 1. Category Filter (matches primary OR secondary category)
    if (selectedCategory !== 'all') {
      if (item.primary_category !== selectedCategory && item.secondary_category !== selectedCategory) {
        return false;
      }
    }

    // 2. Type Filter (classic / exotic)
    if (filters.typeFilter !== 'all' && item.type !== filters.typeFilter) {
      return false;
    }

    // 3. Intensity Range Filter
    if (item.intensity < filters.minIntensity || item.intensity > filters.maxIntensity) {
      return false;
    }

    // 4. Risk Range Filter
    if (item.risk < filters.minRisk || item.risk > filters.maxRisk) {
      return false;
    }

    // 5. Application Tag Filter
    if (filters.applicationTag) {
      const tag = filters.applicationTag.toLowerCase().trim();
      const matchesApp = item.applications.some((app) => app.toLowerCase().includes(tag));
      if (!matchesApp) return false;
    }

    // 6. Search Query (OR-Logic: primary_name OR secondary_name OR description OR applications)
    if (filters.searchQuery.trim().length > 0) {
      const query = filters.searchQuery.toLowerCase().trim();
      const matchPrimary = item.primary_name.toLowerCase().includes(query);
      const matchSecondary = item.secondary_name.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      const matchApps = item.applications.some((app) => app.toLowerCase().includes(query));

      if (!matchPrimary && !matchSecondary && !matchDesc && !matchApps) {
        return false;
      }
    }

    return true;
  });

  // Get favorite combination objects
  const favoriteItems = allCombinations.filter((item) => favoriteIds.has(item.id));

  // Handle open AI Generator with pre-populated flavor
  const handleOpenAiForPairing = (item: Combination) => {
    setPresetAiFlavor(`${item.primary_name} + ${item.secondary_name}`);
    setIsAiGeneratorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#3D231D] flex flex-col font-sans relative overflow-x-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FFE4E8]/60 via-[#FFF8F5] to-[#FCE4EC]/50">
      
      {/* Lightweight Ambient Accent Spotlights (GPU friendly, no heavy blur calculation) */}
      <div className="fixed top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#FF9EAF]/15 pointer-events-none -z-10 blur-xl" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#A7F3D0]/12 pointer-events-none -z-10 blur-xl" />
      
      {/* Top Header */}
      <Header
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenAiGenerator={() => {
          setPresetAiFlavor('Шоколад');
          setIsAiGeneratorOpen(true);
        }}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenTeamCredits={() => setIsTeamCreditsOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        favoritesCount={favoriteIds.size}
      />

      {/* Main Content Workspace: Sidebar on Left, Main Content on Right */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">
        
        <div className="flex flex-col lg:flex-row items-start gap-6">
          
          {/* Left Vertical Sidebar: Category Panel */}
          <div className="w-full lg:w-80 shrink-0">
            <CategoryGrid
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                handleFilterChange({ selectedCategory: cat });
              }}
              categoryCounts={categoryCounts}
              onQuickSearchIngredient={(ing) => {
                handleFilterChange({ searchQuery: ing });
                if (ing) {
                  setViewMode('grid');
                  setTimeout(() => {
                    document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }
              }}
              activeQuickIngredient={filters.searchQuery}
              allCombinations={allCombinations}
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              onOpenGlossary={() => setIsGlossaryOpen(true)}
              totalResults={filteredCombinations.length}
            />
          </div>

          {/* Central Main Workspace */}
          <div className="flex-1 min-w-0 space-y-6 w-full">

            {/* Results Header & Grid/Table */}
            <div id="results-section" className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#3D231D] font-serif flex items-center gap-2">
                    Карточки вкусов
                    <span className="text-xs font-sans font-medium text-[#7C5A52] glass-pill px-3 py-0.5 rounded-full">
                      {filteredCombinations.length} найдено
                    </span>
                  </h3>

                  {selectedCategory !== 'all' && (
                    <span className="text-xs font-semibold text-[#E87A90] glass-pill px-3 py-1 rounded-full">
                      Категория: {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                    </span>
                  )}
                </div>

                {/* View Mode Toggle Switch */}
                <div className="flex items-center gap-1 glass-pill p-1 rounded-2xl">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewMode === 'grid'
                        ? 'glass-button-primary text-white font-bold'
                        : 'text-[#7C5A52] hover:text-[#3D231D]'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Карточки</span>
                  </button>

                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewMode === 'table'
                        ? 'glass-button-primary text-white font-bold'
                        : 'text-[#7C5A52] hover:text-[#3D231D]'
                    }`}
                  >
                    <Table className="w-3.5 h-3.5" />
                    <span>Таблица</span>
                  </button>
                </div>
              </div>

              {filteredCombinations.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-[#F4A3B4]/30 space-y-4 shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8F5] text-[#7C5A52] flex items-center justify-center mx-auto border border-[#F4A3B4]/30">
                    <Utensils className="w-8 h-8 text-[#E87A90]/60" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#3D231D] font-serif">
                      Сочетаний по выбранным фильтрам не найдено
                    </h4>
                    <p className="text-xs text-[#7C5A52] max-w-md mx-auto mt-1">
                      Попробуйте расширить диапазоны Интенсивности и Риска, либо сбросьте поиск ингредиентов.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleResetFilters}
                      className="px-4 py-2.5 rounded-2xl bg-[#E87A90] text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#d6697f] transition-colors shadow-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Сбросить фильтры</span>
                    </button>

                    <button
                      onClick={() => setIsAddModalOpen(true)}
                      className="px-4 py-2.5 rounded-2xl bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-emerald-800 transition-colors shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Добавить свою пару</span>
                    </button>
                  </div>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredCombinations.map((item) => (
                    <ResultCard
                      key={item.id}
                      item={item}
                      searchQuery={filters.searchQuery}
                      isFavorite={favoriteIds.has(item.id)}
                      onToggleFavorite={handleToggleFavorite}
                      onSelectTag={(tag) => handleFilterChange({ applicationTag: tag })}
                      onOpenAiForPairing={handleOpenAiForPairing}
                      onSelectIngredient={(ing) => handleFilterChange({ searchQuery: ing })}
                      onOpenChefCalculator={handleOpenChefCalculator}
                    />
                  ))}
                </div>
              ) : (
                /* High-density Compact Table View */
                <div className="glass-card rounded-3xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-[#3D231D]">
                      <thead className="glass-pill border-b border-white/60 font-serif font-bold text-[#3D231D]">
                        <tr>
                          <th className="p-3.5">Вкусовая пара</th>
                          <th className="p-3.5">Тип</th>
                          <th className="p-3.5">Применение / Изделия</th>
                          <th className="p-3.5 text-center">Интенсивность</th>
                          <th className="p-3.5 text-center">Риск</th>
                          <th className="p-3.5 text-right">Действия</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F4A3B4]/20">
                        {filteredCombinations.map((item) => {
                          const isFav = favoriteIds.has(item.id);
                          return (
                            <tr key={item.id} className="hover:bg-[#FFF8F5]/80 transition-colors">
                              <td className="p-3.5 font-bold font-serif text-sm text-[#3D231D]">
                                {item.primary_name} + {item.secondary_name}
                                <span className="block text-[11px] font-sans font-normal text-[#7C5A52] line-clamp-1 mt-0.5">
                                  {item.description}
                                </span>
                              </td>

                              <td className="p-3.5">
                                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                  item.type === 'classic'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-purple-100 text-purple-800'
                                }`}>
                                  {item.type === 'classic' ? 'Классика' : 'Экзотика'}
                                </span>
                              </td>

                              <td className="p-3.5">
                                <div className="flex gap-1 flex-wrap">
                                  {item.applications.slice(0, 3).map((tag, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => handleFilterChange({ applicationTag: tag })}
                                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#FFF8F5] border border-[#F4A3B4]/30 text-[#7C5A52] hover:bg-white"
                                    >
                                      #{tag}
                                    </button>
                                  ))}
                                </div>
                              </td>

                              <td className="p-3.5 text-center font-bold">
                                <div className="flex items-center justify-center gap-1 text-amber-900">
                                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                                  <span>{item.intensity}/5</span>
                                </div>
                              </td>

                              <td className="p-3.5 text-center font-bold">
                                <div className="flex items-center justify-center gap-1 text-rose-900">
                                  <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                                  <span>{item.risk}/5</span>
                                </div>
                              </td>

                              <td className="p-3.5 text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    onClick={() => handleToggleFavorite(item)}
                                    className={`p-1.5 rounded-lg border transition-all ${
                                      isFav
                                        ? 'bg-[#E87A90]/15 text-[#E87A90] border-[#E87A90]/30'
                                        : 'bg-[#FFF8F5] text-[#7C5A52] border-[#F4A3B4]/30 hover:bg-white'
                                    }`}
                                    title="В избранное"
                                  >
                                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-[#E87A90] text-[#E87A90]' : ''}`} />
                                  </button>

                                  <button
                                    onClick={() => handleOpenChefCalculator(item)}
                                    className="px-2 py-1 rounded-lg bg-[#FFF8F5] border border-[#F4A3B4]/40 text-[#4A2E2B] text-[11px] font-semibold flex items-center gap-1 hover:bg-white transition-colors"
                                    title="Калькулятор слоев и техкарта"
                                  >
                                    <Scale className="w-3 h-3 text-[#E29578]" />
                                    <span>Техкарта</span>
                                  </button>

                                  <button
                                    onClick={() => handleOpenAiForPairing(item)}
                                    className="px-2.5 py-1 rounded-lg bg-[#E87A90] text-white text-[11px] font-semibold flex items-center gap-1 hover:bg-[#d6697f] transition-colors"
                                  >
                                    <Sparkle className="w-3 h-3 text-white" />
                                    <span>AI Трио</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#4A2E2B]/10 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5A57]">
          <div>
            <p className="font-semibold text-[#2C1E1C]">
              PWA «Палитра вкусов» &bull; Версия 1.0.0-MVP
            </p>
            <p className="text-[11px] text-[#6B5A57]">
              Разработчик: Нейрокоманда «Индивид СтудИИя» (в рабочей среде Google AI Studio)
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAboutOpen(true)}
              className="hover:underline hover:text-[#4A2E2B]"
            >
              О приложении
            </button>
            <button
              onClick={() => setIsGlossaryOpen(true)}
              className="hover:underline hover:text-[#4A2E2B]"
            >
              Справочник шкал
            </button>
            <button
              onClick={() => setIsTeamCreditsOpen(true)}
              className="hover:underline hover:text-[#4A2E2B]"
            >
              О команде разработки
            </button>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <AboutAppModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      <AiTrioGeneratorModal
        isOpen={isAiGeneratorOpen}
        onClose={() => setIsAiGeneratorOpen(false)}
        presetFlavor={presetAiFlavor}
      />

      <AddPairingModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveCustomPairing}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favoriteItems}
        onToggleFavorite={handleToggleFavorite}
        onSelectTag={(tag) => handleFilterChange({ applicationTag: tag })}
        onOpenAiForPairing={handleOpenAiForPairing}
        onClearAllFavorites={handleClearAllFavorites}
      />

      <TeamCreditsModal
        isOpen={isTeamCreditsOpen}
        onClose={() => setIsTeamCreditsOpen(false)}
      />

      <ChefCalculatorModal
        isOpen={isChefModalOpen}
        onClose={() => setIsChefModalOpen(false)}
        pairing={selectedChefPairing}
      />

      {/* PWA Mechanics */}
      <InstallPrompt />
      <StandaloneWelcomeModal />
      <BackToTopButton />

    </div>
  );
}
