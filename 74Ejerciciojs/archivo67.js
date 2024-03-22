/**67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un
triángulo rectángulo como el de más abajo, de altura el número introducido. */

let altura = parseInt(prompt("Ingrese la altura del triángulo:"));

for (let i = 1; i <= altura; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "* ";
    }
    console.log(linea);
}
