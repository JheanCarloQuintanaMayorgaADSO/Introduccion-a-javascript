/**47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
menor o si son iguales. */

function encontrarMayorMenor(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales");
  } else {
    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3); 
    console.log("El mayor de los tres números es:", mayor);
    console.log("El menor de los tres números es:", menor);
  }
}
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

encontrarMayorMenor(num1, num2, num3);
