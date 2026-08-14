import React from 'react';
import { X, Flame, ShieldAlert, BookOpen } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-modal rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-button text-[#2C1E1C] hover:bg-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#4A2E2B] text-[#FDFBF7] flex items-center justify-center shadow-md">
            <BookOpen className="w-6 h-6 text-[#E29578]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C1E1C] font-serif">
              Справочник шкал и оценок
            </h2>
            <p className="text-xs text-[#6B5A57]">
              Методология подбора кондитерских комбинаций «Индивид СтудИИя»
            </p>
          </div>
        </div>

        {/* Intensity Scale Section */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 pb-2 border-b border-[#4A2E2B]/15">
            <Flame className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-bold text-[#2C1E1C] font-serif">
              Шкала «Интенсивность» (1–5) — Яркость вкусового акцента
            </h3>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-[#4A2E2B] bg-amber-500/10 px-2 py-0.5 rounded-md text-xs">1</span>
              <div>
                <strong className="text-[#2C1E1C]">Деликатный оттенок:</strong> Вкусы мягко поддерживают друг друга, почти не спорят.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-[#4A2E2B] bg-amber-500/20 px-2 py-0.5 rounded-md text-xs">2</span>
              <div>
                <strong className="text-[#2C1E1C]">Лёгкий акцент:</strong> Есть небольшой контраст, но он гармоничный и не доминирует.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-[#4A2E2B] bg-amber-500/30 px-2 py-0.5 rounded-md text-xs">3</span>
              <div>
                <strong className="text-[#2C1E1C]">Умеренный контраст («Золотая середина»):</strong> Вкусы хорошо различимы и интересно взаимодействуют.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-[#4A2E2B] bg-amber-500/40 px-2 py-0.5 rounded-md text-xs">4</span>
              <div>
                <strong className="text-[#2C1E1C]">Выраженный контраст:</strong> Один или оба вкуса сильно заявляют о себе.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-white bg-amber-600 px-2 py-0.5 rounded-md text-xs">5</span>
              <div>
                <strong className="text-[#2C1E1C]">Максимальная яркость:</strong> Мощное ощущение, может «бить» по рецепторам (для акцентов и точечных соусов).
              </div>
            </div>
          </div>
        </div>

        {/* Exotics Scale Section */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2 pb-2 border-b border-[#4A2E2B]/15">
            <ShieldAlert className="w-5 h-5 text-purple-700" />
            <h3 className="text-base font-bold text-[#2C1E1C] font-serif">
              Шкала «Экзотика» (1–5) — Уровень инновации и авторского характера
            </h3>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-emerald-800 bg-emerald-500/10 px-2 py-0.5 rounded-md text-xs">1</span>
              <div>
                <strong className="text-[#2C1E1C]">Традиционный канон:</strong> Проверено поколениями кондитеров. Понятно 95%+ гостей.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-emerald-900 bg-emerald-500/20 px-2 py-0.5 rounded-md text-xs">2</span>
              <div>
                <strong className="text-[#2C1E1C]">Современная классика:</strong> Умеренный элегантный нюанс, комфортный для массового ресторанного меню.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-purple-900 bg-purple-500/20 px-2 py-0.5 rounded-md text-xs">3</span>
              <div>
                <strong className="text-[#2C1E1C]">Авторский акцент:</strong> Вдохновляющий эксперимент с выраженной индивидуальностью шефа.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-rose-900 bg-purple-500/30 px-2 py-0.5 rounded-md text-xs">4</span>
              <div>
                <strong className="text-[#2C1E1C]">Экзотическое сочетание:</strong> Яркий контраст или редкий ботанический союз для гастрономических сетов.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#4A2E2B]/10 flex gap-3 items-start">
              <span className="font-bold text-white bg-purple-700 px-2 py-0.5 rounded-md text-xs">5</span>
              <div>
                <strong className="text-[#2C1E1C]">Высокая экзотика:</strong> Авангардная гастрономия, вау-эффект для слепых дегустаций и конкурсов haute pâtisserie.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="pt-4 border-t border-[#4A2E2B]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#4A2E2B] text-white font-semibold text-xs hover:bg-[#3A2422] transition-colors"
          >
            Понятно, закрыть
          </button>
        </div>

      </div>
    </div>
  );
};
