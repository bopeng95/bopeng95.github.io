import { useMemo, useState } from 'react';

import {
  DotfilesLegend,
  DotfilesTile,
  PokemonSprite,
  TypewriterText,
} from '@/components';
import { Separator } from '@/components/ui/separator';
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
    <section className="mt-28 flex flex-col gap-10 sm:mt-40 sm:gap-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <div className="flex items-end gap-4">
          <div className="flex flex-col gap-3">
            <TypewriterText
              text="dotfiles"
              className="text-muted-foreground font-mono text-xs tracking-[0.22em]"
            />
            <Separator className="bg-accent w-12" />
          </div>
          <PokemonSprite name="klinklang" className="h-10 sm:h-12" />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
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
    </section>
  );
}
