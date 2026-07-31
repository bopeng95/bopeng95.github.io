import { CollapsibleSection } from './components/CollapsibleSection';
import { ExternalIconLink } from './components/ExternalIconLink';
import { ProjectList } from './components/ProjectList';
import { ThemeToggle } from './components/ThemeToggle';
import { WorkHistoryList } from './components/WorkHistoryList';
import { jobs } from './utils/jobs';
import { links } from './utils/links';
import { projects } from './utils/projects';

export const App = () => {
  const contactLinks = links.map(({ Icon, tooltipText, href }) => (
    <ExternalIconLink key={href} href={href} tooltipText={tooltipText}>
      <Icon className="size-6" />
    </ExternalIconLink>
  ));

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 bg-latte-base pt-3 pb-2 transition-colors dark:bg-mocha-base">
        <div className="mx-auto flex max-w-2xl justify-end px-5">
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-10">
        <h1 className="flex items-center gap-2 font-display text-2xl leading-[1.334] font-semibold">
          bo peng
          <img
            src="https://play.pokemonshowdown.com/sprites/gen5ani/piplup.gif"
            alt="Piplup"
            className="h-8 w-auto"
          />
        </h1>
        <p>frontend engineer</p>
        <div className="mt-4 flex">{contactLinks}</div>
        <CollapsibleSection title="work history">
          <WorkHistoryList jobs={jobs} />
        </CollapsibleSection>
        <CollapsibleSection title="fun endeavors">
          <ProjectList projects={projects} />
        </CollapsibleSection>
      </main>
      <footer className="mx-auto w-full max-w-2xl px-5 py-4">
        <p className="text-sm opacity-60">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};
