import type { DotfileNode } from '@/types';

export type TreemapLeaf = {
  name: string;
  path: string;
  size: number;
  group: string;
};

export type TreemapTile = {
  leaf: TreemapLeaf;
  x: number;
  y: number;
  width: number;
  height: number;
};

type Rect = { x: number; y: number; width: number; height: number };
type ScaledLeaf = { leaf: TreemapLeaf; area: number };

const SOURCE_ROOT = 'home';

function getGroup(path: string): string {
  const trimmed = path.startsWith(`${SOURCE_ROOT}/`)
    ? path.slice(SOURCE_ROOT.length + 1)
    : path;
  const parts = trimmed.split('/');
  // `dot_config/<tool>/...` is the dominant directory; granularize by tool name.
  if (parts[0] === 'dot_config' && parts.length > 1) {
    return parts[1];
  }
  return parts[0];
}

export function flattenLeaves(nodes: DotfileNode[]): TreemapLeaf[] {
  const leaves: TreemapLeaf[] = [];
  function walk(items: DotfileNode[]) {
    for (const item of items) {
      if (item.children) {
        walk(item.children);
      } else if (item.path && typeof item.size === 'number') {
        leaves.push({
          name: item.name,
          path: item.path,
          size: item.size,
          group: getGroup(item.path),
        });
      }
    }
  }
  walk(nodes);
  return leaves;
}

export function getGroupOrder(leaves: TreemapLeaf[]): string[] {
  const groups = new Set(leaves.map((l) => l.group));
  return [...groups].sort();
}

// Squarified treemap (Bruls, Huijgens, van Wijk 2000).
// Sqrt-transforms sizes so a single huge file (e.g. a vendored preview.png)
// doesn't crush the rest of the layout — small files stay legible.
export function squarifyTreemap(
  leaves: TreemapLeaf[],
  canvasWidth: number,
  canvasHeight: number,
): TreemapTile[] {
  if (leaves.length === 0) return [];

  const transformed = leaves.map((leaf) => ({
    leaf,
    weight: Math.sqrt(leaf.size),
  }));
  const totalWeight = transformed.reduce((sum, t) => sum + t.weight, 0);
  const totalArea = canvasWidth * canvasHeight;
  const scale = totalArea / totalWeight;

  const sorted: ScaledLeaf[] = transformed
    .map((t) => ({ leaf: t.leaf, area: t.weight * scale }))
    .sort((a, b) => b.area - a.area);

  const tiles: TreemapTile[] = [];
  let remaining = sorted.slice();
  let rect: Rect = { x: 0, y: 0, width: canvasWidth, height: canvasHeight };
  let row: ScaledLeaf[] = [];

  while (remaining.length > 0) {
    const next = remaining[0];
    const shortEdge = Math.min(rect.width, rect.height);
    const isImprovement =
      row.length === 0 ||
      worstRatio([...row, next], shortEdge) <= worstRatio(row, shortEdge);

    if (isImprovement) {
      row.push(next);
      remaining = remaining.slice(1);
    } else {
      rect = layoutRow(row, rect, tiles);
      row = [];
    }
  }

  if (row.length > 0) {
    layoutRow(row, rect, tiles);
  }

  return tiles;
}

function worstRatio(row: ScaledLeaf[], shortEdge: number): number {
  if (row.length === 0) return Infinity;
  const total = row.reduce((sum, item) => sum + item.area, 0);
  let max = -Infinity;
  let min = Infinity;
  for (const item of row) {
    if (item.area > max) max = item.area;
    if (item.area < min) min = item.area;
  }
  const edgeSq = shortEdge * shortEdge;
  const totalSq = total * total;
  return Math.max((edgeSq * max) / totalSq, totalSq / (edgeSq * min));
}

function layoutRow(row: ScaledLeaf[], rect: Rect, out: TreemapTile[]): Rect {
  const total = row.reduce((sum, item) => sum + item.area, 0);
  const isWide = rect.width >= rect.height;

  if (isWide) {
    const stripWidth = total / rect.height;
    let cursorY = rect.y;
    for (const item of row) {
      const tileHeight = item.area / stripWidth;
      out.push({
        leaf: item.leaf,
        x: rect.x,
        y: cursorY,
        width: stripWidth,
        height: tileHeight,
      });
      cursorY += tileHeight;
    }
    return {
      x: rect.x + stripWidth,
      y: rect.y,
      width: rect.width - stripWidth,
      height: rect.height,
    };
  }

  const stripHeight = total / rect.width;
  let cursorX = rect.x;
  for (const item of row) {
    const tileWidth = item.area / stripHeight;
    out.push({
      leaf: item.leaf,
      x: cursorX,
      y: rect.y,
      width: tileWidth,
      height: stripHeight,
    });
    cursorX += tileWidth;
  }
  return {
    x: rect.x,
    y: rect.y + stripHeight,
    width: rect.width,
    height: rect.height - stripHeight,
  };
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
