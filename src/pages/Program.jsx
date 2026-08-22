import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Program = () => {
  return (
    <>
      <Navbar />
      <section className="section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
        <div className="container">
          <div className="glass-panel text-center animate-fade-in" style={{maxWidth: '800px', margin: '0 auto'}}>
            <h1 className="section-title" style={{marginBottom: '2rem'}}>ABC <span style={{color: 'var(--accent-gold)'}}>EMPRE</span></h1>
            <h3 style={{color: 'var(--text-main)', marginBottom: '1.5rem'}}>Formación para Microemprendedores</h3>
            <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              Aquí encontrarás todo el detalle del programa de formación, los módulos presenciales y virtuales, mentorías y el paso a paso para consolidar tu negocio con inteligencia emocional y financiera.
            </p>
            <button className="btn-primary">Descargar Sílabo</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Program;
