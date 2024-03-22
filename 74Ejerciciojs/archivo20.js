/*20.Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
grado: a * x2 + b + x + c, siendo X un valor constante.*/

function calcularRaices(a, b, c) {
  let discriminante = b * b - 4 * a * c;
  
  if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    return [x1, x2];
  } else if (discriminante === 0) {
    let x = -b / (2 * a);
    return [x];
  } else {
    return [];
  }
}
