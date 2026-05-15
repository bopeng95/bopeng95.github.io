import type { CSSProperties } from 'react';

import { Job } from '@/components/Job';
import { PokemonSprite } from '@/components/PokemonSprite';
import { TypewriterText } from '@/components/TypewriterText';
import { Separator } from '@/components/ui/separator';
import { jobs } from '@/constants';
import { buildTimeline, getJobPosition, getYearPosition } from '@/utils';

export function Experience() {
  const timeline = buildTimeline(jobs);

  return (
    <section className="mt-28 flex flex-col gap-14 sm:mt-40">
      <div className="mx-auto flex w-full max-w-4xl items-end gap-4">
        <div className="flex flex-col gap-3">
          <TypewriterText
            text="experience"
            className="text-muted-foreground font-mono text-xs tracking-[0.22em]"
          />
          <Separator className="bg-accent w-12" />
        </div>
        <PokemonSprite name="sylveon" className="h-10 sm:h-12" />
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <div aria-hidden="true" className="relative h-8">
          <div className="bg-border absolute right-0 bottom-0 left-0 h-px" />
          {timeline.years.map((year, index) => {
            const pct = getYearPosition(year, timeline) * 100;
            const isFirst = index === 0;
            const isLast = index === timeline.years.length - 1;
            const translate = isFirst
              ? 'translateX(0)'
              : isLast
                ? 'translateX(-100%)'
                : 'translateX(-50%)';
            const tickStyle: CSSProperties = {
              left: `${pct}%`,
              transform: translate,
            };

            return (
              <div
                key={year}
                style={tickStyle}
                className="absolute bottom-0 flex flex-col items-center"
              >
                <span className="text-muted-foreground/80 font-mono text-[10px] tracking-[0.18em] sm:text-xs">
                  &apos;{String(year).slice(-2)}
                </span>
                <span className="bg-border mt-1.5 h-[5px] w-px" />
              </div>
            );
          })}
        </div>

        <ol
          aria-label="Career history"
          className="mt-10 flex flex-col gap-12 sm:mt-14 sm:gap-14"
        >
          {jobs.map((job, index) => {
            const { left, width } = getJobPosition(job.date, timeline);
            return (
              <Job
                key={`${job.company}-${index}`}
                job={job}
                left={left}
                width={width}
                isPresent={job.date.end === 'Present'}
                index={index}
              />
            );
          })}
        </ol>
      </div>
    </section>
  );
}
