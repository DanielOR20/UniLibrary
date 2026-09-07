import { useState, useEffect } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import './Home.css';

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Estado para pausar el carrusel

  const quickAccess = [
    { title: 'Carreras Universitarias', desc: 'Bachilleratos, licenciaturas y posgrados.', action: 'Explorar' },
    { title: 'Proceso de Admisión', desc: 'Requisitos y convalidaciones 100% en línea.', action: 'Ver pasos' },
    { title: 'Becas y Financiamiento', desc: 'Planes de pago flexibles y apoyo al talento.', action: 'Conocer becas' },
    { title: 'Portal Estudiantil', desc: 'Acceso directo a tu aula virtual y notas.', action: 'Ingresar' }
  ];

  const faculties = [
    {
      area: 'Ingenierías',
      badge: 'Alta Demanda',
      badgeColor: 'badge-blue',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
      desc: 'Infraestructura, automatización e innovación de procesos productivos.',
      careers: ['Sistemas de Computación', 'Electromecánica', 'Industrial', 'Civil']
    },
    {
      area: 'Tecnologías de Información',
      badge: 'Vanguardia',
      badgeColor: 'badge-berry',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
      desc: 'Datos masivos, ciberseguridad y sistemas predictivos.',
      careers: ['Ciberseguridad y Redes', 'Inteligencia Artificial', 'Ciencia de Datos', 'Cloud & DevOps']
    },
    {
      area: 'Ciencias Económicas & Negocios',
      badge: 'Internacional',
      badgeColor: 'badge-teal',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      desc: 'Liderazgo empresarial, fintech y transformación digital.',
      careers: ['Administración Tecnológica', 'Marketing Digital', 'Contaduría Pública', 'Finanzas & FinTech']
    },
    {
      area: 'Diseño & Comunicación',
      badge: 'Creatividad',
      badgeColor: 'badge-blue',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80',
      desc: 'Narrativas interactivas, interfaces UI/UX y medios visuales.',
      careers: ['Diseño Publicitario', 'Animación Digital 3D', 'Diseño UI/UX', 'Producción Multimedia']
    },
    {
      area: 'Ciencias Sociales & Humanidades',
      badge: 'Liderazgo',
      badgeColor: 'badge-teal',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
      desc: 'Marco legal contemporáneo, psicología y talento humano.',
      careers: ['Derecho Corporativo & Tech', 'Psicología Organizacional', 'Talento Humano', 'Relaciones Internacionales']
    },
    {
      area: 'Educación & Idiomas',
      badge: 'Bilingüe',
      badgeColor: 'badge-berry',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80',
      desc: 'Competencias pedagógicas interactivas y certificaciones globales.',
      careers: ['Enseñanza de STEM', 'Inglés Profesional (B1-C1)', 'Tecnologías de Educación', 'Certificaciones Cambridge']
    }
  ];

  const maxSlides = faculties.length - 3;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxSlides));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxSlides ? prev + 1 : 0));
  };

  // Temporizador para mover el carrusel automáticamente
  useEffect(() => {
    if (isPaused) return; // Si el mouse está encima, no avanza

    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // 4000 milisegundos = 4 segundos

    return () => clearInterval(timer);
  }, [currentIndex, maxSlides, isPaused]);

  const stats = [
    { num: '+25', label: 'Carreras Acreditadas', sub: 'Certificación de calidad nacional' },
    { num: '+8,500', label: 'Estudiantes Activos', sub: 'Formando talento en todo el país' },
    { num: '+180', label: 'Docentes Especialistas', sub: 'Líderes activos en la industria' },
    { num: '+20', label: 'Años de Liderazgo', sub: 'Compromiso académico superior' }
  ];

  return (
    <div className="home-container">
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="hero-innovatec">
        <div className="hero-content-wrapper">
          <div className="hero-badge">
            <span className="dot-pulse"></span> CONSTRUYE TU FUTURO • ADMISIONES 2026 ABIERTAS
          </div>
          <h1 className="hero-title">
            Transforma tu futuro con educación e innovación tecnológica
          </h1>
          <p className="hero-desc">
            Impulsamos tu talento con metodología práctica STEM, laboratorios de última generación
            y planes de estudio alineados a las demandas globales.
          </p>
          <div className="hero-cta-group">
            <a href="#carreras" className="btn-primary-action">
              Conoce nuestras carreras
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contacto-asesor" className="btn-secondary-action">Solicita información</a>
          </div>
          <div className="hero-seals">
            <span>Acreditación Oficial SINAES</span>
            <span className="divider">•</span>
            <span>Excelencia Académica Regional</span>
          </div>
        </div>
      </section>

      {/* 2. ACCESOS RÁPIDOS */}
      <section className="quick-access-section">
        <div className="quick-grid">
          {quickAccess.map((card, idx) => (
            <div key={idx} className="quick-card">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className="quick-link">
                {card.action}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CARRUSEL ESTILO FIDÉLITAS */}
      <section className="faculties-section" id="carreras">
        <div className="section-title-wrap centered">
          <span className="section-eyebrow">FORMACIÓN DE EXCELENCIA</span>
          <h2>Encuentra la carrera para tu futuro</h2>
          <p>Planes cuatrimestrales estructurados con tecnología integrada.</p>
        </div>

        <div 
          className="carousel-relative-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botones de navegación laterales */}
          <button onClick={prevSlide} className="arrow-btn btn-prev" aria-label="Anterior">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <button onClick={nextSlide} className="arrow-btn btn-next" aria-label="Siguiente">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div className="carousel-window">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 33.3333}%)` }}
            >
              {faculties.map((fac, idx) => (
                <div key={idx} className="carousel-slide-item">
                  <div className="faculty-card">
                    {/* Imagen de portada de la tarjeta */}
                    <div className="faculty-img-wrap">
                      <img src={fac.image} alt={fac.area} />
                      <span className={`faculty-badge ${fac.badgeColor}`}>{fac.badge}</span>
                    </div>

                    <div className="faculty-card-body">
                      <h3>{fac.area}</h3>
                      <p>{fac.desc}</p>
                      
                      <ul className="career-list">
                        {fac.careers.map((c, i) => (
                          <li key={i}>
                            <svg className="check-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>

                      <a href="#ver" className="faculty-link">
                        Ver carreras del área
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Puntos de navegación */}
        <div className="carousel-dots">
          {Array.from({ length: maxSlides + 1 }).map((_, i) => (
            <span 
              key={i} 
              className={`dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </section>

      {/* 4. PROPUESTA STEM */}
      <section className="stem-section">
        <div className="stem-grid">
          <div className="stem-image-col">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
              alt="Estudiantes en laboratorio" 
              className="stem-img"
            />
            <div className="stem-floating-badge">
              <strong>94%</strong>
              <span>Empleabilidad en el primer año</span>
            </div>
          </div>

          <div className="stem-info-col">
            <span className="section-eyebrow">¿POR QUÉ ESTUDIAR CON NOSOTROS?</span>
            <h2>Una formación diseñada para el éxito profesional</h2>
            <p>Conectamos la teoría con la práctica desde el primer cuatrimestre con modelo STEM.</p>

            <div className="pillars-grid">
              <div className="pillar-item">
                <h4>Metodología Práctica STEM</h4>
                <p>Resolución de proyectos reales y aprendizaje colaborativo.</p>
              </div>
              <div className="pillar-item">
                <h4>Profesores con Experiencia</h4>
                <p>Líderes activos en el mercado corporativo y tecnológico.</p>
              </div>
              <div className="pillar-item">
                <h4>Laboratorios Modernos</h4>
                <p>Robótica, cómputo avanzado y simulación clínica.</p>
              </div>
              <div className="pillar-item">
                <h4>Formación para el Mercado</h4>
                <p>Convenios con multinacionales y bolsa de empleo activa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VIDA UNIVERSITARIA */}
      <section className="campus-life-section" id="vida-universitaria">
        <div className="section-title-wrap centered">
          <span className="section-eyebrow">COMUNIDAD & VIDA ESTUDIANTIL</span>
          <h2>Una experiencia que va más allá de las aulas</h2>
        </div>
        <div className="campus-life-grid">
          <div className="life-card">
            <h3>Tecnología de Punta</h3>
            <p>Campus hiperconectado con fibra óptica, aulas inteligentes y licencias profesionales gratuitas.</p>
          </div>
          <div className="life-card">
            <h3>Innovación & Emprendimiento</h3>
            <p>Centro de incubación, hackathons anuales y retos con empresas del sector productivo.</p>
          </div>
          <div className="life-card">
            <h3>Vida Universitaria Activa</h3>
            <p>Clubes de robótica, deportes, voluntariado social y ferias estudiantiles periódicas.</p>
          </div>
        </div>
      </section>

      {/* 6. MÉTRICAS */}
      <section className="metrics-banner">
        <div className="metrics-grid">
          {stats.map((st, i) => (
            <div key={i} className="metric-box">
              <h2>{st.num}</h2>
              <h4>{st.label}</h4>
              <p>{st.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MODALIDADES */}
      <section className="modalities-section">
        <div className="section-title-wrap">
          <span className="section-eyebrow">FLEXIBILIDAD Y COBERTURA</span>
          <h2>Estudia a tu manera</h2>
          <p>Elige la modalidad que calce con tu ritmo y compromisos.</p>
        </div>

        <div className="modalities-grid">
          <div className="modality-card">
            <h3>Modalidad Presencial</h3>
            <p>Clases directas en campus con acceso diario a laboratorios y biblioteca física.</p>
            <ul>
              <li>Interacción cara a cara</li>
              <li>Laboratorios especializados</li>
              <li>Talleres extracurriculares</li>
            </ul>
          </div>
          <div className="modality-card featured">
            <span className="pop-badge">Más Elegida</span>
            <h3>Modalidad 100% Virtual</h3>
            <p>Autonomía total a través del campus digital UniLibrary disponible 24/7.</p>
            <ul>
              <li>Flexibilidad horaria</li>
              <li>Clases grabadas de consulta</li>
              <li>Tutorías virtuales continuas</li>
            </ul>
          </div>
          <div className="modality-card">
            <h3>Modalidad Híbrida</h3>
            <p>Teoría en línea y sesiones prácticas los fines de semana en laboratorios.</p>
            <ul>
              <li>Equilibrio vida-estudio</li>
              <li>Sesiones prácticas guiadas</li>
              <li>Networking estratégico</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="final-cta" id="contacto-asesor">
        <div className="cta-box-inner">
          <span className="cta-chip">MATRÍCULA 100% EN LÍNEA</span>
          <h2>Tu futuro comienza hoy</h2>
          <p>Comunícate con un asesor y formaliza tu ingreso en minutos.</p>
          <div className="cta-btns">
            <a href="#carreras" className="btn-cta-white">Explorar Carreras</a>
            <a href="https://wa.me/50625008000" target="_blank" rel="noreferrer" className="btn-cta-green">
              Asesoría por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};