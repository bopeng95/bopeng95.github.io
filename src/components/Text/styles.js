import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  ${({
    theme,
    type,
    color = 'black',
    spanColor,
    gutter = false,
    asButton,
  }) => css`
    ${theme.text[type].style};
    margin-bottom: ${gutter && '18px'};
    color: ${theme.colors[color]};
    cursor: ${asButton && 'pointer'};
    & > * {
      text-decoration: none;
      color: ${spanColor && theme.colors[spanColor]};
    }
  `};
`;
