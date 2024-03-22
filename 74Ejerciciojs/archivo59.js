/**59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75. */

function seleccionarJugador(edad, estatura, peso) {
  if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
    console.log("¡Felicidades! El jugador cumple con los requisitos.");
  } else {
    console.log("El jugador no cumple con los requisitos.");
  }
}
let edad = parseInt(prompt("Ingrese la edad del jugador:"));
let estatura = parseInt(prompt("Ingrese la estatura del jugador (en cm):"));
let peso = parseInt(prompt("Ingrese el peso del jugador (en kg):"));

seleccionarJugador(edad, estatura, peso);
