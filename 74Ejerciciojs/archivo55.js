/**55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
20% de descuento. */

function calcularDescuento(tipoMembresia, precio) {
  let descuento = 0;
  if (tipoMembresia === "A") {
    descuento = 0.1 * precio;
  } else if (tipoMembresia === "B") {
    descuento = 0.15 * precio;
  } else if (tipoMembresia === "C") {
    descuento = 0.2 * precio;
  } else {
    console.log("Tipo de membresía no válido.");
    return;
  }
  return descuento;
}
let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");
let precio = parseFloat(prompt("Ingrese el precio del helado:"));
let descuento = calcularDescuento(tipoMembresia, precio);
console.log("El descuento es:", descuento.toFixed(2));
