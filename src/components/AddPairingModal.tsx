import React, { useState } from 'react';
import { X, PlusCircle, Check } from 'lucide-react';
import { Combination, CategoryId, CombinationType } from '../types';
import { CATEGORIES } from '../data/categories';

interface AddPairingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newPairing: Combination) => void;
}

export const AddPairingModal: React.FC<AddPairingModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [primaryName, setPrimaryName] = useState('');
  const [primaryCategory, setPrimaryCategory] = useState<CategoryId>('chocolates');
  const [secondaryName, setSecondaryName] = useState('');
  const [secondaryCategory, setSecondaryCategory] = useState<CategoryId>('fruits');
  const [type, setType] = useState<CombinationType>('classic');
  const [description, setDescription] = useState('');
  const [applications, setApplications] = useState('мусс, эклеры, ганаш');
  const [intensity, setIntensity] = useState(3);
  const [risk, setRisk] = useState(1);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!primaryName.trim() || !secondaryName.trim()) return;

    const newPairing: Combination = {
      id: `custom_${Date.now()}`,
      primary: primaryName.toLowerCase().replace(/\s+/g, '_'),
      primary_name: primaryName.trim(),
      primary_category: primaryCategory,
      secondary: secondaryName.toLowerCase().replace(/\s+/g, '_'),
      secondary_name: secondaryName.trim(),
      secondary_category: secondaryCategory,
      type,
      description: description.trim() || 'Авторское сочетание, созданное шеф-кондитером.',
      applications: applications.split(',').map(s => s.trim().replace(/^#/, '')).filter(Boolean),
      intensity,
      risk,
      isCustom: true,
    };

    onSave(newPairing);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
      // Reset form
      setPrimaryName('');
      setSecondaryName('');
      setDescription('');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-modal rounded-3xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-button text-[#2C1E1C] hover:bg-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
            <PlusCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2C1E1C] font-serif">
              Добавить авторскую пару
            </h2>
            <p className="text-xs text-[#6B5A57]">
              Сохраняется в автономную локальную база данных IndexedDB
            </p>
          </div>
        </div>

        {savedSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#2C1E1C] font-serif">
              Сочетание успешно сохранено!
            </h3>
            <p className="text-xs text-[#6B5A57]">
              Новая пара доступна в офлайн-поиске и фильтрах.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Primary Ingredient */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-[#2C1E1C] block mb-1">
                  Первый ингредиент *
                </label>
                <input
                  type="text"
                  required
                  value={primaryName}
                  onChange={(e) => setPrimaryName(e.target.value)}
                  placeholder="напр. Малина"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#4A2E2B]/20 text-xs text-[#2C1E1C] focus:outline-none focus:ring-2 focus:ring-[#E29578]/50"
                />
              </div>

              <div>
                <label className="font-semibold text-[#2C1E1C] block mb-1">
                  Категория первого *
                </label>
                <select
                  value={primaryCategory}
                  onChange={(e) => setPrimaryCategory(e.target.value as CategoryId)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#4A2E2B]/20 text-xs text-[#2C1E1C] focus:outline-none focus:ring-2 focus:ring-[#E29578]/50"
                >
                  {CATEGORIES.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Secondary Ingredient */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-[#2C1E1C] block mb-1">
                  Второй ингредиент *
                </label>
                <input
                  type="text"
                  required
                  value={secondaryName}
                  onChange={(e) => setSecondaryName(e.target.value)}
                  placeholder="напр. Эстрагон"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#4A2E2B]/20 text-xs text-[#2C1E1C] focus:outline-none focus:ring-2 focus:ring-[#E29578]/50"
                />
              </div>

              <div>
                <label className="font-semibold text-[#2C1E1C] block mb-1">
                  Категория второго *
                </label>
                <select
                  value={secondaryCategory}
                  onChange={(e) => setSecondaryCategory(e.target.value as CategoryId)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#4A2E2B]/20 text-xs text-[#2C1E1C] focus:outline-none focus:ring-2 focus:ring-[#E29578]/50"
                >
                  {CATEGORIES.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Type & Applications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-[#2C1E1C] block mb-1">
                  Тип палитры
                </label>
                <div className="flex gap-2 pt-0.5">
                  <button
                    type="button"
                    onClick={() => setType('classic')}
                    className={`flex-1 py-2 rounded-xl border font-medium ${
                      type === 'classic'
                        ? 'bg-emerald-700 text-white border-emerald-700'
                        : 'bg-white text-[#6B5A57] border-[#4A2E2B]/20'
                    }`}
                  >
                    Классика
                  </button>
                  <button
                    type="button"
                    onClick={() => setType('exotic')}
                    className={`flex-1 py-2 rounded-xl border font-medium ${
                      type === 'exotic'
                        ? 'bg-purple-700 text-white border-purple-700'
                        : 'bg-white text-[#6B5A57] border-[#4A2E2B]/20'
                    }`}
                  >
                    Экзотика
                  </button>
                </div>
              </div>

              <div>
                <label className="font-semibold text-[#2C1E1C] block mb-1">
                  Теги применения (через запятую)
                </label>
                <input
                  type="text"
                  value={applications}
                  onChange={(e) => setApplications(e.target.value)}
                  placeholder="мусс, конфи, ганаш"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#4A2E2B]/20 text-xs text-[#2C1E1C] focus:outline-none focus:ring-2 focus:ring-[#E29578]/50"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="font-semibold text-[#2C1E1C] block mb-1">
                Описание комбинации
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Вкусовое описание и гармония сочетания..."
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#4A2E2B]/20 text-xs text-[#2C1E1C] focus:outline-none focus:ring-2 focus:ring-[#E29578]/50"
              />
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-2 gap-4 p-3 rounded-xl bg-white border border-[#4A2E2B]/10">
              <div>
                <label className="font-semibold text-[#2C1E1C] block mb-1">
                  Интенсивность: {intensity}/5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full accent-[#4A2E2B]"
                />
              </div>

              <div>
                <label className="font-semibold text-[#2C1E1C] block mb-1">
                  Экзотика (Уровень инновации): {risk}/5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={risk}
                  onChange={(e) => setRisk(Number(e.target.value))}
                  className="w-full accent-rose-600"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-white border border-[#4A2E2B]/20 text-[#6B5A57] font-medium"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#4A2E2B] text-white font-semibold hover:bg-[#3A2422] transition-colors"
              >
                Сохранить в базу
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
