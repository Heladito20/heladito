// Fecha de inicio de la relación
const fechaInicio = new Date("2026-01-24"); 

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

  document.getElementById("contador").innerHTML =
    `💖 Hemos estado juntos por ${años} años, ${meses} meses y ${dias} días 💖`;
}
actualizarContador();

// Modal de imágenes
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagen-grande");
const captionText = document.getElementById("caption");
const cerrar = document.getElementsByClassName("cerrar")[0];

document.querySelectorAll(".clickable").forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

cerrar.onclick = function() {
  modal.style.display = "none";
}
