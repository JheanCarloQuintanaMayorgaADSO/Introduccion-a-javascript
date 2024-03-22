/*23.Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
expresada en kilómetros por hora, proporcione la velocidad en metros por segundo. */

function kmPorHoraAMetrosPorSegundo(velocidadKmPorHora) {
  return velocidadKmPorHora * (1000 / 3600);
}
let velocidadKmPorHora = 60;
let velocidadMetrosPorSegundo = kmPorHoraAMetrosPorSegundo(velocidadKmPorHora);
console.log("Velocidad en metros por segundo:", velocidadMetrosPorSegundo);
