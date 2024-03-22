/* 27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
calificación se compone de los siguientes porcentajes:
a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
b. 30% de la calificación examen final.
c. 15% de la calificación trabajo final. */

function calcularPromedioFinal(parcial1, parcial2, parcial3, examenFinal, trabajoFinal) {
  
  let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
  
  
  let promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

  return promedioFinal;
}

let promedioParcial1 = 8;
let promedioParcial2 = 7.5;
let promedioParcial3 = 9;
let calificacionExamenFinal = 8.5;
let calificacionTrabajoFinal = 9;

let promedioFinal = calcularPromedioFinal(promedioParcial1, promedioParcial2, promedioParcial3, calificacionExamenFinal, calificacionTrabajoFinal);
console.log("El promedio final de la materia de algoritmos es:", promedioFinal);
