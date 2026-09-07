// src/Components/CardCursoUsuario.jsx
import React from 'react';

export const CardCursoUsuario = ({ cursoUsuario, onEliminarUsuario, esAdminUsuario }) => {
  return (
    <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold', padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: cursoUsuario.type === 'presencial' ? '#e0e7ff' : '#dcfce7', color: cursoUsuario.type === 'presencial' ? '#3730a3' : '#166534' }}>
          {cursoUsuario.code} • {cursoUsuario.type.toUpperCase()}
        </span>
        {esAdminUsuario && (
          <button
            onClick={() => onEliminarUsuario(cursoUsuario.id)}
            style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 'bold' }}
          >
            Eliminar
          </button>
        )}
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', margin: '0.25rem 0' }}>
        {cursoUsuario.title}
      </h3>

      <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0 }}>
        <strong>Docente:</strong> {cursoUsuario.professor} • <strong>Ubicación:</strong> {cursoUsuario.classroom}
      </p>

      <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
        <strong>Horario:</strong> {cursoUsuario.schedule}
      </p>

      <div style={{ marginTop: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 'bold', color: '#00346a', marginBottom: '0.25rem' }}>
          <span>Avance del Curso</span>
          <span>{cursoUsuario.progress}%</span>
        </div>
        <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${cursoUsuario.progress}%`, height: '100%', backgroundColor: '#00346a', borderRadius: '4px' }}></div>
        </div>
      </div>
    </div>
  );
};