import { Copyright } from 'lucide-react';

import { EeveeFoliage, EeveeMountains, EeveeStroll } from '@/components';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="eevee-ground border-border relative mt-28 border-t pt-6 pb-12 sm:mt-40">
      <div aria-hidden="true" className="eevee-scene absolute right-0 left-0">
        <EeveeMountains />
        <EeveeFoliage layer="back" />
        <EeveeFoliage layer="mid" />
        <EeveeStroll />
        <EeveeFoliage layer="front" />
      </div>
      <div className="mx-auto flex max-w-4xl items-center gap-1.5 px-6 sm:px-10 lg:px-16">
        <Copyright
          aria-hidden="true"
          className="text-muted-foreground size-3.5"
        />
        <span className="text-muted-foreground font-mono text-xs">{year}</span>
      </div>
    </footer>
  );
}
