import React from 'react';

import { Wrapper } from './styles';

const A = props => {
  const { children, ...rest } = props;
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default A;
