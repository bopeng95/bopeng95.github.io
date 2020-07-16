import React from 'react';

import { Wrapper } from './styles';

const Section = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Section;
