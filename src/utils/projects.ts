export type Project = {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: 'dotfiles',
    description: 'personal dotfiles and configs',
    language: 'Lua',
    languageColor: '#000080',
    href: 'https://github.com/bopeng95/dotfiles',
  },
  {
    name: 'bm',
    description: 'bookmark cli manager',
    language: 'Go',
    languageColor: '#00ADD8',
    href: 'https://github.com/bopeng95/bm',
  },
  {
    name: 'kefka-dm',
    description: 'ffxiv dancing mad ultimate sim',
    language: 'TypeScript',
    languageColor: '#3178c6',
    href: 'https://github.com/bopeng95/kefka-dm',
  },
  {
    name: 'nova',
    description: 'graphql schema visualizer',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    href: 'https://github.com/nova-introspection/Nova',
  },
];
