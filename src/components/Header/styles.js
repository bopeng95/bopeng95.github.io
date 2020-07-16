import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${({ full }) => (full ? '100vh' : '450px')};
  background-image: url("${({ cover }) => cover}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
