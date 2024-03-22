/**54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
segundo, en caso contrario indicar con un mensaje que la operación no es posible
realizarla. */

function restarNumeros(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return "La operación no es posible porque el primer número no es mayor que el segundo.";
  }
}
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado = restarNumeros(numero1, numero2);
console.log("El resultado de la resta es:", resultado);
