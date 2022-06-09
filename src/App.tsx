import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import theme from './styles';

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </>
  );
};

export default App;
