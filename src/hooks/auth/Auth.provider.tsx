import { useToast } from '@chakra-ui/react';
import React from 'react';
import { api } from 'services/axios';
import Cookies from 'universal-cookie';
import { signInService } from './Auth.services';

import { AuthContextData, SignInData } from './Auth.types';

const cookies = new Cookies();

const TOKEN_COOKIE_KEY = '@Loomi.Challenge:token';

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = React.useState(true);
  const [token, setToken] = React.useState<string | undefined>(undefined);

  const authSuccess = React.useCallback((accessToken: string) => {
    setToken(accessToken);
    api.setToken(`Bearer ${accessToken}`);
  }, []);

  const signIn = React.useCallback(
    async (data: SignInData) => {
      setIsLoading(true);
      try {
        const accessToken = await signInService(data);
        cookies.set(TOKEN_COOKIE_KEY, accessToken, { path: '/' });
        authSuccess(accessToken);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        toast({
          position: 'top-left',
          title: 'Falha ao autenticar',
          status: 'error',
          isClosable: true,
        });
      }
    },
    [toast, authSuccess],
  );

  const signOut = React.useCallback(() => {
    cookies.remove(TOKEN_COOKIE_KEY, { path: '/' });
    setToken(undefined);
    api.clearToken();
  }, []);

  React.useEffect(() => {
    const accessToken = cookies.get(TOKEN_COOKIE_KEY);
    if (accessToken && !token) {
      authSuccess(accessToken);
    }
    setIsLoading(false);
  }, [authSuccess, token]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, isLoading, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
