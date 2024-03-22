/**66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
dura la inversión. */

let cantidadInvertida = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interesAnual = parseFloat(prompt("Ingrese el interés anual en porcentaje (%):"));
let numeroAnios = parseInt(prompt("Ingrese el número de años:"));

for (let i = 1; i <= numeroAnios; i++) {
    let capitalObtenido = cantidadInvertida * (1 + interesAnual / 100) ** i;
    console.log("Año", i + ":", capitalObtenido.toFixed(2));
}
