import { useMemo, useState } from 'react';

import { DotfilesLegend, DotfilesTile } from '@/components';
import { dotfiles } from '@/constants';
import {
  flattenLeaves,
  getGroupOrder,
  squarifyTreemap,
  type TreemapTile,
} from '@/utils';

const CANVAS_W = 16;
const CANVAS_H = 10;

const TILE_COLORS = [
  'bg-accent',
  'bg-accent-2',
  'bg-accent-3',
  'bg-accent-4',
  'bg-accent-5',
  'bg-accent-6',
] as const;
const TILE_TEXT_COLORS = [
  'text-foreground',
  'text-accent-foreground',
  'text-accent-foreground',
  'text-accent-foreground',
  'text-accent-foreground',
  'text-accent-foreground',
] as const;

function getTileArea(tile: TreemapTile) {
  return tile.width * tile.height;
}

function getLargestTilePath(tiles: TreemapTile[]) {
  if (tiles.length === 0) {
    return null;
  }

  const largestTile = tiles.reduce((currentLargest, tile) => {
    const tileArea = getTileArea(tile);
    const currentLargestArea = getTileArea(currentLargest);
    const isLargerTile = tileArea > currentLargestArea;

    return isLargerTile ? tile : currentLargest;
  });

  return largestTile.leaf.path;
}

export function Dotfiles() {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const tiles = useMemo(() => {
    const leaves = flattenLeaves(dotfiles);
    return squarifyTreemap(leaves, CANVAS_W, CANVAS_H);
  }, []);

  const groupOrder = useMemo(
    () => getGroupOrder(tiles.map((t) => t.leaf)),
    [tiles],
  );

  const largestTilePath = useMemo(() => getLargestTilePath(tiles), [tiles]);

  return (
    <div className="flex w-full flex-col gap-5">
      <h3 className="text-foreground font-mono text-sm font-medium tracking-wide sm:text-base">
        dotfiles
      </h3>
      <DotfilesLegend
        colorClasses={TILE_COLORS}
        groupOrder={groupOrder}
        onGroupHoverChange={setHoveredGroup}
      />
      <div className="border-border/60 bg-card/30 relative aspect-[16/10] w-full overflow-hidden rounded-lg border">
        {tiles.map((tile, index) => {
          const groupIndex = groupOrder.indexOf(tile.leaf.group);
          const slot = groupIndex % TILE_COLORS.length;
          const hasHoveredGroup = hoveredGroup !== null;
          const isHighlighted = hoveredGroup === tile.leaf.group;
          const isDimmed = hasHoveredGroup && !isHighlighted;
          const hasPokemonSprite = tile.leaf.path === largestTilePath;
          return (
            <DotfilesTile
              key={tile.leaf.path}
              tile={tile}
              colorClass={TILE_COLORS[slot]}
              textClass={TILE_TEXT_COLORS[slot]}
              canvasWidth={CANVAS_W}
              canvasHeight={CANVAS_H}
              delayMs={index * 18}
              isHighlighted={isHighlighted}
              isDimmed={isDimmed}
              hasPokemonSprite={hasPokemonSprite}
            />
          );
        })}
      </div>
    </div>
  );
}
