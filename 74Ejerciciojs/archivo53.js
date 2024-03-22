/**53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
de: Iva, Subtotal y Total de la compra de los artículos. */

function calcularCompra(productos) {
  let subtotal = 0;
  for (let i = 0; i < productos.length; i++) {
    subtotal += productos[i];
  }
  let iva = subtotal * 0.19;
  let total = subtotal + iva;

  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("IVA: $" + iva.toFixed(2));
  console.log("Total: $" + total.toFixed(2));
}
let productos = [15000, 20000, 18000, 25000, 30000];
calcularCompra(productos);
