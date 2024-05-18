function validarContrasenas() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var confirmarContrasena = document.getElementById("confirmarContrasena").value;
  
  var mayusculaRegex = /[A-Z]/;
  var simboloRegex = /[!@#$%^&*.,]/;
  
  if (contrasena.length < 8 || !mayusculaRegex.test(contrasena) || !simboloRegex.test(contrasena)) {
    alert("La contraseña debe tener al menos 8 caracteres, 1 mayúscula y 1 símbolo. Por favor, inténtalo de nuevo.");
    return false;
  }
  
  if (contrasena !== confirmarContrasena) {
    alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    return false;
  }
  
  var usuario = {
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    contrasena: contrasena
  };
  
  localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
  
  alert("¡Registro exitoso! Serás redirigido a la página de inicio de sesión.");
  window.location.href = "login.html";
  return false;
}


function iniciarSesion(event) {
  event.preventDefault(); // Previene el envío del formulario

  var correoRegistrado = "usuarioEjemplo";
  var contrasenaRegistrada = "Contraseña123$";
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  
  if (correo === correoRegistrado && contrasena === contrasenaRegistrada) {
      location.replace("cuentaU.html");
  } else {
      alert("Usuario o contraseña incorrectos. Por favor, verifica tus credenciales.");
  }
}


function enviarCorreo() {
  var email = document.getElementById("email").value;
  
  console.log("Se ha enviado un correo de recuperación a: " + email);
  alert("Se ha enviado un correo de recuperación a: " + email);
  redirigirALogin();
  return false;
}

function mostrarContenido(opcion) {
  var contenido = document.getElementById("contenido");

  if (opcion === 'ordenes') {
      // Obtener las órdenes del caché si están disponibles
      const ordenesCache = localStorage.getItem('ordenes');
      contenido.innerHTML = `<h3>Órdenes Recientes</h3><p>${ordenesCache || 'No hay órdenes recientes.'}</p>`;
  } else if (opcion === 'datos') {
      // Obtener los datos del caché si están disponibles
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
  var contrasenaAntigua = "contrasenaAntigua"; // Aquí debes reemplazar con la contraseña antigua correcta
  var contrasenaAntiguaInput = document.getElementById("contrasenaAntigua").value;
  var contrasenaNueva = document.getElementById("contrasenaNueva").value;
  var confirmarContrasena = document.getElementById("confirmarContrasena").value;
  
  if (contrasenaAntiguaInput !== contrasenaAntigua) {
      alert("La contraseña antigua no es correcta. Por favor, inténtalo de nuevo.");
  } else if (contrasenaNueva !== confirmarContrasena) {
      alert("Las contraseñas nuevas no coinciden. Por favor, inténtalo de nuevo.");
  } else {
      // Aquí puedes agregar la lógica para actualizar la contraseña en la base de datos o donde sea necesario
      alert("Contraseña actualizada correctamente.");
  }
}

function actualizarDatos() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  
  // Aquí puedes agregar la lógica para actualizar los datos en la base de datos o donde sea necesario
  
  alert("Datos actualizados correctamente.");
}

function redirigirALogin() {
  location.replace("login.html");
}

function redirigirAcuentaU() {
  location.replace("cuentaU.html");
}

  