/**38. Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
parte le corresponde a Lorena?*/

function calcularParteLorena(totalTapas) {
  let parteMartin = (2/3) * totalTapas;
  let parteJairo = (1/4) * totalTapas;
  let parteLorena = totalTapas - parteMartin - parteJairo;
  return parteLorena;
}
let totalTapas = 1000;
let parteLorena = calcularParteLorena(totalTapas);
console.log("La parte que le corresponde a Lorena es:", parteLorena, "tapas");
