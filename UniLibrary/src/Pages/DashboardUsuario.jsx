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

  // Conversión de parámetros numéricos
  const ponderadoNum = Number(userUsuario?.ponderado || 0);
  const creditosAprobadosNum = Number(userUsuario?.creditosAprobados || 0);
  const creditosTotalesNum = Number(userUsuario?.creditosTotales || 120);
  const porcentajeCreditos = Math.round((creditosAprobadosNum / creditosTotalesNum) * 100);

  // 1. PRIMERO declaramos la función
  const cargarCursos = async () => {
    try {
      const data = await getRecursosUsuario();
      setCursosUsuario(data);
    } catch (err) {
      console.error('Error al cargar asignaturas:', err);
    }
  };

  // 2. DESPUÉS la llamamos dentro de useEffect
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
    if (window.confirm('¿Seguro que deseas eliminar este curso?')) {
      await eliminarRecursoUsuario(id);
      cargarCursos();
    }
  };

  const cursosFiltrados = cursosUsuario.filter(c => {
    if (filtroUsuario === 'presencial') return c.type === 'presencial';
    if (filtroUsuario === 'virtual') return c.type === 'virtual';
    return true;
  });

  return (
    <div className="panel-container-usuario min-h-screen">
      <NavbarUsuario />

      <div className="max-w-7xl mx-auto py-space-xl space-y-space-xl">
        {/* HERO Y RESUMEN ACADÉMICO */}
        <section className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-border-usuario">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-lg">
              <img
                src={userUsuario?.avatar}
                alt="Perfil"
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
              <div>
                <h1 className="font-headline-md text-primary font-bold">
                  ¡Bienvenido/a, {userUsuario?.name}! 👋
                </h1>
                <p className="text-on-surface font-semibold mt-1">
                  Carné: {userUsuario?.studentCode || 'N/A'} • {userUsuario?.career}
                </p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm font-semibold">
                  {userUsuario?.role === 'admin' ? 'Administrador del Sistema' : 'Estudiante Regular Activo'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-space-md w-full lg:w-auto justify-between">
              <div className="bg-surface-container-low px-4 py-3 rounded-lg text-center flex-1">
                <span className="font-label-sm text-on-surface-variant block uppercase">Ponderado</span>
                <span className="font-headline-md text-primary font-bold">{ponderadoNum.toFixed(1)}</span>
                <span className="font-label-sm text-secondary block">de 100</span>
              </div>

              <div className="bg-surface-container-low px-4 py-3 rounded-lg text-center flex-1">
                <span className="font-label-sm text-on-surface-variant block uppercase">Créditos</span>
                <span className="font-headline-md text-primary font-bold">
                  {creditosAprobadosNum}<span className="text-body-sm font-normal">/{creditosTotalesNum}</span>
                </span>
                <span className="font-label-sm text-secondary block">{porcentajeCreditos}% Carrera</span>
              </div>
            </div>
          </div>
        </section>

        {/* LAYOUT A 2 COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-8 space-y-space-xl">
            {userUsuario?.role === 'admin' && (
              <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border-l-4 border-role-admin-usuario">
                <h3 className="font-title-md text-primary font-semibold mb-3">
                  Panel de Administración: Alta de Nuevo Curso
                </h3>
                <form onSubmit={handleCrearCurso} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Código (ej. SIS-501)"
                    value={nuevoCursoUsuario.code}
                    onChange={(e) => setNuevoCursoUsuario({ ...nuevoCursoUsuario, code: e.target.value })}
                    className="p-2.5 rounded-lg bg-surface-container-low text-on-surface border border-border-usuario"
                  />
                  <input
                    type="text"
                    placeholder="Nombre de la Asignatura"
                    value={nuevoCursoUsuario.title}
                    onChange={(e) => setNuevoCursoUsuario({ ...nuevoCursoUsuario, title: e.target.value })}
                    className="p-2.5 rounded-lg bg-surface-container-low text-on-surface border border-border-usuario"
                  />
                  <button type="submit" className="btn-usuario font-semibold">
                    + Registrar Curso
                  </button>
                </form>
              </section>
            )}

            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-border-usuario">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h2 className="font-headline-sm text-primary font-semibold">Mis Asignaturas Activas</h2>
                <div className="flex gap-1 bg-surface-container-low p-1 rounded-lg mt-2 sm:mt-0">
                  <button
                    onClick={() => setFiltroUsuario('all')}
                    className={`px-3 py-1 rounded-md text-label-md ${filtroUsuario === 'all' ? 'bg-primary text-on-primary' : 'text-on-surface-variant'}`}
                  >
                    Todos ({cursosUsuario.length})
                  </button>
                  <button
                    onClick={() => setFiltroUsuario('presencial')}
                    className={`px-3 py-1 rounded-md text-label-md ${filtroUsuario === 'presencial' ? 'bg-primary text-on-primary' : 'text-on-surface-variant'}`}
                  >
                    Presenciales
                  </button>
                  <button
                    onClick={() => setFiltroUsuario('virtual')}
                    className={`px-3 py-1 rounded-md text-label-md ${filtroUsuario === 'virtual' ? 'bg-primary text-on-primary' : 'text-on-surface-variant'}`}
                  >
                    Virtuales
                  </button>
                </div>
              </div>

              {cursosFiltrados.map((curso) => (
                <CardCursoUsuario
                  key={curso.id}
                  cursoUsuario={curso}
                  onEliminarUsuario={handleEliminarCurso}
                  esAdminUsuario={userUsuario?.role === 'admin'}
                />
              ))}
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-space-xl">
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-border-usuario">
              <h3 className="font-title-md text-primary font-semibold mb-3">Requisitos de Graduación</h3>
              <div className="flex items-center gap-4 p-3 bg-surface-container-low rounded-lg mb-4">
                <div className="text-2xl font-bold text-secondary">{porcentajeCreditos}%</div>
                <div>
                  <p className="font-label-md text-on-surface font-bold">{creditosAprobadosNum} de {creditosTotalesNum} Créditos</p>
                  <p className="text-body-sm text-on-surface-variant">Faltan {creditosTotalesNum - creditosAprobadosNum} créditos para completar la carrera.</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};