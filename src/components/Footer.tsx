import { Copyright } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-28 flex max-w-4xl items-center gap-1.5 sm:mt-40">
      <Copyright
        aria-hidden="true"
        className="text-muted-foreground size-3.5"
      />
      <span className="text-muted-foreground font-mono text-xs">{year}</span>
    </footer>
  );
}
