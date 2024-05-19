import { useState } from 'react';
import './alumno4.css'
import data from '../assets/prueba.json'
const Usuarios_registrados = () => {
    const[reloj,setReloj] = useState("");
    console.log(reloj);
    return (
        
        <div style={{paddingLeft:"36px"}}>
            <div className='titulos'>
                <h3>Usuarios registrados</h3>
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
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Fecha de Registro</th>
                        <th>Estado</th>
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
export default Usuarios_registrados;