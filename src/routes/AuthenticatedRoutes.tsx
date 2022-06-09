import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { useAuth } from '../hooks/auth/useAuth';

const AuthenticatedRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
