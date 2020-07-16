import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ width, height, src, borderRadius, opacity }) => css`
    border: 2px solid whitesmoke;
    width: ${width && width};
    height: ${height && height};
    border-radius: ${borderRadius && borderRadius};
    background-image: url("${src}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: ${opacity && opacity};
  `};
`;

export const ImgWrapper = styled.img`
  ${({ width, height }) => css`
    width: ${width && width};
    height: ${height && height};
  `}
`;
