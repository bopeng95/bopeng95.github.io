import { cn } from '@/utils/cn';

type PokemonSpriteProps = {
  name: string;
  className?: string;
  alt?: string;
};

const SPRITE_BASE_URL = 'https://play.pokemonshowdown.com/sprites/gen5ani';

export function PokemonSprite({ name, className, alt }: PokemonSpriteProps) {
  return (
    <img
      src={`${SPRITE_BASE_URL}/${name}.gif`}
      alt={alt ?? name}
      loading="lazy"
      decoding="async"
      className={cn('pixelated h-12 w-auto select-none', className)}
    />
  );
}
