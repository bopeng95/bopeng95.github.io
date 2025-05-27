import { IconButton } from '@mui/material';

export type ExternalIconLinkProps = {
  href: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export const ExternalIconLink = ({
  children,
  ...rest
}: ExternalIconLinkProps) => {
  return (
    <IconButton target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </IconButton>
  );
};
