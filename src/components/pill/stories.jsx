import React from 'react';
import { Pill } from '.';

export default {
    title: 'components/Pill',
    component: Pill
};

var createDocsObj = type => {
    return { source: {
        code: `<Pill type=\'${type}\'>${type}</Pill>;`
    }}
}

export const Primary = () => <Pill>primary</Pill>;
Primary.parameters = {
    docs: createDocsObj('primary')
}

export const Success = () => <Pill type='success'>success</Pill>;
Success.parameters = {
    docs: createDocsObj('success')
}

export const Error = () => <Pill type='error'>error</Pill>;
Error.parameters = {
    docs: createDocsObj('error')
}

export const Warning = () => <Pill type='warning'>warning</Pill>;
Warning.parameters = {
    docs: createDocsObj('warning')
}

export const Neutral = () => <Pill type='neutral'>neutral</Pill>;
Neutral.parameters = {
    docs: createDocsObj('neutral')
}