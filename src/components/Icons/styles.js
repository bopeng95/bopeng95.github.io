import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  ${({ theme, color, size, left, right }) => css`
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
    margin-right: ${left && '5px'};
    margin-left: ${right && '5px'};
    & > svg {
      fill: ${color && theme.colors[color]};
    }
  `};
`;
