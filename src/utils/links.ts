import type { IconType } from 'react-icons';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

type Links = {
  href: string;
  Icon: IconType;
  tooltipText?: string;
};

export const links: Links[] = [
  {
    href: 'https://github.com/bopeng95',
    Icon: FaGithub,
  },
  {
    href: 'https://linkedin.com/in/bopeng95',
    Icon: FaLinkedin,
  },
  {
    href: 'mailto:bopeng95@gmail.com',
    Icon: MdEmail,
    tooltipText: 'bopeng95@gmail.com',
  },
  {
    href: '/resume.pdf',
    Icon: FaFilePdf,
    tooltipText: 'Resume',
  },
];
