import React, { useState } from 'react';

import Text from 'components/Text';

import { Wrapper, Nav } from './styles';

const Tabs = props => {
  const { menu, components = [] } = props;

  const [tab, setTab] = useState(0);

  const changeTab = index => setTab(index);

  const navs = menu.map((item, index) => {
    const condition = index % 2 === 0;
    const modifiedIndex = index === 0 ? 0 : index / 2;
    const key = condition ? item : `sep${index}`;
    const onClick = condition ? () => changeTab(modifiedIndex) : undefined;
    const color = tab === modifiedIndex ? 'black' : 'gray';
    return (
      <Text key={key} onClick={onClick} asButton={condition} color={color}>
        {item}
      </Text>
    );
  });

  return (
    <Wrapper>
      <Nav>{navs}</Nav>
      {components[tab]}
    </Wrapper>
  );
};

export default Tabs;
