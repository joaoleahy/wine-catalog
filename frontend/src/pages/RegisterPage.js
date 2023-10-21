import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    // Adicione validações de entrada aqui se necessário
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
    
    try {
      await register(formData.username, formData.email, formData.password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-form">
      <h2>Registre-se</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome de Usuário:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
        <div className="form-group">
          <label>Confirme a Senha:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <p>
        Já possui uma conta? <Link to="/login">Faça login aqui</Link>.
      </p>
    </div>
  );
};

export default RegisterPage;
