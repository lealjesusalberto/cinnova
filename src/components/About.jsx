import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        
        {/* Historia */}
        <div className="history-section animate-fade-in">
          <div className="history-content glass-panel">
            <h2 className="section-title">Nuestra Historia</h2>
            <p className="history-quote">
              "Después de más de 20 años trabajando codo a codo con empresas de todos los tamaños, descubrí un patrón doloroso: muchos negocios con ideas brillantes terminaban en pérdidas o, peor aún, cerrando sus puertas. ¿La razón? El desconocimiento de las finanzas, el miedo a los impuestos y la falta de herramientas emocionales para gestionar la incertidumbre y el temor al fracaso."
            </p>
            <p className="history-text">
              Ver el potencial desperdiciado y la parálisis que provoca el miedo encendió en mí un sueño personal: alfabetizar financieramente a las empresas, a su gente y a cada persona con una idea de negocio.
            </p>
            <p className="history-text highlight">
              <strong>ABC EMPRE</strong> nace de ese sueño. Nace para recordarte que no tienes que pasar por este camino a ciegas ni con temor. Existimos para ayudarte a descubrir esa fuerza interior que ya tienes, y convertirla en la palanca que impulse y sostenga tu emprendimiento hasta transformarlo en una empresa sólida, exitosa y real.
            </p>
          </div>
        </div>

        {/* Mision y Vision */}
        <div className="mv-grid" id="mission">
          <div className="glass-panel mv-card">
            <h3 className="card-title">Misión</h3>
            <p>
              Empoderar a emprendedores y microempresarios a través de una formación integral que fusiona la maestría financiera y tributaria con el desarrollo de la inteligencia emocional. Transformamos ideas y miedos en empresas sólidas, estructuradas y exitosas, brindando las herramientas prácticas necesarias para liderar con confianza y propósito.
            </p>
            <p>
              Acompañamos a emprendedores y microempresarios a perderle el miedo a las finanzas y los tributos. Combinamos herramientas prácticas de gestión con el desarrollo de tu inteligencia emocional para que descubras tus fortalezas, tomes el control de tu negocio y transformes tus ideas en una empresa sólida, próspera y sin limites.
            </p>
          </div>
          <div className="glass-panel mv-card">
            <h3 className="card-title">Visión</h3>
            <p>
              Ser la plataforma de aprendizaje y mentoría líder para el ecosistema emprendedor, reconocida por humanizar las finanzas y los tributos. Aspiramos a ver un mercado lleno de empresas sostenibles y emocionalmente inteligentes que impulsen el desarrollo económico y social.
            </p>
            <p>
              Ser la comunidad y el espacio de formación donde los emprendedores encuentran la confianza, la claridad financiera y la fuerza emocional para construir negocios reales que transformen sus vidas y el mundo a su alrededor.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
