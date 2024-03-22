/**87.Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo. */

function inversoAditivo(numeros) {
    const inversos = numeros.map(numero => {     
        return numero > 0 ? -numero : Math.abs(numero);
    });
    return inversos;
}


const conjuntoNumeros = [1, -3, 5, -7, 9];
const inversos = inversoAditivo(conjuntoNumeros);
console.log("Inverso aditivo de cada número:", inversos);
