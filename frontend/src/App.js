import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import RoutesComponent from './routes/Routes';

const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Envolver o RoutesComponent com AuthProvider */}
        <RoutesComponent />
      </AuthProvider>
    </Router>
  );
};

export default App;
