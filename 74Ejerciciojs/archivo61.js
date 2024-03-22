/**61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
obtuvieron las siguientes calificaciones:
a. «a» = menor que 100 y mayor igual que 90
b. «b» = menor que 90 y mayor igual que 80
c. «c» = menor que 80 y mayor igual que 70
d. «d» = menor que 70 y mayor igual que 60 */

function analizarNotas(notas) {
  let notaAlta = Math.max(...notas);
  let notaBaja = Math.min(...notas);
  let cantidadMaxima = notas.filter(nota => nota === 100).length;
  let cantidadA = notas.filter(nota => nota < 100 && nota >= 90).length;
  let cantidadB = notas.filter(nota => nota < 90 && nota >= 80).length;
  let cantidadC = notas.filter(nota => nota < 80 && nota >= 70).length;
  let cantidadD = notas.filter(nota => nota < 70 && nota >= 60).length;

  console.log("La nota más alta es:", notaAlta);
  console.log("La nota más baja es:", notaBaja);
  console.log("Cantidad de alumnos con nota máxima (100):", cantidadMaxima);
  console.log("Cantidad de alumnos con nota A (90-99):", cantidadA);
  console.log("Cantidad de alumnos con nota B (80-89):", cantidadB);
  console.log("Cantidad de alumnos con nota C (70-79):", cantidadC);
  console.log("Cantidad de alumnos con nota D (60-69):", cantidadD);
}
let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas a analizar:"));
let notas = [];
for (let i = 0; i < cantidadNotas; i++) {
  notas.push(parseInt(prompt("Ingrese la nota del alumno " + (i + 1) + ":")));
}
analizarNotas(notas);