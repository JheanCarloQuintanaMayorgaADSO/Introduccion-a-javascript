/**46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes. */

function encontrarMayor(num1, num2, num3) {
  let mayor = num1;
  if (num2 > mayor) {
    mayor = num2;
  }
  if (num3 > mayor) {
    mayor = num3;
  }
  return mayor;
}
let num1 = 10;
let num2 = 20;
let num3 = 15;
let mayor = encontrarMayor(num1, num2, num3);
console.log("El mayor de los tres números es:", mayor);
