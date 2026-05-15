import { useTypewriter } from '@/hooks';
import { cn } from '@/utils/cn';

type TypewriterTextProps = {
  text: string;
  className?: string;
  cursorClassName?: string;
  speedMs?: number;
  startDelayMs?: number;
};

export function TypewriterText({
  text,
  className,
  cursorClassName,
  speedMs,
  startDelayMs,
}: TypewriterTextProps) {
  const { output, done } = useTypewriter(text, { speedMs, startDelayMs });

  return (
    <span className={cn('inline-flex items-baseline', className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{output}</span>
      <span
        aria-hidden="true"
        className={cn(
          'bg-foreground ml-1 inline-block h-[0.9em] w-[0.55ch] translate-y-[0.1em]',
          done && 'animate-caret',
          cursorClassName,
        )}
      />
    </span>
  );
}
