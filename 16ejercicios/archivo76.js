/*76.Crea una función que tome un número como argumento y devuelva la cadena si el
numero es par o impar.*/

function determinarParidad(numero) {

  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}
let num = 1;
let paridad = determinarParidad(num);
console.log (`el numero ${num} es ${paridad}`);