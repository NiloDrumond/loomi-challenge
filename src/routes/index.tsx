import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import { useAuth } from '../hooks/auth/useAuth';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="app" element={<AuthenticatedRoutes />}>
        <Route index />
        <Route path="catalog" />
        <Route path="logistics" />
      </Route>
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? '/app' : '/login'} />}
      />
    </Routes>
  );
};

export default AppRoutes;
