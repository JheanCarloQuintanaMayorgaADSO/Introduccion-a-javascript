/*84.Obtén una serie de número y devuelve la suma de todos los números positivos, si no
tenemos números positivos la sume debe devolver 0.*/

function sumaPositivos(...numeros) {
    let suma = 0;
    
    for (let numero of numeros) {
        if (numero > 0) {
            suma += numero;
        }
    }
    
    return suma;
}
const serieNumeros = [3, -5, 8, -2, 10, -7];
const resultado = sumaPositivos(...serieNumeros);
console.log("La suma de los números positivos es:", resultado);
