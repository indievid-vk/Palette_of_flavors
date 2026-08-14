import Dexie, { Table } from 'dexie';
import { Combination } from '../types';
import { SEED_COMBINATIONS } from '../data/seedData';

export interface SavedFavorite {
  id?: number;
  pairingId: string;
  savedAt: string;
  notes?: string;
}

export class FlavorPaletteDB extends Dexie {
  combinations!: Table<Combination, string>;
  favorites!: Table<SavedFavorite, number>;

  constructor() {
    super('FlavorPaletteDB');
    this.version(1).stores({
      combinations: 'id, primary, secondary, primary_category, secondary_category, type, intensity, risk',
      favorites: '++id, pairingId, savedAt'
    });
  }
}

export const db = new FlavorPaletteDB();

// Initialize DB with seed combinations (bulkPut to ensure newly added seed items sync seamlessly)
export async function initDatabase() {
  try {
    await db.combinations.bulkPut(SEED_COMBINATIONS);
  } catch (error) {
    console.error('Failed to initialize FlavorPaletteDB:', error);
  }
}
