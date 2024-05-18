/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import MasVendidos from '../pages/masvendidos';
import Nuevos from '../pages/nuevos';
import Ofertas from '../pages/ofertas';
import ResultadosBusqueda from '../pages/resultadosBusqueda';
import ProductDetail from '../pages/productDetail';
import Cart from '../pages/cart';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mas-vendidos" element={<MasVendidos />} />
      <Route path="/nuevos" element={<Nuevos />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/resultados" element={<ResultadosBusqueda />} />
      <Route path="/producto/:serieId" element={<ProductDetail />} />
      <Route path='/carrito' element={<Cart/>}/>
    </Routes>
  );
}

export default AppRouter;
