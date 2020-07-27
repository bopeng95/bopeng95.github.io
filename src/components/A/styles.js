import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme, asButton }) =>
    asButton &&
    css`
      padding: 5px 20px;
      border-radius: 4px;
      color: ${theme.colors.gray};
      border: 1px solid ${theme.colors.gray};
      :hover {
        transition: border 0.2s, color 0.2s;
        border: 1px solid ${theme.colors.black};
        & > * {
          color: ${theme.colors.black} !important;
        }
      }
    `};
`;
