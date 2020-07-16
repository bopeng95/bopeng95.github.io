import React from 'react';

import Header from 'components/Header';
import Container from 'components/Container';
import Main from 'components/Main';
import Fade from 'components/Fade';
import Copyright from 'components/Copyright';

import Cover from 'assets/cover.jpg';
import Me from 'assets/me.jpg';
import Resume from 'assets/resume.pdf';

import Details from './components/Details';
import Contact from './components/Contact';

const App = () => {
  return (
    <Container fullWidth>
      <Header title="bo peng" cover={Cover} profile={Me} />
      <Main maxWidth={700}>
        <Fade delay={0.6}>
          <Details title="about" />
          <Contact Resume={Resume} />
        </Fade>
        <Copyright name="Bo Peng" year="2020" />
      </Main>
    </Container>
  );
};

export default App;
