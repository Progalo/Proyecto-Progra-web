import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

function Menu() {

    return (
        <nav className="navbar">
                <ul>
                    <li className="navlink" id="home"><b>TIENDA</b></li>
                    <li className="navlink" id="M1">Mas Vendidos</li>
                    <li className="navlink" id="M2">Nuevos</li>
                    <li className="navlink" id="M3">Ofertas</li>
                    <li className="navlink" id="M4"><Link to="/carrito"><img className="imgCarrito" width="20px" src="./public/carrito.svg"></img></Link></li>
                    <li className="navlink" id="M5">Ayuda</li>
                    <li className="navlink" id="M6"><button className="Cuenta">Mi Cuenta</button></li>
                </ul>
        </nav>
        
    )
    
}


export default Menu