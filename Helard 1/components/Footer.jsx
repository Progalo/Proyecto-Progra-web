/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
            </li>
            {/* Agrega más enlaces según tus necesidades */}
          </ul>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} TuTienda. Todos los derechos reservados.</p>
          {/* Agrega aquí información adicional como redes sociales, dirección, etc. */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
