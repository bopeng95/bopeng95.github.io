import type { CSSProperties } from 'react';

import type { Job as JobType } from '@/types';
import { cn } from '@/utils/cn';

type JobProps = {
  job: JobType;
  left: number;
  width: number;
  isPresent: boolean;
  index: number;
};

const BAR_COLORS = ['bg-accent', 'bg-accent-2', 'bg-accent-3'] as const;

function formatRange(start: string, end: string): string {
  return `${start} — ${end}`;
}

export function Job({ job, left, width, isPresent, index }: JobProps) {
  const { company, title, date, tech, companyUrl } = job;

  const leftPct = `${(left * 100).toFixed(3)}%`;
  const widthPct = `${(width * 100).toFixed(3)}%`;
  const barDelay = `${320 + index * 140}ms`;
  const labelDelay = `${520 + index * 140}ms`;
  const barColor = BAR_COLORS[index % BAR_COLORS.length];

  const barStyle: CSSProperties = {
    left: leftPct,
    width: widthPct,
    animationDelay: barDelay,
  };

  const labelStyle: CSSProperties = {
    marginLeft: leftPct,
    maxWidth: `calc(100% - ${leftPct})`,
    animationDelay: labelDelay,
  };

  const companyNode = companyUrl ? (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="decoration-accent/40 hover:decoration-accent underline underline-offset-4"
    >
      {company}
    </a>
  ) : (
    <>{company}</>
  );

  return (
    <li className="relative">
      <div
        aria-hidden="true"
        style={barStyle}
        className={cn(
          'absolute top-0 h-[6px] origin-left rounded-full opacity-95 motion-safe:animate-[bar-grow_750ms_ease-out_both]',
          barColor,
        )}
      >
        {isPresent && (
          <>
            <span
              className={cn(
                'absolute top-1/2 -right-[5px] h-3 w-3 -translate-y-1/2 rounded-full',
                barColor,
              )}
            />
            <span
              className={cn(
                'absolute top-1/2 -right-[5px] h-3 w-3 -translate-y-1/2 animate-ping rounded-full opacity-60',
                barColor,
              )}
            />
          </>
        )}
      </div>
      <div
        style={labelStyle}
        className="pt-5 motion-safe:animate-[fade-up_550ms_ease-out_both]"
      >
        <div className="text-foreground text-sm font-medium sm:text-base">
          {companyNode}
        </div>
        <div className="text-muted-foreground mt-0.5 font-mono text-[11px] tracking-wide sm:text-xs">
          {title} · {formatRange(date.start, date.end)}
        </div>
        <div className="text-muted-foreground/60 mt-1 font-mono text-[11px] tracking-wide sm:text-xs">
          {tech.join(' · ')}
        </div>
      </div>
    </li>
  );
}
