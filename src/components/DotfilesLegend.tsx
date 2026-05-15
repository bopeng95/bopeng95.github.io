import { cn } from '@/utils';

type DotfilesLegendProps = {
  colorClasses: readonly string[];
  groupOrder: string[];
  onGroupHoverChange: (group: string | null) => void;
};

type DotfilesLegendItemProps = {
  group: string;
  colorClass: string;
  onGroupHoverChange: (group: string | null) => void;
};

function DotfilesLegendItem({
  group,
  colorClass,
  onGroupHoverChange,
}: DotfilesLegendItemProps) {
  function handleMouseEnter() {
    onGroupHoverChange(group);
  }

  function handleMouseLeave() {
    onGroupHoverChange(null);
  }

  function handleFocus() {
    onGroupHoverChange(group);
  }

  function handleBlur() {
    onGroupHoverChange(null);
  }

  return (
    <li>
      <button
        type="button"
        className="flex cursor-pointer appearance-none items-center gap-1.5 border-0 bg-transparent p-0 text-left [font:inherit]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <span
          aria-hidden="true"
          className={cn('size-2.5 rounded-sm', colorClass)}
        />
        <span className="text-muted-foreground">{group}</span>
      </button>
    </li>
  );
}

export function DotfilesLegend({
  colorClasses,
  groupOrder,
  onGroupHoverChange,
}: DotfilesLegendProps) {
  function renderLegendItem(group: string, index: number) {
    const colorClass = colorClasses[index % colorClasses.length];
    return (
      <DotfilesLegendItem
        key={group}
        group={group}
        colorClass={colorClass}
        onGroupHoverChange={onGroupHoverChange}
      />
    );
  }

  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] sm:text-xs">
      {groupOrder.map(renderLegendItem)}
    </ul>
  );
}
