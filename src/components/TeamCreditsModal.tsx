import React from 'react';
import { X, Users, ShieldCheck, Sparkles, Cpu, Layers, Terminal, Award } from 'lucide-react';

interface TeamCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamCreditsModal: React.FC<TeamCreditsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const roles = [
    {
      title: '[AI World Pastry Champion / Эксперт-кондитер]',
      desc: 'Калибровка 180+ гастрономических пар, настройка шкалы Интенсивности и Экзотики, методология текстурных слоёв десерта.',
      icon: Award,
      color: 'bg-rose-500/10 text-rose-950 border-rose-500/25 font-bold'
    },
    {
      title: '[AI Product Owner & BA]',
      desc: 'Анализ бизнеса, формализация требований, управление ТЗ и контроль качества продуктовой ценности.',
      icon: Users,
      color: 'bg-amber-500/10 text-amber-900 border-amber-500/20'
    },
    {
      title: '[AI Product Designer]',
      desc: 'UX/CJM логика, 60 FPS эргономика Колеса вкусов, мобильная реактивность и стилистическая палитра.',
      icon: Layers,
      color: 'bg-purple-500/10 text-purple-900 border-purple-500/20'
    },
    {
      title: '[AI Lead Developer]',
      desc: 'Архитектура React 19, TypeScript, Dexie IndexedDB, алгоритмы авто-поворота карточек и Gemini API.',
      icon: Cpu,
      color: 'bg-emerald-500/10 text-emerald-900 border-emerald-500/20'
    },
    {
      title: '[AI QA Engineer]',
      desc: 'Критика синтаксиса, тестирование двустороннего поиска, валидация офлайн-кеша и верификация шкал.',
      icon: ShieldCheck,
      color: 'bg-rose-500/10 text-rose-900 border-rose-500/20'
    },
    {
      title: '[AI DevOps]',
      desc: 'Сборка PWA, деплой на Cloud Run, Service Worker Cache-First стратегия и манифест приложения.',
      icon: Terminal,
      color: 'bg-blue-500/10 text-blue-900 border-blue-500/20'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-modal rounded-3xl max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-button text-[#2C1E1C] hover:bg-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#4A2E2B] text-white flex items-center justify-center shadow-md">
            <Sparkles className="w-6 h-6 text-[#E29578]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C1E1C] font-serif">
              О команде «Индивид СтудИИя»
            </h2>
            <p className="text-xs text-[#6B5A57]">
              Автономный ИИ-конвейер полного цикла разработки цифровых продуктов
            </p>
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-3 mb-6">
          {roles.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className={`p-3.5 rounded-2xl border ${r.color} flex items-start gap-3 text-xs`}>
                <div className="p-2 rounded-xl bg-white shadow-xs shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#4A2E2B]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2C1E1C] font-serif text-sm mb-0.5">
                    {r.title}
                  </h4>
                  <p className="text-[#6B5A57] leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Protocol Note */}
        <div className="p-3.5 rounded-2xl bg-[#4A2E2B]/5 border border-[#4A2E2B]/15 text-xs text-[#6B5A57] space-y-1">
          <span className="font-bold text-[#4A2E2B] block">🔒 Протокол безопасности и эталон качества:</span>
          <p className="text-[11px] leading-relaxed">
            Все изменения посимвольно сверяются с эталоном проекта. Бесперебойная работа офлайн-поиска, Dexie IndexedDB и Service Worker подтверждена тестированием [AI QA Engineer].
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#4A2E2B]/10 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#4A2E2B] text-white font-semibold text-xs hover:bg-[#3A2422] transition-colors"
          >
            Закрыть
          </button>
        </div>

      </div>
    </div>
  );
};
