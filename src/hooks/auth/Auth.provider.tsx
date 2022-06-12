import { useToast } from '@chakra-ui/react';
import React from 'react';
import api from 'services/axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { signInService } from './Auth.services';

import { AuthContextData, SignInData } from './Auth.types';

const cookies = new Cookies();

const TOKEN_COOKIE_KEY = '@Loomi.Challenge:token';

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData,
);

const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [token, setToken] = React.useState<string | undefined>(undefined);

  const authSuccess = React.useCallback(
    (accessToken: string) => {
      setToken(accessToken);
      api.setToken(`Bearer ${accessToken}`);

      navigate({ pathname: '/app' });
    },
    [navigate],
  );

  const signIn = React.useCallback(
    async (data: SignInData) => {
      setIsLoading(true);
      try {
        const accessToken = await signInService(data);
        cookies.set(TOKEN_COOKIE_KEY, accessToken);
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
    setToken(undefined);
    cookies.remove(TOKEN_COOKIE_KEY);
    api.clearToken();
  }, []);

  React.useEffect(() => {
    const accessToken = cookies.get(TOKEN_COOKIE_KEY);
    if (accessToken && !token) {
      authSuccess(accessToken);
    }
  }, [authSuccess, token]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, isLoading, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
