/* 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa que ingresando el costo de los medicamentos calcule el descuento y el precio final. */

function calcularPrecioFinal(costoMedicamentos) {
  let descuento = costoMedicamentos * 0.10;
  let precioFinal = costoMedicamentos - descuento;
  return [descuento, precioFinal];
}

let costo = 100; 
let [descuento, precioFinal] = calcularPrecioFinal(costo);

console.log("Descuento aplicado:", descuento);
console.log("Precio final de los medicamentos:", precioFinal);
