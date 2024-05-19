function iniciarSesion(event) {
    event.preventDefault(); // Previene el envío del formulario
  
    
    var usuariosRegistrados = [
        { correo: "usuario1@example.com", contrasena: "contrasena1" },
        { correo: "usuario2@example.com", contrasena: "contrasena2" },
        { correo: "ASDF@ASDF", contrasena: "ASDFASDF." },
    ];

    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    var usuarioValido = usuariosRegistrados.find(function(usuario) {
        return usuario.correo === correo && usuario.contrasena === contrasena;
    });

    if (usuarioValido) {
        window.location.href = "cuentaU.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, verifica tus credenciales.");
    }
}
