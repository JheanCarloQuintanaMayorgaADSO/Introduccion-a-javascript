/*4. Escribir un programa que pida al usuario un numero entero y muestre por pantalla
si es par o impar.*/

function determinarparidad() {
  let numero = parseFloat(prompt("ingrese un numero entero:"));

  if (isNaN(numero)) {
    console.log("por favor ingrese un numero entero valido");
  } else {
    if (numero % 2 == 0) {
      console.log(`el numero ${numero} es par.`);
    } else {
      console.log(`el numero ${numero} es impar`)
    }
  }
}

determinarparidad()