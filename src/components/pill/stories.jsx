import React from 'react';
import { Pill } from '.';

export default {
    title: 'components/Pill',
    component: Pill
};

export const Primary = () => <Pill>primary</Pill>;

export const Success = () => <Pill type='success'>success</Pill>;

export const Error = () => <Pill type='error'>error</Pill>;

export const Warning = () => <Pill type='warning'>warning</Pill>;

export const Neutral = () => <Pill type='neutral'>neutral</Pill>;