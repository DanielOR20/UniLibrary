// src/Pages/LoginUsuario.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextUsuario } from '../Context/AuthContextUsuario';

export const LoginUsuario = () => {
  const [emailUsuario, setEmailUsuario] = useState('');
  const [passwordUsuario, setPasswordUsuario] = useState('');
  const [errorUsuario, setErrorUsuario] = useState('');
  
  const { loginUsuario } = useContext(AuthContextUsuario);
  const navigate = useNavigate();

  const handleSubmitUsuario = async (e) => {
    e.preventDefault();
    setErrorUsuario('');

    const res = await loginUsuario(emailUsuario, passwordUsuario);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setErrorUsuario(res.message);
    }
  };

  return (
    <div className="panel-container-usuario" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="card-usuario" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#00346a', fontWeight: '700' }}>
          UniLibrary · Iniciar Sesión
        </h2>
        
        {errorUsuario && (
          <div style={{ background: '#ef444422', border: '1px solid #ef4444', color: '#ef4444', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center' }}>
            {errorUsuario}
          </div>
        )}

        <form onSubmit={handleSubmitUsuario}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1b1c1d', fontWeight: '600' }}>
              Correo Electrónico:
            </label>
            <input
              type="email"
              value={emailUsuario}
              onChange={(e) => setEmailUsuario(e.target.value)}
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #c2c6d2', background: '#f5f3f4', color: '#1b1c1d', boxSizing: 'border-box' }}
              placeholder="admin@demo.com o user@demo.com"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1b1c1d', fontWeight: '600' }}>
              Contraseña:
            </label>
            <input
              type="password"
              value={passwordUsuario}
              onChange={(e) => setPasswordUsuario(e.target.value)}
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #c2c6d2', background: '#f5f3f4', color: '#1b1c1d', boxSizing: 'border-box' }}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-usuario" style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
            Ingresar al Portal
          </button>
        </form>
      </div>
    </div>
  );
};