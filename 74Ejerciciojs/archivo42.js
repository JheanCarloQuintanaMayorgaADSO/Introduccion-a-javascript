/**42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
monto total de la venta, según la cantidad de artículos solicitados durante el día. */

function calcularMontoTotal(books, notebooks, pens) {
  let precioLibro = 10000;
  let precioCuaderno = 7550;
  let precioLapicero = 5550;
  let montoTotal = (books * precioLibro) + (notebooks * precioCuaderno) + (pens * precioLapicero);
  return montoTotal;
}
let books = 5;
let notebooks = 10;
let pens = 20;
let montoTotalVenta = calcularMontoTotal(books, notebooks, pens);
console.log("El monto total de la venta es:", montoTotalVenta, "pesos");
