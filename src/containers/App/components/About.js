import React from 'react';

import Fade from 'components/Fade';

import Details from './Details';
import Contact from './Contact';

const About = props => {
  const { links } = props;
  return (
    <Fade delay={0.6}>
      <Details title="about" />
      <Contact links={links} />
    </Fade>
  );
};

export default About;
