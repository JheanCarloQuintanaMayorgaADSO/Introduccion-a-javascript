/*80.Crea una función de nos devuelva el elemento mayor de un arreglo de números.*/

function encontrarMayor(arreglo) {
    if (arreglo.length === 0) {
        return "El arreglo está vacío";
    }
    
    let mayor = arreglo[0];
    
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    
    return mayor;
}
const numeros = [10, 5, 30, 8, 25];
console.log("El número mayor en el arreglo es:", encontrarMayor(numeros));
