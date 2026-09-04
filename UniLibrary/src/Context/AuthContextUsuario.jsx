// src/Context/AuthContextUsuario.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContextUsuario = createContext();

export const AuthProviderUsuario = ({ children }) => {
  const [userUsuario, setUserUsuario] = useState(null);
  const [loadingUsuario, setLoadingUsuario] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('usuario_sesion');
    if (savedUser) {
      setUserUsuario(JSON.parse(savedUser));
    }
    setLoadingUsuario(false);
  }, []);

  const loginUsuario = async (email, password) => {
    try {
      // Limpiamos espacios accidentales del correo e insumos
      const cleanEmail = email.trim().toLowerCase();
      const cleanPassword = password.trim();

      const response = await fetch(
        `http://localhost:3001/users?email=${encodeURIComponent(cleanEmail)}&password=${encodeURIComponent(cleanPassword)}`
      );
      
      if (!response.ok) {
        return { success: false, message: 'Error en la respuesta del servidor API' };
      }

      const data = await response.json();

      if (data.length > 0) {
        const loggedUser = data[0];
        setUserUsuario(loggedUser);
        localStorage.setItem('usuario_sesion', JSON.stringify(loggedUser));
        return { success: true, user: loggedUser };
      } else {
        return { success: false, message: 'Credenciales incorrectas' };
      }
    } catch (error) {
      return { success: false, message: 'No se pudo conectar con el servidor backend (JSON Server)' };
    }
  };

  const logoutUsuario = () => {
    setUserUsuario(null);
    localStorage.removeItem('usuario_sesion');
  };

  return (
    <AuthContextUsuario.Provider
      value={{
        userUsuario,
        isAuthenticatedUsuario: !!userUsuario,
        roleUsuario: userUsuario?.role || null,
        loadingUsuario,
        loginUsuario,
        logoutUsuario,
      }}
    >
      {children}
    </AuthContextUsuario.Provider>
  );
};