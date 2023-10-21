import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element: Element, ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Route {...props} element={<Element />} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
