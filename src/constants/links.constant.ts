import { FileText, Mail } from 'lucide-react';

import { GithubIcon, LinkedinIcon } from '@/components/icons';
import type { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/bopeng95',
    label: 'GitHub',
    Icon: GithubIcon,
    external: true,
  },
  {
    href: 'https://linkedin.com/in/bopeng95',
    label: 'LinkedIn',
    Icon: LinkedinIcon,
    external: true,
  },
  {
    href: 'mailto:bopeng95@gmail.com',
    label: 'bopeng95@gmail.com',
    Icon: Mail,
    external: false,
  },
  {
    href: '/resume.pdf',
    label: 'Resume',
    Icon: FileText,
    external: true,
  },
];
