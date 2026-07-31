import { ExternalIconLink } from './components/ExternalIconLink';
import { ThemeToggle } from './components/ThemeToggle';
import { links } from './utils/links';

export const App = () => {
  const contactLinks = links.map(({ Icon, tooltipText, href }) => (
    <ExternalIconLink key={href} href={href} tooltipText={tooltipText}>
      <Icon className="size-6" />
    </ExternalIconLink>
  ));

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 bg-latte-base pt-3 pb-2 transition-colors dark:bg-mocha-base">
        <div className="mx-auto flex max-w-[600px] justify-end px-5">
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto w-full max-w-[600px] flex-1 px-5 py-10">
        <h1 className="font-display text-2xl leading-[1.334] font-semibold">
          bo peng
        </h1>
        <p>frontend engineer II @ aws</p>
        <div className="mt-4 flex">{contactLinks}</div>
      </main>
      <footer className="mx-auto w-full max-w-[600px] px-5 py-4">
        <p className="text-sm opacity-60">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};
