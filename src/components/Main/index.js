import React from 'react';

import { Wrapper } from './styles';

const Main = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>;

export default Main;
