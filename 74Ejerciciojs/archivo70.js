/**70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta. */

const contraseñaCorrecta = "contraseña";
let contraseñaIngresada = prompt("Ingrese la contraseña:");

while (contraseñaIngresada !== contraseñaCorrecta) {
    contraseñaIngresada = prompt("Contraseña incorrecta. Ingrese la contraseña nuevamente:");
}

console.log("Contraseña correcta. Acceso concedido.");
