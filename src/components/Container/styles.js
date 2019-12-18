import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ maxWidth = 960 }) => maxWidth}px;
  margin: 25px auto 0;
`;
