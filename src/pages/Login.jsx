import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Compartido con Register

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-background"></div>
      <div className="auth-container glass-panel animate-fade-in">
        <div className="auth-header text-center">
          <Link to="/" className="logo">CINNO<span>VA</span></Link>
          <h2>Iniciar Sesión</h2>
          <p className="text-muted">Bienvenido de nuevo a tu aula virtual</p>
        </div>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="tu@correo.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Recordarme
            </label>
            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
          <Link to="/classroom" className="btn-primary w-100 text-center" style={{marginTop: '1rem', display: 'block'}}>Entrar al Aula</Link>
        </form>
        
        <div className="auth-footer text-center">
          <p>¿No tienes una cuenta? <Link to="/register" className="text-highlight">Regístrate aquí</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
