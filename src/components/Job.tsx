import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Job as JobType, JobDate } from '@/types';

function formatRange({ start, end }: JobDate) {
  return `${start} — ${end}`;
}

export function Job({ job }: { job: JobType }) {
  const { company, title, date, location, tech, companyUrl } = job;
  const hasCompanyLink = Boolean(companyUrl);
  const hasLocation = Boolean(location);

  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          {hasCompanyLink ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-accent/40 hover:decoration-accent underline underline-offset-4"
            >
              {company}
            </a>
          ) : (
            company
          )}
        </CardTitle>
        <CardDescription>{title}</CardDescription>
        <CardAction>
          <div className="text-muted-foreground flex flex-col items-end gap-0.5 font-mono text-[0.65rem] tracking-wider sm:text-xs">
            <span>{formatRange(date)}</span>
            {hasLocation && <span>{location}</span>}
          </div>
        </CardAction>
      </CardHeader>

      <CardFooter className="flex-wrap gap-2">
        {tech.map((label) => (
          <Badge key={label} variant="outline" className="font-mono">
            {label}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
