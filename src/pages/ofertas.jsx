/* eslint-disable no-unused-vars */
import React from 'react';
import ProductCard from '../components/ProductCard';
import productData from '../data/relojes.json';

function Ofertas() {
  // Lógica para obtener los productos en oferta (puedes usar filtros, etc.)
  const productosEnOferta = productData
    .flatMap(marca => marca.modelos) // Aplanar el array de modelos
    .filter(product => product.precio < 500); // Filtrar por precio menor a 500 (ejemplo)

  return (
    <section className="products">
      <h2>Ofertas</h2>
      <div className="products-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))' }}>
        {productosEnOferta.map((product) => (
          <ProductCard key={product.Serie} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Ofertas;
