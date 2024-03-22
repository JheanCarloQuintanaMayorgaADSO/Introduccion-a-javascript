/*74. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
usuario escriba “salir” que terminará.*/

let entrada = "";

while (entrada !== "salir") {
    entrada = prompt("Escribe algo (escribe 'salir' para terminar):");
    console.log(entrada);
}
