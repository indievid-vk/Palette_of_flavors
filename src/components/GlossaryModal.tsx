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
          className="absolute top-5 right-5 p-2 rounded-full glass-button text-[#23372B] hover:bg-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#5E8A6E] text-white flex items-center justify-center shadow-md">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#23372B] font-serif">
              Справочник шкал и оценок
            </h2>
            <p className="text-xs text-[#556E5F]">
              Методология подбора кондитерских комбинаций «Индивид СтудИИя»
            </p>
          </div>
        </div>

        {/* Intensity Scale Section */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 pb-2 border-b border-[#DAE8DF]">
            <Flame className="w-5 h-5 text-[#E28751]" />
            <h3 className="text-base font-bold text-[#23372B] font-serif">
              Шкала «Интенсивность» (1–5) — Яркость вкусового акцента
            </h3>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-[#7D3C10] bg-[#FDF3E8] border border-[#F8CCA6] px-2 py-0.5 rounded-md text-xs">1</span>
              <div>
                <strong className="text-[#23372B]">Деликатный оттенок:</strong> Вкусы мягко поддерживают друг друга, почти не спорят.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-[#7D3C10] bg-[#FDF3E8] border border-[#F8CCA6] px-2 py-0.5 rounded-md text-xs">2</span>
              <div>
                <strong className="text-[#23372B]">Лёгкий акцент:</strong> Есть небольшой контраст, но он гармоничный и не доминирует.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-[#7D3C10] bg-[#FDF3E8] border border-[#F8CCA6] px-2 py-0.5 rounded-md text-xs">3</span>
              <div>
                <strong className="text-[#23372B]">Умеренный контраст («Золотая середина»):</strong> Вкусы хорошо различимы и интересно взаимодействуют.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-[#7D3C10] bg-[#FDF3E8] border border-[#F8CCA6] px-2 py-0.5 rounded-md text-xs">4</span>
              <div>
                <strong className="text-[#23372B]">Выраженный контраст:</strong> Один или оба вкуса сильно заявляют о себе.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-white bg-[#E28751] px-2 py-0.5 rounded-md text-xs">5</span>
              <div>
                <strong className="text-[#23372B]">Максимальная яркость:</strong> Мощное ощущение, может «бить» по рецепторам (для акцентов и точечных соусов).
              </div>
            </div>
          </div>
        </div>

        {/* Exotics Scale Section */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2 pb-2 border-b border-[#DAE8DF]">
            <ShieldAlert className="w-5 h-5 text-[#E0657F]" />
            <h3 className="text-base font-bold text-[#23372B] font-serif">
              Шкала «Экзотика» (1–5) — Уровень инновации и авторского характера
            </h3>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-[#345741] bg-[#E8F1EB] border border-[#B6CEBE] px-2 py-0.5 rounded-md text-xs">1</span>
              <div>
                <strong className="text-[#23372B]">Традиционный канон:</strong> Проверено поколениями кондитеров. Понятно 95%+ гостей.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-[#345741] bg-[#E8F1EB] border border-[#B6CEBE] px-2 py-0.5 rounded-md text-xs">2</span>
              <div>
                <strong className="text-[#23372B]">Современная классика:</strong> Умеренный элегантный нюанс, комфортный для массового ресторанного меню.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-[#8A2B42] bg-[#FDF0F3] border border-[#F5CAD4] px-2 py-0.5 rounded-md text-xs">3</span>
              <div>
                <strong className="text-[#23372B]">Авторский акцент:</strong> Вдохновляющий эксперимент с выраженной индивидуальностью шефа.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-[#8A2B42] bg-[#FDF0F3] border border-[#F5CAD4] px-2 py-0.5 rounded-md text-xs">4</span>
              <div>
                <strong className="text-[#23372B]">Экзотическое сочетание:</strong> Яркий контраст или редкий ботанический союз для гастрономических сетов.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/90 border border-[#DAE8DF] flex gap-3 items-start">
              <span className="font-bold text-white bg-[#E0657F] px-2 py-0.5 rounded-md text-xs">5</span>
              <div>
                <strong className="text-[#23372B]">Высокая экзотика:</strong> Авангардная гастрономия, вау-эффект для слепых дегустаций и конкурсов haute pâtisserie.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="pt-4 border-t border-[#DAE8DF] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl glass-button text-[#23372B] font-semibold text-xs hover:bg-white transition-colors cursor-pointer"
          >
            Понятно, закрыть
          </button>
        </div>

      </div>
    </div>
  );
};
