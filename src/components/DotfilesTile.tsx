import type { CSSProperties } from 'react';

import { DOTFILES_REPO } from '@/constants';
import { cn, formatBytes, type TreemapTile } from '@/utils';

const TEXT_VISIBLE_WIDTH = 1.4;
const TEXT_VISIBLE_HEIGHT = 0.55;
const META_VISIBLE_WIDTH = 2.2;
const META_VISIBLE_HEIGHT = 1.1;

type DotfilesTileProps = {
  tile: TreemapTile;
  colorClass: string;
  textClass: string;
  canvasWidth: number;
  canvasHeight: number;
  delayMs: number;
  isHighlighted: boolean;
  isDimmed: boolean;
};

export function DotfilesTile({
  tile,
  colorClass,
  textClass,
  canvasWidth,
  canvasHeight,
  delayMs,
  isHighlighted,
  isDimmed,
}: DotfilesTileProps) {
  const { leaf, x, y, width, height } = tile;
  const leftPct = `${((x / canvasWidth) * 100).toFixed(3)}%`;
  const topPct = `${((y / canvasHeight) * 100).toFixed(3)}%`;
  const widthPct = `${((width / canvasWidth) * 100).toFixed(3)}%`;
  const heightPct = `${((height / canvasHeight) * 100).toFixed(3)}%`;

  const showName = width >= TEXT_VISIBLE_WIDTH && height >= TEXT_VISIBLE_HEIGHT;
  const showMeta = width >= META_VISIBLE_WIDTH && height >= META_VISIBLE_HEIGHT;

  const style: CSSProperties = {
    left: leftPct,
    top: topPct,
    width: widthPct,
    height: heightPct,
    animationDelay: `${delayMs}ms`,
  };

  return (
    <a
      href={`${DOTFILES_REPO}/blob/main/${leaf.path}`}
      target="_blank"
      rel="noopener noreferrer"
      title={`${leaf.name} · ${formatBytes(leaf.size)} · ${leaf.group}`}
      style={style}
      className={cn(
        'border-background/60 hover:z-10 hover:-translate-y-px hover:shadow-xl hover:brightness-110 hover:ring-2 hover:ring-foreground/70 hover:ring-inset motion-safe:animate-[fade-up_320ms_ease-out_both] absolute overflow-hidden rounded-md border transition-[filter,box-shadow,transform,opacity] duration-200',
        colorClass,
        textClass,
        isHighlighted &&
          'z-10 -translate-y-px shadow-xl brightness-110 ring-2 ring-foreground/70 ring-inset',
        isDimmed && 'opacity-15 saturate-0',
      )}
    >
      {showName && (
        <div className="flex h-full flex-col justify-between p-2 leading-tight">
          <div className="truncate font-mono text-[10px] sm:text-[11px]">
            {leaf.name}
          </div>
          {showMeta && (
            <div className="font-mono text-[9px] opacity-70 sm:text-[10px]">
              {formatBytes(leaf.size)}
            </div>
          )}
        </div>
      )}
    </a>
  );
}
