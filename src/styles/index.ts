import {
  ChakraTheme,
  extendTheme,
  theme as defaultTheme,
  withDefaultVariant,
} from '@chakra-ui/react';
import { colors } from './theme/colors';
import { forms } from './forms';
import { typography } from './typography';

const theme = extendTheme(
  {
    colors,
    components: {
      ...forms,
      ...typography,
    },
    styles: {
      global: () => ({
        ...defaultTheme.styles,
        'body > #root': {
          height: '100vh',
          width: '100vw',
          display: 'flex',
          color: 'text.400',
          fontFamily: "'Ubuntu', sans-serif",
        },
        '*': {
          boxSizing: 'border-box',
        },
      }),
    },
    fonts: {
      body: "'Ubuntu', sans-serif",
      heading: "'Ubuntu', sans-serif",
    },
  } as Partial<ChakraTheme>,
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'NumberInput', 'PinInput'],
  }),
);

export default theme;
