/*64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
todos los números impares desde 1 hasta ese número separados por coma*/

let numero = parseInt(prompt("Ingrese un número entero positivo:"));
let impares = "";
for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        if (impares !== "") {
            impares += ", ";
        }
        impares += i;
    }
}
console.log("Números impares hasta", numero + ":", impares);
