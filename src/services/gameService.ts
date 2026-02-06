import type { Game, Category } from '../types';

const BASE_URL = import.meta.env.VITE_GAME_ASSETS_BASE_URL
// Alternative approach with more structured types
export type ProviderType = 'JILI' | 'SW' | 'PP' | 'PGSOFT' | 'HSW' | 'WF' | 'XG' | 'OAKS' | 'ASPECT' | 'OTHER';

export interface GameImage {
  filename: string;
  gameId: string;
}

const GAME_IMAGES: Record<ProviderType, GameImage[]> = {
  JILI: [
   
  ],
  SW: [
    { filename: 'sw-psi-965.webp', gameId: 'sw-1' },
    { filename: 'sw_sulide.webp', gameId: 'sw-2' },
    { filename: 'sw_bibume.webp', gameId: 'sw-3' }
  ],
  PP: [
    { filename: 'pp_vs20olympxmas.webp', gameId: 'pp-1' },
    { filename: 'vs20cm.webp', gameId: 'pp-2' }
  ],
  PGSOFT: [
    { filename: 'pgsoft_68.webp', gameId: 'pg-1' },
    { filename: 'pgsoft_126.webp', gameId: 'pg-3' }
  ],
  HSW: [
    { filename: 'hsw_bouncybombs96.webp', gameId: 'hsw-1' },
    { filename: 'fruitduel96.webp', gameId: 'hsw-2' }
  ],
  WF: [
    { filename: 'gtwf_BattleDwarf2.webp', gameId: 'wf-1' }
  ],
  XG: [
    { filename: 'xg_TheChoiceisYoursMegaways94.webp', gameId: 'xg-1' },
    { filename: 'xg_SuperRainbowMegaways94.webp', gameId: 'xg-2' },
    { filename: 'xg_SolarNova94.webp', gameId: 'xg-3' },
    { filename: 'xg_SantasBigBashMegaways94.webp', gameId: 'xg-4' },
    { filename: 'xg_RocktheReelsMegaways95.webp', gameId: 'xg-5' },
    { filename: 'xg_RobbinRobin.webp', gameId: 'xg-6' },
    { filename: 'xg_PirateKingdomMegaways.webp', gameId: 'xg-7' },
    { filename: 'xg_QueenofEmbers.webp', gameId: 'xg-8' },
    { filename: 'xg_MegawaysJack.webp', gameId: 'xg-9' },
    { filename: 'xg_RainbowWildsMegaways.webp', gameId: 'xg-10' },
    { filename: 'xg_BrandedMegaways.webp', gameId: 'xg-11' },
    { filename: 'xg_IncaIdols94.webp', gameId: 'xg-12' },
    { filename: 'xg_GodsOfAsgardMegaways94.webp', gameId: 'xg-13' },
    { filename: 'xg_CherryBlastScratch.webp', gameId: 'xg-14' },
    { filename: 'xg_BullDozer94.webp', gameId: 'xg-15' },
    { filename: 'xg_BarbarianGold.webp', gameId: 'xg-16' },
    { filename: 'xg_BattleMaidensCleopatra.webp', gameId: 'xg-17' },
    { filename: 'xg_AztecWildsMegaways94.webp', gameId: 'xg-18' },
    { filename: 'xg_BoomTime94.webp', gameId: 'xg-19' },
    { filename: 'xg_BookOfBaal94.webp', gameId: 'xg-20' },
    { filename: 'xg_1MillionMegawaysBC.webp', gameId: 'xg-21' },
    { filename: 'xg_RumandRaiders94.webp', gameId: 'xg-22' },
    { filename: 'xg_VirtualFootballPro.webp', gameId: 'xg-23' },
    { filename: 'xg_MegabloxPyramids.webp', gameId: 'xg-24' },
    { filename: 'xg_Maverick93.webp', gameId: 'xg-25' },
    { filename: 'xg_GingerbreadJoy.webp', gameId: 'xg-26' },
    { filename: 'xg_Fruity3X3.webp', gameId: 'xg-27' },
    { filename: 'xg_Football3X3.webp', gameId: 'xg-28' },
    { filename: 'xg_FireFlyKeno.webp', gameId: 'xg-29' },
    { filename: 'xg_Fieldsofclover94.webp', gameId: 'xg-30' },
    { filename: 'xg_FeedingFury94.webp', gameId: 'xg-31' },
    { filename: 'xg_EagleStrike94.webp', gameId: 'xg-32' },
    { filename: 'xg_DwarvenGemsMegaways95.webp', gameId: 'xg-33' },
    { filename: 'xg_Disco777.webp', gameId: 'xg-34' },
    { filename: 'xg_CrownofAvalon.webp', gameId: 'xg-35' }
  ],
  OAKS: [
    { filename: 'oaks_dancing_joker.webp', gameId: 'oaks-1' },
    { filename: 'oaks_coin_express.webp', gameId: 'oaks-2' },
    { filename: 'oaks_3_clover_pots_extra.webp', gameId: 'oaks-3' },
    { filename: 'oaks_3_coin_volcanoes.webp', gameId: 'oaks-4' },
    { filename: 'oaks_3_pots_of_egypt.webp', gameId: 'oaks-5' },
    { filename: 'oaks_fortune_globe.webp', gameId: 'oaks-6' },
    { filename: 'oaks_coinvolcano.webp', gameId: 'oaks-7' },
    { filename: 'oaks_hot_fire_fruits.webp', gameId: 'oaks-8' },
    { filename: 'oaks_3hotchillies.webp', gameId: 'oaks-9' },
    { filename: 'oaks_ladyfortune.webp', gameId: 'oaks-10' },
    { filename: 'oaks_stickypiggy.webp', gameId: 'oaks-11' },
    { filename: 'oaks_buddhamegaways.webp', gameId: 'oaks-12' },
    { filename: 'oaks_bookofsunchoice.webp', gameId: 'oaks-13' },
    { filename: 'oaks_boomboomgold.webp', gameId: 'oaks-14' },
    { filename: 'oaks_greenchilli2.webp', gameId: 'oaks-15' }
  ],
  ASPECT: [
    { filename: 'aspect_GoldenWeek.webp', gameId: 'aspect-1' }
  ],
  OTHER: []
};

