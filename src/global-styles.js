import { createGlobalStyle } from 'styled-components';

const mainFont = 'Comfortaa';
const subFont = 'Open Sans, sans-serif';

export const theme = {
  display: {
    desktop: 960,
    tablet: 600,
    phone: 480,
  },
  colors: {
    link: '#ff8396',
    black: '#262626',
    gray: '#808080',
    blue: '#0e76a8',
    tan: '#f1d592',
    white: '#f5f5f5',
  },
  text: {
    title: {
      type: 'h2',
      style: {
        fontSize: '1.5rem',
        fontFamily: mainFont,
      },
    },
    subtitle: {
      type: 'h3',
      style: {
        fontSize: '1.1rem',
        fontFamily: mainFont,
      },
    },
    body: {
      type: 'p',
      style: {
        fontSize: '0.9rem',
        fontFamily: subFont,
      },
    },
    subscript: {
      type: 'span',
      style: {
        fontSize: '0.7rem',
        fontFamily: subFont,
      },
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
