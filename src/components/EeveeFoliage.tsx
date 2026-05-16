import type { ReactNode } from 'react';

import {
  FOLIAGE_LAYOUT,
  type FoliageLayer,
  type FoliageVisibility,
  GRASS_TUFT,
  LOW_GRASS,
  PINE_TREE,
  PINK_FLOWER,
  PIXEL_LEGEND,
  ROCK,
  ROUND_TREE,
  SCALE,
  type SpriteName,
  TALL_GRASS,
  TREE_SCALE,
  WARM_FLOWER,
} from '@/constants/foliage.constant';
import { cn } from '@/utils/cn';

const VISIBILITY_CLASSES: Record<FoliageVisibility, string> = {
  always: '',
  md: 'hidden md:block',
  lg: 'hidden lg:block',
};

type SpriteData = {
  width: number;
  height: number;
  viewBox: string;
  rects: ReactNode[];
};

function buildSprite(grid: string[], scale: number = SCALE): SpriteData {
  const rows = grid.length;
  const cols = grid[0].length;
  const rects: ReactNode[] = [];

  grid.forEach((row, y) => {
    [...row].forEach((char, x) => {
      const pixelType = PIXEL_LEGEND[char as keyof typeof PIXEL_LEGEND];
      if (!pixelType) return;
      rects.push(
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="1"
          height="1"
          data-pixel={pixelType}
        />,
      );
    });
  });

  return {
    width: cols * scale,
    height: rows * scale,
    viewBox: `0 0 ${cols} ${rows}`,
    rects,
  };
}

const SPRITES: Record<SpriteName, SpriteData> = {
  pine: buildSprite(PINE_TREE, TREE_SCALE),
  round: buildSprite(ROUND_TREE, TREE_SCALE),
  grass: buildSprite(GRASS_TUFT),
  'low-grass': buildSprite(LOW_GRASS),
  'tall-grass': buildSprite(TALL_GRASS),
  'pink-flower': buildSprite(PINK_FLOWER),
  'warm-flower': buildSprite(WARM_FLOWER),
  rock: buildSprite(ROCK),
};

type SpriteProps = {
  className?: string;
  sprite: SpriteData;
};

function Sprite({ className, sprite }: SpriteProps) {
  return (
    <svg
      width={sprite.width}
      height={sprite.height}
      viewBox={sprite.viewBox}
      shapeRendering="crispEdges"
      role="presentation"
      className={className}
    >
      {sprite.rects}
    </svg>
  );
}

type EeveeFoliageProps = {
  layer: FoliageLayer;
};

export function EeveeFoliage({ layer }: EeveeFoliageProps) {
  const sprites = FOLIAGE_LAYOUT.filter((item) => item.layer === layer);

  return (
    <div className={cn('eevee-foliage pointer-events-none absolute inset-0')}>
      {sprites.map(
        ({ sprite, positionClass, visibility = 'always' }, index) => (
          <Sprite
            key={`${layer}-${index}`}
            sprite={SPRITES[sprite]}
            className={cn(
              'absolute bottom-0 -translate-x-1/2',
              positionClass,
              VISIBILITY_CLASSES[visibility],
            )}
          />
        ),
      )}
    </div>
  );
}
