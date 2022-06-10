import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/auth/useAuth';
import AppLayout from 'components/AppLayout';

const AuthenticatedRoutes: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <AppLayout>{children}</AppLayout>;
};

export default AuthenticatedRoutes;
