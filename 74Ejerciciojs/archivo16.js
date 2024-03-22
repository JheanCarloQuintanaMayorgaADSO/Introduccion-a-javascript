/*16.Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5*
minutos, exprese el resultado en metros/segundo.*/

function calcularVelocidad() {
  let distanciaKm = 2;
  let tiempoMinutos = 5;

  let distanciaMetros = distanciaKm * 1000;
  let tiempoSegundos = tiempoMinutos * 60;

  let velocidad = distanciaMetros / tiempoSegundos;

  console.log(`La velocidad del proyectil es: ${velocidad} metros/segundo`);
}
calcularVelocidad();