function enviarCorreo() {
    var email = document.getElementById("email").value;
    
    console.log("Se ha enviado un correo de recuperación a: " + email);
    alert("Se ha enviado un correo de recuperación a: " + email);
    redirigirALogin();
    return false;
  }
  
  function redirigirALogin() {
    location.replace("login.html");
  }