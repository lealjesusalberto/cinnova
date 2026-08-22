import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  return (
    <section className="products section-padding" id="products">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Nuestras Áreas</h2>
          <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto 3rem auto'}}>
            Descubre los programas y plataformas que conforman el ecosistema de Cinnova para ayudarte a impulsar tu crecimiento personal y financiero.
          </p>
        </div>
        
        <div className="products-grid">
          <div className="product-card glass-panel">
            <h3 className="product-brand">ABC <span>EMPRE</span></h3>
            <p className="product-desc">Área especializada para formar y capacitar a microemprendedores en el inicio y consolidación de sus negocios.</p>
            <Link to="/programa" className="btn-secondary w-100" style={{display: 'inline-block', textAlign: 'center'}}>Ver Programa</Link>
          </div>
          
          <div className="product-card glass-panel highlight-card">
            <h3 className="product-brand">ABC <span>TyF</span></h3>
            <p className="product-desc">Nuestra área de Tributo y Finanzas diseñada para asesorarte y capacitarte en materia fiscal y contable.</p>
            <Link to="/servicios" className="btn-secondary w-100" style={{display: 'inline-block', textAlign: 'center'}}>Ver Servicios</Link>
          </div>
          
          <div className="product-card glass-panel">
            <h3 className="product-brand">ABC <span>EVA</span></h3>
            <p className="product-desc">Entorno Virtual de Aprendizaje. Tu aula virtual donde encontrarás todos nuestros cursos, plantillas y sesiones.</p>
            <Link to="/login" className="btn-primary w-100" style={{display: 'inline-block', textAlign: 'center'}}>Ir al Aula Virtual</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
