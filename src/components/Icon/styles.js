import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-right: ${({ right }) => right && `${right}px`};
  margin-left: ${({ left }) => left && `${left}px`};
  & > svg {
    ${({ theme, asButton, color, size, hoverColor }) => css`
      font-size: ${size}px;
      color: ${theme.colors[color]};
      cursor: ${asButton && 'pointer'};
      transition: color 0.2s;
      :hover {
        color: ${theme.colors[hoverColor]};
      }
    `};
  }
`;
