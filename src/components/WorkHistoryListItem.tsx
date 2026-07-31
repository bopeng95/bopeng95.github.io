import type { Job } from '../utils/jobs';

export type WorkHistoryListItemProps = {
  company: string;
  jobs: Job[];
};

export const WorkHistoryListItem = ({
  company,
  jobs,
}: WorkHistoryListItemProps) => {
  return (
    <li className="group flex gap-3 pb-6 last:pb-0">
      <span aria-hidden="true" className="flex flex-col items-center">
        <span className="bg-latte-text dark:bg-mocha-text mt-2 size-2 shrink-0 rounded-full" />
        <span className="bg-latte-text/10 dark:bg-mocha-text/10 w-px flex-1 group-last:hidden" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="font-medium">{company}</span>
        {jobs.map(({ role, start, end }) => (
          <span
            key={`${role}-${start}`}
            className="text-latte-subtext dark:text-mocha-subtext flex justify-between gap-4 text-sm"
          >
            <span>{role}</span>
            <span className="shrink-0">
              {start} – {end}
            </span>
          </span>
        ))}
      </span>
    </li>
  );
};
