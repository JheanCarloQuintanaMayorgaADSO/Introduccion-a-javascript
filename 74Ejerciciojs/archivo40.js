/**40. Una empresa que contrata personal requiere determinar la edad de las personas que
solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
nacieron. Realice el código que representen el algoritmo para solucionar este problema. */

function calcularEdad(anioNacimiento) {
  let anioActual = new Date().getFullYear();
  let edad = anioActual - anioNacimiento;
  return edad;
}
let anioNacimiento = 1990;
let edad = calcularEdad(anioNacimiento);
console.log("La edad de la persona es:", edad, "años");
