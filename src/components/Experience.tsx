import { Job } from '@/components/Job';
import { Separator } from '@/components/ui/separator';
import { jobs } from '@/constants';

export function Experience() {
  return (
    <section className="mt-24 flex flex-col gap-10 sm:mt-32">
      <div className="flex flex-col gap-3">
        <p className="text-muted-foreground font-mono text-xs tracking-[0.18em]">
          experience
        </p>
        <Separator className="bg-accent w-12" />
      </div>
      <div className="flex flex-col gap-6">
        {jobs.map((job, index) => (
          <Job key={`${job.company}-${index}`} job={job} />
        ))}
      </div>
    </section>
  );
}
