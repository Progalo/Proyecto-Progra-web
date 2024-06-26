import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Login = () => {
    return (
        <>
            <DOCTYPE html />
            <html lang="es">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Iniciar Sesión</title>
                    <link rel="stylesheet" href="styles2.css" />
                    <script src="scriptL.js" defer></script>
                </head>
                <body>
                    <h2>Iniciar Sesión</h2>
                    <form action="/login" method="POST">
                        <label htmlFor="correo">Correo Electrónico:</label><br />
                        <input type="email" id="correo" name="correo" required /><br /><br />
                        <label htmlFor="contrasena">Contraseña:</label><br />
                        <input type="password" id="contrasena" name="contrasena" required /><br /><br />
                        <input type="submit" value="Iniciar Sesión" />
                        
                        <a href="recuperacion.html">¿Olvidaste tu contraseña?</a><br />
                        <a href="signin.html">No tengo cuenta, deseo registrarme</a>
                    </form>
                </body>
            </html>
        </>
    );
};

export default Login;
