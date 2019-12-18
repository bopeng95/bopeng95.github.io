import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 20px;
  @media (min-width: ${({ theme }) => theme.display.tablet}px) {
    padding: 40px 25px 25px;
  }
`;
