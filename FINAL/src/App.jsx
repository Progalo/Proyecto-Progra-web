import { Routes, Route } from "react-router-dom"
import Login from './componentes/Login'
//import './App.css'
import AgregarProd from "./componentes/AgregarProd"
import Dashboard from "./componentes/Dashboard"
import ListProd from "./componentes/ListProd"
import Series from "./componentes/Series"
import AgregarSerie from "./componentes/AgregarSerie"
import UsuariosRegistrados from "./componentes/UsuariosRegistrados"
import OrdenesAdmin from "./componentes/ordenesAdmin"

//////////////////////////PRINCIPAL//////////////////////////
import Home from './pages/home';
import MasVendidos from './pages/masvendidos';
import Nuevos from './pages/nuevos';
import Ofertas from './pages/ofertas';
import ResultadosBusqueda from './pages/resultadosBusqueda';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';

import CheckOut from "./pages/Checkout"
/*import PedidoCompletado from "./pages/PedidoCompletado"*/

import Ordenes from './pages/ordenes'
/////////////////////////////////////////////////////////////


function App() {


  return (

    <div>
      <Routes>
        <Route path="/Login" element= {<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/mas-vendidos" element={<MasVendidos />} />
        <Route path="/nuevos" element={<Nuevos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/resultados" element={<ResultadosBusqueda />} />
        <Route path="/producto/:serieId" element={<ProductDetail />} />
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/ordenes' element={<Ordenes/>}/>
        

        <Route path="/dashbr" element= {<Dashboard />} />
        <Route path="/usureg" element= {<UsuariosRegistrados />} />
        <Route path="/listPrd" element= {<ListProd />} />
        <Route path="/addPrd" element= {<AgregarProd />} />
        <Route path="/series" element= {<Series />} />
        <Route path="/addseries" element= {<AgregarSerie />} />
        <Route path="/ordAdmin" element= {<OrdenesAdmin />} />
        
      </Routes>
    </div>

  )
}

export default App
