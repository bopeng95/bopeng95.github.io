import { SocialLinks } from '@/components/SocialLinks';

export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl leading-[0.95] font-medium tracking-[-0.03em] sm:text-4xl">
          bo peng
        </h1>
        <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] sm:text-sm">
          frontend engineer
        </p>
      </div>
      <SocialLinks />
    </section>
  );
}
