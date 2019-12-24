import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  padding: 0.375rem 0.75rem;
  background-color: #007bff;
  border-color: #007bff;
  border-radius: 0.25rem;
  border: 1px solid;
  color: white;
  font-family: inherit;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #588BFF
  }

  &:active {
    background-color: #264ADB
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #e3e7ed;
      color: #bbc2d1;
      border-color: #e3e7ed;

      &:hover,
      &:active {
        background-color: #e3e7ed;
      }
    `}

  ${props =>
    props.outline &&
    css`
      background-color: white;
      color: #007bff;

      &:hover {
        background-color: #f0f3ff;
      }

      &:active {
        background-color: #dde5ff;
      }
    `}

  ${props =>
    props.outline &&
    props.disabled &&
    css`
      background-color: #edeff3;
      cursor: not-allowed;
      color: #bbc2d1;
      border-color: #bbc2d1;

      &:hover,
      &:active {
        background-color: #edeff3;
      }
    `}

  font-size: ${props => {
    switch (props.size) {
      case 'x-large':
        return '1.75rem';
      case 'large':
        return '1.5rem';
      case 'small':
        return '0.8rem';
      case 'x-small':
        return '0.75rem';
      default:
        return '1rem';
    }
  }}
`;

Button.propTypes = {
  size: PropTypes.oneOf(['x-large', 'large', 'normal', 'small', 'x-small'])
};

Button.defaultProps = {
  size: 'normal'
};

export default Button;
