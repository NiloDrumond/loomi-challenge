import { ChakraTheme, extendTheme, withDefaultVariant } from '@chakra-ui/react';
import { colors } from './theme/colors';
import { forms } from './forms';
import { typography } from './typography';
import { feedback } from './feedback';
import { thirdParty } from './thirdParty';

const theme = extendTheme(
  {
    colors,
    shadows: {
      float: '0px 0px 20px #0000001A',
      strongFloat: '0px 0px 40px #00000050',
    },
    components: {
      ...forms,
      ...typography,
      ...feedback,
    },
    styles: {
      global: () => ({
        // ...defaultTheme.styles,
        ...thirdParty,
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
