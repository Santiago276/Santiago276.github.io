document.getElementById('formRegistro').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('¡Gracias por registrarte! Nos pondremos en contacto contigo pronto.');
  this.reset();
});