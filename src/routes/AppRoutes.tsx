import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AddProduct } from 'pages/AddProduct';
import { Home } from 'pages/Home';
import { Logistics } from 'pages/Logistics';
import { Login } from '../pages/Login';
import { useAuth } from '../hooks/auth/useAuth';
import { AuthenticatedRoute } from './AuthenticatedRoutes';

const AppRoutes = () => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="app" element={<AuthenticatedRoute />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<AddProduct />} />
        <Route path="logistics" element={<Logistics />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to={token ? '/app/logistics' : '/login'} />}
      />
    </Routes>
  );
};

export { AppRoutes };
