import React from 'react';

import '@fontsource/ubuntu';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import { outlineWithTabOnly } from 'styles/utils/outlineWithTabOnly';
import AuthProvider from 'hooks/auth/Auth.provider';
import theme from './styles';
import AppRoutes from './routes';

outlineWithTabOnly();

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
