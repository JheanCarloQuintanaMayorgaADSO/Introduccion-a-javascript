/**32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
producto y el total de la compra. */

function calcularTotalCompra(precioProductos) {
  let descuento = [0.05, 0.05, 0.02, 0.02];
  let totalCompra = precioProductos.reduce((total, precio, index) => total + (precio * (1 - descuento[index])), 0);
  return {totalCompra, precioProductos: precioProductos.map((precio, index) => precio * (1 - descuento[index]))};
}

let precioProductos = [100, 80, 50, 120];
let { totalCompra, precioProductos: preciosFinales } = calcularTotalCompra(precioProductos);
preciosFinales.forEach((precio, index) => console.log(`Precio a pagar por el ${index+1}º producto: ${precio}`));
console.log("Total de la compra:", totalCompra);
