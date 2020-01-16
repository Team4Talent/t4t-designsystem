import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FaCog } from 'react-icons/fa';

import Button from './button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

const knobs = () => ({
  type: select('type', ['default', 'success', 'danger', 'link'], 'default'),
  size: select('size', ['x-large', 'large', 'normal', 'small', 'x-small'], 'normal')
});

const actions = () => ({
  onClick: action('Button onClick')
});

export const Default = () => (
  <>
    <h1>Default:</h1>
    <Button {...knobs()} {...actions()}>
      {text('text', 'Button')}
    </Button>
    <h1>With icon:</h1>
    <Button {...knobs()} {...actions()}>
      <FaCog /> {text('text', 'Button')}
    </Button>
  </>
);

export const Disabled = () => (
  <>
    <h1>Default:</h1>
    <Button disabled {...knobs()} {...actions()}>
      {text('text', 'Button')}
    </Button>
    <h1>With icon:</h1>
    <Button disabled {...knobs()} {...actions()}>
      <FaCog /> {text('text', 'Button')}
    </Button>
  </>
);
export const Outline = () => (
  <>
    <h1>Default:</h1>
    <Button outline {...knobs()} {...actions()}>
      {text('text', 'Button')}
    </Button>
    <h1>With icon:</h1>
    <Button outline {...knobs()} {...actions()}>
      <FaCog /> {text('text', 'Button')}
    </Button>
  </>
);
export const OutlineDisabled = () => (
  <>
    <h1>Default:</h1>
    <Button outline disabled {...knobs()} {...actions()}>
      {text('text', 'Button')}
    </Button>
    <h1>With icon:</h1>
    <Button outline disabled {...knobs()} {...actions()}>
      <FaCog /> {text('text', 'Button')}
    </Button>
  </>
);

OutlineDisabled.story = {
  name: 'Outline Disabled'
};
