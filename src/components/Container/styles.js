import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ fullWidth, maxWidth }) => (fullWidth ? '100%' : `${maxWidth}px`)};
  margin: 0 auto;
  padding: ${({ padding }) => padding && '25px'};
`;
