import React from 'react';

import Icon from 'components/Icon';
import Text from 'components/Text';
import Section from 'components/Section';

const Copyright = props => {
  const { name, year } = props;
  return (
    <Section direction="row" vertical="center" gutterTop={150}>
      <Text type="subscript" color="gray">
        Copyright
      </Text>
      <Icon
        icon={['fas', 'copyright']}
        size={14}
        color="gray"
        left={5}
        right={5}
      />
      <Text type="subscript" color="gray">
        {`${name} ${year}`}
      </Text>
    </Section>
  );
};

export default Copyright;
