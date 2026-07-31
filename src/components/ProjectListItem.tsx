import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import type { Project } from '../utils/projects';

export type ProjectListItemProps = {
  project: Project;
};

export const ProjectListItem = ({ project }: ProjectListItemProps) => {
  const { name, description, language, languageColor, href } = project;

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="-mx-3 flex items-center justify-between gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      >
        <span className="flex flex-col">
          <span className="font-medium">{name}</span>
          <span className="text-latte-subtext dark:text-mocha-subtext text-sm">
            {description}
          </span>
        </span>
        <span className="text-latte-subtext dark:text-mocha-subtext flex shrink-0 items-center gap-2 text-sm">
          <span
            aria-hidden="true"
            className="size-2 rounded-full"
            style={{ backgroundColor: languageColor }}
          />
          {language}
          <FaArrowUpRightFromSquare className="size-3" />
        </span>
      </a>
    </li>
  );
};
