import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from 'components/Header';
import Container from 'components/Container';
import Main from 'components/Main';
import Copyright from 'components/Copyright';
import Tabs from 'components/Tabs';

import Cover from 'assets/cover.jpg';
import Me from 'assets/me.jpg';

import { menu, links, projects } from 'fixed';

import About from './components/About';
import Projects from './components/Projects';

library.add(fab, fas);

const App = () => {
  const PageOne = <About links={links} />;
  const PageTwo = <Projects list={projects} />;

  const components = [PageOne, PageTwo];

  return (
    <Container fullWidth>
      <Header title="bo peng" cover={Cover} profile={Me} />
      <Main maxWidth={750}>
        <Tabs menu={menu} components={components} />
        <Copyright name="Bo Peng" year="2020" />
      </Main>
    </Container>
  );
};

export default App;
