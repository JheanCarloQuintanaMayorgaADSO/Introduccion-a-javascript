/**48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
desea calcular "Triángulo y Círculo: (Escriba T o C):
a. Triangulo = base * altura / 2
b. Circulo = PI * radio* radio */

function calcularArea() {
  let figura = prompt("¿Qué figura geométrica desea calcular? (Escriba T para triángulo o C para círculo):");

  if (figura === "T" || figura === "t") {
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    let areaTriangulo = (base * altura) / 2;
    console.log("El área del triángulo es:", areaTriangulo);
  } else if (figura === "C" || figura === "c") {
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    let areaCirculo = Math.PI * radio * radio;
    console.log("El área del círculo es:", areaCirculo);
  } else {
    console.log("La figura ingresada no es válida.");
  }
}

calcularArea();
