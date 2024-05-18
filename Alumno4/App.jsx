import {Routes, Route} from "react-router-dom"
import { Link } from "react-router-dom"
import Menu from "./pages/menu"
import Dashboard from "./pages/Dashboard"
import Usuarios_registrados from "./pages/Usuarios_registrados"
import Ordenes from "./pages/ordenes"
import Productos_mas_Vendidos from "./pages/Pr_mas_Vendidos"
import Series from "./pages/Series"
import './App.css'
import PR from "./pages/Productos"

function App() {
  return(
    <div className="app">
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="Usuarios_Registrados" element={<Usuarios_registrados/>}/>
          <Route path="Productos" element={<PR/>}/>
          <Route path="Ordenes" element={<Ordenes/>}/>
          <Route path="Productos_mas_vendidos" element={<Productos_mas_Vendidos/>}/>
          <Route path="Series" element={<Series/>}/>
        </Route>
      </Routes>
      </div>
  )
}

export default App
