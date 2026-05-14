export type JobDate = {
  start: string;
  end: string | 'Present';
};

export type Job = {
  company: string;
  title: string;
  date: JobDate;
  location?: string;
  tech: string[];
  companyUrl?: string;
};
