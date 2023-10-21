import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const { login } = useAuth();
  const { user, isAuthenticated } = useAuth();
  console.log('user:', user);
  console.log('isAuthenticated:', isAuthenticated);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.username, formData.password);
      navigate('/wines');
    } catch (error) {
      setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome de Usuário ou E-mail:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Não possui uma conta? <Link to="/register">Registre-se aqui</Link>.
      </p>
    </div>
  );
};

export default LoginPage;
