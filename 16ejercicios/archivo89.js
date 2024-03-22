/**89.Crea una función que reciba dos números como parámetros y devuelva el mayor de
ellos.*/

function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
const numero1 = 12;
const numero2 = 7;
const mayor = encontrarMayor(numero1, numero2);
console.log("El número mayor es:", mayor);
