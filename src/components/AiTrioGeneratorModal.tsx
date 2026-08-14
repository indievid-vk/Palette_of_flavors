import React, { useState } from 'react';
import { X, Sparkles, Layers, ChefHat, Copy, Check, Flame, ShieldAlert, RefreshCw, Scale, Award, FileText } from 'lucide-react';
import { TrioRecipe } from '../types';

interface AiTrioGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetFlavor?: string;
}

export const AiTrioGeneratorModal: React.FC<AiTrioGeneratorModalProps> = ({
  isOpen,
  onClose,
  presetFlavor = '',
}) => {
  const [baseIngredient, setBaseIngredient] = useState(presetFlavor || 'Шоколад');
  const [dessertType, setDessertType] = useState('муссовый торт');
  const [isGenerating, setIsGenerating] = useState(false);
  const [trioResult, setTrioResult] = useState<TrioRecipe | null>(null);
  const [copied, setCopied] = useState(false);
  const [techCardCopied, setTechCardCopied] = useState(false);

  // Tech Card calculator state
  const [showTechCard, setShowTechCard] = useState(true);
  const [targetWeight, setTargetWeight] = useState<number>(1000); // grams

  if (!isOpen) return null;

  // Tech Card Calculations
  const weightLayer1 = Math.round((targetWeight * 50) / 100); // 50%
  const weightLayer2 = Math.round((targetWeight * 25) / 100); // 25%
  const weightLayer3 = Math.round((targetWeight * 25) / 100); // 25%

  const gelatinMousse = (weightLayer1 * 0.009).toFixed(1);
  const gelatinBloomWater = (parseFloat(gelatinMousse) * 5).toFixed(1);

  const pectinInsert = (weightLayer2 * 0.012).toFixed(1);
  const sugarPectinMix = (parseFloat(pectinInsert) * 4).toFixed(1);

  const handleGenerate = async () => {
    if (!baseIngredient.trim()) return;
    setIsGenerating(true);

    try {
      const res = await fetch('/api/ai/trio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ baseIngredient, dessertType }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.trio) {
          setTrioResult(data.trio);
          setIsGenerating(false);
          return;
        }
      }
    } catch (err) {
      console.warn('Backend API call failed, falling back to local generator:', err);
    }

    // Smart Local Fallback
    setTimeout(() => {
      const fallbackRecipes: Record<string, TrioRecipe> = {
        default: {
          title: `Авторский сет: ${baseIngredient} & Трио-гармония`,
          flavors: [baseIngredient, 'Маракуйя', 'Фисташка'],
          categories: ['Основной', 'Яркий акцент (Кислинка)', 'Текстурная базовая сливочность'],
          dessertType,
          concept: `Трёхуровневая концепция десерта «${dessertType}», где ${baseIngredient} создаёт основу, маракуйя даёт необходимую кислотность, а фисташковое пралине добавляет благородную текстуру.`,
          layers: [
            {
              layer: 'Верхний глассаж / Декор',
              flavorRole: 'Маракуйя (Цитрусово-тропический соус)',
              description: 'Даёт мощный импульс рецепторам при первом укусе, нивелируя приторность.'
            },
            {
              layer: 'Основной мусс / Начинка',
              flavorRole: baseIngredient,
              description: 'Глубокое тело вкуса, формирующее главную идентичность десерта.'
            },
            {
              layer: 'Бисквит / Хрустящий слой (Крамбл)',
              flavorRole: 'Фисташковое пралине & Морская соль',
              description: 'Текстурный контраст и сливочно-ореховое долгое послевкусие.'
            }
          ],
          intensity: 4,
          risk: 2,
          chefNotes: `При сборке десерта «${dessertType}» соблюдайте баланс сахара: кислинка маракуйи должна быть яркой (не менее 12% натурального сока).`
        }
      };

      setTrioResult(fallbackRecipes.default);
      setIsGenerating(false);
    }, 1200);
  };

  const handleCopy = () => {
    if (!trioResult) return;
    const text = `🍰 ${trioResult.title}\nДесерт: ${trioResult.dessertType}\nВкусы: ${trioResult.flavors.join(' + ')}\n\nКонцепт: ${trioResult.concept}\n\nСлои:\n${trioResult.layers.map(l => `• ${l.layer} (${l.flavorRole}): ${l.description}`).join('\n')}\n\nИнтенсивность: ${trioResult.intensity}/5 | Риск: ${trioResult.risk}/5\nСовет шефа: ${trioResult.chefNotes}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyTechCard = () => {
    if (!trioResult) return;

    const layer1 = trioResult.layers[0] || { layer: 'Мусс', flavorRole: trioResult.flavors[0], description: '' };
    const layer2 = trioResult.layers[1] || { layer: 'Начинка / Конфи', flavorRole: trioResult.flavors[1], description: '' };
    const layer3 = trioResult.layers[2] || { layer: 'Бисквит / Крамбл', flavorRole: trioResult.flavors[2], description: '' };

    const cardText = `
==================================================
  ТЕХНОЛОГИЧЕСКАЯ КАРТА ДЕСЕРТА «${trioResult.title.toUpperCase()}»
  Изделие: ${trioResult.dessertType}
  Экспертиза: AI Trio World Pastry Formula
==================================================
Общий целевой вес партии: ${targetWeight} г (порций ~${Math.round(targetWeight / 90)} по 90г)

СЛОЙ 1: ${layer1.layer.toUpperCase()} (50%, ${weightLayer1}г)
- Вкус / Роль: ${layer1.flavorRole}
- Описание: ${layer1.description}
- Желирующий агент: Желатин 200 Bloom — ${gelatinMousse}г (вода 1:5 = ${gelatinBloomWater}г)

СЛОЙ 2: ${layer2.layer.toUpperCase()} (25%, ${weightLayer2}г)
- Вкус / Роль: ${layer2.flavorRole}
- Описание: ${layer2.description}
- Желирующий агент: Пектин NH — ${pectinInsert}г (смешать с сахаром 1:4 = ${sugarPectinMix}г)

СЛОЙ 3: ${layer3.layer.toUpperCase()} (25%, ${weightLayer3}г)
- Вкус / Роль: ${layer3.flavorRole}
- Описание: ${layer3.description}

ПРОФЕССИОНАЛЬНЫЕ РЕКОМЕНДАЦИИ ШЕФА:
- Интенсивность вкуса: ${trioResult.intensity}/5
- Уровень риска / экзотики: ${trioResult.risk}/5
- Заморозка: -18°C не менее 12 часов
- Дефростация: +4°C в течение 6 часов
- Подача: +6°C для полного раскрытия букета
- Совет шефа: ${trioResult.chefNotes}
==================================================
    `.trim();

    navigator.clipboard.writeText(cardText);
    setTechCardCopied(true);
    setTimeout(() => setTechCardCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-modal rounded-3xl max-w-3xl w-full p-4 sm:p-6 md:p-8 relative max-h-[92vh] overflow-y-auto min-w-0">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full glass-button text-[#2C1E1C] hover:bg-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-5 pr-8">
          <div className="min-w-0">
            <h2 className="text-lg sm:text-2xl font-bold text-[#2C1E1C] font-serif truncate flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF758F]" />
              AI Генератор Трио-Вкусов
            </h2>
            <p className="text-[11px] sm:text-xs text-[#6B5A57] truncate">
              Модель Gemini Pro &bull; 3-слойные рецептуры и Техкарта
            </p>
          </div>
        </div>

        {/* Generator Controls */}
        <div className="glass-card p-3.5 sm:p-5 rounded-2xl space-y-3.5 mb-5">
          <div>
            <label className="text-xs font-semibold text-[#2C1E1C] block mb-1">
              Базовый ключевой ингредиент
            </label>
            <input
              type="text"
              value={baseIngredient}
              onChange={(e) => setBaseIngredient(e.target.value)}
              placeholder="Например: Малина, Темный шоколад, Лаванда, Матча"
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-[#2C1E1C] focus:outline-none focus:ring-2 focus:ring-[#FF758F]/50"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#2C1E1C] block mb-1">
              Формат / Тип изделия
            </label>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              {['муссовый торт', 'эклеры', 'трюфели', 'макарон', 'чизкейк', 'нарезные конфеты'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setDessertType(type)}
                  className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    dessertType === type
                      ? 'glass-button-primary text-white font-semibold'
                      : 'glass-pill text-[#6B5A57] hover:text-[#2C1E1C]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !baseIngredient.trim()}
            className="w-full py-3 px-4 rounded-xl glass-button-primary text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Генерация трио-формулы...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-white" />
                <span>Сгенерировать Трио-Сочетание</span>
              </>
            )}
          </button>
        </div>

        {/* Trio Result Card */}
        {trioResult && (
          <div className="glass-card rounded-2xl p-3.5 sm:p-5 space-y-4 animate-in fade-in duration-300 min-w-0">
            
            {/* Header: Badge & Actions top, Title bottom */}
            <div className="border-b border-[#4A2E2B]/10 pb-3 space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#E29578]/20 text-[#4A2E2B] px-2.5 py-0.5 rounded-md shrink-0">
                  {trioResult.dessertType}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => setShowTechCard(!showTechCard)}
                    className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all border cursor-pointer whitespace-nowrap active:scale-95 ${
                      showTechCard
                        ? 'bg-[#4A2E2B] text-white border-[#4A2E2B] shadow-xs'
                        : 'bg-[#FDFBF7] text-[#4A2E2B] border-[#4A2E2B]/20 hover:bg-white'
                    }`}
                    title="Переключить показ техкарты"
                  >
                    <Scale className="w-3.5 h-3.5 shrink-0" />
                    <span>{showTechCard ? 'Скрыть техкарту' : 'Техкарта'}</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#FDFBF7] hover:bg-white text-[#2C1E1C] border border-[#4A2E2B]/20 transition-all text-xs font-semibold flex items-center gap-1 shrink-0 cursor-pointer whitespace-nowrap shadow-2xs active:scale-95"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <Copy className="w-3.5 h-3.5 text-[#E29578] shrink-0" />}
                    <span>{copied ? 'Скопировано!' : 'Копировать'}</span>
                  </button>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#2C1E1C] font-serif leading-snug break-words">
                {trioResult.title}
              </h3>
            </div>

            {/* Flavor Triad Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              {trioResult.flavors.map((flavor, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-[#FDFBF7] border border-[#4A2E2B]/15 text-xs font-bold text-[#4A2E2B] flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E29578]" />
                  <span>{flavor}</span>
                </div>
              ))}
            </div>

            {/* Concept */}
            <p className="text-xs text-[#6B5A57] leading-relaxed italic bg-[#FDFBF7] p-3 rounded-xl border border-[#4A2E2B]/10">
              «{trioResult.concept}»
            </p>

            {/* Layers Breakdown */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#2C1E1C] font-serif flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#E29578]" />
                Архитектура слоев изделия:
              </h4>

              <div className="space-y-2 text-xs">
                {trioResult.layers.map((layer, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#FDFBF7] border border-[#4A2E2B]/10">
                    <div className="flex items-center justify-between font-semibold text-[#4A2E2B] mb-0.5">
                      <span>{layer.layer}</span>
                      <span className="text-[11px] text-[#E29578] font-normal">{layer.flavorRole}</span>
                    </div>
                    <p className="text-[#6B5A57] text-[11px]">{layer.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ratings & Chef Notes */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                <span className="font-bold text-amber-900 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  Интенсивность: {trioResult.intensity}/5
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs">
                <span className="font-bold text-rose-900 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                  Риск: {trioResult.risk}/5
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#4A2E2B]/5 border border-[#4A2E2B]/15 text-xs">
              <span className="font-bold text-[#4A2E2B] flex items-center gap-1.5 mb-1">
                <ChefHat className="w-4 h-4 text-[#4A2E2B]" />
                Рекомендация шефа:
              </span>
              <p className="text-[#6B5A57] text-[11px]">{trioResult.chefNotes}</p>
            </div>

            {/* INTERACTIVE TECH CARD SECTION */}
            {showTechCard && (
              <div className="mt-6 pt-5 border-t-2 border-dashed border-[#4A2E2B]/20 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-xl bg-[#4A2E2B] text-amber-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#2C1E1C] font-serif">
                      Технологическая карта и Калькулятор выходов
                    </h4>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/15 text-amber-900 border border-amber-500/30">
                    World Pastry Formula
                  </span>
                </div>

                {/* Batch Weight Slider */}
                <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#4A2E2B]/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#2C1E1C] flex items-center gap-1.5 uppercase tracking-wide">
                      <Scale className="w-4 h-4 text-[#E29578]" />
                      Общий целевой вес партии (г)
                    </label>
                    <span className="text-sm font-bold text-[#E87A90]">
                      {targetWeight} г (~{Math.round(targetWeight / 90)} порций по 90г)
                    </span>
                  </div>

                  <input
                    type="range"
                    min="300"
                    max="5000"
                    step="50"
                    value={targetWeight}
                    onChange={(e) => setTargetWeight(Number(e.target.value))}
                    className="w-full accent-[#4A2E2B] cursor-pointer"
                  />

                  {/* Weight Presets */}
                  <div className="flex items-center gap-2 pt-1 flex-wrap text-xs">
                    <span className="text-[#6B5A57] text-[11px]">Быстрый выбор:</span>
                    {[500, 1000, 1500, 2000, 3000].map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setTargetWeight(w)}
                        className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                          targetWeight === w
                            ? 'bg-[#4A2E2B] text-white border-[#4A2E2B]'
                            : 'bg-white text-[#2C1E1C] border-[#4A2E2B]/20 hover:border-[#4A2E2B]/50'
                        }`}
                      >
                        {w} г ({w === 1000 ? '1 кг' : `${w/1000} кг`})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculated Layers Table / Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  
                  {/* Layer 1 */}
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                    <div className="flex justify-between font-bold text-amber-950">
                      <span>1. Мусс/Глассаж (50%)</span>
                      <span>{weightLayer1} г</span>
                    </div>
                    <p className="text-[11px] text-[#6B5A57] font-medium">
                      {trioResult.layers[0]?.flavorRole || trioResult.flavors[0]}
                    </p>
                    <div className="mt-2 pt-2 border-t border-amber-500/15 text-[10px] text-amber-900 font-mono">
                      💧 Желатин 200 Bloom: <strong>{gelatinMousse}г</strong> (+ Вода 1:5 = {gelatinBloomWater}г)
                    </div>
                  </div>

                  {/* Layer 2 */}
                  <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-1">
                    <div className="flex justify-between font-bold text-purple-950">
                      <span>2. Начинка/Конфи (25%)</span>
                      <span>{weightLayer2} г</span>
                    </div>
                    <p className="text-[11px] text-[#6B5A57] font-medium">
                      {trioResult.layers[1]?.flavorRole || trioResult.flavors[1]}
                    </p>
                    <div className="mt-2 pt-2 border-t border-purple-500/15 text-[10px] text-purple-900 font-mono">
                      🍊 Пектин NH: <strong>{pectinInsert}г</strong> (с сахаром 1:4 = {sugarPectinMix}г)
                    </div>
                  </div>

                  {/* Layer 3 */}
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                    <div className="flex justify-between font-bold text-emerald-950">
                      <span>3. Бисквит/Крамбл (25%)</span>
                      <span>{weightLayer3} г</span>
                    </div>
                    <p className="text-[11px] text-[#6B5A57] font-medium">
                      {trioResult.layers[2]?.flavorRole || trioResult.flavors[2]}
                    </p>
                    <div className="mt-2 pt-2 border-t border-emerald-500/15 text-[10px] text-emerald-900">
                      🌾 Хрустящая основа / дакуаз
                    </div>
                  </div>

                </div>

                {/* Export Tech Card Action */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyTechCard}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FDFBF7] hover:bg-white border border-[#4A2E2B]/20 text-[#2C1E1C] font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
                  >
                    {techCardCopied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <FileText className="w-4 h-4 text-[#E29578]" />
                    )}
                    <span>{techCardCopied ? 'Техкарта скопирована в буфер!' : 'Скопировать полное ТЗ и Техкарту'}</span>
                  </button>
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
