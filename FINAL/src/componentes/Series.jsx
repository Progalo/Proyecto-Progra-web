import { useState } from 'react';
import data from '../../public/data/relojes2.json'
import './Series.css'
import Header from './Header';
import Footer from './Footer';
import Menu from './menu';

const Series = () => {
    const [reloj, setReloj] = useState("");
    console.log(reloj);

    return (
        <>
            <Header />
            <div className="main-container">
                <Menu />
                <div className="content">
                    <div className='series-container'>
                        <div className='series-header'>
                            <h3>Series</h3>
                        </div>
                        <br />
                        <div className='series-search'>
                            <input id='series-search-input' type='text' placeholder='buscar por nombre' onChange={(event) => {
                                setReloj(event.target.value);
                            }} />
                        </div>
                        <br />
                        <div className='series-results'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                        <th>Fecha de creación</th>
                                        <th>Nro. Productos</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.marca}</td>
                                            <td>{item.modelo}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.fecha_registro}</td>
                                            <td>{item.stock}</td>
                                            <td>{item.estado}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};
export default Series;