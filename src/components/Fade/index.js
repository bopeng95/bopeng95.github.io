import React from 'react';

import { Wrapper } from './styles';

const Fade = props => {
  const { children, delay = 1 } = props;

  return (
    <Wrapper delay={delay} length={children.length}>
      {children}
    </Wrapper>
  );
};

export default Fade;
