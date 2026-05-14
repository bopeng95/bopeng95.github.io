import type { ComponentType, SVGProps } from 'react';

export type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type SocialLink = {
  href: string;
  label: string;
  Icon: SocialIcon;
  external: boolean;
};
