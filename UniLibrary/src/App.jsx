import { BrowserRouter } from 'react-router-dom'
import { Routing } from './Routes/routing'
import './App.css'
import './Styles/Login.css'

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  )
}

export default App