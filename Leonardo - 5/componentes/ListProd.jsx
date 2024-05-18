import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ListProd.css'
import Header from './Header';
import Footer from './Footer';

function ListProd() {
    const [relojes, setRelojes] = useState([]); // Estado para almacenar los relojes
    const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
    const [relojesPerPage] = useState(10); // Número de relojes por página

    // Función para cargar los relojes desde un archivo JSON (puedes modificar la ruta según tu estructura)
    useEffect(() => {
        fetch('../data/relojes2.json') // Ruta a tu archivo JSON
        .then(response => response.json())
        .then(data => setRelojes(data))
        .catch(error => console.error('Error fetching products', error));
    }, []);

    //////////////Logica para busqueda//////////////
    const [searchTerm, setSearchTerm] = useState("");

    const filteredRelojes = relojes.filter(reloj =>
        reloj.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reloj.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reloj.id.toString().includes(searchTerm.toLowerCase())
    );
    ////////////////////////////////////////////////

    // Obtener índices de los relojes que se mostrarán en la página actual
    const indexOfLastReloj = currentPage * relojesPerPage;
    const indexOfFirstReloj = indexOfLastReloj - relojesPerPage;
    const currentFilteredRelojes = filteredRelojes.slice(indexOfFirstReloj, indexOfLastReloj);

    // Función para cambiar de página
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Calcular el número total de páginas basado en los relojes filtrados
    const totalPages = Math.ceil(filteredRelojes.length / relojesPerPage);

    // Calcular el número total de páginas
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

  return (
    <>
      <Header />
      <div className="container-listPr">
        <div className="listPr-header">
          <h3>Relojes</h3>
          <Link to="/addPrd" className="add-product-link">+ Agregar Producto</Link>
        </div>
        <div className="search-cont">
            <input
                type="text"
                placeholder="Buscar por marca, modelo o ID ..."
                className="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <table className="list-table">
          <thead>
            <tr className="list-table-header">
              <th>ID</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Precio</th>
              <th>Fecha De Registro</th>
              <th>Stock</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentFilteredRelojes.map(reloj => (
              <tr key={reloj.id}>
                <td>{reloj.id}</td>
                <td>{reloj.marca}</td>
                <td>{reloj.modelo}</td>
                <td>{reloj.precio}</td>
                <td>{reloj.fecha_registro}</td>
                <td>{reloj.stock}</td>
                <td>{reloj.estado}</td>
                <td>Acciones...</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <ul>
            {currentPage > 1 && (
              <li onClick={() => paginate(currentPage - 1)}><a href="#">Anterior</a></li>
            )}
            {pageNumbers.map(number => (
              <li key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
                <a href="#">{number}</a>
              </li>
            ))}
            {currentPage < pageNumbers.length && (
              <li onClick={() => paginate(currentPage + 1)}><a href="#">Siguiente</a></li>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ListProd;