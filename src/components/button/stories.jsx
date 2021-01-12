import React from 'react';
import { Button } from '.';

export default {
  title: `components/Button`,
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  type: 'outline',
  label: 'Button',
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
  label: 'Button',
};
