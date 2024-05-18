import { Routes, Route } from "react-router-dom"
import Login from './componentes/Login'
import './App.css'
import AgregarProd from "./componentes/AgregarProd"
import Dashboard from "./componentes/Dashboard"
import ListProd from "./componentes/ListProd"

function App() {


  return (

    <div>
      <Routes>
        <Route path="/" element= {<Login />} />
        <Route path="/dashbr" element= {<Dashboard />} />
        <Route path="/listPrd" element= {<ListProd />} />
        <Route path="/addPrd" element= {<AgregarProd />} />
      </Routes>
    </div>

  )
}

export default App