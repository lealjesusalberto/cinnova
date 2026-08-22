import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', background: 'var(--primary-blue)', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
      <div className="container">
        <h2 className="logo" style={{ marginBottom: '1rem' }}>
          CINNO<span>VA</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Transformando ideas y miedos en empresas sólidas y exitosas.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Cinnova. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
