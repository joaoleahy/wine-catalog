import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import WineCatalog from '../components/WineCatalog';
import WineDetailsPage from '../pages/WineDetailsPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/AboutPage';
import GrapesPage from '../pages/GrapesPage';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <WineCatalog />
          </PrivateRoute>
        }
      />
      <Route
        path="/wine/:id"
        element={
          <PrivateRoute>
            <WineDetailsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/grapes"
        element={
          <PrivateRoute>
            <GrapesPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesComponent;
