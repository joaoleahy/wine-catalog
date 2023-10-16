import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verificar se o usuário está autenticado (simulando uma chamada à API)
    const isAuthenticated = localStorage.getItem('token');
    if (isAuthenticated) {
      setUser({ username: 'user123' });
    }
  }, []);

  const login = (username, password) => {
    // Simular uma chamada à API para autenticação
    if (username === 'user' && password === 'password') {
      localStorage.setItem('token', 'fakeToken'); // Armazenar token no localStorage (não seguro em produção)
      setUser({ username });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
