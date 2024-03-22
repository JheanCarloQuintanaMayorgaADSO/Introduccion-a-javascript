/*11.Escribir un programa que sume, resta, multiplique y divida dos números.*/

function realizaroperaciones() {
  let numero1 = parseFloat(prompt("ingrese el primer numero"));
  let numero2 = parseFloat(prompt("ingrese el segundo numero"));

  if (isNaN(numero1) || isNaN(numero2)) {
    console.log("por favor ingrese numero validos:");
    return;
  }
  console.log(`suma: ${numero1 + numero2}`);
  console.log(`resta: ${numero1 - numero2}`);
  console.log(`multiplicacion: ${numero1 * numero2}`);
  
  if (numero2 !== 0) {
    console.log(`division: ${numero1 / numero2}`);
  } else {
    console.log("no se puede divir por cero. ");
  }
}
realizaroperaciones();