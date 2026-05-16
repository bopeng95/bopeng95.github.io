export const SCALE = 3;
export const TREE_SCALE = 8;

export const PIXEL_LEGEND = {
  G: 'tree',
  S: 'tree-shadow',
  T: 'trunk',
  g: 'grass',
  s: 'grass-shadow',
  F: 'petal-pink',
  O: 'petal-warm',
  Y: 'flower-center',
} as const;

export const PINE_TREE = [
  '....GG....',
  '...GGGG...',
  '...GSGG...',
  '..GGGGGG..',
  '..GSSGGG..',
  '.GGGGGGGG.',
  '.GSSSGGGG.',
  'GGGGGGGGGG',
  'GSSSSGGGGG',
  'GSSSSGGGGG',
  '.GGGGGGGG.',
  '.GSSGGGGG.',
  '....TT....',
  '....TT....',
];

export const ROUND_TREE = [
  '...GGGG...',
  '..GGGGGG..',
  '.GSGGGGGG.',
  'GGSGGGGGGG',
  'GSSGGGGGGG',
  'GSSGGGGGGG',
  'GGSGGGGGGG',
  '.GSGGGGGG.',
  '..GGGGGG..',
  '...GGGG...',
  '....TT....',
  '....TT....',
  '....TT....',
];

export const GRASS_TUFT = ['.g.g.g.', 'ggggggg', 'gsgggsg'];

export const PINK_FLOWER = ['.F.F.', 'FFYFF', '.FFF.', '..g..', '..g..'];

export const WARM_FLOWER = ['.O.O.', 'OOYOO', '.OOO.', '..g..', '..g..'];

export type SpriteName =
  | 'pine'
  | 'round'
  | 'grass'
  | 'pink-flower'
  | 'warm-flower';

export type FoliageVisibility = 'always' | 'md' | 'lg';

export type FoliageLayoutItem = {
  sprite: SpriteName;
  position: number;
  visibility?: FoliageVisibility;
};

export const FOLIAGE_LAYOUT: FoliageLayoutItem[] = [
  { sprite: 'pine', position: 3 },
  { sprite: 'pine', position: 7, visibility: 'md' },
  { sprite: 'grass', position: 12 },
  { sprite: 'pink-flower', position: 15, visibility: 'lg' },
  { sprite: 'pink-flower', position: 18, visibility: 'md' },
  { sprite: 'pink-flower', position: 21 },
  { sprite: 'grass', position: 26, visibility: 'md' },
  { sprite: 'round', position: 30 },
  { sprite: 'warm-flower', position: 34, visibility: 'lg' },
  { sprite: 'warm-flower', position: 37, visibility: 'md' },
  { sprite: 'grass', position: 42 },
  { sprite: 'grass', position: 46, visibility: 'lg' },
  { sprite: 'grass', position: 49, visibility: 'md' },
  { sprite: 'pine', position: 54 },
  { sprite: 'round', position: 58, visibility: 'lg' },
  { sprite: 'pink-flower', position: 62, visibility: 'lg' },
  { sprite: 'warm-flower', position: 66 },
  { sprite: 'pine', position: 71, visibility: 'md' },
  { sprite: 'pine', position: 74, visibility: 'lg' },
  { sprite: 'grass', position: 79 },
  { sprite: 'warm-flower', position: 83, visibility: 'md' },
  { sprite: 'pink-flower', position: 87, visibility: 'md' },
  { sprite: 'warm-flower', position: 91, visibility: 'lg' },
  { sprite: 'grass', position: 95 },
];
