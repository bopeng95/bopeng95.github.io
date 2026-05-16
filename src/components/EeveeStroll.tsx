import { type CSSProperties, useEffect, useState } from 'react';

import { PokemonSprite } from '@/components/PokemonSprite';

const MIN_POSITION = 8;
const MAX_POSITION = 92;
const START_POSITION = 50;
const WALK_MS_PER_PERCENT = 160;
const WALK_BASE_MS = 500;
const IDLE_CHANCE = 0.3;
const IDLE_MIN_MS = 1500;
const IDLE_MAX_MS = 4000;
const INITIAL_DELAY_MS = 700;
const POST_WALK_PAUSE_MS = 200;

export function EeveeStroll() {
  const [position, setPosition] = useState(START_POSITION);
  const [facingLeft, setFacingLeft] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let currentPos = START_POSITION;

    function scheduleNext() {
      if (cancelled) return;

      const shouldIdle = Math.random() < IDLE_CHANCE;
      if (shouldIdle) {
        const idleMs =
          IDLE_MIN_MS + Math.random() * (IDLE_MAX_MS - IDLE_MIN_MS);
        timer = setTimeout(scheduleNext, idleMs);
        return;
      }

      const targetPos =
        MIN_POSITION + Math.random() * (MAX_POSITION - MIN_POSITION);
      const distance = Math.abs(targetPos - currentPos);
      const walkMs = WALK_BASE_MS + distance * WALK_MS_PER_PERCENT;

      setFacingLeft(targetPos < currentPos);
      setDuration(walkMs);
      setPosition(targetPos);
      currentPos = targetPos;

      timer = setTimeout(scheduleNext, walkMs + POST_WALK_PAUSE_MS);
    }

    timer = setTimeout(scheduleNext, INITIAL_DELAY_MS);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const positionStyle: CSSProperties = {
    left: `${position}%`,
    transition: `left ${duration}ms linear`,
  };
  const flipStyle: CSSProperties = {
    transform: `translateX(-50%) scaleX(${facingLeft ? 1 : -1})`,
  };

  return (
    <div aria-hidden="true" className="relative h-12 w-full">
      <div className="absolute bottom-0" style={positionStyle}>
        <div style={flipStyle}>
          <PokemonSprite name="eevee" alt="" className="h-12" />
        </div>
      </div>
    </div>
  );
}
