/**83.Genera un patrón de asteriscos en forma de pirámide. */

function imprimirPiramide(filas) {
    for (let i = 1; i <= filas; i++) {
        let espacio = ' '.repeat(filas - i);
        let asteriscos = '*'.repeat(2 * i - 1); 
        console.log(espacio + asteriscos);
    }
}
const numFilas = 5;
console.log("Pirámide de asteriscos:");
imprimirPiramide(numFilas);
