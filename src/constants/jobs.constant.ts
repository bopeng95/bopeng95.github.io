import type { Job } from '@/types';

export const jobs: Job[] = [
  {
    company: 'Amazon Web Services',
    title: 'Frontend Engineer II',
    date: { start: 'Jan 2022', end: 'Present' },
    location: 'New York, NY',
    tech: ['react', 'typescript', 'playwright', 'java'],
    companyUrl: 'https://aws.amazon.com',
    pokemon: 'umbreon',
  },
  {
    company: 'Fanbyte',
    title: 'Software Engineer',
    date: { start: 'Feb 2021', end: 'Jan 2022' },
    location: 'Los Angeles, CA',
    tech: ['vue', 'wordpress', 'node'],
    companyUrl: 'https://www.fanbyte.com/',
    pokemon: 'flareon',
  },
  {
    company: 'ManageGo',
    title: 'Software Developer',
    date: { start: 'Aug 2019', end: 'Dec 2019' },
    location: 'New York, NY',
    tech: ['react'],
    companyUrl: 'https://www.managego.com/',
    pokemon: 'leafeon',
  },
];
