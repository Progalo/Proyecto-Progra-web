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



function ContenedorProductoCompletado() {

    return (
      <>
        <div id="ContenedorPCompletados">
            <img id="imgPCompletados" src="https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Fb74f4dd6215840d5be6f1944efd40fcc?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=d77db5742bd3988f23cb8f124c199186"></img>
            <div className="TituloProductoCompletados">
                <p><b><Nombre Relojesid="1" />CHEQUERED WHITE SB02W400</b></p>
            </div>
            <div id ="Learn">
                <p><a href="">Learn More</a></p>
            </div>
        </div>
      </>
    )
  }
  
  export default ContenedorProductoCompletado;