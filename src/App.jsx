import { BrowserRouter } from 'react-router-dom';
import { AuthProviderUsuario } from './context/AuthContextUsuario';
import { Routing } from './Routes/Routing';
import { DashboardProvider } from './context/DashboardContext';
import './App.css';

export default function App() {
  return (
    <AuthProviderUsuario>
      <DashboardProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </DashboardProvider>
    </AuthProviderUsuario>
  );
}