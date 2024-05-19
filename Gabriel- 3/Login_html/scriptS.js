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