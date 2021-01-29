import React from 'react';
import PropTypes from 'prop-types';
import { Button as WindmillButton } from '@windmill/react-ui';

/**
 * Component that triggers an action after user interaction
 */
export const Button = ({label, type, ...props}) => 
  <WindmillButton layout={type} {...props}>{label}</WindmillButton>

Button.propTypes = {
  /**
   * The type of the button, controlling how it should be rendered.
   */
  type: PropTypes.oneOf(['primary', 'outline', 'link']),
  /**
   * Controls the size of the button
   */
  size: PropTypes.oneOf(['small', 'regular', 'large', 'larger']),
  /**
   * The text of the button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Whether the button can be interacted with or not.
   */
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /*
   * Displays an icon without text
   */
  icon: PropTypes.shape,
  /*
   * Display an icon on the left
   */
  iconLeft: PropTypes.shape,
  /*
   * Display an icon on the right
   */
  iconRight: PropTypes.shape,
  /*
   * Block buttons span the whole width of their parent
   */
  block: PropTypes.bool
};

Button.defaultProps = {
  type: 'primary',
  size: 'regular',
  disabled: false,
  onClick: undefined,
  block: false
};
