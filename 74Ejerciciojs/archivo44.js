/**44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
constante el valor de una moneda. */

const valorDolar = 0.00026; // 
const valorEuro = 0.00022; //

function convertirAPesos(dolares, euros) {
  let cantidadPesos = dolares / valorDolar + euros / valorEuro;
  return cantidadPesos;
}
let cantidadDolares = 100;
let cantidadEuros = 80;
let cantidadPesos = convertirAPesos(cantidadDolares, cantidadEuros);
console.log("La cantidad equivalente en pesos es:", cantidadPesos, "pesos");
