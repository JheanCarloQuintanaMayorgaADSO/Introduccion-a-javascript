/**68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10. */

for (let i = 1; i <= 10; i++) {
    let tabla = "";
    for (let j = 1; j <= 10; j++) {
        tabla += i * j + "\t";
    }
    console.log("Tabla del", i + ":", tabla);
}
