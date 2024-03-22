/**41. Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
frase invertida. */

function invertirFrase(frase) {
  let caracteres = frase.split('');
  let caracteresInvertidos = caracteres.reverse();
  let fraseInvertida = caracteresInvertidos.join('');
  return fraseInvertida;
}
let fraseOriginal = "Soy programador de software";
let fraseInvertida = invertirFrase(fraseOriginal);
console.log("Frase original:", fraseOriginal);
console.log("Frase invertida:", fraseInvertida);
