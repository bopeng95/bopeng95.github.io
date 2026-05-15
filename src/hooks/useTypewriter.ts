import { useEffect, useState } from 'react';

type UseTypewriterOptions = {
  speedMs?: number;
  startDelayMs?: number;
};

const DEFAULT_SPEED_MS = 70;
const DEFAULT_START_DELAY_MS = 0;

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {},
) {
  const { speedMs = DEFAULT_SPEED_MS, startDelayMs = DEFAULT_START_DELAY_MS } =
    options;
  const reducedMotion = prefersReducedMotion();

  const [output, setOutput] = useState(reducedMotion ? text : '');
  const [done, setDone] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setOutput(text);
      setDone(true);
      return;
    }

    setOutput('');
    setDone(false);

    let index = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function scheduleNextCharacter(delay: number) {
      const timeoutId = setTimeout(() => {
        index += 1;
        setOutput(text.slice(0, index));

        const isComplete = index >= text.length;
        if (isComplete) {
          setDone(true);
          return;
        }

        scheduleNextCharacter(speedMs);
      }, delay);

      timeouts.push(timeoutId);
    }

    scheduleNextCharacter(startDelayMs);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [text, speedMs, startDelayMs, reducedMotion]);

  return { output, done };
}
