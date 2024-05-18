import { Routes, Route } from "react-router-dom";

import Inicio from './Componentes/Inicio';
import Carrito from './Componentes/Carrito'; 
import './App.css'
import Menu from "./Componentes/Menu";
import Pie from "./Componentes/Pie";
import CheckOut from "./Componentes/Checkout";
import PedidoCompletado from "./Componentes/PedidoCompletado"

function Tienda() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/carrito" element={ <Carrito /> } />
        <Route path="/checkout" element={ <CheckOut/>} />
        <Route path="/pedidocompletado" element={<PedidoCompletado/>} />
      </Routes>
      <Pie/>
    </div>
  )
}

export default Tienda