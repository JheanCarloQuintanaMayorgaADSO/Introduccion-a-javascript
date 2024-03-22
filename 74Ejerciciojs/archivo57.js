/**57. Consideramos la asignación de una calificación literal a un rango dado de calificaciones
numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
Aprobado. */

function asignarCalificacion(calificacionNumerica) {
  if (calificacionNumerica >= 9.1 && calificacionNumerica <= 10) {
    return "A - Excelente";
  } else if (calificacionNumerica >= 8.1 && calificacionNumerica < 9) {
    return "A - Muy bien";
  } else if (calificacionNumerica >= 7.5 && calificacionNumerica < 8) {
    return "A - Bien";
  } else {
    return "NA - No Aprobado";
  }
}
let calificacionNumerica = parseFloat(prompt("Ingrese la calificación numérica:"));
let calificacionLiteral = asignarCalificacion(calificacionNumerica);
console.log("La calificación literal es:", calificacionLiteral);
