import React from 'react';
import Header from './Header';
import Footer from './Footer';
const App = () => {
    const mostrarContenido = (tipo) => {
    };

    return (
        <>
            <DOCTYPE html />
            <html lang="es">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Mi Cuenta</title>
                    <link rel="stylesheet" href="styles4.css" />
                    <script src="scriptC.js" defer></script>
                </head>
                <body>
                    <h2>Mi Cuenta</h2>
                    <div className="container">
                        <div className="menu">
                            <div id="opciones">
                                <span className="opcion-texto" onClick={() => mostrarContenido('ordenes')}>Ordenes recientes</span>
                                <span className="opcion-texto" onClick={() => mostrarContenido('datos')}>Datos de registro</span>
                                <span className="opcion-texto" onClick={() => mostrarContenido('contrasena')}>Cambiar contraseña</span>
                            </div>
                        </div>
                        <div className="content" id="contenido">
                            {/* Contenido Actualizado */}
                        </div>
                    </div>
                </body>
            </html>
        </>
    );
};

export default App;
