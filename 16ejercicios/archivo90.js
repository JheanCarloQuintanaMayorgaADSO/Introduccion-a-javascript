/**90.Crea una función que convierta números del 0 al 5 en su representación textual, por
ejemplo: “cero”, “uno”, “dos”, “tres” etc. */

function convertirANombre(numero) {
    const nombres = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    return nombres[numero] || "Número fuera de rango";
}
console.log(convertirANombre(0));
console.log(convertirANombre(3));
console.log(convertirANombre(5));
console.log(convertirANombre(7));
