import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          CINNO<span>VA</span>
        </Link>
        <div className="nav-links">
          <a href="#about">Nosotros</a>
          <a href="#products">Nuestras Áreas</a>
          <a href="#values">Valores</a>
          <a href="#objectives">Objetivos</a>
        </div>
        <Link to="/login" className="btn-primary">Acceder al Aula</Link>
      </div>
    </nav>
  );
};

export default Navbar;
