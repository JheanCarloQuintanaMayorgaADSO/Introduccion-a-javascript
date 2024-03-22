/**85.Implemente una función que sume dos números y devuelva su suma en binario, el
número binario devuelto debe ser una cadena.*/

function sumaBinaria(num1, num2) {
    const suma = num1 + num2;
    const sumaBinaria = suma.toString(2);
    return sumaBinaria;
}
const numero1 = 5;
const numero2 = 3;
const resultadoBinario = sumaBinaria(numero1, numero2);
console.log("La suma en binario es:", resultadoBinario);
