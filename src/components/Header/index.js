import React from 'react';

import Text from 'components/Text';

import { Wrapper } from './styles';

const Header = props => {
  const { title = 'title' } = props;
  return (
    <Wrapper>
      <Text type="title">{title}</Text>
    </Wrapper>
  );
};

export default Header;
