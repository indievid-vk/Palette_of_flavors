import React from 'react';
import { X, Info, Smartphone, CheckCircle2, AlertTriangle, Mail, Heart, Sparkles } from 'lucide-react';

interface AboutAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutAppModal: React.FC<AboutAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleContactDev = () => {
    window.location.href = 'mailto:indievid_studiio@mail.ru?subject=Палитра%20вкусов%20—%20Обратная%20связь';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-modal rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto min-w-0">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-button text-[#23372B] hover:bg-white transition-colors cursor-pointer z-10"
          title="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pr-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5E8A6E] to-[#7AA58B] text-white flex items-center justify-center shadow-md shrink-0">
            <Info className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#23372B] font-serif">
              О приложении
            </h2>
            <p className="text-xs text-[#556E5F]">
              Интерактивный гид по кондитерским и гастрономическим сочетаниям
            </p>
          </div>
        </div>

        <div className="space-y-5 text-xs text-[#23372B] leading-relaxed">
          
          {/* Main Purpose Card */}
          <div className="p-4 rounded-2xl glass-card space-y-2 border border-[#DAE8DF]">
            <h3 className="font-serif font-bold text-sm text-[#23372B] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5E8A6E]" />
              Палитра вкусов
            </h3>
            <p className="text-[#556E5F] leading-relaxed">
              «Палитра вкусов» — это практический гид и профессиональный инструмент для кондитеров, шеф-кондитеров и любителей десертов, позволяющий быстро подбирать гармоничные вкусовые сочетания (классические и экзотические), рассчитывать пропорции слоев десертов, генерировать авторские трио-композиции с помощью ИИ и сохранять излюбленные комбинации.
            </p>
          </div>

          {/* Technical Specs */}
          <div className="p-4 rounded-2xl bg-white/80 border border-[#DAE8DF] space-y-2">
            <h3 className="font-serif font-bold text-sm text-[#23372B] flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#5C7C99]" />
              Технические особенности приложения
            </h3>
            <p className="text-[#556E5F] leading-relaxed">
              Приложение работает как PWA (Progressive Web App) — современная технология, которая позволяет устанавливать приложение на экран телефона или компьютера прямо из браузера, в обход традиционных магазинов приложений. Оно живет прямо в вашем браузере, почти не занимая лишнего места. Все записи хранятся только внутри памяти браузера. Это обеспечивает полную приватность без передачи информации в облачные хранилища.
            </p>
          </div>

          {/* Benefits */}
          <div className="p-4 rounded-2xl bg-[#E8F1EB]/70 border border-[#B6CEBE]/60 space-y-2.5">
            <h3 className="font-serif font-bold text-sm text-[#23372B] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5E8A6E]" />
              Преимущества
            </h3>
            <ul className="space-y-1.5 text-[#345741] pl-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E8A6E] shrink-0 mt-1.5" />
                <span><strong>Офлайн-доступ:</strong> работает без интернета после первой загрузки.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E8A6E] shrink-0 mt-1.5" />
                <span>Не занимает много места в памяти устройства.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E8A6E] shrink-0 mt-1.5" />
                <span>Мгновенные обновления без необходимости скачивания из магазинов.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E8A6E] shrink-0 mt-1.5" />
                <span><strong>Безопасность:</strong> работает только через защищенный протокол HTTPS.</span>
              </li>
            </ul>
          </div>

          {/* Limitations */}
          <div className="p-4 rounded-2xl bg-[#FDF3E8]/70 border border-[#F8CCA6]/70 space-y-2">
            <h3 className="font-serif font-bold text-sm text-[#7D3C10] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#E28751]" />
              Ограничения
            </h3>
            <p className="text-[#8B512B] leading-relaxed pl-1">
              • Зависимость от возможностей браузера. Если вы очистите кэш или данные браузера, избранные списки тоже сотрутся.
            </p>
          </div>

          {/* Feedback Block */}
          <div className="p-6 rounded-3xl bg-[#F9EFE6] border border-[#E8DCD0] shadow-sm text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#8B1A1A]">
              Обратная связь
            </h3>

            <div className="flex justify-center pt-1 pb-1">
              <button
                onClick={handleContactDev}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#ECE2D5] hover:bg-[#E3D7C8] text-[#23372B] font-medium text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-2xs cursor-pointer active:scale-98"
              >
                <Mail className="w-4 h-4 text-[#23372B]" />
                <span>Написать разработчику</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-[#718577]">
              <Heart className="w-3.5 h-3.5 text-[#8B1A1A] fill-[#8B1A1A]/30" />
              <span>Создано нейрокомандой Индивид СтудИИя</span>
            </div>
          </div>

        </div>

        {/* Footer Close */}
        <div className="pt-4 border-t border-[#DAE8DF] mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl glass-button text-[#23372B] font-semibold text-xs hover:bg-white transition-colors cursor-pointer"
          >
            Закрыть
          </button>
        </div>

      </div>
    </div>
  );
};
