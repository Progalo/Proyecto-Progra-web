import React from 'react';

import '../pages/alumno4.css'
function Datos_registro_usuario(){
    return(
        <div>
            <div className='wrapper'>
                <form action="">
                    <div className='titulos'>
                        <h4>Datos de Registro</h4>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Nombre' required/>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Apellido' required/>
                    </div>
                     <div className='input-box'>
                        <input type='text' placeholder='Correo' required/>
                    </div>
                    <button type='submit' style={{backgroundColor:"black"}}>Actualizar</button>
                </form>
            </div>
        </div>
    )
}
export default Datos_registro_usuario