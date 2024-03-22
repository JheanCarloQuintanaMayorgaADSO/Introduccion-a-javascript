/** 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos. */

function calcularPromedio(calificacion1, calificacion2, calificacion3, calificacion4) {
  let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
  return promedio;
}

let calificacionExamen1 = 4;
let calificacionExamen2 = 3;
let calificacionExamen3 = 5;
let calificacionExamen4 = 2;

let promedioCalificaciones = calcularPromedio(calificacionExamen1, calificacionExamen2, calificacionExamen3, calificacionExamen4);
console.log("El promedio de las calificaciones es:", promedioCalificaciones);
