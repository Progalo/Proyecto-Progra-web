import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Dashboard.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './menu';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [usuarios, setUsuarios] = useState([]);
    const [ordenesDelDia, setOrdenesDelDia] = useState(0);
    const [ingresosDelDia, setIngresosDelDia] = useState(0);

    useEffect(() => {
        fetch('../data/usuarios.json')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        let ordenes = 0;
        let ingresos = 0;

        usuarios.forEach(usuario => {
            usuario.ordenes.forEach(orden => {
                if (orden.fecha_orden === formattedDate) {
                    ordenes++;
                    ingresos += orden.total;
                }
            });
        });

        setOrdenesDelDia(ordenes);
        setIngresosDelDia(ingresos);
    }, [selectedDate, usuarios]);

    return (
        <>
            <Header />
            <div className="main-container">
                <Menu />
                <div className="content">
                    <div className="dashboard-header">
                        <h3>Dashboard</h3>
                        <div className="date-picker">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="yyyy-MM-dd"
                            />
                        </div>
                    </div>
                    <div className="dashboard-metrics">
                        <div className="metric-box">
                            <h2>{ordenesDelDia}</h2>
                            <p>Órdenes del día de hoy</p>
                        </div>
                        <div className="metric-box">
                            <h2>12</h2>
                            <p>Usuarios nuevos</p>
                        </div>
                        <div className="metric-box">
                            <h2>S/ {ingresosDelDia.toFixed(2)}</h2>
                            <p>Ingresos de hoy</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
