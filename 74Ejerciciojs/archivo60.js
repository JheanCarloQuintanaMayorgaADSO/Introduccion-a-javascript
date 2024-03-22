/**60. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
de cursos es mayor que 6 el pago será únicamente de $1.200.000. */
function calcularPagoCursos(cantidadCursos) {
  let costoPorCurso = cantidadCursos <= 6 ? 2000000 : 1200000;
  let pagoTotal = cantidadCursos * costoPorCurso;
  return pagoTotal;
}
let cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));
let pagoTotal = calcularPagoCursos(cantidadCursos);
console.log("El pago total es: $" + pagoTotal);