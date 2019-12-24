import React from 'react';
import Button from './button';
import { withKnobs, select } from '@storybook/addon-knobs';

const knobs = {
  size: select('size', ['x-large', 'large', 'normal', 'small', 'x-small'], 'normal')
};

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const Default = () => <Button {...knobs}>Button</Button>;
export const Disabled = () => (
  <Button {...knobs} disabled>
    Button
  </Button>
);
export const Outline = () => (
  <Button {...knobs} outline>
    Button
  </Button>
);
export const OutlineDisabled = () => (
  <Button {...knobs} outline disabled>
    Button
  </Button>
);

OutlineDisabled.story = {
  name: 'Outline Disabled'
};
