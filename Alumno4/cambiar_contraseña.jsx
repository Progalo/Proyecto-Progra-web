import React from 'react';

import '../pages/alumno4.css'
function Cambiar_contraseña(){
    return(
        <div>
            <div className='wrapper'>
                <form action="">
                    <div className='titulos'>
                        <h4>Cambiar Password</h4>
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Actual' required/>
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Nuevo' required/>
                    </div>
                     <div className='input-box'>
                        <input type='password' placeholder='Repetir' required/>
                    </div>
                    <button type='submit' style={{backgroundColor:"black"}}>Cambiar</button>
                </form>
            </div>
        </div>
    )
}
export default Cambiar_contraseña