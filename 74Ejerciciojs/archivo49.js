/**49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
positivos: área triangulo= lado * lado */

function calcularAreaRectangulo(base, altura) {
  if (base > 0 && altura > 0) {
    let areaRectangulo = base * altura;
    console.log("El área del rectángulo es:", areaRectangulo);
  } else {
    console.log("Los lados del rectángulo deben ser positivos.");
  }
}

let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

calcularAreaRectangulo(base, altura);
