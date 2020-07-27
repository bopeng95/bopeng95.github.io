import React from 'react';

import A from 'components/A';
import Text from 'components/Text';
import Section from 'components/Section';

import Resume from 'assets/resume.pdf';

const Details = ({ title = 'title' }) => (
  <Section gutter>
    <Text type="subtitle" gutter>
      {title}
    </Text>
    <Text color="gray" spanColor="link" gutter>
      I graduated from <a href="https://www.nyu.edu/">new york university</a>{' '}
      with a bachelors in computer science.
    </Text>
    <Text color="gray" gutter>
      Currently I am a software engineer focused on building scaled full stack
      applications using React, Redux, and Node while contributing to open
      source tools and side projects.
    </Text>
    <A href={Resume} asButton>
      <Text color="gray">resume</Text>
    </A>
  </Section>
);

export default Details;
