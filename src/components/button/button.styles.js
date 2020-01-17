import { css } from 'styled-components';

const baseStyle = css`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid;
  color: white;
  font-family: inherit;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const primaryStyle = css`
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

const successStyle = css`
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

const dangerStyle = css`
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

const linkStyle = css`
  color: #007bff;
  background-color: transparent;
  border-color: #264adb;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const primary = css`
  ${baseStyle};
  ${primaryStyle};
`;

export const success = css`
  ${baseStyle};
  ${successStyle};
`;

export const danger = css`
  ${baseStyle};
  ${dangerStyle};
`;

export const link = css`
  ${baseStyle};
  ${linkStyle};
`;
