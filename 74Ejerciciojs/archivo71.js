/**71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
número primo o no. */

let numero = parseInt(prompt("Ingrese un número entero positivo mayor que 1:"));
let esPrimo = true;

if (numero <= 1 || !Number.isInteger(numero)) {
    console.log("Debe ingresar un número entero positivo mayor que 1.");
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(numero + " es un número primo.");
    } else {
        console.log(numero + " no es un número primo.");
    }
}
