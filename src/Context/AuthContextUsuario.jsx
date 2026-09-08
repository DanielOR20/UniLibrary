import React, { createContext, useState, useEffect } from 'react';
import initialDb from '../../db.json';

export const AuthContextUsuario = createContext();

export const AuthProviderUsuario = ({ children }) => {
  const [userUsuario, setUserUsuario] = useState(null);
  const [loadingUsuario, setLoadingUsuario] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('usuario_sesion');
    if (savedUser) {
      try {
        setUserUsuario(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('usuario_sesion');
      }
    }
    setLoadingUsuario(false);
  }, []);

  const loginUsuario = async (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    let users = [];

    // Intenta conectar a JSON-Server primero
    try {
      const response = await fetch('http://localhost:3001/users');
      if (response.ok) {
        users = await response.json();
      }
    } catch (error) {
      console.warn('JSON-Server no detectable en http://localhost:3001. Usando datos locales de db.json.');
    }

    // Si JSON-Server no responde o no entrega datos, usa el respaldo directo de db.json
    if (!users || users.length === 0) {
      users = initialDb.users || [];
    }

    // Búsqueda del usuario en el listado
    const foundUser = users.find(
      (u) => u.email.toLowerCase() === cleanEmail && String(u.password) === cleanPassword
    );

    if (foundUser) {
      setUserUsuario(foundUser);
      localStorage.setItem('usuario_sesion', JSON.stringify(foundUser));
      return { success: true, user: foundUser };
    } else {
      return {
        success: false,
        message: 'Credenciales incorrectas. Verifique correo y contraseña (Ej. user@demo.com o admin@demo.com / 1234)',
      };
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