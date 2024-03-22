/*75.Crea una función que reciba dos números como parámetros y devuelva el mayor de
ellos.*/

function obtenernumeromayor(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else if (numero1 < numero2) {
    return numero2;
  }
  let num1 = 99;
  let num2 = 100;
  let mayornumero = obtenernumeromayor(num1, num2);
  console.log("el mayor numero es", mayornumero);
}

obtenernumeromayor();