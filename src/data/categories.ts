import { CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'chocolates',
    name: 'Шоколадные',
    color: 'from-amber-900 to-yellow-950',
    accentHex: '#4A2E2B',
    bgClass: 'bg-[#4A2E2B]/10 text-[#4A2E2B]',
    borderClass: 'border-[#4A2E2B]/30',
    iconName: 'Cookie',
    description: 'Горький, молочный, белый и рубиновый шоколад, какао-нибсы'
  },
  {
    id: 'fruits',
    name: 'Фруктовые',
    color: 'from-amber-500 to-orange-600',
    accentHex: '#D97706',
    bgClass: 'bg-amber-500/10 text-amber-800',
    borderClass: 'border-amber-500/30',
    iconName: 'Apple',
    description: 'Цитрусовые, косточковые, семечковые и тропические фрукты'
  },
  {
    id: 'berries',
    name: 'Ягодные',
    color: 'from-rose-600 to-red-700',
    accentHex: '#E11D48',
    bgClass: 'bg-rose-500/10 text-rose-800',
    borderClass: 'border-rose-500/30',
    iconName: 'Cherry',
    description: 'Малина, клубника, черника, облепиха, смородина, клюква'
  },
  {
    id: 'nuts',
    name: 'Ореховые',
    color: 'from-amber-700 to-amber-900',
    accentHex: '#B45309',
    bgClass: 'bg-amber-700/10 text-amber-900',
    borderClass: 'border-amber-700/30',
    iconName: 'Nut',
    description: 'Миндаль, фундук, фисташка, пекан, кунжут, арахис'
  },
  {
    id: 'creamy',
    name: 'Сливочные',
    color: 'from-yellow-500 to-amber-600',
    accentHex: '#CA8A04',
    bgClass: 'bg-yellow-500/10 text-yellow-800',
    borderClass: 'border-yellow-500/30',
    iconName: 'Milk',
    description: 'Сливки, карамель, мед, маскарпоне, сливочное масло, сыры'
  },
  {
    id: 'spices',
    name: 'Пряные',
    color: 'from-orange-700 to-red-900',
    accentHex: '#C2410C',
    bgClass: 'bg-orange-700/10 text-orange-900',
    borderClass: 'border-orange-700/30',
    iconName: 'Flame',
    description: 'Корица, ваниль, кофе, чили, перец, имбирь, гвоздика'
  },
  {
    id: 'floral',
    name: 'Цветочные',
    color: 'from-teal-600 to-emerald-800',
    accentHex: '#0D9488',
    bgClass: 'bg-teal-600/10 text-teal-800',
    borderClass: 'border-teal-600/30',
    iconName: 'Flower2',
    description: 'Лаванда, жасмин, роза, матча, мята, розмарин, базилик'
  }
];
