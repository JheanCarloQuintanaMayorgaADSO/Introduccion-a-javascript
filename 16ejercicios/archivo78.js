/*78.Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
en la consola.*/

function contarSilabas(palabra) {
     let patronS = /[aeiouáéíóú]+/gi;
     let matches = palabra.match(patronS);
    
     console.log("Palabra:", palabra);
     console.log("Coincidencias:", matches);
    
     if (matches !== null) {
         return matches.length;
     } else {
         return 0;
     }
 }