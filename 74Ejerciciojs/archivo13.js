/*. Escribir un programa que lea 4 números y calcule la media.*/

function calcularmedia() {
  let numero1 = parseFloat(prompt("ingrese el primero numero:"));
  let numero2 = parseFloat(prompt("ingrese el sengundo numero:"));
  let numero3 = parseFloat(prompt("ingrese el tecer numero:"));
  let numero4 = parseFloat(prompt("ingrese el cuarto numero:"));

  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
    console.log("por favor, ingrese numeros validos.");
    return;
  }

  let media = (numero1 + numero2 + numero3 + numero4) / 4;
  console.log(`la media de los numero es: ${media}`);
}
calcularmedia();