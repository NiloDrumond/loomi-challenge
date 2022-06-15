import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/auth/useAuth';
import { AppLayout } from 'components/AppLayout';
import { UserProvider } from 'hooks/user/User.provider';
import { Center, Spinner } from '@chakra-ui/react';

const AuthenticatedRoute = () => {
  const { token, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <UserProvider>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </UserProvider>
  );
};

export { AuthenticatedRoute };
