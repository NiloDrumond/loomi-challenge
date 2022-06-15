import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth.provider';
import { UseAuthenticatedData } from './Auth.types';

function useAuthenticated(): UseAuthenticatedData {
  const { token, ...rest } = useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate({ pathname: '/login' });
    }
  }, [navigate, token]);

  return { token: '', ...rest };
}

export { useAuthenticated };
