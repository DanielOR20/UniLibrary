// src/Services/apiUsuario.js
const API_URL_USUARIO = 'http://localhost:3001';

export const getRecursosUsuario = async () => {
  const response = await fetch(`${API_URL_USUARIO}/items`);
  if (!response.ok) throw new Error('Error al obtener los datos');
  return await response.json();
};

export const crearRecursoUsuario = async (nuevoRecurso) => {
  const response = await fetch(`${API_URL_USUARIO}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoRecurso),
  });
  if (!response.ok) throw new Error('Error al crear el recurso');
  return await response.json();
};

export const eliminarRecursoUsuario = async (id) => {
  const response = await fetch(`${API_URL_USUARIO}/items/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error al eliminar el recurso');
  return await response.json();
};
