import type { Project } from '../utils/projects';
import { ProjectListItem } from './ProjectListItem';

export type ProjectListProps = {
  projects: Project[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="divide-latte-text/10 dark:divide-mocha-text/10 mt-2 divide-y">
      {projects.map((project) => (
        <ProjectListItem key={project.href} project={project} />
      ))}
    </ul>
  );
};
