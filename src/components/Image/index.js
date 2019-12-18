import React from 'react';

import { Wrapper, ImgWrapper } from './styles';

const Image = props => {
  const { src, alt, asBackground, ...rest } = props;

  const Img = <ImgWrapper src={src} alt={alt} {...rest} />;
  const Background = <Wrapper {...props} />;

  return asBackground ? Background : Img;
};

export default Image;
