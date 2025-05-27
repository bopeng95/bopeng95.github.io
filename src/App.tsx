import { styled, Tooltip, Typography } from '@mui/material';

import { ExternalIconLink } from './components/ExternalIconLink';
import { links } from './utils/links';

const Container = styled('div')(({ theme }) => ({
  maxWidth: `${theme.breakpoints.values.sm}px`,
  margin: '0 auto',
  padding: `${theme.spacing(12.5)} ${theme.spacing(2.5)}`,
}));

const ContactContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
}));

export const App = () => {
  const contactLinks = links.map(({ Icon, tooltipText, ...rest }, index) => (
    <Tooltip key={index} title={tooltipText} arrow>
      <ExternalIconLink {...rest}>
        <Icon />
      </ExternalIconLink>
    </Tooltip>
  ));

  return (
    <Container>
      <Typography variant="h5">bo peng</Typography>
      <Typography>frontend engineer II @ aws</Typography>
      <ContactContainer>{contactLinks}</ContactContainer>
    </Container>
  );
};
