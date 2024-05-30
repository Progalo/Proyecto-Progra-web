import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ordenesAdmin.css'; 
import Header from './Header';
import Footer from './Footer';
import Menu from "./menu";

const OrdenesAdmin = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/data/usuarios.json')
            .then(response => response.json())
            .then(data => {
                const orders = data.flatMap(user => 
                    user.ordenes.filter(order => order.id).map(order => ({
                        id: order.id,
                        usuario: `${user.nombre} ${user.apellido}`,
                        fechaOrden: order.fecha_orden,
                        total: `S/${order.total.toFixed(2)}`,
                        correo: user.correo,
                        estado: order.estado
                    }))
                );
                setOrdersData(orders);
            })
            .catch(error => console.error('Error fetching the data:', error));
    }, []);

    // Filtrar
    const [searchTerm, setSearchTerm] = useState("");

    const filteredOrders = ordersData.filter(order =>
        order.usuario.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) // Considerando el número de orden
    );

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    const handleChangePage = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const currentOrders = filteredOrders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleViewClick = (usuario) => {
        navigate(`/ordAdmin/${usuario}`);
    };

    return (
        <>
            <Header />
            <div className="main-container">
                <Menu />
                <div className="content">
                    <div className="ordenes-container">
                        <h3>Órdenes</h3>
                        <div className="ordenes-search">
                            <input
                                type="text"
                                placeholder="Buscar por nombre o apellido de usuario o nro de orden..."
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <table className="table-ordenes">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Usuario</th>
                                    <th>Fecha de Orden</th>
                                    <th>Total</th>
                                    <th>Correo</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.usuario}</td>
                                        <td>{order.fechaOrden}</td>
                                        <td>{order.total}</td>
                                        <td>{order.correo}</td>
                                        <td>{order.estado}</td>
                                        <td><a href="#" onClick={() => handleViewClick(order.usuario)}>Ver</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="ordenes-pagination">
                            <ul className="ordenes-pagination-list">
                                {currentPage > 1 && (
                                    <li className="ordenes-pagination-item" onClick={() => handleChangePage(currentPage - 1)}>
                                        <a href="#">Anterior</a>
                                    </li>
                                )}
                                {Array.from({ length: totalPages }, (_, index) => index + 1).map(number => (
                                    <li key={number} className={`ordenes-pagination-item ${number === currentPage ? 'active' : ''}`} onClick={() => handleChangePage(number)}>
                                        <a href="#">{number}</a>
                                    </li>
                                ))}
                                {currentPage < totalPages && (
                                    <li className="ordenes-pagination-item" onClick={() => handleChangePage(currentPage + 1)}>
                                        <a href="#">Siguiente</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default OrdenesAdmin;
