/**86.Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales. */

function quitarVocales(cadena) {
    const regex = /[aeiouAEIOU]/g;
    const nuevaCadena = cadena.replace(regex, '');
    return nuevaCadena;
}
const cadenaOriginal = "Hola gente del sena";
const cadenaSinVocales = quitarVocales(cadenaOriginal);
console.log("Cadena sin vocales:", cadenaSinVocales);
