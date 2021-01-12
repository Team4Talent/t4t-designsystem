import tw from 'tailwind-styled-components';

const base = tw.button`
    align-bottom 
    inline-flex 
    items-center 
    justify-center 
    cursor-pointer 
    leading-5 
    transition-colors 
    duration-150 
    font-medium 
    focus:outline-none
`;

const sizes = {
  'x-large': 'px-10 py-4 rounded-lg',
  large: 'px-5 py-3 rounded-lg',
  medium: 'px-4 py-2 rounded-lg text-sm',
  small: 'px-3 py-1 rounded-md text-sm',
};

export const Primary = tw(base)`
    text-white 
    bg-green-500 
    border 
    border-transparent
    active:bg-green-600
    hover:bg-green-700 
    focus:shadow-outline-green

    ${(props) => sizes[props.size]}

    ${(props) => (props.disabled ? 'opacity-50 cursor-not-allowed' : '')}
`;

export const Outline = tw(base)`
    text-gray-600 
    border-gray-300 
    border 
    dark:text-gray-400 
    focus:outline-none
    active:bg-transparent 
    hover:border-gray-500 
    focus:border-gray-500 
    active:text-gray-500 
    focus:shadow-outline-gray

    ${(props) => sizes[props.size]}

    ${(props) => (props.disabled ? 'opacity-50 cursor-not-allowed bg-gray-300' : '')}
`;

export const Link = tw(base)`
    text-gray-600 
    dark:text-gray-400 
    focus:outline-none 
    border 
    border-transparent
    active:bg-transparent 
    hover:bg-gray-100 
    focus:shadow-outline-gray 
    dark:hover:bg-gray-500 
    dark:hover:text-gray-300 
    dark:hover:bg-opacity-10

    ${(props) => sizes[props.size]}

    ${(props) => (props.disabled ? 'opacity-50 cursor-not-allowed' : '')}
`;
