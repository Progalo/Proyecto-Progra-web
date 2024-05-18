import React from 'react';
import Header from './Header';
import Footer from './Footer';
const RegisterAccount = () => {
    const validarContrasenas = () => {
    };

    return (
        <>
            <DOCTYPE html />
            <html lang="es">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Registro de Cuenta</title>
                    <link rel="stylesheet" href="styles1.css" />
                    <script src="scriptS.js" defer></script>
                </head>
                <body>
                    <h2>Registro de Cuenta</h2>
                    <form onSubmit={validarContrasenas}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required /><br /><br />
                        
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" required /><br /><br />
                        
                        <label htmlFor="correo">Correo Electrónico:</label>
                        <input type="email" id="correo" name="correo" required /><br /><br />
                        
                        <label htmlFor="contrasena">Contraseña:</label>
                        <input type="password" id="contrasena" name="contrasena" required /><br /><br />
                        
                        <label htmlFor="confirmarContrasena">Confirmar Contraseña:</label>
                        <input type="password" id="confirmarContrasena" name="confirmarContrasena" required /><br /><br />
                        
                        <input type="submit" value="Registrarse" /><br /><br />
                        <a href="login.html">Iniciar sesión</a>
                    </form>
                </body>
            </html>
        </>
    );
};

export default RegisterAccount;
