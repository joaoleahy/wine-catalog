import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WineCatalog from '../components/WineCatalog';
import WineDetailsPage from '../pages/WineDetailsPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<WineCatalog />} />
      <Route path="/wine/:id" element={<WineDetailsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesComponent;
