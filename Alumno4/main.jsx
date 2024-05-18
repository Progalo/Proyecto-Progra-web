import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Datos_registro_usuario from './pages/datos_registro_usuario.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Login from "./componentes/Login.jsx"
import Cambiar_contraseña from './pages/cambiar_contraseña.jsx'
import Agregar_serie from './pages/agregar_serie.jsx'
import Detalles_orden_usuario from './pages/Detalles_orden_usuario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  
)
