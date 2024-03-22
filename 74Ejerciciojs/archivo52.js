/**52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
horas trabajadas. */

function calcularPago(empleado, horasTrabajadas) {
  let tarifa = 0;
  if (empleado === "planta") {
    tarifa = 20000;
  } else if (empleado === "administrativo") {
    tarifa = 10000;
  } else {
    console.log("Tipo de empleado no válido.");
    return;
  }
  let pagoTotal = tarifa * horasTrabajadas;
  return pagoTotal;
}

let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta o administrativo):");
let horasTrabajadas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));
let pago = calcularPago(tipoEmpleado, horasTrabajadas);
console.log("El pago total del empleado es:", pago);
