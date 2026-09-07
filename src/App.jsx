import { BrowserRouter } from 'react-router-dom';
import { AuthProviderUsuario } from './context/AuthContextUsuario';
import { Routing } from './Routes/Routing';
import './App.css';

export default function App() {
  return (
    <AuthProviderUsuario>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AuthProviderUsuario>
  );
}