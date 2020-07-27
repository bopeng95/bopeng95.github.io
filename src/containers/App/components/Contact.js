import React from 'react';

import A from 'components/A';
import Flex from 'components/Flex';
import Text from 'components/Text';
import Section from 'components/Section';
import Icon from 'components/Icon';

const Contact = ({ links = [] }) => {
  const list = links.map(item => {
    const { link, icon, color = 'black' } = item;
    return (
      <A key={link} href={link}>
        <Icon
          icon={icon}
          right={15}
          size={24}
          asButton
          color="gray"
          hoverColor={color}
        />
      </A>
    );
  });

  return (
    <Section gutter>
      <Text type="subtitle" gutter>
        contact
      </Text>
      <Flex>{list}</Flex>
    </Section>
  );
};

export default Contact;
