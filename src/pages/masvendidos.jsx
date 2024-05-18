/* eslint-disable no-unused-vars */
import React from 'react';
import ProductCard from '../components/ProductCard';
import productData from '../data/relojes.json';

function MasVendidos() {
  // Lógica para obtener los productos más vendidos (puedes usar filtros, ordenamiento, etc.)
  const masVendidos = productData
    .flatMap(marca => marca.modelos) // Aplanar el array de modelos
    .sort((a, b) => b.precio - a.precio) // Ordenar por precio descendente (asumiendo que el precio es un número)
    .slice(0, 12); // Tomar los primeros 12 productos

  return (
    <section className="products" style={{maxWidth: '100vw'}}>
      <h2>Productos más vendidos</h2>
      <div className="products-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))' }}>
        {masVendidos.map((product) => (
          <ProductCard key={product.Serie} product={product} />
        ))}
      </div>
    </section>
  );
}

export default MasVendidos;
