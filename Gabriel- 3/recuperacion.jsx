import React from 'react';
import Header from './Header';
import Footer from './Footer';
const RecoverAccount = () => {
    const enviarCorreo = () => {
    };

    return (
        <>
            <DOCTYPE html />
            <html lang="es">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Recuperar Cuenta</title>
                    <link rel="stylesheet" href="styles3.css" />
                    <script src="scriptR.js" defer></script>
                </head>
                <body>
                    <h2>Recuperar Cuenta</h2>
                    <form onSubmit={enviarCorreo}>
                        <label htmlFor="email">Correo Electrónico:</label><br />
                        <input type="email" id="email" placeholder="Correo Electrónico" /><br /><br />
                        <input type="submit" value="Recuperar Cuenta" /><br /><br />
                        <a href="login.html">Volver a Iniciar Sesión</a><br />
                    </form>
                </body>
            </html>
        </>
    );
};

export default RecoverAccount;
