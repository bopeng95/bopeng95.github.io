import { Dotfiles, Experience, Hero } from '@/components';

export function App() {
  return (
    <main className="min-h-svh">
      <div className="px-6 pt-20 pb-24 sm:px-10 sm:pt-28 lg:px-16">
        <Hero />
        <Experience />
        <Dotfiles />
      </div>
    </main>
  );
}
