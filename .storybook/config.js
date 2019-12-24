import React from 'react';
import { configure, addDecorator } from '@storybook/react';

// center the components in the storybook view
addDecorator(storyFn => <div style={{ textAlign: 'center', fontFamily: 'Nunito Sans' }}>{storyFn()}</div>);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
