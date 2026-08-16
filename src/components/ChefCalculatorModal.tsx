import React, { useState } from 'react';
import { X, Award, ChefHat, Scale, Layers, Printer, Copy, Check, Sparkles, AlertCircle, Info, FileText } from 'lucide-react';
import { Combination } from '../types';

interface ChefCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  pairing: Combination | null;
}

export const ChefCalculatorModal: React.FC<ChefCalculatorModalProps> = ({
  isOpen,
  onClose,
  pairing,
}) => {
  const [targetWeight, setTargetWeight] = useState<number>(1000); // in grams
  const [mousseRatio, setMousseRatio] = useState<number>(50); // %
  const [insertRatio, setInsertRatio] = useState<number>(25); // %
  const [crunchRatio, setCrunchRatio] = useState<number>(10); // %
  const [biscuitRatio, setBiscuitRatio] = useState<number>(15); // %
  const [copied, setCopied] = useState(false);

  if (!isOpen || !pairing) return null;

  // Weight calculations
  const weightMousse = Math.round((targetWeight * mousseRatio) / 100);
  const weightInsert = Math.round((targetWeight * insertRatio) / 100);
  const weightCrunch = Math.round((targetWeight * crunchRatio) / 100);
  const weightBiscuit = Math.round((targetWeight * biscuitRatio) / 100);

  // Gelatin 200 Bloom estimate (approx 0.8% - 1% for mousse)
  const gelatinMousse = (weightMousse * 0.009).toFixed(1);
  const gelatinBloomWater = (parseFloat(gelatinMousse) * 5).toFixed(1);

  // Pectin NH estimate for insert (approx 1.2% for fruit confit)
  const pectinInsert = (weightInsert * 0.012).toFixed(1);
  const sugarPectinMix = (parseFloat(pectinInsert) * 4).toFixed(1);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTechCard = () => {
    const cardText = `
==================================================
  ТЕХНОЛОГИЧЕСКАЯ КАРТА ДЕСЕРТА «${pairing.primary_name.toUpperCase()} + ${pairing.secondary_name.toUpperCase()}»
  Экспертиза: Чемпион мира по кондитерскому искусству
==================================================
Общий вес выхода: ${targetWeight} г

СЛОЙ 1: Мусс / Базовый крем (${mousseRatio}%, ${weightMousse}г)
- Вкус: ${pairing.primary_name}
- Желирующий агент: Желатин 200 Bloom — ${gelatinMousse}г (+ вода для замачивания 1:5 — ${gelatinBloomWater}г)
- Текстура: Шелковистая, аэрированная, температура эмульгирования 35°C

СЛОЙ 2: Начинка / Конфи / Курд (${insertRatio}%, ${weightInsert}г)
- Вкус: ${pairing.secondary_name}
- Желирующий агент: Пектин NH — ${pectinInsert}г (смешать с сахаром 1:4 — ${sugarPectinMix}г, вносить при 40°C, кипятить 1 мин)

СЛОЙ 3: Хрустящий слой / Крамбл (${crunchRatio}%, ${weightCrunch}г)
- Состав: Пралине, роялтин (вафельная крошка), какао-масло

СЛОЙ 4: Бисквитная основа / Дакуаз (${biscuitRatio}%, ${weightBiscuit}г)
- Состав: Ореховая мука, белок, сахарная пудра

ПРОФЕССИОНАЛЬНЫЕ РЕКОМЕНДАЦИИ ШЕФА:
- Интенсивность вкуса: ${pairing.intensity}/5
- Уровень экзотики: ${pairing.risk}/5
- Стабилизация десерта: заморозка -18°C не менее 12 часов.
- Дефростация: +4°C в течение 6 часов.
- Подача: +6°C для максимального раскрытия ароматического букета.
==================================================
    `.trim();

    navigator.clipboard.writeText(cardText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-modal rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-button text-[#23372B] hover:bg-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5E8A6E] to-[#7AA58B] text-white flex items-center justify-center shadow-md">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#E8F1EB] text-[#345741] border border-[#B6CEBE]">
                World Pastry Champion Formula
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#23372B] font-serif">
              Шеф-калькулятор и Техкарта: {pairing.primary_name} + {pairing.secondary_name}
            </h2>
          </div>
        </div>

        {/* Main Form & Interactive Calculation */}
        <div className="space-y-6">
          
          {/* Target Weight Controls */}
          <div className="p-4 rounded-2xl bg-white/90 border border-[#DAE8DF] shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#23372B] flex items-center gap-1.5 uppercase tracking-wide">
                <Scale className="w-4 h-4 text-[#5E8A6E]" />
                Общий целевой вес партии (г)
              </label>
              <span className="text-sm font-bold text-[#5E8A6E]">
                {targetWeight} г (выход ~{Math.round(targetWeight / 90)} порций по 90г)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="range"
                min="300"
                max="5000"
                step="50"
                value={targetWeight}
                onChange={(e) => setTargetWeight(Number(e.target.value))}
                className="w-full accent-[#5E8A6E] cursor-pointer"
              />
            </div>

            {/* Quick Weight Presets */}
            <div className="flex items-center gap-2 pt-1 flex-wrap text-xs">
              <span className="text-[#556E5F] text-[11px]">Быстрый выбор:</span>
              {[500, 1000, 1500, 2000, 3000].map((w) => (
                <button
                  key={w}
                  onClick={() => setTargetWeight(w)}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                    targetWeight === w
                      ? 'glass-button-primary text-white border-transparent'
                      : 'bg-[#FAF7F2] text-[#23372B] border-[#DAE8DF] hover:border-[#5E8A6E]'
                  }`}
                >
                  {w} г ({w === 1000 ? '1 кг' : `${w/1000} кг`})
                </button>
              ))}
            </div>
          </div>

          {/* Layer Balance Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#23372B] flex items-center gap-1.5 font-serif">
              <Layers className="w-4 h-4 text-[#5E8A6E]" />
              Расчёт слоев и гидроколлоидов (Золотое сечение текстур)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              
              {/* Layer 1 */}
              <div className="p-3.5 rounded-2xl bg-[#E8F1EB]/80 border border-[#B6CEBE] space-y-1">
                <div className="flex justify-between font-bold text-[#23372B]">
                  <span>1. Мусс / Крем ({mousseRatio}%)</span>
                  <span>{weightMousse} г</span>
                </div>
                <p className="text-[11px] text-[#556E5F]">
                  Доминирующий вкус: <strong>{pairing.primary_name}</strong>
                </p>
                <div className="mt-2 pt-2 border-t border-[#B6CEBE]/50 text-[10px] text-[#345741] font-mono">
                  💧 Желатин 200 Bloom: <strong>{gelatinMousse}г</strong> (+ Вода 1:5 = {gelatinBloomWater}г)
                </div>
              </div>

              {/* Layer 2 */}
              <div className="p-3.5 rounded-2xl bg-[#FDF3E8]/80 border border-[#F8CCA6] space-y-1">
                <div className="flex justify-between font-bold text-[#7D3C10]">
                  <span>2. Начинка Конфи/Курд ({insertRatio}%)</span>
                  <span>{weightInsert} г</span>
                </div>
                <p className="text-[11px] text-[#8B512B]">
                  Второй акцент: <strong>{pairing.secondary_name}</strong>
                </p>
                <div className="mt-2 pt-2 border-t border-[#F8CCA6]/50 text-[10px] text-[#7D3C10] font-mono">
                  🍊 Пектин NH: <strong>{pectinInsert}г</strong> (смешать с сахаром 1:4 = {sugarPectinMix}г)
                </div>
              </div>

              {/* Layer 3 */}
              <div className="p-3.5 rounded-2xl bg-[#FDF0F3]/80 border border-[#F5CAD4] space-y-1">
                <div className="flex justify-between font-bold text-[#8A2B42]">
                  <span>3. Хрустящий слой ({crunchRatio}%)</span>
                  <span>{weightCrunch} г</span>
                </div>
                <p className="text-[11px] text-[#8A2B42]/80">
                  Пралине / Вафельная крошка / Какао-масло
                </p>
                <div className="mt-2 pt-2 border-t border-[#F5CAD4]/50 text-[10px] text-[#8A2B42]">
                  ✨ Текстурный контраст для маслянистости
                </div>
              </div>

              {/* Layer 4 */}
              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DAE8DF] space-y-1">
                <div className="flex justify-between font-bold text-[#23372B]">
                  <span>4. Бисквит / Дакуаз ({biscuitRatio}%)</span>
                  <span>{weightBiscuit} г</span>
                </div>
                <p className="text-[11px] text-[#556E5F]">
                  Ореховая или бисквитная основа
                </p>
                <div className="mt-2 pt-2 border-t border-[#DAE8DF] text-[10px] text-[#556E5F]">
                  🌾 Пропитка лёгким сиропом
                </div>
              </div>

            </div>
          </div>

          {/* Expert Chef Guidance */}
          <div className="p-4 rounded-2xl bg-[#E8F1EB]/50 border border-[#B6CEBE] text-xs space-y-2">
            <div className="flex items-center gap-2 text-[#23372B] font-bold">
              <ChefHat className="w-4 h-4 text-[#5E8A6E]" />
              <span>Совет Чемпиона по работе со вкусом «{pairing.primary_name} + {pairing.secondary_name}»:</span>
            </div>
            <p className="text-[#556E5F] leading-relaxed text-[11px]">
              {pairing.description}
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] font-medium text-[#23372B]">
              <span>Интенсивность: <strong>{pairing.intensity}/5</strong></span>
              <span>&bull;</span>
              <span>Экзотика: <strong>{pairing.risk}/5</strong></span>
              <span>&bull;</span>
              <span>Температура подачи: <strong>+6°C</strong></span>
            </div>
          </div>

          {/* Action Buttons: Print & Copy Tech Card */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#DAE8DF]">
            <button
              onClick={handleCopyTechCard}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#E8F1EB] border border-[#B6CEBE] text-[#23372B] font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[#5E8A6E]" /> : <Copy className="w-4 h-4 text-[#5E8A6E]" />}
              <span>{copied ? 'Скопировано в буфер!' : 'Скопировать техкарту'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl glass-button text-[#23372B] font-semibold text-xs hover:bg-white transition-colors cursor-pointer"
            >
              Готово
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
