import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text-container animate-fade-in">
          <h1 className="hero-title">
            Bienvenidos a <span className="text-highlight">Cinnova</span>
          </h1>
          <p className="hero-subtitle">
            El ecosistema de transformación financiera y emocional. Pierde el miedo a las finanzas, los tributos y toma el control de tu negocio a través de nuestras áreas especializadas.
          </p>
          <div className="hero-cta">
            <button className="btn-primary pulse-btn">Empieza tu Transformación</button>
            <button className="btn-secondary">Conoce Nuestra Mentoría</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
