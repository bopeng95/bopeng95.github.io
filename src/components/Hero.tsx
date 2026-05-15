import { SocialLinks } from '@/components/SocialLinks';

export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-8">
      <h1 className="text-2xl leading-[0.95] font-medium tracking-[-0.03em] sm:text-4xl">
        bo peng
      </h1>
      <SocialLinks />
    </section>
  );
}
