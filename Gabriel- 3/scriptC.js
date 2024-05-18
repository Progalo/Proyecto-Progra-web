function mostrarContenido(opcion) {
    var contenido = document.getElementById("contenido");
  
    if (opcion === 'ordenes') {
        const ordenesCache = localStorage.getItem('ordenes');
        contenido.innerHTML = `<h3>Órdenes Recientes</h3><p>${ordenesCache || 'No hay órdenes recientes.'}</p>`;
    } else if (opcion === 'datos') {
        const nombreCache = localStorage.getItem('nombre');
        const emailCache = localStorage.getItem('email');
  
        contenido.innerHTML = `
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder="Nuevo nombre" value="${nombreCache || ''}"><br>
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" placeholder="Nuevo correo electrónico" value="${emailCache || ''}"><br>
        <button onclick="actualizarDatos()">Guardar cambios</button>
        <h3>Datos de Registro</h3>`;
    } else if (opcion === 'contrasena') {
        contenido.innerHTML = `<h3>Cambiar Contraseña</h3>
        <label for="contrasenaAntigua">Contraseña Antigua:</label>
        <input type="password" id="contrasenaAntigua" placeholder="Contraseña antigua"><br>
        <label for="contrasenaNueva">Nueva Contraseña:</label>
        <input type="password" id="contrasenaNueva" placeholder="Nueva contraseña"><br>
        <label for="confirmarContrasena">Confirmar Nueva Contraseña:</label>
        <input type="password" id="confirmarContrasena" placeholder="Confirmar nueva contraseña"><br>
        <button onclick="actualizarContrasena()">Guardar nueva contraseña</button>`;
    }
  }
  
  function actualizarContrasena() {
    var contrasenaAntigua = "contrasenaAntigua";
    var contrasenaAntiguaInput = document.getElementById("contrasenaAntigua").value;
    var contrasenaNueva = document.getElementById("contrasenaNueva").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;
    
    if (contrasenaAntiguaInput !== contrasenaAntigua) {
        alert("La contraseña antigua no es correcta. Por favor, inténtalo de nuevo.");
    } else if (contrasenaNueva !== confirmarContrasena) {
        alert("Las contraseñas nuevas no coinciden. Por favor, inténtalo de nuevo.");
    } else {
        alert("Contraseña actualizada correctamente.");
    }
  }
  
  function actualizarDatos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    
    alert("Datos actualizados correctamente.");
  }
  