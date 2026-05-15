import { Dotfiles } from '@/components/Dotfiles';
import { PokemonSprite } from '@/components/PokemonSprite';
import { TypewriterText } from '@/components/TypewriterText';
import { Separator } from '@/components/ui/separator';

export function FunEndeavors() {
  return (
    <section className="mt-28 flex flex-col gap-10 sm:mt-40 sm:gap-12">
      <div className="mx-auto flex w-full max-w-4xl items-end gap-4">
        <div className="flex flex-col gap-3">
          <TypewriterText
            text="fun endeavors"
            className="text-muted-foreground font-mono text-xs tracking-[0.22em]"
          />
          <Separator className="bg-accent w-12" />
        </div>
        <PokemonSprite name="klinklang" className="h-10 sm:h-12" />
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <Dotfiles />
      </div>
    </section>
  );
}
