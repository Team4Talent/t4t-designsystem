import React from 'react';
import { addDecorator } from '@storybook/react';

// center the components in the storybook view
addDecorator(storyFn => <div style={{ textAlign: 'center', fontFamily: 'Nunito Sans' }}>{storyFn()}</div>);