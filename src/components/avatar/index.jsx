import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as WindmillAvatar } from '@windmill/react-ui';

/*
* Displays a profile image.
*/
export const Avatar = ({...props}) =>  
  <WindmillAvatar {...props} />

Avatar.propTypes = {
  /*
  * Controls the size of the avatar.
  */
  size: PropTypes.oneOf(['small', 'regular', 'large']),
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
    size: 'regular'
}