export const SCALE = 4;
export const TREE_SCALE = 7;

export const PIXEL_LEGEND = {
  G: 'tree',
  S: 'tree-shadow',
  T: 'trunk',
  g: 'grass',
  s: 'grass-shadow',
  F: 'petal-pink',
  O: 'petal-warm',
  Y: 'flower-center',
  R: 'rock',
  r: 'rock-shadow',
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

export const LOW_GRASS = ['g.g.g', 'ggggg', 'sgsgs'];

export const TALL_GRASS = ['..g..', '.ggg.', 'ggggg', 'gsgsg'];

export const PINK_FLOWER = ['.F.F.', 'FFYFF', '.FFF.', '..g..', '..g..'];

export const WARM_FLOWER = ['.O.O.', 'OOYOO', '.OOO.', '..g..', '..g..'];

export const ROCK = ['.RRR.', 'RRRRR', 'RrRrR'];

export type SpriteName =
  | 'pine'
  | 'round'
  | 'grass'
  | 'low-grass'
  | 'tall-grass'
  | 'pink-flower'
  | 'warm-flower'
  | 'rock';

export type FoliageVisibility = 'always' | 'md' | 'lg';

export type FoliageLayer = 'back' | 'mid' | 'front';

export type FoliageLayoutItem = {
  layer: FoliageLayer;
  sprite: SpriteName;
  positionClass: string;
  visibility?: FoliageVisibility;
};

export const FOLIAGE_LAYOUT: FoliageLayoutItem[] = [
  { layer: 'back', sprite: 'pine', positionClass: 'eevee-pos-3' },
  {
    layer: 'back',
    sprite: 'round',
    positionClass: 'eevee-pos-10',
    visibility: 'md',
  },
  { layer: 'back', sprite: 'pine', positionClass: 'eevee-pos-29' },
  {
    layer: 'back',
    sprite: 'round',
    positionClass: 'eevee-pos-55',
    visibility: 'lg',
  },
  { layer: 'back', sprite: 'pine', positionClass: 'eevee-pos-72' },
  {
    layer: 'back',
    sprite: 'round',
    positionClass: 'eevee-pos-93',
    visibility: 'md',
  },

  { layer: 'mid', sprite: 'low-grass', positionClass: 'eevee-pos-7' },
  { layer: 'mid', sprite: 'rock', positionClass: 'eevee-pos-13' },
  {
    layer: 'mid',
    sprite: 'pink-flower',
    positionClass: 'eevee-pos-18',
    visibility: 'md',
  },
  { layer: 'mid', sprite: 'warm-flower', positionClass: 'eevee-pos-24' },
  { layer: 'mid', sprite: 'tall-grass', positionClass: 'eevee-pos-37' },
  {
    layer: 'mid',
    sprite: 'pink-flower',
    positionClass: 'eevee-pos-45',
    visibility: 'lg',
  },
  { layer: 'mid', sprite: 'rock', positionClass: 'eevee-pos-61' },
  { layer: 'mid', sprite: 'warm-flower', positionClass: 'eevee-pos-67' },
  {
    layer: 'mid',
    sprite: 'tall-grass',
    positionClass: 'eevee-pos-84',
    visibility: 'md',
  },
  {
    layer: 'mid',
    sprite: 'pink-flower',
    positionClass: 'eevee-pos-90',
    visibility: 'lg',
  },

  { layer: 'front', sprite: 'grass', positionClass: 'eevee-pos-2' },
  { layer: 'front', sprite: 'low-grass', positionClass: 'eevee-pos-16' },
  { layer: 'front', sprite: 'grass', positionClass: 'eevee-pos-27' },
  {
    layer: 'front',
    sprite: 'tall-grass',
    positionClass: 'eevee-pos-34',
    visibility: 'md',
  },
  { layer: 'front', sprite: 'low-grass', positionClass: 'eevee-pos-48' },
  {
    layer: 'front',
    sprite: 'grass',
    positionClass: 'eevee-pos-59',
    visibility: 'lg',
  },
  { layer: 'front', sprite: 'grass', positionClass: 'eevee-pos-75' },
  {
    layer: 'front',
    sprite: 'low-grass',
    positionClass: 'eevee-pos-88',
    visibility: 'md',
  },
  { layer: 'front', sprite: 'grass', positionClass: 'eevee-pos-98' },
];
