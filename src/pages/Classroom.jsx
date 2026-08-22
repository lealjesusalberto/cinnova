import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Classroom.css';

const Classroom = () => {
  const [activeModule, setActiveModule] = useState(1);
  const [viewState, setViewState] = useState('grid'); // 'grid' | 'video'

  const courses = [
    { id: 1, title: 'Inteligencia Emocional', progress: 25, img: '🧠' },
    { id: 2, title: 'Finanzas Básicas', progress: 0, img: '💰' },
    { id: 3, title: 'Flujo de Caja', progress: 0, img: '📈' },
    { id: 4, title: 'Planificación Fiscal', progress: 0, img: '🏛️' }
  ];

  const handleCourseClick = (id) => {
    setActiveModule(id);
    setViewState('video');
  };

  return (
    <div className="classroom-layout">
      {/* Sidebar */}
      <aside className="classroom-sidebar glass-panel">
        <div className="sidebar-header">
          <Link to="/" className="logo">ABC <span>EVA</span></Link>
        </div>
        <div className="user-profile">
          <div className="avatar">A</div>
          <div>
            <h4>Alumno Emprendedor</h4>
            <p className="text-muted" style={{fontSize: '0.8rem'}}>Plan Premium</p>
          </div>
        </div>
        <nav className="module-nav">
          <h5 className="nav-title">MÓDULOS DEL CURSO</h5>
          <ul>
            <li className={activeModule === 1 ? 'active' : ''} onClick={() => setActiveModule(1)}>
              <span className="mod-number">01</span> Inteligencia Emocional
            </li>
            <li className={activeModule === 2 ? 'active' : ''} onClick={() => setActiveModule(2)}>
              <span className="mod-number">02</span> Finanzas Básicas
            </li>
            <li className={activeModule === 3 ? 'active' : ''} onClick={() => setActiveModule(3)}>
              <span className="mod-number">03</span> Flujo de Caja
            </li>
            <li className={activeModule === 4 ? 'active' : ''} onClick={() => setActiveModule(4)}>
              <span className="mod-number">04</span> Planificación Fiscal
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <Link to="/" className="logout-btn">⇦ Volver al Inicio</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="classroom-content">
        
        {viewState === 'grid' ? (
          <div className="courses-grid-view">
            <h2 style={{color: 'var(--accent-gold)', marginBottom: '2rem'}}>Mis Cursos</h2>
            <div className="courses-grid">
              {courses.map(course => (
                <div key={course.id} className="course-card glass-panel" onClick={() => handleCourseClick(course.id)}>
                  <div className="course-icon">{course.img}</div>
                  <h3 className="course-title">{course.title}</h3>
                  <div className="progress-bar-container w-100 mt-auto">
                    <span className="progress-text" style={{textAlign: 'left'}}>Progreso: {course.progress}%</span>
                    <div className="progress-bg">
                      <div className="progress-fill" style={{width: `${course.progress}%`}}></div>
                    </div>
                  </div>
                  <button className="btn-secondary w-100" style={{marginTop: '1rem'}}>
                    {course.progress > 0 ? 'Continuar Curso' : 'Iniciar Curso'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="video-view">
            <header className="content-header">
              <div>
                <button className="btn-back" onClick={() => setViewState('grid')}>← Volver a cursos</button>
                <h2 style={{marginTop: '1rem'}}>Módulo {activeModule}: {courses.find(c => c.id === activeModule)?.title}</h2>
              </div>
              <div className="progress-bar-container">
                <span className="progress-text">Progreso: {courses.find(c => c.id === activeModule)?.progress}%</span>
                <div className="progress-bg">
                  <div className="progress-fill" style={{width: `${courses.find(c => c.id === activeModule)?.progress}%`}}></div>
                </div>
              </div>
            </header>

        <div className="video-container glass-panel">
          <div className="video-placeholder">
            <div className="play-btn">▶</div>
            <p>El video se reproducirá aquí</p>
          </div>
        </div>

          <div className="lesson-details glass-panel">
            <h3>Material de Apoyo</h3>
            <p className="text-muted">Descarga las plantillas y herramientas necesarias para aplicar este módulo en tu negocio.</p>
            <div className="resources-list">
              <button className="btn-secondary">📄 Plantilla Excel</button>
              <button className="btn-secondary">📘 Guía en PDF</button>
            </div>
          </div>
        </div>
        )}
      </main>
    </div>
  );
};

export default Classroom;
