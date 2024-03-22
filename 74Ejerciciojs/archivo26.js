/*26. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.*/

function convertirCelsiusAFahrenheit(gradosCelsius) {
  let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
  return gradosFahrenheit;
}

let temperaturaCelsius = 25;
let temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);
console.log("La temperatura en grados Fahrenheit es:", temperaturaFahrenheit);