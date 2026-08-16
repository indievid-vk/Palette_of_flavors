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
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full glass-button text-[#23372B] hover:bg-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-5 pr-8">
          <div className="min-w-0">
            <h2 className="text-lg sm:text-2xl font-bold text-[#23372B] font-serif truncate flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#E0657F]" />
              AI Генератор Трио-Вкусов
            </h2>
            <p className="text-[11px] sm:text-xs text-[#556E5F] truncate">
              Модель Gemini Pro &bull; 3-слойные рецептуры и Техкарта
            </p>
          </div>
        </div>

        {/* Generator Controls */}
        <div className="glass-card p-3.5 sm:p-5 rounded-2xl space-y-3.5 mb-5 border border-[#DAE8DF]">
          <div>
            <label className="text-xs font-semibold text-[#23372B] block mb-1">
              Базовый ключевой ингредиент
            </label>
            <input
              type="text"
              value={baseIngredient}
              onChange={(e) => setBaseIngredient(e.target.value)}
              placeholder="Например: Малина, Темный шоколад, Лаванда, Матча"
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-[#23372B] focus:outline-none focus:ring-2 focus:ring-[#5E8A6E]/50"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#23372B] block mb-1">
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
                      : 'glass-pill text-[#556E5F] hover:text-[#23372B]'
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
          <div className="glass-card rounded-2xl p-3.5 sm:p-5 space-y-4 animate-in fade-in duration-300 min-w-0 border border-[#DAE8DF]">
            
            {/* Header: Badge & Actions top, Title bottom */}
            <div className="border-b border-[#DAE8DF] pb-3 space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#E8F1EB] text-[#345741] border border-[#B6CEBE] px-2.5 py-0.5 rounded-md shrink-0">
                  {trioResult.dessertType}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => setShowTechCard(!showTechCard)}
                    className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all border cursor-pointer whitespace-nowrap active:scale-95 ${
                      showTechCard
                        ? 'glass-button-primary text-white border-transparent shadow-xs'
                        : 'bg-[#FAF7F2] text-[#23372B] border-[#DAE8DF] hover:bg-white'
                    }`}
                    title="Переключить показ техкарты"
                  >
                    <Scale className="w-3.5 h-3.5 shrink-0" />
                    <span>{showTechCard ? 'Скрыть техкарту' : 'Техкарта'}</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#23372B] border border-[#DAE8DF] transition-all text-xs font-semibold flex items-center gap-1 shrink-0 cursor-pointer whitespace-nowrap shadow-2xs active:scale-95"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#5E8A6E] shrink-0" /> : <Copy className="w-3.5 h-3.5 text-[#5E8A6E] shrink-0" />}
                    <span>{copied ? 'Скопировано!' : 'Копировать'}</span>
                  </button>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#23372B] font-serif leading-snug break-words">
                {trioResult.title}
              </h3>
            </div>

            {/* Flavor Triad Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              {trioResult.flavors.map((flavor, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#DAE8DF] text-xs font-bold text-[#23372B] flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E28751]" />
                  <span>{flavor}</span>
                </div>
              ))}
            </div>

            {/* Concept */}
            <p className="text-xs text-[#556E5F] leading-relaxed italic bg-[#FAF7F2] p-3 rounded-xl border border-[#DAE8DF]">
              «{trioResult.concept}»
            </p>

            {/* Layers Breakdown */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#23372B] font-serif flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#5E8A6E]" />
                Архитектура слоев изделия:
              </h4>

              <div className="space-y-2 text-xs">
                {trioResult.layers.map((layer, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#FAF7F2] border border-[#DAE8DF]">
                    <div className="flex items-center justify-between font-semibold text-[#23372B] mb-0.5">
                      <span>{layer.layer}</span>
                      <span className="text-[11px] text-[#E28751] font-normal">{layer.flavorRole}</span>
                    </div>
                    <p className="text-[#556E5F] text-[11px]">{layer.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ratings & Chef Notes */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded-xl bg-[#FDF3E8] border border-[#F8CCA6] text-xs">
                <span className="font-bold text-[#7D3C10] flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#E28751]" />
                  Интенсивность: {trioResult.intensity}/5
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#FDF0F3] border border-[#F5CAD4] text-xs">
                <span className="font-bold text-[#8A2B42] flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#E0657F]" />
                  Риск: {trioResult.risk}/5
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#E8F1EB]/50 border border-[#B6CEBE] text-xs">
              <span className="font-bold text-[#23372B] flex items-center gap-1.5 mb-1">
                <ChefHat className="w-4 h-4 text-[#5E8A6E]" />
                Рекомендация шефа:
              </span>
              <p className="text-[#556E5F] text-[11px]">{trioResult.chefNotes}</p>
            </div>

            {/* INTERACTIVE TECH CARD SECTION */}
            {showTechCard && (
              <div className="mt-6 pt-5 border-t-2 border-dashed border-[#DAE8DF] space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-xl bg-[#5E8A6E] text-white">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#23372B] font-serif">
                      Технологическая карта и Калькулятор выходов
                    </h4>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#E8F1EB] text-[#345741] border border-[#B6CEBE]">
                    World Pastry Formula
                  </span>
                </div>

                {/* Batch Weight Slider */}
                <div className="p-4 rounded-2xl bg-white/90 border border-[#DAE8DF] space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#23372B] flex items-center gap-1.5 uppercase tracking-wide">
                      <Scale className="w-4 h-4 text-[#5E8A6E]" />
                      Общий целевой вес партии (г)
                    </label>
                    <span className="text-sm font-bold text-[#5E8A6E]">
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
                    className="w-full accent-[#5E8A6E] cursor-pointer"
                  />

                  {/* Weight Presets */}
                  <div className="flex items-center gap-2 pt-1 flex-wrap text-xs">
                    <span className="text-[#556E5F] text-[11px]">Быстрый выбор:</span>
                    {[500, 1000, 1500, 2000, 3000].map((w) => (
                      <button
                        key={w}
                        type="button"
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

                {/* Calculated Layers Table / Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  
                  {/* Layer 1 */}
                  <div className="p-3.5 rounded-2xl bg-[#E8F1EB]/80 border border-[#B6CEBE] space-y-1">
                    <div className="flex justify-between font-bold text-[#23372B]">
                      <span>1. Мусс/Глассаж (50%)</span>
                      <span>{weightLayer1} г</span>
                    </div>
                    <p className="text-[11px] text-[#556E5F] font-medium">
                      {trioResult.layers[0]?.flavorRole || trioResult.flavors[0]}
                    </p>
                    <div className="mt-2 pt-2 border-t border-[#B6CEBE]/50 text-[10px] text-[#345741] font-mono">
                      💧 Желатин 200 Bloom: <strong>{gelatinMousse}г</strong> (+ Вода 1:5 = {gelatinBloomWater}г)
                    </div>
                  </div>

                  {/* Layer 2 */}
                  <div className="p-3.5 rounded-2xl bg-[#FDF3E8]/80 border border-[#F8CCA6] space-y-1">
                    <div className="flex justify-between font-bold text-[#7D3C10]">
                      <span>2. Начинка/Конфи (25%)</span>
                      <span>{weightLayer2} г</span>
                    </div>
                    <p className="text-[11px] text-[#8B512B] font-medium">
                      {trioResult.layers[1]?.flavorRole || trioResult.flavors[1]}
                    </p>
                    <div className="mt-2 pt-2 border-t border-[#F8CCA6]/50 text-[10px] text-[#7D3C10] font-mono">
                      🍊 Пектин NH: <strong>{pectinInsert}г</strong> (с сахаром 1:4 = {sugarPectinMix}г)
                    </div>
                  </div>

                  {/* Layer 3 */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DAE8DF] space-y-1">
                    <div className="flex justify-between font-bold text-[#23372B]">
                      <span>3. Бисквит/Крамбл (25%)</span>
                      <span>{weightLayer3} г</span>
                    </div>
                    <p className="text-[11px] text-[#556E5F] font-medium">
                      {trioResult.layers[2]?.flavorRole || trioResult.flavors[2]}
                    </p>
                    <div className="mt-2 pt-2 border-t border-[#DAE8DF] text-[10px] text-[#556E5F]">
                      🌾 Хрустящая основа / дакуаз
                    </div>
                  </div>

                </div>

                {/* Export Tech Card Action */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyTechCard}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#DAE8DF] text-[#23372B] font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
                  >
                    {techCardCopied ? (
                      <Check className="w-4 h-4 text-[#5E8A6E]" />
                    ) : (
                      <FileText className="w-4 h-4 text-[#E28751]" />
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
