import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import './userOrd.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './menu';

const userOrd = () => {
    const { usuario } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('/data/usuarios.json')
            .then(response => response.json())
            .then(data => {
                const user = data.find(u => `${u.nombre} ${u.apellido}` === usuario);
                setUserData(user);
            })
            .catch(error => console.error('Error fetching the data:', error));
    }, [usuario]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className="main-container">
                <Menu />
                <div className="content">
                    <div className="usuario-detalle-container">
                        <h3>Detalle de Usuario Registrado</h3>
                        <div className="usuario-info">
                            <p>ID: {userData.id}</p>
                            <p>Nombre: {userData.nombre} {userData.apellido}</p>
                            <p>Correo: {userData.correo}</p>
                            <p>Fecha de Registro: {userData.fecha_registro}</p>
                        </div>
                        <h4>Órdenes recientes (máximo 10)</h4>
                        <table className="table-ordenes">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Fecha de Orden</th>
                                    <th>Total</th>
                                    <th>Productos</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.ordenes.slice(0, 10).map(order => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.fecha_orden}</td>
                                        <td>{`S/${order.total.toFixed(2)}`}</td>
                                        <td>{order.productos}</td>
                                        <td>{order.estado}</td>
                                        <td><a href="#">Ver</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default userOrd;
