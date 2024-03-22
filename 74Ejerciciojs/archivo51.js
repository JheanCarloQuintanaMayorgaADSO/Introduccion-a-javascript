/**51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
los $130.000 el descuento será del 15%, de lo contrario no hay descuento. */

function calcularPago(consumo) {
  let descuento = 0;
  if (consumo > 130000) {
    descuento = 0.15 * consumo;
  }
  let total = consumo - descuento;
  return total;
}

let consumo = parseFloat(prompt("Ingrese el monto total del consumo en el restaurante:"));

let pagoFinal = calcularPago(consumo);
console.log("El monto a pagar es:", pagoFinal);
