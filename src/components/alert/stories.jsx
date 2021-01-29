import React from 'react';
import { Alert } from '.';

export default {
    title: 'components/Alert',
    component: Alert
};

export const Success =  () => <Alert type='success'>This is an alert notification.</Alert>;

export const Error = () => <Alert type='error'>This is an alert notification.</Alert>;

export const Warning = () => <Alert type='warning'>This is an alert notification.</Alert>;

export const Info = () => <Alert>This is an alert notification.</Alert>;

export const Neutral = () => <Alert type='neutral'>This is an alert notification.</Alert>;