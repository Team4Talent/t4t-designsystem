import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

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
  <Button {...knobs()} {...actions()}>
    {text('text', 'Button')}
  </Button>
);

export const Disabled = () => (
  <Button disabled {...knobs()} {...actions()}>
    {text('text', 'Button')}
  </Button>
);
export const Outline = () => (
  <Button outline {...knobs()} {...actions()}>
    {text('text', 'Button')}
  </Button>
);
export const OutlineDisabled = () => (
  <Button outline disabled {...knobs()} {...actions()}>
    {text('text', 'Button')}
  </Button>
);

OutlineDisabled.story = {
  name: 'Outline Disabled'
};
