// src/Components/CardCursoUsuario.jsx
import React from 'react';

export const CardCursoUsuario = ({ cursoUsuario, onEliminarUsuario, esAdminUsuario }) => {
  // Validación de parámetro numérico
  const porcentaje = Number(cursoUsuario.progress) || 0;

  return (
    <div className="course-card p-space-md rounded-xl bg-surface-container-low/50 border border-border-usuario space-y-space-sm mb-4">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-xs">
        <div>
          <div className="flex items-center gap-space-xs flex-wrap">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm font-bold">
              {cursoUsuario.code}
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm capitalize">
              {cursoUsuario.type}
            </span>
          </div>
          <h3 className="font-title-md text-on-surface font-semibold mt-1">{cursoUsuario.title}</h3>
          <p className="font-body-sm text-on-surface-variant">
            Docente: {cursoUsuario.professor} • {cursoUsuario.classroom}
          </p>
        </div>
        <div className="text-left sm:text-right shrink-0">
          <span className="font-label-md text-primary font-semibold">{cursoUsuario.schedule}</span>
        </div>
      </div>

      {/* Barra de avance dinámico basado en parámetro numérico */}
      <div className="pt-space-xs space-y-1.5">
        <div className="flex items-center justify-between text-label-sm">
          <span className="text-on-surface-variant">Avance temático</span>
          <span className="font-semibold text-primary">{porcentaje}%</span>
        </div>
        <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary h-full rounded-full transition-all duration-300"
            style={{ width: `${porcentaje}%` }}
          ></div>
        </div>
      </div>

      {/* Botones de acción y control según rol */}
      <div className="flex items-center justify-between pt-2">
        <a href="#" className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-md hover:bg-primary-container transition-colors">
          Ingresar a Aula Virtual
        </a>
        
        {/* Acción exclusiva del Administrador */}
        {esAdminUsuario && (
          <button
            onClick={() => onEliminarUsuario(cursoUsuario.id)}
            className="btn-usuario btn-danger-usuario"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
          >
            Eliminar Curso
          </button>
        )}
      </div>
    </div>
  );
};
