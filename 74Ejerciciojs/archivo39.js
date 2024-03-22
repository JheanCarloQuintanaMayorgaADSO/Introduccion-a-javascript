/**39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
Considere que se cobra por m2 y realice el código que representen el algoritmo que le
permita ir generando presupuestos para cada cliente. */

function calcularCostoPintura(costoPorMetroCuadrado, areaTotal) {
  let costoTotal = costoPorMetroCuadrado * areaTotal;
  return costoTotal;
}
let costoPorMetroCuadrado = 30;
let areaTotal = 100;
let costoTotal = calcularCostoPintura(costoPorMetroCuadrado, areaTotal);
console.log("El costo total del trabajo de pintura es:", costoTotal, "pesos");