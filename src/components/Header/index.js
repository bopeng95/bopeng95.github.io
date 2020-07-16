import React from 'react';

import Text from 'components/Text';
import Image from 'components/Image';

import { Wrapper } from './styles';

const Header = props => {
  const { title = 'title', cover, profile, ...rest } = props;
  return (
    <Wrapper cover={cover} {...rest}>
      <Image
        asBackground
        src={profile}
        width="90px"
        height="90px"
        borderRadius="50%"
      />
      <Text type="title" color="white" gutterTop>
        {title}
      </Text>
    </Wrapper>
  );
};

export default Header;
