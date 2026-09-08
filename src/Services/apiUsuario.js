import initialDb from '../../db.json';

const API_URL_USUARIO = 'http://localhost:3001';

export const getRecursosUsuario = async () => {
  try {
    const response = await fetch(`${API_URL_USUARIO}/items`);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn('JSON Server inaccesible en puerto 3001. Obteniendo asignaturas/items de respaldo.');
  }

  const savedItems = localStorage.getItem('unilibrary_items');
  if (savedItems) {
    try {
      return JSON.parse(savedItems);
    } catch (e) {
      localStorage.removeItem('unilibrary_items');
    }
  }
  return initialDb.items || [];
};

export const crearRecursoUsuario = async (nuevoRecurso) => {
  try {
    const response = await fetch(`${API_URL_USUARIO}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoRecurso),
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn('JSON Server inaccesible. Guardando nuevo recurso en almacenamiento local de respaldo.');
  }

  const items = await getRecursosUsuario();
  const recursoConId = { ...nuevoRecurso, id: Date.now().toString() };
  const updatedItems = [...items, recursoConId];
  localStorage.setItem('unilibrary_items', JSON.stringify(updatedItems));
  return recursoConId;
};

export const eliminarRecursoUsuario = async (id) => {
  try {
    const response = await fetch(`${API_URL_USUARIO}/items/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn('JSON Server inaccesible. Eliminando recurso de almacenamiento local.');
  }

  const items = await getRecursosUsuario();
  const updatedItems = items.filter(item => String(item.id) !== String(id));
  localStorage.setItem('unilibrary_items', JSON.stringify(updatedItems));
  return { id };
};
