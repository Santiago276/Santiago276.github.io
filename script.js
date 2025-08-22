// Contador regresivo para las ofertas
function actualizarContador() {
  const dias = document.getElementById("dias");
  const horas = document.getElementById("horas");
  const minutos = document.getElementById("minutos");
  const segundos = document.getElementById("segundos");

  let segundosRestantes = parseInt(segundos.textContent);
  let minutosRestantes = parseInt(minutos.textContent);
  let horasRestantes = parseInt(horas.textContent);
  let diasRestantes = parseInt(dias.textContent);

  segundosRestantes--;

  if (segundosRestantes < 0) {
    segundosRestantes = 59;
    minutosRestantes--;

    if (minutosRestantes < 0) {
      minutosRestantes = 59;
      horasRestantes--;

      if (horasRestantes < 0) {
        horasRestantes = 23;
        diasRestantes--;

        if (diasRestantes < 0) {
          // La oferta ha terminado
          diasRestantes = 0;
          horasRestantes = 0;
          minutosRestantes = 0;
          segundosRestantes = 0;
        }
      }
    }
  }

  dias.textContent = diasRestantes.toString().padStart(2, "0");
  horas.textContent = horasRestantes.toString().padStart(2, "0");
  minutos.textContent = minutosRestantes.toString().padStart(2, "0");
  segundos.textContent = segundosRestantes.toString().padStart(2, "0");
}

setInterval(actualizarContador, 1000);

// Manejo del formulario
document
  .getElementById("formContacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("¡Gracias por tu consulta! Te contactaremos pronto.");
    this.reset();
  });
