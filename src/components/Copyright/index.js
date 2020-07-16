import React from 'react';

import CopyrightIcon from 'components/Icons/CopyrightIcon';
import Text from 'components/Text';
import Section from 'components/Section';

const Copyright = props => {
  const { name, year } = props;
  return (
    <Section direction="row" vertical="center" gutterTop={150}>
      <Text type="subscript" color="gray">
        Copyright
      </Text>
      <CopyrightIcon color="gray" size={14} left right />
      <Text type="subscript" color="gray">
        {`${name} ${year}`}
      </Text>
    </Section>
  );
};

export default Copyright;
