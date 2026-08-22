import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-background"></div>
      <div className="auth-container glass-panel animate-fade-in">
        <div className="auth-header text-center">
          <Link to="/" className="logo">CINNO<span>VA</span></Link>
          <h2>Crear Cuenta</h2>
          <p className="text-muted">Inicia tu camino hacia el éxito empresarial</p>
        </div>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input type="text" id="name" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="tu@correo.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar Contraseña</label>
            <input type="password" id="confirm-password" placeholder="••••••••" required />
          </div>
          <Link to="/classroom" className="btn-primary w-100 text-center" style={{marginTop: '1rem', display: 'block'}}>Registrarme</Link>
        </form>
        
        <div className="auth-footer text-center">
          <p>¿Ya tienes una cuenta? <Link to="/login" className="text-highlight">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
