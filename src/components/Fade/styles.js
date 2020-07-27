import styled, { css, keyframes } from 'styled-components';

const fadeToTop = keyframes`
  0% {
    opacity: 0;
    top: 20px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
`;

const delayAnimation = (len, time) => {
  const styles = [...new Array(len)].reduce((acc, _item, index) => {
    acc += `
      :nth-child(${index + 1}) {
        animation-delay: ${(index + 0.5) * time}s;
      }
    `;
    return acc;
  }, '');
  return css`
    ${styles}
  `;
};

export const Wrapper = styled.section`
  ${({ delay, length }) =>
    css`
      & > * {
        opacity: 0;
        position: relative;
        animation: ${fadeToTop} ${delay}s ease-out 1s forwards;
        ${delayAnimation(length, 0.2)};
        will-change: animation, opacity, top;
      }
    `};
`;
