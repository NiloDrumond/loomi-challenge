import React from 'react';

import '@fontsource/ubuntu';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import { outlineWithTabOnly } from 'styles/utils/outlineWithTabOnly';
import theme from './styles';
import AppRoutes from './routes';

outlineWithTabOnly();

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </>
  );
};

export default App;
