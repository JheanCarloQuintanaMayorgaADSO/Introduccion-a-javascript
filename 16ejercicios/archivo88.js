/**88.Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
este numero es par o impar. */

function verificarParImpar() {
    const numero = Math.floor(Math.random() * 10) + 1;
    const esPar = numero % 2 === 0;
    return { numero: numero, esPar: esPar };
}
const resultado = verificarParImpar();
console.log("Número generado:", resultado.numero);
if (resultado.esPar) {
    console.log("El número generado es par.");
} else {
    console.log("El número generado es impar.");
}
