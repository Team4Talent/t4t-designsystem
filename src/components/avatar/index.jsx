import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';


/*
* Displays a profile image.
*/
export const Avatar = ({size, src, alt, ...props}) => {
    return (
    <Wrapper size={size} {...props}>
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
    </Wrapper>);
}

Avatar.propTypes = {
  /*
  * Controls the size of the avatar.
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /*
  * The source of the image to render.
  */
  src: PropTypes.string.isRequired,
  /*
  * Alt text, used by screen readers.
  */
  alt: PropTypes.string
}

Avatar.defaultProps = {
    size: 'medium'
}