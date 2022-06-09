import React from 'react';

import '@fontsource/ubuntu';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles';
import AppRoutes from './routes';

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
