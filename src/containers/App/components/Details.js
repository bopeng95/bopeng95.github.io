import React from 'react';

import Text from 'components/Text';
import { Section } from '../styles';

const Details = ({ title = 'title' }) => (
  <Section gutter>
    <Text type="subtitle" gutter>
      {title}
    </Text>
    <Text color="gray" spanColor="link" gutter>
      i graduated from{' '}
      <a rel="noopener noreferrer" target="_blank" href="https://www.nyu.edu/">
        new york university
      </a>{' '}
      with a bachelors in computer science
    </Text>
    <Text color="gray" gutter>
      currently i am a software engineer focused on building scaled full stack
      applications using React, Redux, and Node while contributing to open
      source tools and side projects
    </Text>
    <Text color="gray">i like everything in lowercase :)</Text>
  </Section>
);

export default Details;
