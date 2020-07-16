import React from 'react';

import Text from 'components/Text';
import Section from 'components/Section';

const Contact = ({ Resume }) => (
  <Section gutter>
    <Text type="subtitle" gutter>
      contact
    </Text>
    <Section lineHeight={2.2}>
      <Text color="gray" spanColor="link">
        email me at{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:bopeng95@gmail.com"
        >
          bopeng95@gmail.com
        </a>
      </Text>
      <Text color="gray" spanColor="link">
        follow me on{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/bopeng95/"
        >
          linkedin
        </a>{' '}
        and{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/bopeng95"
        >
          github
        </a>
      </Text>
      <Text spanColor="link">
        <a rel="noopener noreferrer" target="_blank" href={Resume}>
          resume
        </a>
      </Text>
    </Section>
  </Section>
);

export default Contact;
