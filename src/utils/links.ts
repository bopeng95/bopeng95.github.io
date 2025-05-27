import { Email, GitHub, LinkedIn, SaveAlt } from '@mui/icons-material';

import resume from '../assets/resume.pdf';

type Links = {
  href: string;
  Icon: React.FunctionComponent;
  tooltipText?: string;
};

export const links: Links[] = [
  {
    href: 'https://github.com/bopeng95',
    Icon: GitHub,
  },
  {
    href: 'https://linkedin.com/in/bopeng95',
    Icon: LinkedIn,
  },
  {
    href: 'mailto:bopeng95@gmail.com',
    Icon: Email,
    tooltipText: 'bopeng95@gmail.com',
  },
  {
    href: resume,
    Icon: SaveAlt,
    tooltipText: 'resume is currently outdated',
  },
];
