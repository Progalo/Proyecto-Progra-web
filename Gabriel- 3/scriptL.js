function iniciarSesion(event) {
    event.preventDefault();
  
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