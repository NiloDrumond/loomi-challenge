import { ComponentStyleConfig, theme } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  baseStyle: { fontWeight: 400, color: 'main.400' },

  variants: {
    outline: {
      borderColor: 'main.400',
      color: 'main.400',
    },
    'icon-only': (props) => ({
      ...theme.components.Button.variants.ghost(props),
      justifyContent: 'flex-start',
      px: '10px',
      '.chakra-button__icon': {
        marginInlineEnd: '0 !important',
      },
      w: '100%',
    }),
  },
};

export { Button };
