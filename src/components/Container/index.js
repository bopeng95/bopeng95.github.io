import React from 'react';

import { Wrapper } from './styles';

const Container = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Container;
