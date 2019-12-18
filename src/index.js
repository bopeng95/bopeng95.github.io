import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';

import App from 'containers/App';
import Header from 'components/Header';
import Container from 'components/Container';

import { GlobalStyle, theme } from './global-styles';

const render = Component =>
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Container maxWidth={500}>
        <Header title="bo peng" />
        <Component />
      </Container>
      <GlobalStyle />
    </ThemeProvider>,
    document.querySelector('#root'),
  );

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
