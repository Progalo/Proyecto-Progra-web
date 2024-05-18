import React from 'react'
import ContenedorProductoCompletado from './ContenedorProductoCompletado'
import './PedidoCompletado.css'

function PedidoCompletado() {

    return (
        <>
        <div id="PedidoC">
            <div id="Aviso1">
                <p>¡Muchas gracias por tu pedido!</p>
            </div>
            <div id="Aviso2">
                <p>Puedes ver los detalles de tu pedido ingresando a <u><a href="">tu cuenta</a></u></p>
            </div>
            <div id="Aviso3">
                <p>Tambien te podria interesar...</p>
            </div>
            <div className="ProductosI">
                <ContenedorProductoCompletado />
                <ContenedorProductoCompletado />
                <ContenedorProductoCompletado />
                <ContenedorProductoCompletado />
            </div>
        </div>
        </>
    )
    
}

export default PedidoCompletado
