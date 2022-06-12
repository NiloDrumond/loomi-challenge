import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/auth/useAuth';
import AppLayout from 'components/AppLayout';
import UserProvider from 'hooks/user/User.provider';

const AuthenticatedRoute = () => {
  const { token } = useAuth();
  const location = useLocation();

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

export default AuthenticatedRoute;
