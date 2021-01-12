import React from 'react';
import { Avatar } from '.';
import kop from '../../assets/kop.jpg'

export default {
    title: `components/Avatar`,
    component: Avatar
};

const Template = (args) => <Avatar {...args} />;
const args = { src: kop, alt: 'Hoofd' };

export const Large = Template.bind({});
Large.args = { size:'large', ...args };

export const Medium = Template.bind({});
Medium.args = { size: 'medium', ...args };

export const Small = Template.bind({});
Small.args = { size: 'small', ...args };