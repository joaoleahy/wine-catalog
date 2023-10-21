import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Route {...props} element={<Component />} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
