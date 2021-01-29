import '../src/css/tailwind.css';
import { Windmill } from '@windmill/react-ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <Windmill>
      <Story />
    </Windmill>
  ),
];
