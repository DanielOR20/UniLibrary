import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';

export const Routing = () => {
  return (
    <Routes>
      {/* Ruta del Home (tu responsabilidad) */}
      <Route path="/" element={<Home />} />

      {/* Espacio para las rutas de tus compañeros */}
      {/* <Route path="/cursos" element={<Cursos />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};