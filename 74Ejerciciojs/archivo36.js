/**36. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
cantidad de gramos de harina para hacer el bizcocho es? */

function calcularHarinaParaBizcocho(cantidadCacao) {
  let cantidadHarina = (100 * cantidadCacao) / 10;
  return cantidadHarina;
}

let cantidadCacao = 20;
let cantidadHarina = calcularHarinaParaBizcocho(cantidadCacao);
console.log("La cantidad de harina para hacer el bizcocho es:", cantidadHarina, "gramos");
