import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  ${({
    theme,
    type,
    color = 'black',
    spanColor,
    gutterTop,
    gutter = false,
    asButton,
  }) => css`
    ${theme.text[type].style};
    margin-top: ${gutterTop && '15px'};
    margin-bottom: ${gutter && '15px'};
    color: ${theme.colors[color]};
    cursor: ${asButton && 'pointer'};
    & > * {
      text-decoration: none;
      color: ${spanColor && theme.colors[spanColor]};
    }
  `};
`;
