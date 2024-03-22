/**37. Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos
Kg transporta? */

function calcularPesoTotalCajas(numeroCajas, pesoCaja) {
  let pesoTotal = numeroCajas * pesoCaja;
  return pesoTotal;
}
let numeroCajas = 25;
let pesoCaja = 748;

let pesoTotal = calcularPesoTotalCajas(numeroCajas, pesoCaja);
console.log("El camión transporta un total de", pesoTotal, "kilogramos");
