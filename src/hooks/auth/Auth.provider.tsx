import { useToast } from '@chakra-ui/react';
import React from 'react';
import api from 'services/axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { signInService } from './Auth.services';

import { AuthContextData, SignInData } from './Auth.types';

const cookies = new Cookies();

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
        cookies.set('token', accessToken);
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
    cookies.remove('token');
    api.clearToken();
  }, []);

  React.useEffect(() => {
    const accessToken = cookies.get('token');
    if (accessToken && !token) {
      authSuccess(accessToken);
    }
  }, [authSuccess, token]);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, isLoading, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
