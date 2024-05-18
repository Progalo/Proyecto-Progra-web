import React from 'react'
import Relojesdata from '../Assets/data/relojes.json'
import './Carrito.css'

import { useState, useEffect } from 'react';

const Nombre = ({ Relojesid }) => {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const relojes = Relojesdata.find(relojes => relojes.id === parseInt(Relojesid));
    if (relojes) {
      setNombre(relojes.nombre);
    }
  });
  return <div>{nombre}</div>;
};



function ContenedorProducto() {

    return (
      <>
        <div id="ContenedorP">
            <img id="imgP" src="https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Fb74f4dd6215840d5be6f1944efd40fcc?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=d77db5742bd3988f23cb8f124c199186"></img>
            <div id="TituloProducto">
                <p><b><Nombre Relojesid="1" />CHEQUERED WHITE SB02W400</b></p>
                <div id="BotonesP">
                    <p><button type="button" id="EliminarP">Eliminar</button> | <button type="button" id="Guardar">Guardar para despues</button></p>
                </div>
            </div>
            <div id="CantidadP">
            <select id ="SelectP">
                <option value="1" name="Cantidad">1</option>
                <option value="2" name="Cantidad">2</option>
                <option value="3" name="Cantidad">3</option>
            </select>
            </div>
            <div id="PrecioP">
                <p>Precio</p>
                <p>S/ 500</p>
            </div>
            <div id="SubTotal">
                <p>Subtotal</p>
                <p>S/ 500</p>
            </div>
        </div>
      </>
    )
  }
  
  export default ContenedorProducto;