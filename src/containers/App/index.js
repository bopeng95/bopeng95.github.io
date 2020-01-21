import React from 'react';

import Fade from 'components/Fade';
import Main from 'components/Main';
// import Image from 'components/Image';
import Text from 'components/Text';
import CopyrightIcon from 'components/Icons/CopyrightIcon';

// import Me from 'assets/me.jpg';
import Resume from 'assets/resume.pdf';

import Details from './components/Details';
import Contact from './components/Contact';

import { Section } from './styles';

const App = () => {
  return (
    <Main>
      <Fade delay={0.6}>
        <Details title="hello, welcome to my amazing website" />
        <Contact Resume={Resume} />
      </Fade>
      {/* <Image src={Me} width="100%" height="200px" asBackground opacity={0.8} /> */}

      <Section direction="row" vertical="center" gutterTop={150}>
        <Text type="subscript" color="gray">
          Copyright
        </Text>
        <CopyrightIcon color="gray" size={14} left right />
        <Text type="subscript" color="gray">
          Bo Peng 2020
        </Text>
      </Section>
    </Main>
  );
};

export default App;
