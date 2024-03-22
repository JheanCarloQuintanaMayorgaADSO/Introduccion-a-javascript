/*81.Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.*/

function invertircadena(cadena) {
  return cadena.split(``).reverse().join(``);
}

let cadenaoriginal = "estamos bien";
let cadenainvertida = invertircadena(cadenaoriginal);
console.log(`la cadena original es "${cadenaoriginal}" en orden inverso es "${cadenainvertida}"`);