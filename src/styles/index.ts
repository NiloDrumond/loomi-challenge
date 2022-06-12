import { ChakraTheme, extendTheme, withDefaultVariant } from '@chakra-ui/react';
import { colors } from './theme/colors';
import { forms } from './forms';
import { typography } from './typography';
import { charts } from './charts';

const theme = extendTheme(
  {
    colors,
    shadows: {
      float: '0px 0px 20px #0000001A',
    },
    components: {
      ...forms,
      ...typography,
    },
    styles: {
      global: () => ({
        // ...defaultTheme.styles,
        ...charts,
        'body > #root': {
          height: '100vh',
          width: '100vw',
          display: 'flex',
          color: 'main.300',
          fontFamily: "'Ubuntu', sans-serif",
        },
        '*': {
          boxSizing: 'border-box',
        },
        'body.using-mouse *:focus': {
          boxShadow: 'none !important',
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
    components: ['Input', 'NumberInput', 'PinInput', 'Textarea', 'Select'],
  }),
  withDefaultVariant({
    variant: 'ghost',
    components: ['IconButton', 'Button'],
  }),
);

export default theme;
