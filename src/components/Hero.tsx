import { SocialLinks } from '@/components/SocialLinks';

export function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-6 items-center">
        <h2 className="text-2xl leading-[1.05] font-medium tracking-[-0.02em] sm:text-4xl">
          bo peng
        </h2>
        <img src="https://play.pokemonshowdown.com/sprites/gen5ani/piplup.gif" />
      </div>
      <SocialLinks />
    </section>
  );
}
