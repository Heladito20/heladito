// Fecha oficial de inicio de la relación
const fechaInicio = new Date("2026-01-23"); 

function actualizarContador() {
  const hoy = new Date();

  let años = hoy.getFullYear() - fechaInicio.getFullYear();
  let meses = hoy.getMonth() - fechaInicio.getMonth();
  let dias = hoy.getDate() - fechaInicio.getDate();

  if (dias < 0) {
    meses -= 1;
    const mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
    dias += mesAnterior;
  }

  if (meses < 0) {
    años -= 1;
    meses += 12;
  }

  let mensaje = "";
  if (años > 0) {
    mensaje = `Oficialmente nuestra relación lleva ${años} años, ${meses} meses y ${dias} días desde el 23 de enero de 2026.`;
  } else {
    mensaje = `Oficialmente nuestra relación lleva ${meses} meses y ${dias} días desde el 23 de enero de 2026.`;
  }

  document.getElementById("contador").innerHTML = mensaje;

  // Mensaje final romántico que conecta con el inicial
  const mensajeFinal = document.getElementById("mensaje-final");
  if (mensajeFinal) {
    mensajeFinal.innerHTML = `
      Lo nuestro no inicia el 23 de enero, lo nuestro viene de algo más grande: 
      de un destino que hizo que cada día antes de conocernos aprendiéramos nuestras lecciones por separado, 
      que nos topáramos más de una vez en algún lugar, que permitió que las personas que debían unirnos se conocieran entre sí 
      y que nuestros caminos terminaran uniéndose en el tiempo exacto.  

      Lo nuestro es más grande porque es el plan perfecto del destino: llegar hasta aquí, 
      hasta que eternamente este cronómetro siga contando segundos, minutos, horas, días, meses, años… 
      y espero que también vidas.  

      Te amo y te amaré por toda la eternidad, hasta que tú me lo permitas. 💖
    `;
  }

  // Cambiar color del título según el mes
  const titulo = document.getElementById("titulo");
  const colores = ["#ffffff", "#f1f1f1", "#e0e0e0", "#cfcfcf", "#b0b0b0"];
  titulo.style.color = colores[meses % colores.length];

  // Cambiar fondo según el mes
  const fondos = [
    "linear-gradient(135deg, #2f3e46, #1b263b, #3a2f2f, #264653)",
    "linear-gradient(135deg, #1b263b, #264653, #2f3e46, #3a2f2f)",
    "linear-gradient(135deg, #3a2f2f, #2f3e46, #1b263b, #264653)",
    "linear-gradient(135deg, #264653, #3a2f2f, #2f3e46, #1b263b)",
    "linear-gradient(135deg, #000000, #2f3e46, #1b263b, #3a2f2f)"
  ];
  document.body.style.background = fondos[meses % fondos.length];
}

// Actualizar al cargar
actualizarContador();

// Actualizar cada día
setInterval(actualizarContador, 1000 * 60 * 60 * 24);

// Modal para ampliar fotos
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagen-grande");
const cerrar = document.getElementsByClassName("cerrar")[0];

document.querySelectorAll(".clickable").forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.maxWidth = "100%";
    modalImg.style.height = "auto";
  }
});

cerrar.onclick = function() {
  modal.style.display = "none";
}

// Spotify autoplay al cargar
window.addEventListener("load", () => {
  const spotifyFrame = document.querySelector(".spotify-box iframe");
  if (spotifyFrame) {
    if (!spotifyFrame.src.includes("autoplay=1")) {
      spotifyFrame.src += "&autoplay=1";
    }
  }
});

