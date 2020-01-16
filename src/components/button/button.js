import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid;
  color: white;
  font-family: inherit;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: ${props => {
    switch (props.size) {
      case 'x-large':
        return '1.75rem';
      case 'large':
        return '1.5rem';
      case 'small':
        return '0.8rem';
      case 'x-small':
        return '0.7rem';
      default:
        return '1rem';
    }
  }};
  ${props => {
    switch (props.type) {
      case 'default':
        return props.outline
          ? css`
              background-color: transparent;
              border-color: #007bff;
              color: #007bff;

              &:hover {
                background-color: transparent;
                border-color: #588bff;
                color: #588bff;
              }

              &:active {
                background-color: transparent;
                border-color: #264adb;
                color: #264adb;
              }
            `
          : css`
              background-color: #007bff;
              border-color: #007bff;

              &:hover {
                background-color: #588bff;
                border-color: #588bff;
              }

              &:active {
                background-color: #264adb;
                border-color: #264adb;
              }
            `;
      case 'link':
        return css`
          color: #007bff;
          background-color: transparent;
          border-color: #264adb;
          border: none;

          &:hover {
            cursor: pointer;
          }
        `;
      case 'success':
        return props.outline
          ? css`
              background-color: transparent;
              border-color: #179866;
              color: #179866;

              &:hover {
                background-color: transparent;
                border-color: #21b87d;
                color: #21b87d;
              }

              &:active {
                background-color: transparent;
                border-color: #167a53;
                color: #167a53;
              }
            `
          : css`
              background-color: #179866;
              border-color: #179866;

              &:hover {
                background-color: #21b87d;
                border-color: #21b87d;
              }

              &:active {
                background-color: #167a53;
                border-color: #167a53;
              }
            `;
      case 'danger':
        return props.outline
          ? css`
              background-color: transparent;
              border-color: #ff4d4f;
              color: #ff4d4f;

              &:hover {
                background-color: transparent;
                border-color: #ff7875;
                color: #ff7875;
              }

              &:active {
                background-color: transparent;
                border-color: #d9363e;
                color: #d9363e;
              }
            `
          : css`
              background-color: #ff4d4f;
              border-color: #ff4d4f;

              &:hover {
                background-color: #ff7875;
                border-color: #ff7875;
              }

              &:active {
                background-color: #d9363e;
                border-color: #d9363e;
              }
            `;
    }
  }};
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
        border-color: #e3e7ed;
      }
    `};
  ${props =>
    props.disabled &&
    props.type === 'link' &&
    css`
      color: #e3e7ed;
      background-color: transparent;
      border: none;

      &:hover,
      &:active {
        background-color: transparent;
      }
    `};
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
    `};

  & > svg,
  & > i {
    padding-right: 0.375rem;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'success', 'danger', 'link']),
  size: PropTypes.oneOf(['x-large', 'large', 'normal', 'small', 'x-small'])
};

Button.defaultProps = {
  type: 'default',
  size: 'normal'
};

export default Button;
