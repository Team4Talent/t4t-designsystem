import React from 'react'; 
import { FaBeer } from 'react-icons/fa';
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

export const Icon = Template.bind({});
Icon.args = {
  type: 'primary',
  icon: FaBeer
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  type: 'primary',
  label: `Cheers`,
  iconLeft: FaBeer
};

export const IconRight = Template.bind({});
IconRight.args = {
  type: 'primary',
  label: `Cheers`,
  iconRight: FaBeer
};

export const Block = Template.bind({});
Block.args = {
  type: 'primary',
  label: 'Button',
  block: true
};