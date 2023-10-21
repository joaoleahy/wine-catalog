import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import WineCatalog from '../components/WineCatalog';
import WineDetailsPage from '../pages/WineDetailsPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AboutPage from '../pages/AboutPage';
import GrapesPage from '../pages/GrapesPage';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated); // Adicione este console.log para verificar o valor de isAuthenticated
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/wines"
        element={
          <PrivateRoute element={<WineCatalog />} />
        }
      />
      <Route path="/wine/:id" element={<WineDetailsPage />} />
      <Route path="/grapes" element={<GrapesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesComponent;
