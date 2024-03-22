/**35. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
Después de pagar le sobran $91000. ¿Cuánto dinero tenía? */

function calcularDineroInicial() {
  let dineroRestante = 91000;
  let gastoJuegosLlaves = 5 * 11500;
  let gastoBomba = 1168000;
  let gastoCajasPernos = 3 * 87000;
  let dineroInicial = dineroRestante + gastoJuegosLlaves + gastoBomba + gastoCajasPernos;
  return dineroInicial;
}

let dineroInicial = calcularDineroInicial();
console.log("El jefe de obra tenía inicialmente:", dineroInicial, "pesos");
