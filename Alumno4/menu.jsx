import {Outlet, Link } from "react-router-dom"
import './menu.css'
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
function Menu() {
    return(
        <div>
            <Header/>
            <div className="navegador">
                <nav>
                    <p style={{color: "black", paddingTop: "23px", paddingLeft:"29px", margin:"0px", fontSize:"20px", fontFamily:"sans-serif"}}>Admin</p>
                    <ul>
                        <li>
                            <Link to ="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/Usuarios_Registrados">Usuarios registrados</Link>
                        </li>
                        <li>
                            <Link to="/Productos">Productos</Link>
                            
                        </li>
                        <li>
                            <Link to ="/Ordenes">Ordenes</Link>
                        </li>
                        <li>
                            <Link to="/Productos_mas_vendidos">Productos más<br/> vendidos</Link>
                        </li>
                        <li>
                            <Link to="/Series">Series</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                <Outlet/>
                </div>
                <Footer/>
            </div>
        </div>
    )
};

export default Menu;