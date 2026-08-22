import React from 'react';
import './Values.css';

const Values = () => {
  return (
    <section className="values section-padding" id="values">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Nuestros Valores</h2>
        </div>
        
        <div className="values-grid">
          <div className="value-card glass-panel">
            <div className="value-icon">❤️</div>
            <h4 className="value-title">Empatía Real</h4>
            <p>Sabemos lo que se siente empezar desde cero y tener dudas. Aquí no hay preguntas tontas ni juzgamientos; enseñamos a tu ritmo y a tu lado.</p>
          </div>
          <div className="value-card glass-panel">
            <div className="value-icon">💡</div>
            <h4 className="value-title">Claridad sin Enredos</h4>
            <p>Olvídate del lenguaje técnico e incomprensible. Te explicamos los números y los impuestos de forma sencilla, útil y al grano.</p>
          </div>
          <div className="value-card glass-panel">
            <div className="value-icon">🧘‍♀️</div>
            <h4 className="value-title">Fortaleza Interior</h4>
            <p>Creemos que para tener un negocio sano, primero necesitas una mente tranquila. Te ayudamos a gestionar el estrés y a potenciar lo mejor de ti.</p>
          </div>
          <div className="value-card glass-panel">
            <div className="value-icon">🚀</div>
            <h4 className="value-title">Acción de Verdad</h4>
            <p>No nos quedamos en teoría bonita. Cada taller te da herramientas, plantillas y pasos claros para aplicar en tu negocio desde el día uno.</p>
          </div>
        </div>

        <div className="objectives-section" id="objectives">
          <div className="text-center">
            <h2 className="section-title">Nuestros Objetivos</h2>
          </div>
          <div className="objectives-list">
            <div className="objective-item glass-panel">
              <span className="obj-number">1</span>
              <div>
                <h5>Desmitificar las finanzas y los impuestos</h5>
                <p>Eliminar el miedo a los números y a las obligaciones legales a través de un lenguaje sencillo, accesible y práctico.</p>
              </div>
            </div>
            <div className="objective-item glass-panel">
              <span className="obj-number">2</span>
              <div>
                <h5>Desarrollar el Liderazgo Emocional</h5>
                <p>Proveer dinámicas y herramientas para que el microempresario identifique sus fortalezas y gestione la frustración y la incertidumbre.</p>
              </div>
            </div>
            <div className="objective-item glass-panel">
              <span className="obj-number">3</span>
              <div>
                <h5>Garantizar la Viabilidad del Negocio</h5>
                <p>Dotar a los participantes de instrumentos clave (flujos de caja, presupuestos, planificación fiscal) que aseguren la longevidad de su empresa.</p>
              </div>
            </div>
            <div className="objective-item glass-panel">
              <span className="obj-number">4</span>
              <div>
                <h5>Impulsar la Acción Directa</h5>
                <p>Lograr que cada taller termine con un plan de acción ejecutable, reduciendo la parálisis por análisis.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Values;
