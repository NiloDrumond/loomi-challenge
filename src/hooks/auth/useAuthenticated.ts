import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth.provider';
import { UseAuthenticatedData } from './Auth.types';

function useAuthenticated(): UseAuthenticatedData {
  const { token, isLoading, ...rest } = useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate({ pathname: '/login' });
    }
  }, [navigate, token, isLoading]);

  return { token: '', isLoading, ...rest };
}

export { useAuthenticated };
