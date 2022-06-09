import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: { fontWeight: 400 },
  variants: {
    outline: {
      borderColor: 'main.400',
      color: 'main.400',
    },
  },
};
