import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import Logistics from 'pages/Logistics';
import Login from '../pages/Login';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import { useAuth } from '../hooks/auth/useAuth';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="app" element={<AuthenticatedRoutes />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="logistics" element={<Logistics />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? '/app' : '/login'} />}
      />
    </Routes>
  );
};

export default AppRoutes;
