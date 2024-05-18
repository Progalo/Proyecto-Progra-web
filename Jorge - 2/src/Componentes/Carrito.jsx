import React from 'react'
import './Carrito.css'
import { Link } from "react-router-dom";
import ContenedorProductosCarrito from './ContenedorProductoCarrito'

import relojes from '../Assets/data/relojes.json'

function Carrito() {

    return (
        <>
        <div id="Carrito">
        <div id="Titulo">
            <p>Items en tu Carrito de Compras</p>
        </div>
        <div className="Items">
            <p><b>Items Disponibles para Envio</b></p>
        </div>
        <div id="Productos">
            <ContenedorProductosCarrito />
            <ContenedorProductosCarrito />
            <ContenedorProductosCarrito />
        </div>

        <div id="Total">
            <p><b>Total:  S/ 1500</b></p>
        </div>

        <div id="divCheckout">
            <button type="button" id="CheckoutButton"><Link to="/checkout">CheckOut</Link></button>
        </div>

        <div className="Items">
            <p><b>Guardado para despues</b></p>
        </div>

        <div id="Guardado">
            <ContenedorProductosCarrito />
        </div>
        </div>
        </>
    )
    
}


export default Carrito