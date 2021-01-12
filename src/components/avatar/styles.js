import tw from 'tailwind-styled-components';

const sizes = {
  large: 'w-11 h-11',
  medium: 'w-9 h-9',
  small: 'w-7 h-7',
};

export const Wrapper = tw.div`
    relative 
    rounded-full 
    inline-block
    ${(props) => sizes[props.size]}
`;
