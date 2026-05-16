import type { CSSProperties, ReactNode } from 'react';

import {
  FOLIAGE_LAYOUT,
  GRASS_TUFT,
  PINE_TREE,
  PINK_FLOWER,
  PIXEL_LEGEND,
  ROUND_TREE,
  SCALE,
  TREE_SCALE,
  WARM_FLOWER,
  type FoliageVisibility,
  type SpriteName,
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
  'pink-flower': buildSprite(PINK_FLOWER),
  'warm-flower': buildSprite(WARM_FLOWER),
};

type SpriteProps = {
  className?: string;
  style?: CSSProperties;
  sprite: SpriteData;
};

function Sprite({ className, style, sprite }: SpriteProps) {
  return (
    <svg
      width={sprite.width}
      height={sprite.height}
      viewBox={sprite.viewBox}
      shapeRendering="crispEdges"
      role="presentation"
      className={className}
      style={style}
    >
      {sprite.rects}
    </svg>
  );
}

export function EeveeFoliage() {
  return (
    <div
      aria-hidden="true"
      className="eevee-foliage pointer-events-none absolute inset-0"
    >
      {FOLIAGE_LAYOUT.map(
        ({ sprite, position, visibility = 'always' }, index) => (
          <Sprite
            key={index}
            sprite={SPRITES[sprite]}
            className={cn(
              'absolute bottom-0 -translate-x-1/2',
              VISIBILITY_CLASSES[visibility],
            )}
            style={{ left: `${position}%` }}
          />
        ),
      )}
    </div>
  );
}
