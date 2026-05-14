import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';
import type { SocialLink } from '@/types';

function SocialIconLink({ link }: { link: SocialLink }) {
  const { href, label, Icon, external } = link;
  const externalProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="text-muted-foreground hover:text-foreground"
    >
      <a href={href} title={label} aria-label={label} {...externalProps}>
        <Icon />
      </a>
    </Button>
  );
}

export function SocialLinks() {
  return (
    <div className="-ml-2 flex items-center gap-1">
      {socialLinks.map((link) => (
        <SocialIconLink key={link.href} link={link} />
      ))}
    </div>
  );
}
