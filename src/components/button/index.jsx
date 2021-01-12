import React from 'react';
import PropTypes from 'prop-types';
import { Primary, Outline, Link } from './styles';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, label, ...props }) => {
  switch (type) {
    case 'primary':
    default:
      return <Primary {...props}>{label}</Primary>;
    case 'outline':
      return <Outline {...props}>{label}</Outline>;
    case 'link':
      return <Link {...props}>{label}</Link>;
  }
};

Button.propTypes = {
  /**
   * The type of the button, controlling how it should be rendered.
   */
  type: PropTypes.oneOf(['primary', 'outline', 'link']),
  /**
   * Controls the size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
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
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  disabled: false,
  onClick: undefined
};
