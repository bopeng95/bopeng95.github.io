import { Copyright } from 'lucide-react';

import { EeveeFoliage } from '@/components/EeveeFoliage';
import { EeveeStroll } from '@/components/EeveeStroll';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="eevee-ground border-border relative mt-28 border-t pt-6 pb-12 sm:mt-40">
      <div className="absolute -top-12 right-0 left-0 h-12">
        <EeveeFoliage />
      </div>
      <div className="absolute -top-12 right-0 left-0 h-12">
        <EeveeStroll />
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
