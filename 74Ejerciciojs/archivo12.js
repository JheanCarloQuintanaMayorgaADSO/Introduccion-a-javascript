/*12.Escribir un programa que calcule el área de un rectángulo:*/

function calcularAreaRectangulo() {
  let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

  if (isNaN(base) || isNaN(altura)) {
    console.log("Por favor, ingrese valores válidos.");
    return;
  }

  let area = base * altura;

  console.log(`El área del rectángulo es: ${area}`);
}

calcularAreaRectangulo();