import type { Job } from '../utils/jobs';
import { WorkHistoryListItem } from './WorkHistoryListItem';

export type WorkHistoryListProps = {
  jobs: Job[];
};

type JobGroup = {
  company: string;
  jobs: Job[];
};

const groupByCompany = (jobs: Job[]): JobGroup[] =>
  jobs.reduce<JobGroup[]>((groups, job) => {
    const last = groups[groups.length - 1];
    if (last?.company === job.company) {
      last.jobs.push(job);
    } else {
      groups.push({ company: job.company, jobs: [job] });
    }
    return groups;
  }, []);

export const WorkHistoryList = ({ jobs }: WorkHistoryListProps) => {
  return (
    <ul className="mt-2">
      {groupByCompany(jobs).map(({ company, jobs: companyJobs }) => (
        <WorkHistoryListItem
          key={`${company}-${companyJobs[0].start}`}
          company={company}
          jobs={companyJobs}
        />
      ))}
    </ul>
  );
};
