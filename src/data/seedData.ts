import { Combination } from '../types';

export const SEED_COMBINATIONS: Combination[] = [
  {
    "id": "orange_chocolate_pair",
    "primary": "orange",
    "primary_name": "Апельсин",
    "primary_category": "fruits",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Канонический пряно-цитрусовый союз: яркая сладость апельсиновой цедры и насыщенный тёмный шоколад",
    "applications": [
      "апельсиновый ганаш",
      "цукаты в шоколаде",
      "бисквит Оранжетт",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "choc_coffee",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "coffee",
    "secondary_name": "Кофе",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Глубокие горькие ноты усиливают друг друга",
    "applications": [
      "брауни",
      "капкейки",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "choc_mint",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "mint",
    "secondary_name": "Мята",
    "secondary_category": "floral",
    "type": "classic",
    "description": "Освежающий эффект мяты контрастирует с насыщенностью шоколада",
    "applications": [
      "пирожные",
      "мороженое",
      "трюфели"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "choc_chili",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "chili",
    "secondary_name": "Чили",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Острота чили раскрывает скрытые оттенки какао, даёт волну вкуса",
    "applications": [
      "шоколадные батончики",
      "соусы"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "choc_pepper",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "black_pepper",
    "secondary_name": "Черный перец",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Лёгкая острота перца усиливает глубину какао и даёт удар на послевкусии",
    "applications": [
      "плитки ручной работы",
      "трюфели"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "choc_rosemary",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "rosemary",
    "secondary_name": "Розмарин",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Травянисто‑хвойный профиль розмарина добавляет сложность шоколаду",
    "applications": [
      "крем",
      "глазурь"
    ],
    "intensity": 4,
    "risk": 4
  },
  {
    "id": "caramel_vanilla_pair",
    "primary": "caramel",
    "primary_name": "Карамель",
    "primary_category": "creamy",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Обволакивающий сливочный аккорд: благородная ваниль смягчает и скругляет яркий тоффи-вкус",
    "applications": [
      "крем-брюле",
      "соус",
      "мусс",
      "начинка"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "vanilla_cream",
    "primary": "vanilla",
    "primary_name": "Ваниль",
    "primary_category": "spices",
    "secondary": "cream",
    "secondary_name": "Сливки",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Сливочная мягкость подчёркивает ванильную сладость",
    "applications": [
      "заварной крем",
      "панна‑котта"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "banana_vanilla_pair",
    "primary": "banana",
    "primary_name": "Банан",
    "primary_category": "fruits",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Деликатная кремовая гармония: ванильный пудинг и сладкий спелый банан",
    "applications": [
      "бананово-ванильный курд",
      "мусс",
      "пудинг",
      "начинка"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "lavender_vanilla_pair",
    "primary": "lavender",
    "primary_name": "Лаванда",
    "primary_category": "floral",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Уютный парфюмерный крем: сладость стручковой ванили смягчает травянистую суховатость лаванды",
    "applications": [
      "бисквиты",
      "зефир",
      "глазурь",
      "крем"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "honey_walnut",
    "primary": "honey",
    "primary_name": "Мед",
    "primary_category": "creamy",
    "secondary": "walnut",
    "secondary_name": "Грецкий орех",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Натуральная сладость мёда и маслянистая текстура грецкого ореха",
    "applications": [
      "медовые коржи",
      "пралине",
      "батончики"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "honey_cinnamon",
    "primary": "honey",
    "primary_name": "Мед",
    "primary_category": "creamy",
    "secondary": "cinnamon",
    "secondary_name": "Корица",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Тёплые пряные ноты корицы усиливают медовый вкус",
    "applications": [
      "пряники",
      "кексы",
      "печенье"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "lemon_honey_classic",
    "primary": "lemon",
    "primary_name": "Лимон",
    "primary_category": "fruits",
    "secondary": "honey",
    "secondary_name": "Мёд",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Согревающий и целебный баланс: тягучий ароматный мёд и яркий лимонный сок",
    "applications": [
      "лимонно-медовый мармелад",
      "пропитка",
      "мусс",
      "соусы"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "honey_rosemary",
    "primary": "honey",
    "primary_name": "Мед",
    "primary_category": "creamy",
    "secondary": "rosemary",
    "secondary_name": "Розмарин",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Хвойно‑пряные ноты розмарина подчёркивают цветочные оттенки мёда",
    "applications": [
      "песочное печенье",
      "коржи"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "ginger_lemon",
    "primary": "ginger",
    "primary_name": "Имбирь",
    "primary_category": "spices",
    "secondary": "lemon",
    "secondary_name": "Лимон",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Освежающий согревающий тандем: цитрусовая кислинка лимона ярко подчеркивает имбирные эфирные масла",
    "applications": [
      "мармелад",
      "курды",
      "начинка для макарон",
      "согревающие чаи"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "lemon_bsesame",
    "primary": "lemon",
    "primary_name": "Лимон",
    "primary_category": "fruits",
    "secondary": "black_sesame",
    "secondary_name": "Черный кунжут",
    "secondary_category": "nuts",
    "type": "exotic",
    "description": "Землистая нота чёрного кунжута контрастирует с яркой кислотностью лимона",
    "applications": [
      "кремы",
      "тарты"
    ],
    "intensity": 4,
    "risk": 4
  },
  {
    "id": "matcha_coco",
    "primary": "matcha",
    "primary_name": "Матча",
    "primary_category": "floral",
    "secondary": "coconut",
    "secondary_name": "Кокос",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Травянистая горечь матчи и сливочность кокоса создают мягкий профиль",
    "applications": [
      "муссы",
      "чизкейки",
      "мороженое"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "durian_wchoc",
    "primary": "durian",
    "primary_name": "Дуриан",
    "primary_category": "fruits",
    "secondary": "white_chocolate",
    "secondary_name": "Белый шоколад",
    "secondary_category": "chocolates",
    "type": "exotic",
    "description": "Экстремальный контраст аромата дуриана и мягкой сладости белого шоколада",
    "applications": [
      "мороженое",
      "конфеты"
    ],
    "intensity": 5,
    "risk": 5
  },
  {
    "id": "strawberry_basil_pair",
    "primary": "strawberry",
    "primary_name": "Клубника",
    "primary_category": "berries",
    "secondary": "basil",
    "secondary_name": "Базилик",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Свежий и пряный контраст: травянистые анисовые ноты зеленого базилика подчеркивают сочность клубники",
    "applications": [
      "клубнично-базиликовый сорбет",
      "кули",
      "тарты",
      "лимонад"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "seabuckthorn_hazelnut",
    "primary": "seabuckthorn",
    "primary_name": "Облепиха",
    "primary_category": "berries",
    "secondary": "hazelnut",
    "secondary_name": "Фундук",
    "secondary_category": "nuts",
    "type": "exotic",
    "description": "Терпкая маслянистая кислинка облепихи с жареным фундуком создает элегантный осенний акцент",
    "applications": [
      "трюфели",
      "мусс",
      "начинка для конфет"
    ],
    "intensity": 5,
    "risk": 4
  },
  {
    "id": "passionfruit_milkchoc",
    "primary": "passionfruit",
    "primary_name": "Маракуйя",
    "primary_category": "fruits",
    "secondary": "milk_chocolate",
    "secondary_name": "Молочный шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Взрывная тропическая кислинка прорезает карамельную сладость молочного шоколада",
    "applications": [
      "ганаш",
      "нарезные конфеты",
      "тарты"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "cherry_chocolate",
    "primary": "cherry",
    "primary_name": "Вишня",
    "primary_category": "berries",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Фундаментальная кондитерская классика: сочная кислинка вишни раскрывает глубокие какао-ноты",
    "applications": [
      "Шварцвальд (Чёрный лес)",
      "трюфели",
      "мусс",
      "конфи"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "almond_cherry_pair",
    "primary": "almond",
    "primary_name": "Миндаль",
    "primary_category": "nuts",
    "secondary": "cherry",
    "secondary_name": "Вишня",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Классический европейский дуэт (десерт Амаретто): косточковый терпкий аромат вишни и благородная марципановая сладость миндаля",
    "applications": [
      "вишнёво-миндальный франжипан",
      "пирог Клафути",
      "финансье",
      "кули"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "pistachio_cherry_pair",
    "primary": "pistachio",
    "primary_name": "Фисташка",
    "primary_category": "nuts",
    "secondary": "cherry",
    "secondary_name": "Вишня",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Премиальный кондитерский канон: насыщенная маслянистая фисташковая паста и сочная вишня с косточковой кислинкой",
    "applications": [
      "фисташково-вишнёвый тарт",
      "муссовый торт",
      "рулеты",
      "начинка"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "cherry_vanilla",
    "primary": "cherry",
    "primary_name": "Вишня",
    "primary_category": "berries",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Нежная сливочная ваниль сглаживает яркую вишнёвую кислотность, даря сбалансированный вкус",
    "applications": [
      "капкейки",
      "крем-брюле",
      "чизкейк",
      "пироги"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "cherry_tonka",
    "primary": "cherry",
    "primary_name": "Вишня",
    "primary_category": "berries",
    "secondary": "tonka_bean",
    "secondary_name": "Бобы Тонка",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Миндально-марципановый аромат бобов тонка с нотами кумарина возводит вишнёвое конфи в ранг премиум-десерта",
    "applications": [
      "компоте",
      "начинка для эклеров",
      "трюфели"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "cherry_lavender",
    "primary": "cherry",
    "primary_name": "Вишня",
    "primary_category": "berries",
    "secondary": "lavender",
    "secondary_name": "Лаванда",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Изысканный прованский дуэт: прохладный тон сухой лаванды придаёт вишнёвому соусу парфюмерную элегантность",
    "applications": [
      "конфитюр",
      "зефир",
      "кули",
      "галета"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "ginger_pear",
    "primary": "ginger",
    "primary_name": "Имбирь",
    "primary_category": "spices",
    "secondary": "pear",
    "secondary_name": "Груша",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Сочная медовая сладость сочной груши идеально уравновешивает пряную остроту свежего имбиря",
    "applications": [
      "тарты",
      "компоте",
      "кексы",
      "пряный конфитюр"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "ginger_honey",
    "primary": "ginger",
    "primary_name": "Имбирь",
    "primary_category": "spices",
    "secondary": "honey",
    "secondary_name": "Мёд",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Обволакивающая тягучая сладость натурального мёда мягко сглаживает пряное имбирное послевкусие",
    "applications": [
      "пряники",
      "медовик",
      "пропитка для бисквита",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "ginger_chocolate",
    "primary": "ginger",
    "primary_name": "Имбирь",
    "primary_category": "spices",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Глубокая горечь тёмного шоколада зажигает пикантные пряные искорки цукатов имбиря",
    "applications": [
      "трюфели",
      "ганаш",
      "брауни",
      "плитки с цукатами"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "ginger_carrot",
    "primary": "ginger",
    "primary_name": "Имбирь",
    "primary_category": "spices",
    "secondary": "carrot",
    "secondary_name": "Морковь",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Современная бисквитно-овощная классика: пряный имбирь придаёт карамельной моркови пикантную глубину",
    "applications": [
      "морковный торт",
      "капкейки",
      "крем-чиз начинка",
      "цукаты"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "ginger_rhubarb",
    "primary": "ginger",
    "primary_name": "Имбирь",
    "primary_category": "spices",
    "secondary": "rhubarb",
    "secondary_name": "Ревень",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Яркий кисло-пряный взрыв: терпкий весенний ревень подчёркивается пряным имбирным теплом",
    "applications": [
      "компоте",
      "пироги",
      "галеты",
      "сорбет"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "mango_ginger",
    "primary": "mango",
    "primary_name": "Манго",
    "primary_category": "fruits",
    "secondary": "ginger",
    "secondary_name": "Имбирь",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Восточноазиатский пряный взрыв: терпкий свежий имбирь придает сочному манго бодрящий согревающий шлейф",
    "applications": [
      "манго-имбирный соус",
      "конфи",
      "сорбет",
      "начинка для макарон"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "mandarin_ginger_pair",
    "primary": "mandarin",
    "primary_name": "Мандарин",
    "primary_category": "fruits",
    "secondary": "ginger",
    "secondary_name": "Имбирь",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Согревающий пряно-цитрусовый взрыв: пряная острота свежего имбиря подчеркивает медовую мандариновую сладость",
    "applications": [
      "мандариново-имбирный конфитюр",
      "соус",
      "начинка для макарон",
      "цукаты"
    ],
    "intensity": 5,
    "risk": 2
  },
  {
    "id": "raspberry_chocolate",
    "primary": "raspberry",
    "primary_name": "Малина",
    "primary_category": "berries",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Классический ягодно-какао дуэт: сочная кислинка свежей малины оттеняет глубокую богатность шоколада",
    "applications": [
      "муссовые торты",
      "трюфели",
      "начинка для макарон",
      "тарты"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "choc_caramel",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "caramel",
    "secondary_name": "Карамель",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Насыщенная карамельная тягучесть и сливочный какао-профиль образуют бархатистую гармонию",
    "applications": [
      "батончики",
      "начинка для конфет",
      "эклеры",
      "торт Сникерс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "choc_star_anise",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "star_anise",
    "secondary_name": "Бадьян",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Пряно-анисовый аккорд бадьяна дарит тёмному шоколаду глубокий восточный шлейф",
    "applications": [
      "пряный ганаш",
      "зимние трюфели",
      "горячий шоколад"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "banana_chocolate_pair",
    "primary": "banana",
    "primary_name": "Банан",
    "primary_category": "fruits",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Универсальный кондитерский хитовый дуэт: плотная банановая мякоть и глубокий какао-профиль тёмного шоколада",
    "applications": [
      "бананово-шоколадный торт",
      "брауни",
      "трайфлы",
      "начинки"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "vanilla_chocolate_pair",
    "primary": "vanilla",
    "primary_name": "Ваниль",
    "primary_category": "spices",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Канонический кондитерский альянс: глубокий бархатистый шоколад и благородная ванильная ароматика",
    "applications": [
      "ганаш",
      "трюфели",
      "шоколадно-ванильный торт",
      "эклеры"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "dulce_de_leche_chocolate_pair",
    "primary": "dulce_de_leche",
    "primary_name": "Дульсе де лече",
    "primary_category": "creamy",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Богатый десертный канон: бархатистая варёная сгущёнка с карамельным тоном и тёмный глубокий шоколад",
    "applications": [
      "конфеты альфахорес",
      "ганаш",
      "начинка для торта",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "cardamom_chocolate_pair",
    "primary": "cardamom",
    "primary_name": "Кардамон",
    "primary_category": "spices",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Благородный шоко-пряный союз: маслянистый тёмный шоколад приобретает восточный аристократичный оттенок",
    "applications": [
      "трюфели с кардамоном",
      "ганаш",
      "шоколадный крем",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "chocolate_coconut",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "coconut",
    "secondary_name": "Кокос",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Тропическая шоколадная классика: шелковистая кокосовая стружка в сочетании с насыщенным какао",
    "applications": [
      "батончики Баунти",
      "кокосово-шоколадный тарт",
      "ганаш",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "mandarin_chocolate_pair",
    "primary": "mandarin",
    "primary_name": "Мандарин",
    "primary_category": "fruits",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Яркая новогодняя классика: сочная цитрусовая сладость мандарина и тающий глубокий тёмный шоколад",
    "applications": [
      "мандарины в шоколаде",
      "мандариновый ганаш",
      "муссовые пирожные",
      "цукаты"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "mascarpone_chocolate_pair",
    "primary": "mascarpone",
    "primary_name": "Маскарпоне",
    "primary_category": "creamy",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Насыщенный десертный аккорд: тающий тёмный шоколад и пышный шелковистый маскарпоне",
    "applications": [
      "шоколадный крем-чиз",
      "муссы",
      "эклеры",
      "трайфлы"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "currant_chocolate_pair",
    "primary": "blackcurrant",
    "primary_name": "Смородина",
    "primary_category": "berries",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Глубокая терпкая кислинка чёрной смородины идеально сочетается с богатым ароматом тёмного шоколада",
    "applications": [
      "ганаш",
      "кули",
      "начинка для макарон",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "tonka_chocolate",
    "primary": "tonka_bean",
    "primary_name": "Бобы Тонка",
    "primary_category": "spices",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Премиальное кондитерское сочетание: миндальные и ромовые оттенки тонка обогащают какао-профиль",
    "applications": [
      "трюфели",
      "начинка для макарон",
      "ганаш",
      "эклер"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "violet_chocolate_pair",
    "primary": "violet",
    "primary_name": "Фиалка",
    "primary_category": "floral",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Венская кондитерская изысканность: тёмный какао-шоколад и фиалковые засахаренные лепестки",
    "applications": [
      "фиалковые трюфели",
      "ганаш",
      "шоколадный торт",
      "эклеры"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "choc_hazelnut",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "hazelnut",
    "secondary_name": "Фундук",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Эталонное ореховое сочетание (Джандуйя, Нутелла): обжаренный фундук раскрывает богатые оттенки шоколада",
    "applications": [
      "пралине",
      "джандуйя",
      "конфеты",
      "пасты"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "chocolate_salt",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "sea_salt",
    "secondary_name": "Морская соль",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Современная гастрономическая классика: крупная кристаллическая соль ярче раскрывает фруктово-какаовые оттенки шоколада",
    "applications": [
      "шоколад с морской солью",
      "трюфели",
      "ганаш",
      "печенье сабле"
    ],
    "intensity": 5,
    "risk": 2
  },
  {
    "id": "choc_miso",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "miso",
    "secondary_name": "Мисо",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Японский умами-акцент: ферментированная паста мисо добавляет глубокий солёно-ореховый объем",
    "applications": [
      "карамель мисо-шоколад",
      "трюфели",
      "печенье"
    ],
    "intensity": 5,
    "risk": 4
  },
  {
    "id": "chocolate_olive_oil",
    "primary": "chocolate",
    "primary_name": "Шоколад",
    "primary_category": "chocolates",
    "secondary": "olive_oil",
    "secondary_name": "Оливковое масло",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Изысканный шелковистый союз: травянистая фруктность оливкового масла прямого отжима усиливает бархат какао",
    "applications": [
      "шоколадный мусс на оливковом масле",
      "эмульсия",
      "трюфели",
      "ганаш"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "cinnamon_chocolate",
    "primary": "cinnamon",
    "primary_name": "Корица",
    "primary_category": "spices",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "exotic",
    "description": "Согревающая мексиканская нота: пряная корица придает тёмному какао глубокую пикантность",
    "applications": [
      "горячий шоколад",
      "трюфели",
      "брауни",
      "печенье"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "lavender_chocolate_pair",
    "primary": "lavender",
    "primary_name": "Лаванда",
    "primary_category": "floral",
    "secondary": "chocolate",
    "secondary_name": "Шоколад",
    "secondary_category": "chocolates",
    "type": "exotic",
    "description": "Элегантный контрастный союз: насыщенный горький шоколад и глубокий цветочно-пряный шлейф",
    "applications": [
      "трюфели",
      "шоколадно-лавандовый ганаш",
      "эклеры",
      "мусс"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "cinnamon_apple",
    "primary": "cinnamon",
    "primary_name": "Корица",
    "primary_category": "spices",
    "secondary": "apple",
    "secondary_name": "Яблоко",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Абсолютная кондитерская классика: пряный согревающий аромат корицы подчеркивает запечённую кислинку яблок",
    "applications": [
      "яблочный штрудель",
      "шарлотка",
      "пироги",
      "компоте"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "cinnamon_pear",
    "primary": "cinnamon",
    "primary_name": "Корица",
    "primary_category": "spices",
    "secondary": "pear",
    "secondary_name": "Груша",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Утонченное осеннее сочетание: медовая текстура груши, томлённая с коричными палочками",
    "applications": [
      "груша в вине",
      "тарты",
      "начинка для слоек",
      "мусс"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "cinnamon_caramel",
    "primary": "cinnamon",
    "primary_name": "Корица",
    "primary_category": "spices",
    "secondary": "caramel",
    "secondary_name": "Карамель",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Тягучая сливочная карамель с добавлением корицы дарит ощущение уютного домашнего тепла",
    "applications": [
      "синнабоны",
      "карамельный соус",
      "капкейки",
      "чизкейк"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "orange_cinnamon_pair",
    "primary": "orange",
    "primary_name": "Апельсин",
    "primary_category": "fruits",
    "secondary": "cinnamon",
    "secondary_name": "Корица",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Зимний согревающий альянс: пряная древесная сладковатая корица и душистый сочный апельсин",
    "applications": [
      "рождественский кекс",
      "глинтвейновое конфи",
      "начинка для пирогов",
      "цукаты"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "cinnamon_coffee",
    "primary": "cinnamon",
    "primary_name": "Корица",
    "primary_category": "spices",
    "secondary": "coffee",
    "secondary_name": "Кофе",
    "secondary_category": "chocolates",
    "type": "exotic",
    "description": "Бодрящий глубокий кофейный профиль с пряной коричной пенкой и длительным ароматическим шлейфом",
    "applications": [
      "капучино-мусс",
      "эклеры",
      "пропитка для бисквита",
      "крем"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "vanilla_tonka_pair",
    "primary": "vanilla",
    "primary_name": "Ваниль",
    "primary_category": "spices",
    "secondary": "tonka_bean",
    "secondary_name": "Бобы тонка",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Высокая парфюмерная кондитерка: миндально-кумариновый пряный аромат бобов тонка усилен ванилью",
    "applications": [
      "крем-брюле",
      "ганаш",
      "муссовые пирожные",
      "начинка для макарон"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "tonka_coffee",
    "primary": "tonka_bean",
    "primary_name": "Бобы Тонка",
    "primary_category": "spices",
    "secondary": "coffee",
    "secondary_name": "Кофе",
    "secondary_category": "chocolates",
    "type": "classic",
    "description": "Благородная кофейная горчинка с глубоким кумариново-марципановым шлейфом",
    "applications": [
      "тирамису",
      "кофейный крем",
      "муссовые пирожные",
      "пропитка"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "tonka_pear",
    "primary": "tonka_bean",
    "primary_name": "Бобы Тонка",
    "primary_category": "spices",
    "secondary": "pear",
    "secondary_name": "Груша",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Сочная пряная груша с мягким ванильно-миндальным ароматом на тонких срезах",
    "applications": [
      "запеченная груша",
      "тарты",
      "начинка для слоек",
      "кули"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "tonka_pumpkin",
    "primary": "tonka_bean",
    "primary_name": "Бобы Тонка",
    "primary_category": "spices",
    "secondary": "pumpkin",
    "secondary_name": "Тыква",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Бархатистое осеннее сочетание: карамельная сладость печёной тыквы и парфюмерный тон бобов тонка",
    "applications": [
      "тыквенный пай",
      "мусс",
      "крем-суфле",
      "макарон"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "raspberry_vanilla",
    "primary": "raspberry",
    "primary_name": "Малина",
    "primary_category": "berries",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Нежная сливочная ваниль сглаживает яркую малинную кислинку, придавая десерту мягкость и округлость",
    "applications": [
      "капкейки",
      "чизкейк",
      "крем для тортов",
      "панакота"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "raspberry_cream",
    "primary": "raspberry",
    "primary_name": "Малина",
    "primary_category": "berries",
    "secondary": "cream",
    "secondary_name": "Сливки",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Лёгкий ягодно-сливочный баланс: свежая ягодная сладость с пышной сливочной текстурой",
    "applications": [
      "трайфлы",
      "десерт Павлова",
      "рулеты",
      "эклеры"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "raspberry_lemon",
    "primary": "raspberry",
    "primary_name": "Малина",
    "primary_category": "berries",
    "secondary": "lemon",
    "secondary_name": "Лимон",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Двойной кислый освежающий акцент: искристая лимонная цедра пробуждает малинный аромат",
    "applications": [
      "конфитюр",
      "лимонадный курд",
      "тарты",
      "мармелад"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "raspberry_rose",
    "primary": "raspberry",
    "primary_name": "Малина",
    "primary_category": "berries",
    "secondary": "rose",
    "secondary_name": "Роза",
    "secondary_category": "floral",
    "type": "classic",
    "description": "Знаменитый франконский дуэт (Ispahan): тонкий цветочный аромат дамасской розы подчёркивает ягодный профиль",
    "applications": [
      "макарон Испахан",
      "муссовые пирожные",
      "компоте",
      "зефир"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "violet_raspberry_pair",
    "primary": "violet",
    "primary_name": "Фиалка",
    "primary_category": "floral",
    "secondary": "raspberry",
    "secondary_name": "Малина",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Утонченный ягодно-цветочный союз: спелая сочная малина с загадочной цветочной отдушкой фиалковых лепестков",
    "applications": [
      "малиново-фиалковый конфитюр",
      "панакота",
      "кули",
      "тарты"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "white_choc_raspberry_pair",
    "primary": "white_chocolate",
    "primary_name": "Белый шоколад",
    "primary_category": "chocolates",
    "secondary": "raspberry",
    "secondary_name": "Малина",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Кондитерский канон: сливочная нежность ванильного какао-масла и яркая кислинка спелой малины",
    "applications": [
      "малиновый ганаш",
      "мусс",
      "тарты",
      "начинка для макарон"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "mascarpone_raspberry_pair",
    "primary": "mascarpone",
    "primary_name": "Маскарпоне",
    "primary_category": "creamy",
    "secondary": "raspberry",
    "secondary_name": "Малина",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Яркое ягодно-сливочное сочетание: кислинка спелой малины пронизывает густые нежные сливки",
    "applications": [
      "малиновое тирамису",
      "начинка для тартов",
      "слоёные десерты",
      "рулеты"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "currant_raspberry_pair",
    "primary": "blackcurrant",
    "primary_name": "Смородина",
    "primary_category": "berries",
    "secondary": "raspberry",
    "secondary_name": "Малина",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Насыщенный лесной ягодный тандем: сладость малины и терпкий глубокий тон смородины",
    "applications": [
      "ягодное конфи",
      "мармелад",
      "кули",
      "зефир"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "raspberry_pistachio",
    "primary": "raspberry",
    "primary_name": "Малина",
    "primary_category": "berries",
    "secondary": "pistachio",
    "secondary_name": "Фисташка",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Эстетическая и вкусовая гармония: маслянистый ореховый вкус фисташки и сочный бордовый малинный акцент",
    "applications": [
      "фисташково-малиновый торт",
      "тарты",
      "эклеры",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "raspberry_basil",
    "primary": "raspberry",
    "primary_name": "Малина",
    "primary_category": "berries",
    "secondary": "basil",
    "secondary_name": "Базилик",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Современный пряно-травяной тренд: свежий зелёный анисово-пряный базилик идеально подчёркивает ягодную сочность",
    "applications": [
      "кули с базиликом",
      "сорбет",
      "гастрономический конфитюр",
      "тарты"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "blueberry_lemon",
    "primary": "blueberry",
    "primary_name": "Черника",
    "primary_category": "berries",
    "secondary": "lemon",
    "secondary_name": "Лимон",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Яркий освежающий тандем: цитрусовая кислинка лимона идеально оттеняет глубокую ягодную сладость черники",
    "applications": [
      "черничный курд",
      "конфитюр",
      "тарты",
      "капкейки"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "blueberry_vanilla",
    "primary": "blueberry",
    "primary_name": "Черника",
    "primary_category": "berries",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Мягкое сливочно-ягодное сочетание: нежный ванильный аромат закругляет черничный профиль",
    "applications": [
      "мусс",
      "панакота",
      "чизкейк",
      "прослойка для тортов"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "blueberry_cream",
    "primary": "blueberry",
    "primary_name": "Черника",
    "primary_category": "berries",
    "secondary": "cream",
    "secondary_name": "Сливки",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Нежный десертный стандарт: пышная сливочная нежность и густое черничное пюре",
    "applications": [
      "трайфлы",
      "эклеры",
      "черничный пирог",
      "рулеты"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "blueberry_lavender",
    "primary": "blueberry",
    "primary_name": "Черника",
    "primary_category": "berries",
    "secondary": "lavender",
    "secondary_name": "Лаванда",
    "secondary_category": "floral",
    "type": "classic",
    "description": "Прованский изысканный аккорд: легкий цветочно-успокаивающий тон лаванды гармонирует со спелой черникой",
    "applications": [
      "начинка для макарон",
      "чернично-лаванда конфи",
      "муссовые пирожные",
      "мармелад"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "blueberry_thyme",
    "primary": "blueberry",
    "primary_name": "Черника",
    "primary_category": "berries",
    "secondary": "thyme",
    "secondary_name": "Чабрец",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Лесной пряный контраст: травянистый бальзамический аромат чабреца придаёт чернике гастрономическую глубину",
    "applications": [
      "гастрономический конфитюр",
      "сорбет",
      "начинка для тарталеток",
      "соус"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "lemon_vanilla_classic",
    "primary": "lemon",
    "primary_name": "Лимон",
    "primary_category": "fruits",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Бархатистая сливочная ваниль сглаживает острую лимонную кислинку, создавая классический нежный десерт",
    "applications": [
      "лимонно-ванильный курд",
      "тарты",
      "капкейки",
      "панакота"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "lemon_poppy_seed",
    "primary": "lemon",
    "primary_name": "Лимон",
    "primary_category": "fruits",
    "secondary": "poppy_seed",
    "secondary_name": "Мак",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Традиционный кондитерский дуэт: хрустящие маковые зерна и освежающая лимонная цедра",
    "applications": [
      "лимонно-маковый кекс",
      "маффины",
      "бисквит",
      "глазурь"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "white_choc_lemon_pair",
    "primary": "white_chocolate",
    "primary_name": "Белый шоколад",
    "primary_category": "chocolates",
    "secondary": "lemon",
    "secondary_name": "Лимон",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Освежающий сливочный дуэт: бодрящий цитрусовый аккорд лимона растворяется в маслянистой сладости",
    "applications": [
      "лимонный взбитый ганаш",
      "тарты",
      "начинка для макарон",
      "трюфели"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "lemon_elderflower",
    "primary": "lemon",
    "primary_name": "Лимон",
    "primary_category": "fruits",
    "secondary": "elderflower",
    "secondary_name": "Бузина",
    "secondary_category": "floral",
    "type": "classic",
    "description": "Изысканный европейский дуэт: парфюмерный цветочно-мускатный тон бузины и искристый лимон",
    "applications": [
      "лимонад-желе",
      "муссовые пирожные",
      "пропитка для бисквита",
      "мармелад"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "lavender_lemon_pair",
    "primary": "lavender",
    "primary_name": "Лаванда",
    "primary_category": "floral",
    "secondary": "lemon",
    "secondary_name": "Лимон",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Прованский освежающий тандем: яркая лимонная кислинка с пряно-цветочным лавандовым послевкусием",
    "applications": [
      "лавандовый лимонад-курд",
      "печенье сабле",
      "тарты",
      "капкейки"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "mascarpone_lemon_pair",
    "primary": "mascarpone",
    "primary_name": "Маскарпоне",
    "primary_category": "creamy",
    "secondary": "lemon",
    "secondary_name": "Лимон",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Изысканный свежий баланс: мягкий сливочный крем маскарпоне и яркий бодрящий лимонный курд",
    "applications": [
      "лимонное тирамису",
      "крем для тартов",
      "рулеты",
      "начинка"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "lemon_rosemary",
    "primary": "lemon",
    "primary_name": "Лимон",
    "primary_category": "fruits",
    "secondary": "rosemary",
    "secondary_name": "Розмарин",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Средиземноморский пряно-травяной контраст: смолистый розмарин и сочная лимонная мякоть",
    "applications": [
      "гастрономический соус",
      "лимонад-сорбет",
      "пропитка",
      "тарты"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "lemon_thyme",
    "primary": "lemon",
    "primary_name": "Лимон",
    "primary_category": "fruits",
    "secondary": "thyme",
    "secondary_name": "Тимьян",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Травянисто-бальзамический оттенок тимьяна придает цитрусовому фону гастрономический объем",
    "applications": [
      "конфитюр для сыров",
      "галеты",
      "сорбет",
      "начинка"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "lemon_olive_oil",
    "primary": "lemon",
    "primary_name": "Лимон",
    "primary_category": "fruits",
    "secondary": "olive_oil",
    "secondary_name": "Оливковое масло",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Итальянский кексовый стандарт: шелковистое оливковое масло холодного отжима и лимонная эссенция",
    "applications": [
      "лимонно-оливковый кекс",
      "эмульсия-крем",
      "глазурь",
      "бисквит"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "vanilla_blackcurrant",
    "primary": "vanilla",
    "primary_name": "Ваниль",
    "primary_category": "spices",
    "secondary": "blackcurrant",
    "secondary_name": "Чёрная смородина",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Яркий ягодный баланс: глубокая кислинка и терпкость чёрной смородины мягко скругляются ванилью",
    "applications": [
      "смородиново-ванильный зефир",
      "конфи",
      "тарты",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "violet_currant_pair",
    "primary": "violet",
    "primary_name": "Фиалка",
    "primary_category": "floral",
    "secondary": "blackcurrant",
    "secondary_name": "Чёрная смородина",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Французский парфюмерный классический дуэт: глубокая кислинка чёрной смородины подчёркнута тончайшим пудровым тоном фиалки",
    "applications": [
      "смородиново-фиалковый зефир",
      "конфи",
      "мусс",
      "макарон"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "currant_mint",
    "primary": "blackcurrant",
    "primary_name": "Смородина",
    "primary_category": "berries",
    "secondary": "mint",
    "secondary_name": "Мята",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Освежающий ледяной контраст: прохладная ментоловая мята подчёркивает яркий смородиновый сок",
    "applications": [
      "сорбет",
      "смородиновый мохито",
      "конфитюр",
      "тарты"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "strawberry_cream",
    "primary": "strawberry",
    "primary_name": "Клубника",
    "primary_category": "berries",
    "secondary": "cream",
    "secondary_name": "Сливки",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Вечная летняя классика: нежные взбитые сливки и спелая душистая клубника",
    "applications": [
      "клубника со сливками",
      "трайфлы",
      "торты",
      "рулеты"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "strawberry_vanilla",
    "primary": "strawberry",
    "primary_name": "Клубника",
    "primary_category": "berries",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Мягкая сливочно-сладкая ваниль красиво округляет сочную ягодную кислинку клубники",
    "applications": [
      "капкейки",
      "чизкейк",
      "панакота",
      "мусс"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "white_choc_strawberry_pair",
    "primary": "white_chocolate",
    "primary_name": "Белый шоколад",
    "primary_category": "chocolates",
    "secondary": "strawberry",
    "secondary_name": "Клубника",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Нежный летний тандем: душистая клубничная сочность и тающий сливочный белый шоколад",
    "applications": [
      "клубника в белом шоколаде",
      "ганаш",
      "мусс",
      "десерты в стакане"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "strawberry_rhubarb",
    "primary": "strawberry",
    "primary_name": "Клубника",
    "primary_category": "berries",
    "secondary": "rhubarb",
    "secondary_name": "Ревень",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Знаменитый английский дуэт: кисленький травянистый ревень подчёркивает клубничную сладость",
    "applications": [
      "клубнично-ревенный пирог",
      "компоте",
      "конфитюр",
      "тарты"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "rose_strawberry_pair",
    "primary": "rose",
    "primary_name": "Роза",
    "primary_category": "floral",
    "secondary": "strawberry",
    "secondary_name": "Клубника",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Нежная романтичная гармония: сладость спелой клубники подчёркнута тонким лепестковым шлейфом розы",
    "applications": [
      "клубнично-розовый конфитюр",
      "тарты",
      "начинка для рулетов",
      "мусс"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "strawberry_black_pepper",
    "primary": "strawberry",
    "primary_name": "Клубника",
    "primary_category": "berries",
    "secondary": "black_pepper",
    "secondary_name": "Чёрный перец",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Острый гастрономический акцент: свежемолотый чёрный перец высвобождает глубокий сахаристый аромат клубники",
    "applications": [
      "гастрономическое конфи",
      "соус для десертов",
      "тарты",
      "начинка"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "strawberry_balsamic",
    "primary": "strawberry",
    "primary_name": "Клубника",
    "primary_category": "berries",
    "secondary": "balsamic",
    "secondary_name": "Бальзамик",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Итальянский шедевр: выдержанный выкипевший бальзамический уксус дарит клубнике плотный карамельно-кислый тон",
    "applications": [
      "клубника с бальзамиком",
      "кули",
      "сорбет",
      "начинка для макарон"
    ],
    "intensity": 5,
    "risk": 3
  },
  {
    "id": "strawberry_jasmine",
    "primary": "strawberry",
    "primary_name": "Клубника",
    "primary_category": "berries",
    "secondary": "jasmine",
    "secondary_name": "Жасмин",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Тонкий парфюмерный альянс: дурманящий цветок жасмина переплетается с нежным клубничным пюре",
    "applications": [
      "жасминово-клубничный мусс",
      "пропитка",
      "зефир",
      "гастрономический гель"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "cardamom_coffee",
    "primary": "cardamom",
    "primary_name": "Кардамон",
    "primary_category": "spices",
    "secondary": "coffee",
    "secondary_name": "Кофе",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Восточная классика: пряный цитрусово-эвкалиптовый аромат кардамона обогащает глубокую горчинку кофейного зерна",
    "applications": [
      "кофейно-кардамоновый мусс",
      "ганаш",
      "эклеры",
      "пропитка"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "orange_cardamom_pair",
    "primary": "orange",
    "primary_name": "Апельсин",
    "primary_category": "fruits",
    "secondary": "cardamom",
    "secondary_name": "Кардамон",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Восточный пряный союз: смолисто-эвкалиптовый тонус кардамона идеально дополняет солнечный апельсин",
    "applications": [
      "апельсиново-кардамоновый джем",
      "конфитюр",
      "кексы",
      "пропитка"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "cardamom_pear",
    "primary": "cardamom",
    "primary_name": "Кардамон",
    "primary_category": "spices",
    "secondary": "pear",
    "secondary_name": "Груша",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Деликатное сочетание: сочная медовая груша в пряном сиропе с зелёным кардамоном",
    "applications": [
      "груша в пряном сиропе",
      "тарты",
      "компоте",
      "пироги"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "cardamom_pumpkin",
    "primary": "cardamom",
    "primary_name": "Кардамон",
    "primary_category": "spices",
    "secondary": "pumpkin",
    "secondary_name": "Тыква",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Осенний уютный контраст: бархатистая сладкая тыква и освежающий кардамоновый акцент",
    "applications": [
      "тыквенно-пряный пирог",
      "мусс",
      "крем",
      "конфитюр"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "cardamom_rose",
    "primary": "cardamom",
    "primary_name": "Кардамон",
    "primary_category": "spices",
    "secondary": "rose",
    "secondary_name": "Роза",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Персидская роскошь: цветочно-парфюмерная сладость розы переплетается с терпким кардамоном",
    "applications": [
      "восточные сладости",
      "начинка для макарон",
      "зефир",
      "муссовые десерты"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "cardamom_carrot",
    "primary": "cardamom",
    "primary_name": "Кардамон",
    "primary_category": "spices",
    "secondary": "carrot",
    "secondary_name": "Морковь",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Индийский десертный мотив: естественная сахаристость моркови раскрывается с кардамоновой свежестью",
    "applications": [
      "морковно-пряный торт",
      "халва",
      "кексы",
      "крем"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "cardamom_pistachio",
    "primary": "cardamom",
    "primary_name": "Кардамон",
    "primary_category": "spices",
    "secondary": "pistachio",
    "secondary_name": "Фисташка",
    "secondary_category": "nuts",
    "type": "exotic",
    "description": "Орехово-пряный изысканный аккорд: сливочно-зеленая фисташка подчёркнута камфорно-цитрусовым тоном",
    "applications": [
      "фисташковый кекс с кардамоном",
      "паста",
      "тарты",
      "начинки"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "white_choc_passionfruit",
    "primary": "white_chocolate",
    "primary_name": "Белый шоколад",
    "primary_category": "chocolates",
    "secondary": "passion_fruit",
    "secondary_name": "Маракуйя",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Яркая тропическая гармония: пронизывающая кислинка маракуйи балансирует насыщенный сливочный профиль белого шоколада",
    "applications": [
      "тропический ганаш",
      "муссовые пирожные",
      "конфи",
      "эклеры"
    ],
    "intensity": 5,
    "risk": 1
  },
  {
    "id": "white_choc_pistachio",
    "primary": "white_chocolate",
    "primary_name": "Белый шоколад",
    "primary_category": "chocolates",
    "secondary": "pistachio",
    "secondary_name": "Фисташка",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Роскошный орехово-сливочный союз: благородная маслянистость фисташки подчеркнута сладкими ванильными нотами",
    "applications": [
      "фисташковый ганаш",
      "паста",
      "начинка для дубайского шоколада",
      "тарты"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "white_choc_miso",
    "primary": "white_chocolate",
    "primary_name": "Белый шоколад",
    "primary_category": "chocolates",
    "secondary": "miso",
    "secondary_name": "Мисо",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Современно-авангардный соленый умами аккорд: ферментированная паста мисо придает карамельную глубину белково-сливочной сладости",
    "applications": [
      "мисо-ганаш",
      "карамель с мисо",
      "начинка для макарон",
      "печенье"
    ],
    "intensity": 5,
    "risk": 3
  },
  {
    "id": "white_choc_olive_oil",
    "primary": "white_chocolate",
    "primary_name": "Белый шоколад",
    "primary_category": "chocolates",
    "secondary": "olive_oil",
    "secondary_name": "Оливковое масло",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Гастрономический шелковистый контраст: травянистые фруктовые ноты оливкового масла высшего качества раскрывают сладость белого шоколада",
    "applications": [
      "ганаш на оливковом масле",
      "начинка для конфет",
      "эмульсия",
      "десерты"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "mascarpone_coffee",
    "primary": "mascarpone",
    "primary_name": "Маскарпоне",
    "primary_category": "creamy",
    "secondary": "coffee",
    "secondary_name": "Кофе",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Канонический итальянский дуэт тирамису: густой маслянистый маскарпоне и бодрящий крепкий эспрессо",
    "applications": [
      "тирамису",
      "крем для тортов",
      "мусс",
      "пропитка"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "mascarpone_olive_oil",
    "primary": "mascarpone",
    "primary_name": "Маскарпоне",
    "primary_category": "creamy",
    "secondary": "olive_oil",
    "secondary_name": "Оливковое масло",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Шелковистый итальянский гастрономический альянс: сливочно-сырная плотность маскарпоне с пряно-травянистым оттенком оливкового масла",
    "applications": [
      "крем для гастрономических тартов",
      "эмульсионный соус",
      "мусс",
      "бисквитная прослойка"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "coconut_lime",
    "primary": "coconut",
    "primary_name": "Кокос",
    "primary_category": "nuts",
    "secondary": "lime",
    "secondary_name": "Лайм",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Бодрящая карибская гармония: пронзительный свежий лайм разбавляет маслянистую сливочность кокоса",
    "applications": [
      "кокосово-лаймовый тарт",
      "панакота",
      "мусс",
      "десерты в стакане"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "lime_mint",
    "primary": "lime",
    "primary_name": "Лайм",
    "primary_category": "fruits",
    "secondary": "mint",
    "secondary_name": "Мята",
    "secondary_category": "floral",
    "type": "classic",
    "description": "Кубинский освежающий дуэт Мохито: прохладная ментоловая мята и взрывной цитрусовый лаймовый сок",
    "applications": [
      "сорбет мохито",
      "зефир",
      "начинка для макарон",
      "мармелад"
    ],
    "intensity": 5,
    "risk": 1
  },
  {
    "id": "mango_lime",
    "primary": "mango",
    "primary_name": "Манго",
    "primary_category": "fruits",
    "secondary": "lime",
    "secondary_name": "Лайм",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Освежающий латиноамериканский аккорд: пронзительный цитрусовый лайм оттеняет медовую сладкую мякоть манго",
    "applications": [
      "манго-лаймовый кули",
      "сорбет",
      "начинка для тартов",
      "гастро-гель"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "lime_basil",
    "primary": "lime",
    "primary_name": "Лайм",
    "primary_category": "fruits",
    "secondary": "basil",
    "secondary_name": "Базилик",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Свежий и пряный травонистый контраст: пряные анисовые ноты базилика оттеняют прохладную кислотность лайма",
    "applications": [
      "гастрономический гель",
      "сорбет",
      "начинка для макарон",
      "кули"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "lime_chili",
    "primary": "lime",
    "primary_name": "Лайм",
    "primary_category": "fruits",
    "secondary": "chili",
    "secondary_name": "Чили",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Латиноамериканский остро-кислый взрыв: жгучий пикантный чили и освежающий цитрусовый лайм",
    "applications": [
      "гастрономический соус",
      "конфитюр",
      "начинка для конфет",
      "сорбет"
    ],
    "intensity": 5,
    "risk": 3
  },
  {
    "id": "dulce_de_leche_coffee",
    "primary": "dulce_de_leche",
    "primary_name": "Дульсе де лече",
    "primary_category": "creamy",
    "secondary": "coffee",
    "secondary_name": "Кофе",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Латиноамериканский согревающий аккорд: насыщенная кофейная горчинка и молочно-карамельная сладость",
    "applications": [
      "карамельный латте-мусс",
      "эклеры",
      "пропитка для бисквитов",
      "крем"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "banana_dulce_de_leche",
    "primary": "banana",
    "primary_name": "Банан",
    "primary_category": "fruits",
    "secondary": "dulce_de_leche",
    "secondary_name": "Дульсе де лече",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Латиноамериканская сладость: густое томлёное варёное сгущённое молоко и мягкий сочный банан",
    "applications": [
      "торт Альфахорес",
      "начинка для пирогов",
      "трайфлы",
      "крем"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "dulce_de_leche_salt",
    "primary": "dulce_de_leche",
    "primary_name": "Дульсе де лече",
    "primary_category": "creamy",
    "secondary": "sea_salt",
    "secondary_name": "Морская соль",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Современная карамельная классика: кристаллы морской соли гасят приторность и ярко раскрывают сливочно-молочные тона",
    "applications": [
      "солёная карамель дульсе де лече",
      "начинка для конфет",
      "соус",
      "макарон"
    ],
    "intensity": 5,
    "risk": 2
  },
  {
    "id": "orange_almond",
    "primary": "orange",
    "primary_name": "Апельсин",
    "primary_category": "fruits",
    "secondary": "almond",
    "secondary_name": "Миндаль",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Средиземноморская кондитерская классика: оршатная ореховая нежность и свежая цитрусовая нота апельсина",
    "applications": [
      "миндально-апельсиновый кекс",
      "франжипан",
      "тарты",
      "печенье бискотти"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "orange_vanilla",
    "primary": "orange",
    "primary_name": "Апельсин",
    "primary_category": "fruits",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Мягкий десертный профиль: сливочно-сладкая мадагаскарская ваниль смягчает цитрусовую кислинку апельсина",
    "applications": [
      "апельсиново-ванильный курд",
      "мусс",
      "панакота",
      "пропитка"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "orange_fennel",
    "primary": "orange",
    "primary_name": "Апельсин",
    "primary_category": "fruits",
    "secondary": "fennel",
    "secondary_name": "Фенхель",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Итальянский свежий гастрономический контраст: анисово-травянистый фенхель и сочная апельсиновая мякоть",
    "applications": [
      "апельсиново-фенхелевый соус",
      "гастрономический сорбет",
      "конфи",
      "тарты"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "orange_olive_oil",
    "primary": "orange",
    "primary_name": "Апельсин",
    "primary_category": "fruits",
    "secondary": "olive_oil",
    "secondary_name": "Оливковое масло",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Шелковистый средиземноморский дуэт: маслянистый плодовый тон оливкового масла и яркий сок спелого апельсина",
    "applications": [
      "апельсиновый бисквит на оливковом масле",
      "эмульсия",
      "курд",
      "ганаш"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "orange_coffee",
    "primary": "orange",
    "primary_name": "Апельсин",
    "primary_category": "fruits",
    "secondary": "coffee",
    "secondary_name": "Кофе",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Современный авторский аккорд (Бамбл): благородная кофейная горчинка и искрящийся цитрусовый апельсиновый тоник",
    "applications": [
      "бамбл-мусс",
      "начинка для эклеров",
      "пропитка",
      "ганаш"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "pistachio_orange",
    "primary": "pistachio",
    "primary_name": "Фисташка",
    "primary_category": "nuts",
    "secondary": "orange",
    "secondary_name": "Апельсин",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Средиземноморский контраст: душистая цитрусовая цедра апельсина придает фисташке сочную свежесть",
    "applications": [
      "фисташково-апельсиновый кекс",
      "тарты",
      "начинки",
      "паста"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "pineapple_vanilla_pair",
    "primary": "pineapple",
    "primary_name": "Ананас",
    "primary_category": "fruits",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Тёплый экзотический союз: пронзительная ананасовая кислинка приобретает сливочную ванильную округлость",
    "applications": [
      "ананасово-ванильный курд",
      "тарты",
      "пропитка",
      "мусс"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "grapefruit_vanilla_pair",
    "primary": "grapefruit",
    "primary_name": "Грейпфрут",
    "primary_category": "fruits",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Изысканный десертный контраст: стручковая ваниль придает сочному грейпфруту сливочную округлость",
    "applications": [
      "мусс",
      "панакота",
      "грейпфрутовое конфи",
      "тарты"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "vanilla_jasmine",
    "primary": "vanilla",
    "primary_name": "Ваниль",
    "primary_category": "spices",
    "secondary": "jasmine",
    "secondary_name": "Жасмин",
    "secondary_category": "floral",
    "type": "classic",
    "description": "Утонченный парфюмерный альянс: дурманящий цветок жасмина и сладкая стручковая ваниль",
    "applications": [
      "жасминово-ванильный мусс",
      "пропитка",
      "зефир",
      "гастрономический гель"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "coconut_vanilla_pair",
    "primary": "coconut",
    "primary_name": "Кокос",
    "primary_category": "nuts",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Нежнейший сливочный тандем: стручковая ваниль подчёркивает естественную кокосовую сладость",
    "applications": [
      "кокосово-ванильный крем",
      "панакота",
      "чизкейк",
      "зефир"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "vanilla_coffee",
    "primary": "vanilla",
    "primary_name": "Ваниль",
    "primary_category": "spices",
    "secondary": "coffee",
    "secondary_name": "Кофе",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Уютный кофейный канон: глубокая обжаренная горчинка эспрессо и обволакивающая сладость ванили",
    "applications": [
      "ванильный раф-мусс",
      "пропитка",
      "эклеры",
      "крем"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "mango_vanilla_pair",
    "primary": "mango",
    "primary_name": "Манго",
    "primary_category": "fruits",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Шелковистый десертный профиль: стручковая ваниль придает тропическому манго нежный крем-брюле оттенок",
    "applications": [
      "манго-ванильный мусс",
      "панакота",
      "пропитка",
      "чизкейк"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "mandarin_vanilla_pair",
    "primary": "mandarin",
    "primary_name": "Мандарин",
    "primary_category": "fruits",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Праздничный цитрусово-сливочный дуэт: искрящаяся мандариновая сочность и тёплый обволакивающий ванильный тон",
    "applications": [
      "мандариново-ванильный курд",
      "панакота",
      "чизкейк",
      "мусс"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "almond_vanilla_pair",
    "primary": "almond",
    "primary_name": "Миндаль",
    "primary_category": "nuts",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Обволакивающий сливочный канон: мадагаскарская ваниль подчеркивает нежность миндального молока и пралине",
    "applications": [
      "миндально-ванильный крем",
      "печенье бискотти",
      "мусс",
      "панакота"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "pistachio_vanilla_pair",
    "primary": "pistachio",
    "primary_name": "Фисташка",
    "primary_category": "nuts",
    "secondary": "vanilla",
    "secondary_name": "Ваниль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Обволакивающий орехово-сливочный союз: природная ваниль подчеркивает маслянистые тона зелёной фисташки",
    "applications": [
      "фисташково-ванильный крем",
      "эклеры",
      "панакота",
      "мороженое"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "mandarin_cream",
    "primary": "mandarin",
    "primary_name": "Мандарин",
    "primary_category": "fruits",
    "secondary": "cream",
    "secondary_name": "Сливки",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Нежный десертный тандем: бодрящая мандариновая кислинка растворяется в пышных взбитых сливках",
    "applications": [
      "мандариновый трайфл",
      "крем-десерт",
      "рулеты",
      "панакота"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "mandarin_saffron",
    "primary": "mandarin",
    "primary_name": "Мандарин",
    "primary_category": "fruits",
    "secondary": "saffron",
    "secondary_name": "Шафран",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Роскошный восточный аристократичный дуэт: пряный драгоценный аромат шафрана и солнечная сладость спелого мандарина",
    "applications": [
      "шафраново-мандариновый гель",
      "гастрономический соус",
      "мусс",
      "конфи"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "caramel_salt",
    "primary": "caramel",
    "primary_name": "Карамель",
    "primary_category": "creamy",
    "secondary": "sea_salt",
    "secondary_name": "Морская соль",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Безупречный современный канон: кристаллики соли эффектно оттеняют глубокую густую сладость жжёного сахара",
    "applications": [
      "солёная карамель",
      "начинка для конфет",
      "соус",
      "крем для тортов"
    ],
    "intensity": 5,
    "risk": 1
  },
  {
    "id": "caramel_apple",
    "primary": "caramel",
    "primary_name": "Карамель",
    "primary_category": "creamy",
    "secondary": "apple",
    "secondary_name": "Яблоко",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Осенняя кондитерская классика: сочная фруктовая кислинка запечённого яблока в густом карамельном глазировании",
    "applications": [
      "яблочный тарт татен",
      "пироги",
      "компоте",
      "начинка"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "caramel_hazelnut",
    "primary": "caramel",
    "primary_name": "Карамель",
    "primary_category": "creamy",
    "secondary": "hazelnut",
    "secondary_name": "Фундук",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Каноническое сочетание пралине: обжаренный фундук в хрустящей карамели с глубоким ореховым ароматом",
    "applications": [
      "пралине",
      "начинки для конфет",
      "паста",
      "торт джандуйя"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "caramel_coffee",
    "primary": "caramel",
    "primary_name": "Карамель",
    "primary_category": "creamy",
    "secondary": "coffee",
    "secondary_name": "Кофе",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Согревающий кофейный профиль: интенсивная горчинка эспрессо и мягкая сливочно-карамельная сладость",
    "applications": [
      "карамельный макиато-мусс",
      "эклеры",
      "пропитка",
      "крем"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "banana_caramel_pair",
    "primary": "banana",
    "primary_name": "Банан",
    "primary_category": "fruits",
    "secondary": "caramel",
    "secondary_name": "Карамель",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Знаменитый профиль Баноффи: сладкий зрелый банан в сочетании с густой тягучей сливочной карамелью",
    "applications": [
      "баноффи пай",
      "начинка для капкейков",
      "мусс",
      "десерты в стакане"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "caramel_miso",
    "primary": "caramel",
    "primary_name": "Карамель",
    "primary_category": "creamy",
    "secondary": "miso",
    "secondary_name": "Мисо",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Японский умами-взрыв: ферментированная солоноватая паста мисо придает карамели невероятную глубину",
    "applications": [
      "мисо-карамель",
      "начинка для макарон",
      "глазурь",
      "соус"
    ],
    "intensity": 5,
    "risk": 3
  },
  {
    "id": "caramel_popcorn",
    "primary": "caramel",
    "primary_name": "Карамель",
    "primary_category": "creamy",
    "secondary": "popcorn",
    "secondary_name": "Попкорн",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Текстурный хрустящий тренд: злаковый маслянистый аромат попкорна в сочетании со сливочной карамелью",
    "applications": [
      "карамельно-попкорновый мусс",
      "декор",
      "начинка для тартов",
      "трайфлы"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "grapefruit_mint",
    "primary": "grapefruit",
    "primary_name": "Грейпфрут",
    "primary_category": "fruits",
    "secondary": "mint",
    "secondary_name": "Мята",
    "secondary_category": "floral",
    "type": "classic",
    "description": "Ультрасвежий бодрящий дуэт: прохладный ментол мяты подчёркивает сочную цитрусовую горчинку",
    "applications": [
      "грейпфрутовый сорбет",
      "желе",
      "начинка для макарон",
      "лимонадный гель"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "grapefruit_honey",
    "primary": "grapefruit",
    "primary_name": "Грейпфрут",
    "primary_category": "fruits",
    "secondary": "honey",
    "secondary_name": "Мёд",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Естественный сладкий баланс: цветочная тягучая сладость мёда мягко нивелирует терпкость грейпфрута",
    "applications": [
      "грейпфрутово-медовый курд",
      "конфи",
      "соус",
      "тарты"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "grapefruit_rosemary",
    "primary": "grapefruit",
    "primary_name": "Грейпфрут",
    "primary_category": "fruits",
    "secondary": "rosemary",
    "secondary_name": "Розмарин",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Средиземноморская травянистая свежесть: хвойно-смолистые ноты розмарина идеально гармонируют с грейпфрутом",
    "applications": [
      "гастрономический сорбет",
      "конфитюр",
      "пропитка",
      "начинка для макарон"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "grapefruit_tarragon",
    "primary": "grapefruit",
    "primary_name": "Грейпфрут",
    "primary_category": "fruits",
    "secondary": "tarragon",
    "secondary_name": "Эстрагон",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Анисово-пряный авторский профиль: свежий эстрагон раскрывает яркий цитрусовый характер грейпфрута",
    "applications": [
      "гастрономический гель",
      "сорбет",
      "кули",
      "тарты"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "rose_honey",
    "primary": "rose",
    "primary_name": "Роза",
    "primary_category": "floral",
    "secondary": "honey",
    "secondary_name": "Мёд",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Восточный сладостный канон: насыщенный янтарный мёд и чувственный аромат чайной розы",
    "applications": [
      "пахлава",
      "пропитка для бисквитов",
      "крем",
      "рахат-лукум"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "rose_lychee",
    "primary": "rose",
    "primary_name": "Роза",
    "primary_category": "floral",
    "secondary": "lychee",
    "secondary_name": "Личи",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Утонченный восточноазиатский профиль: сочный водянистый фруктовый вкус личи с переливчатым ванильно-розовым тоном",
    "applications": [
      "личи-розовый гель",
      "мусс",
      "сорбет",
      "начинка для макарон"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "rose_salt",
    "primary": "rose",
    "primary_name": "Роза",
    "primary_category": "floral",
    "secondary": "sea_salt",
    "secondary_name": "Морская соль",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Авангардный минеральный баланс: розовая соль усиливает цветочную ароматику и снимает приторность",
    "applications": [
      "гастрономический шоколад",
      "начинка для конфет",
      "соус",
      "карамель"
    ],
    "intensity": 4,
    "risk": 3
  },
  {
    "id": "rose_pistachio",
    "primary": "rose",
    "primary_name": "Роза",
    "primary_category": "floral",
    "secondary": "pistachio",
    "secondary_name": "Фисташка",
    "secondary_category": "nuts",
    "type": "exotic",
    "description": "Изысканный восточный контраст: бархатная ореховая паста фисташки подчёркнута свежим лепестковым тоном",
    "applications": [
      "фисташково-розовый тарт",
      "кнафе",
      "паста",
      "макарон"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "lavender_honey",
    "primary": "lavender",
    "primary_name": "Лаванда",
    "primary_category": "floral",
    "secondary": "honey",
    "secondary_name": "Мёд",
    "secondary_category": "creamy",
    "type": "classic",
    "description": "Традиционная альпийская гармония: густой лавандовый мёд с глубоким душистым ароматом",
    "applications": [
      "медово-лавандовая панакота",
      "пропитка",
      "крем",
      "кексы"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "lavender_peach",
    "primary": "lavender",
    "primary_name": "Лаванда",
    "primary_category": "floral",
    "secondary": "peach",
    "secondary_name": "Персик",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Летний прованский дуэт: сочная бархатистая мякоть персика с легким тонким лавандовым ароматом",
    "applications": [
      "персиково-лавандовое конфи",
      "тарты",
      "мусс",
      "десерты в стакане"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "coffee_hazelnut",
    "primary": "coffee",
    "primary_name": "Кофе",
    "primary_category": "creamy",
    "secondary": "hazelnut",
    "secondary_name": "Фундук",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Насыщенный бодрящий дуэт: глубина обжаренного кофейного зерна и благородная сливочность фундука",
    "applications": [
      "кофейно-ореховый пралине-мусс",
      "эклеры",
      "пропитка",
      "паста"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "coffee_walnut",
    "primary": "coffee",
    "primary_name": "Кофе",
    "primary_category": "creamy",
    "secondary": "walnut",
    "secondary_name": "Грецкий орех",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Терпкий глубокий тандем: характерная ореховая горчинка грецкого ореха подчёркивает эспрессо-профиль",
    "applications": [
      "кофейно-ореховый кекс",
      "пропитка для бисквитов",
      "крем",
      "начинка"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "coffee_whiskey",
    "primary": "coffee",
    "primary_name": "Кофе",
    "primary_category": "creamy",
    "secondary": "whiskey",
    "secondary_name": "Виски",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Канонический ирландский аккорд: древесно-солодовые тона выдержанного виски и крепкий кофе",
    "applications": [
      "айриш крим трюфели",
      "пропитка для торта",
      "мусс",
      "начинка для конфет"
    ],
    "intensity": 5,
    "risk": 2
  },
  {
    "id": "walnut_fig",
    "primary": "walnut",
    "primary_name": "Грецкий орех",
    "primary_category": "nuts",
    "secondary": "fig",
    "secondary_name": "Инжир",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Средиземноморский винный канон: медово-винная мякоть инжира и терпкий хрустящий грецкий орех",
    "applications": [
      "инжирно-ореховый пирог",
      "конфитюр для сыров",
      "тарты",
      "начинка"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "walnut_apple",
    "primary": "walnut",
    "primary_name": "Грецкий орех",
    "primary_category": "nuts",
    "secondary": "apple",
    "secondary_name": "Яблоко",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Уютная осенняя выпечка: сочные кисло-сладкие яблоки и обжаренный дроблёный грецкий орех",
    "applications": [
      "яблочный штрудель",
      "пироги",
      "компоте",
      "кексы"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "walnut_blue_cheese",
    "primary": "walnut",
    "primary_name": "Грецкий орех",
    "primary_category": "nuts",
    "secondary": "blue_cheese",
    "secondary_name": "Голубой сыр",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Аристократичный соленый гастро-аккорд: пикантный маслянистый голубой сыр и маслянистый грецкий орех",
    "applications": [
      "гастрономические конфеты",
      "тарты с дорблю",
      "начинка для макарон",
      "соус"
    ],
    "intensity": 5,
    "risk": 3
  },
  {
    "id": "banana_hazelnut_pair",
    "primary": "banana",
    "primary_name": "Банан",
    "primary_category": "fruits",
    "secondary": "hazelnut",
    "secondary_name": "Фундук",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Сытный десертный аккорд: обжаренная фундучная паста и сочная банановая мякоть",
    "applications": [
      "бананово-фундучный кекс",
      "вафли",
      "начинка для рулетов",
      "блины"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "hazelnut_pear",
    "primary": "hazelnut",
    "primary_name": "Фундук",
    "primary_category": "nuts",
    "secondary": "pear",
    "secondary_name": "Груша",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Элегантный осенний дуэт: сочная маслянистая мякоть спелой груши и ореховый тонус фундука",
    "applications": [
      "грушево-фундучный тарт",
      "конфи",
      "мусс",
      "пироги"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "elderflower_gooseberry",
    "primary": "elderflower",
    "primary_name": "Бузина",
    "primary_category": "floral",
    "secondary": "gooseberry",
    "secondary_name": "Крыжовник",
    "secondary_category": "berries",
    "type": "classic",
    "description": "Британская летняя классика: резкая кислинка крыжовника идеально гармонирует с мускатным ароматом цветков бузины",
    "applications": [
      "крыжовниково-бузиновый фулл",
      "конфитюр",
      "желе",
      "тарты"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "elderflower_apple",
    "primary": "elderflower",
    "primary_name": "Бузина",
    "primary_category": "floral",
    "secondary": "apple",
    "secondary_name": "Яблоко",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Легкий освежающий альянс: хрустящее зеленое яблоко с легким мускатно-цветочным шлейфом цветков бузины",
    "applications": [
      "яблочно-бузиновый гель",
      "сорбет",
      "зефир",
      "пропитка"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "elderflower_pear",
    "primary": "elderflower",
    "primary_name": "Бузина",
    "primary_category": "floral",
    "secondary": "pear",
    "secondary_name": "Груша",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Утонченный десертный аккорд: сладкая ароматическая мякоть груши и медово-мускатные цветки бузины",
    "applications": [
      "грушево-бузиновый мусс",
      "компоте",
      "тарты",
      "начинка для макарон"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "elderflower_grape",
    "primary": "elderflower",
    "primary_name": "Бузина",
    "primary_category": "floral",
    "secondary": "grape",
    "secondary_name": "Виноград",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Искрящийся мускатный союз: сочный светлый виноград подчёркнут цветочным профилем соцветий бузины",
    "applications": [
      "виноградно-бузиновый сорбет",
      "желе",
      "гастрономический гель",
      "десерты в стакане"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "jasmine_peach",
    "primary": "jasmine",
    "primary_name": "Жасмин",
    "primary_category": "floral",
    "secondary": "peach",
    "secondary_name": "Персик",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Восточноазиатский изысканный аккорд: сочный бархатный персик и благоухающие цветки жасмина",
    "applications": [
      "персиково-жасминовый мусс",
      "конфи",
      "панакота",
      "тарты"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "jasmine_apricot",
    "primary": "jasmine",
    "primary_name": "Жасмин",
    "primary_category": "floral",
    "secondary": "apricot",
    "secondary_name": "Абрикос",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Солнечный парфюмерный дуэт: медовый спелый абрикос с тончайшим жасминовым послевкусием",
    "applications": [
      "абрикосово-жасминовый конфитюр",
      "тарты",
      "зефир",
      "кули"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "almond_apricot",
    "primary": "almond",
    "primary_name": "Миндаль",
    "primary_category": "nuts",
    "secondary": "apricot",
    "secondary_name": "Абрикос",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Летний прованский профиль: бархатистая мякоть спелого абрикоса и оршатный ореховый тон миндального ореха",
    "applications": [
      "абрикосово-миндальный тарт",
      "галета",
      "кексы",
      "пропитка"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "almond_pistachio_pair",
    "primary": "almond",
    "primary_name": "Миндаль",
    "primary_category": "nuts",
    "secondary": "pistachio",
    "secondary_name": "Фисташка",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Двойной аристократичный ореховый союз: марципановый оттенок миндаля и маслянистый зеленый тон фисташки",
    "applications": [
      "фисташково-миндальная паста",
      "марципан",
      "начинки для макарон",
      "рулеты"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "almond_honey",
    "primary": "almond",
    "primary_name": "Миндаль",
    "primary_category": "nuts",
    "secondary": "honey",
    "secondary_name": "Мёд",
    "secondary_category": "creamy",
    "type": "exotic",
    "description": "Традиционная восточная нуга: пряный янтарный мёд и хрустящий обжаренный миндальный орех",
    "applications": [
      "туррон",
      "нуга",
      "патиссери",
      "пропитка"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "banana_passion_fruit",
    "primary": "banana",
    "primary_name": "Банан",
    "primary_category": "fruits",
    "secondary": "passion_fruit",
    "secondary_name": "Маракуйя",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Экзотический тропический баланс: яркая кислинка маракуйи сбалансирована мягкой сладостью банана",
    "applications": [
      "тропический конфитюр",
      "муссовые пирожные",
      "кули",
      "сорбет"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "banana_miso",
    "primary": "banana",
    "primary_name": "Банан",
    "primary_category": "fruits",
    "secondary": "miso",
    "secondary_name": "Мисо",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Авангардный солено-сладкий профиль: мисо-паста подчёркивает естественную карамелизацию карамелизованного банана",
    "applications": [
      "карамелизованные бананы с мисо",
      "гастро-мусс",
      "начинка для тартов",
      "соус"
    ],
    "intensity": 5,
    "risk": 3
  },
  {
    "id": "banana_salt",
    "primary": "banana",
    "primary_name": "Банан",
    "primary_category": "fruits",
    "secondary": "sea_salt",
    "secondary_name": "Морская соль",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Контрастный минеральный аккорд: морская соль оттеняет плотную приторную сладость запечённого банана",
    "applications": [
      "бананово-солёная карамель",
      "начинка",
      "чипсы",
      "мусс"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "passion_fruit_mango",
    "primary": "passion_fruit",
    "primary_name": "Маракуйя",
    "primary_category": "fruits",
    "secondary": "mango",
    "secondary_name": "Манго",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Эталонный экзотический дуэт: медовая сочность спелого манго и искрящаяся пронзительная кислинка маракуйи",
    "applications": [
      "конфитюр манго-маракуйя",
      "муссовые торты",
      "кули",
      "чизкейк"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "coconut_passion_fruit_pair",
    "primary": "coconut",
    "primary_name": "Кокос",
    "primary_category": "nuts",
    "secondary": "passion_fruit",
    "secondary_name": "Маракуйя",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Идеальный баланс плотности и кислинки: пронзительный сок маракуйи смягчается кокосовым молоком",
    "applications": [
      "кокосово-маракуйевый тарт",
      "кули",
      "чизкейк",
      "мусс"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "passion_fruit_basil",
    "primary": "passion_fruit",
    "primary_name": "Маракуйя",
    "primary_category": "fruits",
    "secondary": "basil",
    "secondary_name": "Базилик",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Свежий пряно-тропический авторский союз: анисово-пряный зеленый базилик подчеркивает цитрусово-кислотный тонус маракуйи",
    "applications": [
      "гастрономический сорбет",
      "конфи",
      "гель",
      "начинка для макарон"
    ],
    "intensity": 5,
    "risk": 3
  },
  {
    "id": "coconut_mango_pair",
    "primary": "coconut",
    "primary_name": "Кокос",
    "primary_category": "nuts",
    "secondary": "mango",
    "secondary_name": "Манго",
    "secondary_category": "fruits",
    "type": "classic",
    "description": "Шелковистый азиатский десертный профиль: сливочные кокосовые сливки и яркая мякоть спелого манго",
    "applications": [
      "манго-кокосовый мусс",
      "чизкейк",
      "сорбет",
      "трайфлы"
    ],
    "intensity": 3,
    "risk": 1
  },
  {
    "id": "mango_chili",
    "primary": "mango",
    "primary_name": "Манго",
    "primary_category": "fruits",
    "secondary": "chili",
    "secondary_name": "Чили",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Мексиканский острый феномен: жгучий острую ноту перца чили смягчает сочная фруктовая сладость спелого манго",
    "applications": [
      "манго-чили соус",
      "конфитюр",
      "сорбет",
      "начинка для конфет"
    ],
    "intensity": 5,
    "risk": 3
  },
  {
    "id": "violet_blackberry",
    "primary": "violet",
    "primary_name": "Фиалка",
    "primary_category": "floral",
    "secondary": "blackberry",
    "secondary_name": "Ежевика",
    "secondary_category": "berries",
    "type": "exotic",
    "description": "Глубокий бархатистый ягодный аккорд: пряно-сладкая лесная ежевика с утонченным фиалковым шлейфом",
    "applications": [
      "ежевично-фиалковый конфитюр",
      "мусс",
      "тарты",
      "начинки"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "pineapple_coconut",
    "primary": "pineapple",
    "primary_name": "Ананас",
    "primary_category": "fruits",
    "secondary": "coconut",
    "secondary_name": "Кокос",
    "secondary_category": "nuts",
    "type": "classic",
    "description": "Эталонный тропический дуэт Пина Колада: сочный сладкий ананас и шелковистое кокосовое молоко",
    "applications": [
      "пина колада мусс",
      "панакота",
      "конфитюр",
      "чизкейк"
    ],
    "intensity": 4,
    "risk": 1
  },
  {
    "id": "pineapple_rum",
    "primary": "pineapple",
    "primary_name": "Ананас",
    "primary_category": "fruits",
    "secondary": "rum",
    "secondary_name": "Ром",
    "secondary_category": "spices",
    "type": "classic",
    "description": "Пряный карибский аккорд: выдержанный карамельно-древесный ром и фламбированный сочный ананас",
    "applications": [
      "пропитка для ромовой бабы",
      "ананасы фламбе",
      "начинка для конфет",
      "мусс"
    ],
    "intensity": 5,
    "risk": 1
  },
  {
    "id": "pineapple_basil",
    "primary": "pineapple",
    "primary_name": "Ананас",
    "primary_category": "fruits",
    "secondary": "basil",
    "secondary_name": "Базилик",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Освежающий травянисто-тропический контраст: анисовые пряные ноты свежего базилика подчеркивают сочность ананаса",
    "applications": [
      "ананасово-базиликовый сорбет",
      "гастро-гель",
      "кули",
      "тарты"
    ],
    "intensity": 4,
    "risk": 2
  },
  {
    "id": "pineapple_chili",
    "primary": "pineapple",
    "primary_name": "Ананас",
    "primary_category": "fruits",
    "secondary": "chili",
    "secondary_name": "Чили",
    "secondary_category": "spices",
    "type": "exotic",
    "description": "Жгучий тропический взрыв: острота перца чили эффектно оттеняет медовую сладость запечённого ананаса",
    "applications": [
      "ананасово-чили соус",
      "конфитюр",
      "сорбет",
      "начинка для конфет"
    ],
    "intensity": 5,
    "risk": 3
  },
  {
    "id": "coconut_mint",
    "primary": "coconut",
    "primary_name": "Кокос",
    "primary_category": "nuts",
    "secondary": "mint",
    "secondary_name": "Мята",
    "secondary_category": "floral",
    "type": "exotic",
    "description": "Освежающий экзотический контраст: ментоловая прохлада мяты на фоне мягкой кокосовой сливочности",
    "applications": [
      "кокосово-мятный сорбет",
      "мусс",
      "начинка для макарон",
      "десерт в стакане"
    ],
    "intensity": 3,
    "risk": 2
  },
  {
    "id": "coconut_yuzu",
    "primary": "coconut",
    "primary_name": "Кокос",
    "primary_category": "nuts",
    "secondary": "yuzu",
    "secondary_name": "Юдзу",
    "secondary_category": "fruits",
    "type": "exotic",
    "description": "Аристократичный японский цитрусовый профиль: уникальный аромат юдзу гармонирует со сливочным кокосом",
    "applications": [
      "кокосово-юдзу курд",
      "муссовый торт",
      "начинка для макарон",
      "тарты"
    ],
    "intensity": 4,
    "risk": 2
  }
];
