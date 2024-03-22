/**45. Determinar si un número es positivo y menor que 100. */

function esPositivoYMenorQueCien(numero) {
  return numero > 0 && numero < 100;
}
let numero = 75;

if (esPositivoYMenorQueCien(numero)) {
  console.log(numero + " es positivo y menor que 100.");
} else {
  console.log(numero + " no cumple con las condiciones.");
}