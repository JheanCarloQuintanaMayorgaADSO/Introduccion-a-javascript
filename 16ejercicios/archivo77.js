/*77.Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
cortas menores de 5 caracteres).*/

function longitudpalabra(palabra) {
  if (palabra.length <= 5) {
    return "corta";
  } else {
    return "larga"
  }
}

console.log(longitudpalabra("largas"))