/*15.Escribir un programa que calcule la longitud y el área de una circunferencia.*/

function calcularLongitudYArea() {
  let radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));

  if (isNaN(radio) || radio <= 0) {
    console.log("Por favor, ingrese un radio válido.");
    return;
  }

  let longitud = 2 * Math.PI * radio;

  let area = Math.PI * Math.pow(radio, 2);

  console.log(`La longitud de la circunferencia es: ${longitud}`);
  console.log(`El área de la circunferencia es: ${area}`);
}


calcularLongitudYArea();