export type Category = 'START' | 'POPULAR' | 'NEW' | 'SLOTS' | 'JACKPOTS' | 'LIVE' | 'TABLE' | 'CASUAL' | 'CRASH' | 'OTHERS' | 'FAVORITES';

export interface Provider {
  id: string;
  name: string;
  logo?: string;
}

export interface Game {
  id: string;
  title: string;
  provider: string;
  category: Category[];
  image: string;
  isFavorite?: boolean;
  isHot?: boolean;
}

export interface GameFilters {
  search: string;
  category: Category;
  provider: string;
}
