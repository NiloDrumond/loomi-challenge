import React from 'react';

import '@fontsource/ubuntu';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import theme from './styles';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Login />
      </ChakraProvider>
    </>
  );
};

export default App;
