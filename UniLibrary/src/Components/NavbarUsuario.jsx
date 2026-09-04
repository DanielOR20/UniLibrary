// src/Components/NavbarUsuario.jsx
import React, { useContext } from 'react';
import { AuthContextUsuario } from '../Context/AuthContextUsuario';

export const NavbarUsuario = () => {
  const { userUsuario, logoutUsuario } = useContext(AuthContextUsuario);

  if (!userUsuario) return null;

  return (
    <nav className="card-usuario" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img
          src={userUsuario.avatar || 'https://via.placeholder.com/40'}
          alt="Avatar"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
        <div>
          <h4 style={{ margin: 0 }}>{userUsuario.name}</h4>
          <span className={`badge-usuario ${userUsuario.role === 'admin' ? 'badge-admin-usuario' : 'badge-user-usuario'}`}>
            {userUsuario.role === 'admin' ? 'Administrador' : 'Estudiante'}
          </span>
        </div>
      </div>
      <button className="btn-usuario btn-danger-usuario" onClick={logoutUsuario}>
        Cerrar Sesión
      </button>
    </nav>
  );
};
