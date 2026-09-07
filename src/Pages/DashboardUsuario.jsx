// src/Pages/DashboardUsuario.jsx
import React, { useState, useEffect, useContext } from 'react';
import { AuthContextUsuario } from '../Context/AuthContextUsuario';
import { NavbarUsuario } from '../Components/NavbarUsuario';
import { CardCursoUsuario } from '../Components/CardCursoUsuario';
import { getRecursosUsuario, crearRecursoUsuario, eliminarRecursoUsuario } from '../Services/apiUsuario';

export const DashboardUsuario = () => {
  const { userUsuario } = useContext(AuthContextUsuario);
  const [cursosUsuario, setCursosUsuario] = useState([]);
  const [filtroUsuario, setFiltroUsuario] = useState('all');
  const [nuevoCursoUsuario, setNuevoCursoUsuario] = useState({ title: '', code: '', type: 'presencial' });

  // Estados interactivos para libros y módulos
  const [prestamos, setPrestamos] = useState([
    { id: 1, cota: 'QA-303.2-P48', title: 'Computer Networks: A Systems Approach (6th Ed.)', author: 'Larry L. Peterson & Bruce S. Davie', campus: 'Campus Central', dueDate: 'Jueves 28 Feb', urgent: true, renovado: false },
    { id: 2, cota: 'QA-76.76-C54', title: "Clean Architecture: A Craftsman's Guide", author: 'Robert C. Martin', campus: 'Campus Central', dueDate: '10 Marzo 2026', urgent: false, renovado: false }
  ]);

  const [modalActivo, setModalActivo] = useState(null); // 'carne', 'estadoCuenta', 'constancia', 'matricula', 'tramite', 'fichaLibro'
  const [modalData, setModalData] = useState(null);
  const [notificacion, setNotificacion] = useState('');

  const mostrarNotificacion = (msj) => {
    setNotificacion(msj);
    setTimeout(() => setNotificacion(''), 4000);
  };

  const ponderadoNum = Number(userUsuario?.ponderado || 93.8);
  const creditosAprobadosNum = Number(userUsuario?.creditosAprobados || 84);
  const creditosTotalesNum = Number(userUsuario?.creditosTotales || 120);
  const asistenciaNum = Number(userUsuario?.asistencia || 98);
  const porcentajeCreditos = Math.round((creditosAprobadosNum / creditosTotalesNum) * 100);

  const cargarCursos = async () => {
    try {
      const data = await getRecursosUsuario();
      setCursosUsuario(data);
    } catch (err) {
      console.error('Error al cargar asignaturas:', err);
    }
  };

  useEffect(() => {
    cargarCursos();
  }, []);

  const handleCrearCurso = async (e) => {
    e.preventDefault();
    if (!nuevoCursoUsuario.title.trim() || !nuevoCursoUsuario.code.trim()) return;

    const cursoNuevo = {
      ...nuevoCursoUsuario,
      professor: 'Docente Asignado',
      classroom: 'Aula Por Definir',
      schedule: 'Por Asignar',
      progress: 0,
      ownerId: userUsuario?.id || "2"
    };

    await crearRecursoUsuario(cursoNuevo);
    setNuevoCursoUsuario({ title: '', code: '', type: 'presencial' });
    cargarCursos();
  };

  const handleEliminarCurso = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar esta asignatura?')) {
      await eliminarRecursoUsuario(id);
      cargarCursos();
    }
  };

  const handleRenovarPrestamo = (id) => {
    setPrestamos(prestamos.map(p => {
      if (p.id === id) {
        mostrarNotificacion(`¡Préstamo renovado con éxito para "${p.title}"! +7 días adicionales.`);
        return { ...p, urgent: false, renovado: true, dueDate: '17 Marzo 2026' };
      }
      return p;
    }));
  };

  const cursosFiltrados = cursosUsuario.filter(c => {
    if (filtroUsuario === 'presencial') return c.type === 'presencial';
    if (filtroUsuario === 'virtual') return c.type === 'virtual';
    return true;
  });

  const avatarUrl = userUsuario?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(userUsuario?.name || 'Usuario')}&background=00346a&color=fff`;

  return (
    <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', color: '#1e293b', paddingBottom: '3rem' }}>
      <NavbarUsuario onAbrirModulo={(modulo) => { setModalActivo(modulo); setModalData({ titulo: modulo.toUpperCase() }); }} />

      <main style={{ maxWidth: '1280px', margin: '1.5rem auto', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* HERO BANNER - DATOS DEL ESTUDIANTE */}
        <section style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.5rem 2rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <img
                src={avatarUrl}
                alt="Perfil"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userUsuario?.name || 'Usuario')}&background=00346a&color=fff`; }}
                style={{ width: '84px', height: '84px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #00346a' }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <h1 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                    ¡Bienvenida de nuevo, {userUsuario?.name?.split(' ')[0] || 'Estudiante'}! 👋
                  </h1>
                  <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '12px' }}>
                    I Cuatrimestre 2026
                  </span>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', margin: '0 0 0.5rem 0', fontWeight: '500' }}>
                  <strong>{userUsuario?.name}</strong> • Carné: {userUsuario?.studentCode || 'UL-2024-8841'} • Cédula: 1-1645-0923
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem' }}>
                  <span style={{ color: '#64748b' }}>🎓 {userUsuario?.career || 'Lic. en Ingeniería en Sistemas de Información'}</span>
                  <span style={{ color: '#64748b' }}>📍 {userUsuario?.campus || 'Campus Central (Heredia)'}</span>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: '700', color: '#166534', backgroundColor: '#dcfce7', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                    ● Condición: Regular Activo
                  </span>
                </div>
              </div>
            </div>

            {/* METRICAS SUPERIORES */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem 1.25rem', textAlign: 'center', minWidth: '100px' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>PONDERADO</span>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#00346a' }}>{ponderadoNum.toFixed(1)}</div>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>de 100</span>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem 1.25rem', textAlign: 'center', minWidth: '110px' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>CRÉDITOS</span>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#00346a' }}>
                  {creditosAprobadosNum}<span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '400' }}>/{creditosTotalesNum}</span>
                </div>
                <span style={{ fontSize: '0.7rem', color: '#0284c7', fontWeight: '700' }}>{porcentajeCreditos}% Avance</span>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem 1.25rem', textAlign: 'center', minWidth: '100px' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>ASISTENCIA</span>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#166534' }}>{asistenciaNum}%</div>
                <span style={{ fontSize: '0.7rem', color: '#166534', fontWeight: '600' }}>Acumulada</span>
              </div>
            </div>
          </div>
        </section>

        {/* ACCIONES FRECUENTES INTERACTIVAS */}
        <section>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>ACCIONES FRECUENTES</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            <button
              onClick={() => setModalActivo('carne')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '10px', backgroundColor: '#00346a', color: '#ffffff', fontWeight: '600', fontSize: '0.85rem', border: 'none', cursor: 'pointer' }}
            >
              📧 Carné Digital Estudiantil
            </button>
            <button
              onClick={() => setModalActivo('estadoCuenta')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '10px', backgroundColor: '#ffffff', color: '#334155', fontWeight: '600', fontSize: '0.85rem', border: '1px solid #cbd5e1', cursor: 'pointer' }}
            >
              📄 Estado de Cuenta / Pagos
            </button>
            <button
              onClick={() => setModalActivo('constancia')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '10px', backgroundColor: '#ffffff', color: '#334155', fontWeight: '600', fontSize: '0.85rem', border: '1px solid #cbd5e1', cursor: 'pointer' }}
            >
              🎓 Constancia de Estudios
            </button>
            <button
              onClick={() => setModalActivo('matricula')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '10px', backgroundColor: '#800020', color: '#ffffff', fontWeight: '600', fontSize: '0.85rem', border: 'none', cursor: 'pointer' }}
            >
              📌 Matrícula en Línea
            </button>
          </div>
        </section>

        {/* RESUMEN DE ESTADO RÁPIDO */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '1.8rem', backgroundColor: '#f1f5f9', padding: '0.5rem', borderRadius: '10px' }}>📚</div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>ASIGNATURAS MATRICULADAS</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a' }}>{cursosUsuario.length} Cursos</div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>4 presenciales • 1 virtual</span>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '1.8rem', backgroundColor: '#fce7f3', padding: '0.5rem', borderRadius: '10px' }}>📖</div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#be185d', fontWeight: '700', textTransform: 'uppercase' }}>PRESTAMOS UNILIBRARY</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#be185d' }}>{prestamos.length} Libros Físicos</div>
              <span style={{ fontSize: '0.75rem', color: '#be185d', fontWeight: '600' }}>
                {prestamos.some(p => p.urgent) ? 'Vence pronto (Activo)' : 'Al día'}
              </span>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '1.8rem', backgroundColor: '#f0fdf4', padding: '0.5rem', borderRadius: '10px' }}>📝</div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#166534', fontWeight: '700', textTransform: 'uppercase' }}>EVALUACIONES & ENTREGAS</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#166534' }}>3 Pendientes</div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Esta semana: Redes, Algoritmos</span>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '1.8rem', backgroundColor: '#e0f2fe', padding: '0.5rem', borderRadius: '10px' }}>💳</div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#0369a1', fontWeight: '700', textTransform: 'uppercase' }}>ESTADO FINANCIERO</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0369a1' }}>Colegiatura Al Día</div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Cuota 2/4 cancelada</span>
            </div>
          </div>
        </section>

        {/* CONTENIDO PRINCIPAL A 2 COLUMNAS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem' }}>
          
          {/* COLUMNA IZQUIERDA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* PANEL DE ADMINISTRADOR */}
            {userUsuario?.role === 'admin' && (
              <section style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid #8b5cf6', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#00346a', marginBottom: '0.75rem' }}>
                  ⚙️ Panel de Administración: Alta de Asignatura
                </h3>
                <form onSubmit={handleCrearCurso} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    placeholder="Código (ej. SIS-501)"
                    value={nuevoCursoUsuario.code}
                    onChange={(e) => setNuevoCursoUsuario({ ...nuevoCursoUsuario, code: e.target.value })}
                    style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', flex: '1', fontSize: '0.85rem' }}
                  />
                  <input
                    type="text"
                    placeholder="Nombre de la Asignatura"
                    value={nuevoCursoUsuario.title}
                    onChange={(e) => setNuevoCursoUsuario({ ...nuevoCursoUsuario, title: e.target.value })}
                    style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', flex: '2', fontSize: '0.85rem' }}
                  />
                  <button type="submit" style={{ backgroundColor: '#00346a', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer' }}>
                    + Registrar
                  </button>
                </form>
              </section>
            )}

            {/* SECCIÓN ASIGNATURAS Y AULAS VIRTUALES */}
            <section style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>PERIODO ACADÉMICO VIGENTE</span>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#00346a', margin: 0 }}>
                    Mis Asignaturas & Aulas Virtuales Activas
                  </h2>
                </div>

                {/* FILTROS INTERACTIVOS */}
                <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: '#f1f5f9', padding: '0.25rem', borderRadius: '8px' }}>
                  <button
                    onClick={() => setFiltroUsuario('all')}
                    style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', border: 'none', backgroundColor: filtroUsuario === 'all' ? '#00346a' : 'transparent', color: filtroUsuario === 'all' ? '#fff' : '#64748b', fontWeight: '700', fontSize: '0.75rem', cursor: 'pointer' }}
                  >
                    Todos ({cursosUsuario.length})
                  </button>
                  <button
                    onClick={() => setFiltroUsuario('presencial')}
                    style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', border: 'none', backgroundColor: filtroUsuario === 'presencial' ? '#00346a' : 'transparent', color: filtroUsuario === 'presencial' ? '#fff' : '#64748b', fontWeight: '700', fontSize: '0.75rem', cursor: 'pointer' }}
                  >
                    Presenciales
                  </button>
                  <button
                    onClick={() => setFiltroUsuario('virtual')}
                    style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', border: 'none', backgroundColor: filtroUsuario === 'virtual' ? '#00346a' : 'transparent', color: filtroUsuario === 'virtual' ? '#fff' : '#64748b', fontWeight: '700', fontSize: '0.75rem', cursor: 'pointer' }}
                  >
                    Virtuales
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cursosFiltrados.map((curso) => (
                  <CardCursoUsuario
                    key={curso.id}
                    cursoUsuario={curso}
                    onEliminarUsuario={handleEliminarCurso}
                    esAdminUsuario={userUsuario?.role === 'admin'}
                    onIngresarAula={(c) => mostrarNotificacion(`Ingresando al Aula Virtual del curso: ${c.title}`)}
                    onVerSilabo={(c) => mostrarNotificacion(`Cargando Sílabo oficial para: ${c.code} - ${c.title}`)}
                  />
                ))}
              </div>
            </section>

            {/* SECCIÓN BIBLIOTECA Y PRÉSTAMOS DIGITALES */}
            <section style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>SERVICIOS INTEGRADOS DE APRENDIZAJE</span>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#00346a', margin: 0 }}>
                    Biblioteca UniLibrary • Préstamos y Recursos Digitales
                  </h2>
                </div>
                <button
                  onClick={() => mostrarNotificacion('Redirigiendo al Catálogo en Línea de UniLibrary...')}
                  style={{ backgroundColor: '#f1f5f9', color: '#00346a', border: '1px solid #cbd5e1', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
                >
                  Explorar Catálogo Completo
                </button>
              </div>

              <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '0.75rem' }}>
                📚 Préstamos Físicos Vigentes ({prestamos.length} activos)
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {prestamos.map((p) => (
                  <div key={p.id} style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ backgroundColor: p.urgent ? '#ffe4e6' : '#dcfce7', color: p.urgent ? '#be185d' : '#166534', fontSize: '0.7rem', fontWeight: '800', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                        {p.urgent ? 'Vence en 48 hrs' : p.renovado ? 'Renovado' : 'Al día'}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Cota: {p.cota}</span>
                    </div>
                    <h5 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.25rem 0' }}>{p.title}</h5>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0 0 0.5rem 0' }}>{p.author} • Retirado en: {p.campus}</p>
                    <p style={{ fontSize: '0.75rem', fontWeight: '700', color: p.urgent ? '#be185d' : '#166534', margin: '0 0 0.75rem 0' }}>
                      🗓️ Vencimiento: {p.dueDate}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleRenovarPrestamo(p.id)}
                        disabled={p.renovado}
                        style={{ backgroundColor: p.renovado ? '#cbd5e1' : '#00346a', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', cursor: p.renovado ? 'default' : 'pointer', flex: 1 }}
                      >
                        {p.renovado ? 'Ya Renovado' : 'Renovar Préstamo'}
                      </button>
                      <button
                        onClick={() => { setModalActivo('fichaLibro'); setModalData(p); }}
                        style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
                      >
                        Ver Ficha
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '0.75rem' }}>
                🌐 Bases de Datos Científicas & Reserva de Espacios
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#00346a', marginBottom: '0.2rem' }}>IEEE Xplore Library</div>
                  <p style={{ fontSize: '0.7rem', color: '#64748b', margin: '0 0 0.5rem 0' }}>Artículos arbitrados y normas IEEE de computación.</p>
                  <button
                    onClick={() => window.open('https://ieeexplore.ieee.org', '_blank')}
                    style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.7rem', color: '#0284c7', fontWeight: '700', cursor: 'pointer' }}
                  >
                    Acceso Directo SSO →
                  </button>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#00346a', marginBottom: '0.2rem' }}>ScienceDirect / Springer</div>
                  <p style={{ fontSize: '0.7rem', color: '#64748b', margin: '0 0 0.5rem 0' }}>Colección multidisciplinaria de investigación.</p>
                  <button
                    onClick={() => window.open('https://www.sciencedirect.com', '_blank')}
                    style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.7rem', color: '#0284c7', fontWeight: '700', cursor: 'pointer' }}
                  >
                    Buscar Artículos →
                  </button>
                </div>

                <div style={{ backgroundColor: '#f0fdf4', padding: '0.75rem', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '800', fontSize: '0.8rem', color: '#166534' }}>Cubículo Colaborativo #04</span>
                    <span style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: '0.65rem', fontWeight: '800', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Hoy</span>
                  </div>
                  <p style={{ fontSize: '0.7rem', color: '#166534', margin: '0.2rem 0' }}>Piso 3 - Edificio Biblioteca • 15:00 a 18:00 hrs</p>
                  <button
                    onClick={() => mostrarNotificacion('Cubículo cancelado / liberado correctamente.')}
                    style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.7rem', color: '#15803d', fontWeight: '700', cursor: 'pointer' }}
                  >
                    Cancelar / Modificar
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA (SIDEBAR PANEL DE SERVICIOS) */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* HORARIO SEMANAL */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>📅 Horario Semanal</h3>
                <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#0284c7', backgroundColor: '#e0f2fe', padding: '0.15rem 0.5rem', borderRadius: '6px' }}>SEMANA 6</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '0.75rem', fontSize: '0.75rem', fontWeight: '700', color: '#64748b' }}>
                <span>Lun</span><span style={{ color: '#00346a' }}>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span>
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '10px', borderLeft: '3px solid #00346a', marginBottom: '0.5rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b' }}>18:00 - 20:30 • Aula 304 STEM</div>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0f172a' }}>Arquitectura de Redes y Telecom.</div>
                <div style={{ fontSize: '0.75rem', color: '#475569' }}>Prof. Carlos Mora Delgado</div>
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '10px', borderLeft: '3px solid #0284c7' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b' }}>13:00 - 15:00 • Cubículo #04</div>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0f172a' }}>Estudio Reservado (Grupo Redes)</div>
                <div style={{ fontSize: '0.75rem', color: '#475569' }}>Biblioteca Piso 3</div>
              </div>
            </div>

            {/* TRÁMITES ESTUDIANTILES */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.75rem 0' }}>📄 Trámites Estudiantiles en Línea</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <button
                  onClick={() => { setModalActivo('tramite'); setModalData({ nombre: 'Solicitud de Certificaciones' }); }}
                  style={{ textAlign: 'left', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700', color: '#334155', cursor: 'pointer' }}
                >
                  📄 Solicitud de Certificaciones ›
                </button>
                <button
                  onClick={() => { setModalActivo('tramite'); setModalData({ nombre: 'Justificación de Ausencia' }); }}
                  style={{ textAlign: 'left', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700', color: '#334155', cursor: 'pointer' }}
                >
                  📝 Justificación de Ausencia ›
                </button>
                <button
                  onClick={() => { setModalActivo('tramite'); setModalData({ nombre: 'Convalidación de Materias' }); }}
                  style={{ textAlign: 'left', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700', color: '#334155', cursor: 'pointer' }}
                >
                  🔄 Convalidación de Materias ›
                </button>
              </div>
            </div>

            {/* AVISOS INSTITUCIONALES */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.75rem 0' }}>📢 Avisos Institucionales</h3>
              <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#00346a' }}>Feria de Empleo STEM 2026</div>
                <p style={{ fontSize: '0.7rem', color: '#64748b', margin: '0.2rem 0 0.5rem 0' }}>Más de 40 empresas tecnológicas con stands en el Auditorio Principal.</p>
                <button
                  onClick={() => mostrarNotificacion('Registro para Feria de Empleo completado. Recibirás tu confirmación por correo.')}
                  style={{ backgroundColor: '#00346a', color: '#fff', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '700', cursor: 'pointer' }}
                >
                  Inscribirse
                </button>
              </div>
            </div>

          </aside>
        </div>
      </main>

      {/* VENTANAS MODALES INTERACTIVAS */}
      {modalActivo && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '2rem', maxWidth: '500px', width: '90%', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            
            {modalActivo === 'carne' && (
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: '#00346a', margin: '0 0 1rem 0' }}>🪪 Carné Digital Estudiantil</h3>
                <img src={avatarUrl} alt="Estudiante" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1rem', border: '3px solid #00346a' }} />
                <h4>{userUsuario?.name}</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Carné: {userUsuario?.studentCode || 'UL-2024-8841'}</p>
                <p style={{ color: '#64748b', fontSize: '0.85rem' }}>{userUsuario?.career}</p>
                <div style={{ backgroundColor: '#f1f5f9', padding: '0.5rem', borderRadius: '8px', margin: '1rem 0', fontWeight: 'bold' }}>
                  Código QR de Validación: [████████]
                </div>
              </div>
            )}

            {modalActivo === 'estadoCuenta' && (
              <div>
                <h3 style={{ color: '#00346a', margin: '0 0 1rem 0' }}>📄 Estado de Cuenta & Pagos</h3>
                <p><strong>Cuota Actual (3/4):</strong> ₡125,000.00</p>
                <p><strong>Fecha Límite:</strong> 15 de Marzo, 2026</p>
                <p style={{ color: '#166534', fontWeight: 'bold' }}>Estado: Al Día (Sin Recargos)</p>
                <button onClick={() => mostrarNotificacion('Redirigiendo a Pasarela de Pago BAC Credomatic...')} style={{ backgroundColor: '#00346a', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', width: '100%', marginTop: '1rem' }}>Pagar Cuota en Línea</button>
              </div>
            )}

            {modalActivo === 'constancia' && (
              <div>
                <h3 style={{ color: '#00346a', margin: '0 0 1rem 0' }}>🎓 Solicitar Constancia de Estudios</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569' }}>Se generará un documento PDF firmado digitalmente con código de verificación QR para trámites oficiales.</p>
                <button onClick={() => mostrarNotificacion('Descargando Constancia_Estudios_Oficial.pdf')} style={{ backgroundColor: '#00346a', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', width: '100%', marginTop: '1rem' }}>Descargar PDF Certificado</button>
              </div>
            )}

            {modalActivo === 'matricula' && (
              <div>
                <h3 style={{ color: '#800020', margin: '0 0 1rem 0' }}>📌 Proceso de Matrícula en Línea</h3>
                <p style={{ fontSize: '0.9rem' }}>Su cita de matrícula para el <strong>II Cuatrimestre 2026</strong> está programada para el <strong>20 de Abril a las 08:00 AM</strong>.</p>
                <button onClick={() => mostrarNotificacion('Comprobando premSpace de materias requeridas...')} style={{ backgroundColor: '#800020', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', width: '100%', marginTop: '1rem' }}>Ver Proyección de Materias</button>
              </div>
            )}

            {modalActivo === 'tramite' && (
              <div>
                <h3 style={{ color: '#00346a', margin: '0 0 1rem 0' }}>📄 {modalData?.nombre}</h3>
                <p style={{ fontSize: '0.85rem', color: '#475569' }}>Complete los detalles para iniciar la gestión administrativa ante el Registro Académico.</p>
                <textarea placeholder="Motivo o detalle de la solicitud..." style={{ width: '100%', height: '80px', borderRadius: '8px', padding: '0.5rem', border: '1px solid #cbd5e1', marginBottom: '1rem' }}></textarea>
                <button onClick={() => { mostrarNotificacion('Trámite enviado con éxito. Folio asignado: #TR-2026-9921'); setModalActivo(null); }} style={{ backgroundColor: '#00346a', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', width: '100%' }}>Enviar Solicitud</button>
              </div>
            )}

            {modalActivo === 'fichaLibro' && (
              <div>
                <h3 style={{ color: '#00346a', margin: '0 0 1rem 0' }}>📖 Ficha de Recurso</h3>
                <p><strong>Título:</strong> {modalData?.title}</p>
                <p><strong>Autor:</strong> {modalData?.author}</p>
                <p><strong>Código Cota:</strong> {modalData?.cota}</p>
                <p><strong>Ubicación:</strong> Estante B-12 (Piso 2, Campus Central)</p>
              </div>
            )}

            <button
              onClick={() => setModalActivo(null)}
              style={{ marginTop: '1.5rem', backgroundColor: '#f1f5f9', color: '#475569', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', width: '100%', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* FOOTER OFICIAL */}
      <footer style={{ maxWidth: '1280px', margin: '2rem auto 0 auto', padding: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b' }}>
        <span>© 2026 UniLibrary, Universidad Innovadora. Todos los derechos reservados.</span>
        <span>Soporte Técnico Campus • Reglamento Académico • Mesa de Ayuda Virtual</span>
      </footer>

      {notificacion && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#0f172a', color: '#ffffff', padding: '0.85rem 1.25rem', borderRadius: '10px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)', fontSize: '0.85rem', fontWeight: '600', zIndex: 2000, display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '4px solid #10b981' }}>
          <span>✅</span>
          <span>{notificacion}</span>
        </div>
      )}
    </div>
  );
};