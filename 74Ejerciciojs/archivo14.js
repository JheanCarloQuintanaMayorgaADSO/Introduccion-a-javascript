/*Escribir un programa que calcule el área de un triángulo.*/

function calcularareatriangulo() {
  let base = parseFloat(prompt("ingrese la base del triangulo"));
  let altura = parseFloat(prompt("ingrese la altura del triangulo"));
  
  if (isNaN(base) || isNaN(altura)) {
    console.log("por favor, ingrese valores validos");
    return;
  }

  let area = (base * altura) / 2;

  console.log(`el area del triangulo es: ${area}`);
}

calcularareatriangulo();