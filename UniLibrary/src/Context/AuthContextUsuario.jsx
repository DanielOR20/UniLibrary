// src/Context/AuthContextUsuario.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContextUsuario = createContext();

export const AuthProviderUsuario = ({ children }) => {
  const [userUsuario, setUserUsuario] = useState(null);
  const [loadingUsuario, setLoadingUsuario] = useState(true);

  // Recuperar sesión guardada al cargar la app
  useEffect(() => {
    const savedUser = localStorage.getItem('usuario_sesion');
    if (savedUser) {
      setUserUsuario(JSON.parse(savedUser));
    }
    setLoadingUsuario(false);
  }, []);

  // Función de Login contra JSON Server
  const loginUsuario = async (email, password) => {
    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
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
      return { success: false, message: 'Error de conexión con el servidor' };
    }
  };

  // Función de Logout
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