import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/auth/useAuth';
import AppLayout from 'components/AppLayout';
import AddProduct from 'pages/AddProduct';
import Home from 'pages/Home';
import Logistics from 'pages/Logistics';

const AuthenticatedRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <AppLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="catalog" element={<AddProduct />} />
        <Route path="logistics" element={<Logistics />} />
      </Routes>
    </AppLayout>
  );
};

export default AuthenticatedRoutes;
