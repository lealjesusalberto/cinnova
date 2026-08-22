import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
        <div className="container">
          <div className="glass-panel text-center animate-fade-in" style={{maxWidth: '800px', margin: '0 auto', border: '1px solid rgba(212, 175, 55, 0.3)'}}>
            <h1 className="section-title" style={{marginBottom: '2rem'}}>ABC <span style={{color: 'var(--accent-gold)'}}>TyF</span></h1>
            <h3 style={{color: 'var(--text-main)', marginBottom: '1.5rem'}}>Tributo y Finanzas</h3>
            <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              Asesoría especializada, planificación fiscal y acompañamiento contable para que tu empresa cumpla con la ley mientras optimiza sus recursos financieros de forma estratégica.
            </p>
            <button className="btn-primary">Agendar Asesoría</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
