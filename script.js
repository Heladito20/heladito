// Fecha de inicio de la relación
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
    mensaje = `Hemos estado juntos por ${años} años, ${meses} meses y ${dias} días`;
  } else {
    mensaje = `Hemos estado juntos por ${meses} meses y ${dias} días`;
  }

  document.getElementById("contador").innerHTML = mensaje;

  // Cambiar color
