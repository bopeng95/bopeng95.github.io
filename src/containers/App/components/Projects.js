import React from 'react';

import A from 'components/A';
import Fade from 'components/Fade';
import Text from 'components/Text';

const style = {
  marginBottom: '40px',
};

const Projects = props => {
  const { list } = props;
  const projects = list.map(item => {
    const { title, description, link, date } = item;
    const color = link === '#' ? 'gray' : 'link';
    return (
      <div key={link} style={style}>
        <A href={link}>
          <Text type="title" color={color}>
            {title}
          </Text>
        </A>
        <Text color="gray">{`${date} • ${description}`}</Text>
      </div>
    );
  });
  return <Fade delay={0.4}>{projects}</Fade>;
};

export default Projects;