// Get all webp files using spread operator
const ALL_WEBP_FILES = [
  ...GAME_IMAGES.JILI.map(img => img.filename),
  ...GAME_IMAGES.SW.map(img => img.filename),
  ...GAME_IMAGES.PP.map(img => img.filename),
  ...GAME_IMAGES.PGSOFT.map(img => img.filename),
  ...GAME_IMAGES.HSW.map(img => img.filename),
  ...GAME_IMAGES.WF.map(img => img.filename),
  ...GAME_IMAGES.XG.map(img => img.filename),
  ...GAME_IMAGES.OAKS.map(img => img.filename),
  ...GAME_IMAGES.ASPECT.map(img => img.filename)
];

const GAMES_DATA: Game[] = [
  // Requirement Sample: Bad Wolf
  {
    id: 'sample-1',
    title: 'Bad Wolf',
    provider: 'OTHER',
    category: ['START', 'NEW', 'POPULAR'] as Category[],
    image: `${BASE_URL}/JILI/jili_fortunegems2.webp`, // Reusing image as per note: "you can use the same images on each game"
    isHot: true
  },
  // JILI
  ...GAME_IMAGES.JILI.map((img, i) => ({
    id: img.gameId,
    title: i === 0 ? 'Fortune Gems 2' : 'Super Ace',
    provider: 'JILI',
    category: (i === 0 ? ['SLOTS', 'POPULAR', 'START'] : ['SLOTS', 'POPULAR', 'JACKPOTS', 'START']) as Category[],
    image: `${BASE_URL}/JILI/${img.filename}`,
    isHot: true,
  })),
  // SW
  ...GAME_IMAGES.SW.map((img, i) => ({
    id: img.gameId,
    title: i === 0 ? 'Power Shot' : i === 1 ? 'Sulide' : 'Bit Bume',
    provider: 'SW',
    category: (i === 1 ? ['CRASH', 'NEW', 'START'] : ['SLOTS', 'START']) as Category[],
    image: `${BASE_URL}/SW/${img.filename}`,
    isHot: i < 2,
  })),
  // PP
  ...GAME_IMAGES.PP.map((img, i) => ({
    id: img.gameId,
    title: i === 0 ? 'Gates of Olympus Xmas' : i === 1 ? 'Live Roulette' : 'Candy Moon',
    provider: 'Pragmatic Play',
    category: (i === 1 ? ['LIVE', 'TABLE', 'START'] : ['SLOTS', 'NEW', 'POPULAR', 'START']) as Category[],
    image: `${BASE_URL}/PP/${img.filename}`,
    isHot: i === 0,
  })),
  // PGSOFT
  ...GAME_IMAGES.PGSOFT.map((img, i) => ({
    id: img.gameId,
    title: i === 0 ? 'PG Game 68' : i === 1 ? 'Classic Blackjack' : 'Mahjong Ways',
    provider: 'PGSOFT',
    category: (i === 1 ? ['TABLE', 'START'] : ['SLOTS', 'START', 'POPULAR']) as Category[],
    image: `${BASE_URL}/PGSOFT/${img.filename}`,
  })),
  // HSW
  ...GAME_IMAGES.HSW.map((img, i) => ({
    id: img.gameId,
    title: i === 0 ? 'Bouncy Bombs' : 'Fruit Duel',
    provider: 'HSW',
    category: (i === 0 ? ['CASUAL', 'NEW', 'START'] : ['SLOTS', 'START']) as Category[],
    image: `${BASE_URL}/HSW/${img.filename}`,
  })),
  // WF
  ...GAME_IMAGES.WF.map((img) => ({
    id: img.gameId,
    title: 'Battle Dwarf 2',
    provider: 'WF',
    category: ['SLOTS', 'START', 'NEW'] as Category[],
    image: `${BASE_URL}/WF/${img.filename}`,
  })),
  // XG - Mapping a significant portion of the assets
  ...GAME_IMAGES.XG.map((img) => {
    let categories: Category[] = ['SLOTS', 'START'];
    if (img.filename.toLowerCase().includes('megaways')) categories.push('JACKPOTS');
    if (img.filename.toLowerCase().includes('football')) categories = ['CASUAL', 'START', 'OTHERS'];
    if (img.filename.toLowerCase().includes('keno')) categories = ['CASUAL', 'START', 'OTHERS'];
    if (img.filename.toLowerCase().includes('scratch')) categories = ['CASUAL', 'START', 'OTHERS'];
    
    // Extract title from filename: xg_Title94.webp -> Title
    const title = img.filename
      .replace(/^xg_/, '')
      .replace(/\d+\.webp$/, '')
      .replace(/\.webp$/, '')
      .replace(/([A-Z])/g, ' $1')
      .trim();

    return {
      id: img.gameId,
      title: title || 'XG Game',
      provider: 'XG',
      category: categories,
      image: `${BASE_URL}/XG/${img.filename}`,
    };
  }),
  // OAKS
  ...GAME_IMAGES.OAKS.map((img) => {
    let categories: Category[] = ['SLOTS', 'START'];
    if (img.filename.toLowerCase().includes('3_')) categories.push('JACKPOTS');
    if (img.filename.toLowerCase().includes('megaways')) categories.push('JACKPOTS');
    
    const title = img.filename
      .replace(/^oaks_/, '')
      .replace(/\.webp$/, '')
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      id: img.gameId,
      title: title || 'Oaks Game',
      provider: 'OAKS',
      category: categories,
      image: `${BASE_URL}/OAKS/${img.filename}`,
    };
  }),
  // ASPECT
  ...GAME_IMAGES.ASPECT.map((img) => ({
    id: img.gameId,
    title: 'Golden Week',
    provider: 'ASPECT',
    category: ['SLOTS', 'START', 'NEW'] as Category[],
    image: `${BASE_URL}/ASPECT/${img.filename}`,
  })),
];

export const fetchGames = (): Promise<Game[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GAMES_DATA);
    }, 3000);
  });
};

export const fetchProviders = (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const providers = Array.from(new Set(GAMES_DATA.map((g) => g.provider)));
      resolve(providers);
    }, 500);
  });
};

export const getAllImageUrls = (): string[] => {
  return Object.entries(GAME_IMAGES).flatMap(([provider, games]) =>
    games.map(img => `${BASE_URL}/${provider}/${img.filename}`)
  );
};

export const getImageUrlsByProvider = (provider: ProviderType): string[] => {
  return (GAME_IMAGES[provider] || []).map(img => `${BASE_URL}/${provider}/${img.filename}`);
};

export { ALL_WEBP_FILES };
