import { useState } from 'react';
import './alumno4.css'
import data from '../assets/prueba.json'
const Series = () => {
    const[reloj,setReloj] = useState("");
    console.log(reloj);
    return (
        
        <div style={{paddingLeft:"36px"}}>
            <div className='titulos'>
                <h3>Series</h3>
            </div>
            <br />
            <div className='buscador'>
                <input id='buscadorInput' type='text' placeholder='buscar por nombre' onChange={(event)=>{
                    setReloj(event.target.value);
                }}/>
            </div>
            <br />
            <div className='resultados'>
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
                        {data.filter((item)=>{
                            return reloj.toLowerCase() == ""? item : item.title.toLowerCase().includes(reloj)
                        }).map((item) => (
                        <tr key={item.id}> 
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.fecha_creacion}</td>
                            <td>{item.nro_productos}</td>
                            <td>{item.acciones}</td>
                        </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
};
export default Series;