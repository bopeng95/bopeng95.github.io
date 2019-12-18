import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  ${({
    lineHeight,
    gutterTop,
    gutter,
    direction,
    center,
    horizontal,
    vertical,
  }) => css`
    line-height: ${lineHeight && lineHeight};
    flex-direction: ${direction || 'column'};
    justify-content: ${center ? 'center' : horizontal || 'flex-start'};
    align-items: ${center ? 'center' : vertical || 'flex-start'};
    margin-bottom: ${gutter && '50px'};
    margin-top: ${gutterTop && `${gutterTop}px`};
  `};
`;
