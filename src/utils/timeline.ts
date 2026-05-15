import type { JobDate } from '@/types';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

type Month = (typeof MONTHS)[number];

function parseMonthIndex(value: string): number {
  if (value === 'Present') {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const [monthLabel, yearLabel] = value.split(' ');
  const monthIndex = MONTHS.indexOf(monthLabel as Month);
  return parseInt(yearLabel, 10) * 12 + monthIndex;
}

export type Timeline = {
  years: number[];
  chartStart: number;
  totalMonths: number;
};

export function buildTimeline(jobs: { date: JobDate }[]): Timeline {
  const monthIndices = jobs.flatMap((job) => [
    parseMonthIndex(job.date.start),
    parseMonthIndex(job.date.end),
  ]);

  const earliest = Math.min(...monthIndices);
  const latest = Math.max(...monthIndices);

  const startYear = Math.floor(earliest / 12);
  const endYear = Math.floor(latest / 12);

  const chartStart = startYear * 12;
  const chartEnd = (endYear + 1) * 12;
  const totalMonths = chartEnd - chartStart;

  const years: number[] = [];
  for (let year = startYear; year <= endYear + 1; year++) {
    years.push(year);
  }

  return { years, chartStart, totalMonths };
}

export function getJobPosition(date: JobDate, timeline: Timeline) {
  const start = parseMonthIndex(date.start);
  const end = parseMonthIndex(date.end);
  const left = (start - timeline.chartStart) / timeline.totalMonths;
  const width = (end - start) / timeline.totalMonths;
  return { left, width };
}

export function getYearPosition(year: number, timeline: Timeline): number {
  return (year * 12 - timeline.chartStart) / timeline.totalMonths;
}
