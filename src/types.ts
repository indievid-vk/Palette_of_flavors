export type CombinationType = 'classic' | 'exotic';

export type CategoryId = 
  | 'chocolates'
  | 'fruits'
  | 'berries'
  | 'nuts'
  | 'creamy'
  | 'spices'
  | 'floral';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  color: string;
  accentHex: string;
  bgClass: string;
  borderClass: string;
  iconName: string;
  description: string;
}

export interface Combination {
  id: string;
  primary: string;
  primary_name: string;
  primary_category: CategoryId;
  secondary: string;
  secondary_name: string;
  secondary_category: CategoryId;
  type: CombinationType;
  description: string;
  applications: string[];
  intensity: number; // 1 to 5
  risk: number; // 1 to 5
  isCustom?: boolean;
}

export interface FilterOptions {
  searchQuery: string;
  selectedCategory: CategoryId | 'all';
  typeFilter: 'all' | 'classic' | 'exotic';
  minIntensity: number;
  maxIntensity: number;
  minRisk: number;
  maxRisk: number;
  applicationTag: string | null;
}

export interface TrioRecipe {
  title: string;
  flavors: [string, string, string];
  categories: [string, string, string];
  dessertType: string;
  concept: string;
  layers: {
    layer: string;
    flavorRole: string;
    description: string;
  }[];
  intensity: number;
  risk: number;
  chefNotes: string;
}
