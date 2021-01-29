import React from 'react';
import { Alert } from '.';

export default {
    title: 'components/Alert',
    component: Alert
};

var createDocsObj = type => {
    return { source: {
        code: `<Alert type=\'${type}\'>This is an alert notification.</Alert>;`
    }}
}

export const Success =  () => <Alert type='success'>This is an alert notification.</Alert>;
Success.parameters = {
    docs: createDocsObj('success')
}

export const Error = () => <Alert type='error'>This is an alert notification.</Alert>;
Error.parameters = {
    docs: createDocsObj('error')
}

export const Warning = () => <Alert type='warning'>This is an alert notification.</Alert>;
Warning.parameters = {
    docs: createDocsObj('warning')
}

export const Info = () => <Alert>This is an alert notification.</Alert>;
Info.parameters = {
    docs: createDocsObj('info')
}

export const Neutral = () => <Alert type='neutral'>This is an alert notification.</Alert>;
Neutral.parameters = {
    docs: createDocsObj('neutral')
}