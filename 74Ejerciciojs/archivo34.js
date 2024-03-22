/**34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
depósito.
a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
b. Volumen = PI *(radio^2)* H (altura del depósito).
El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
en segundos. */

function calcularTiempoEstimadoLlenadoDeposito(caudal, radio, altura) {
  let volumen = Math.PI * Math.pow(radio, 2) * altura;
  let tiempoEstimadoMinutos = volumen / caudal;
  let tiempoEstimadoSegundos = tiempoEstimadoMinutos * 60;
  return tiempoEstimadoSegundos;
}

let caudal = 10;
let radio = 2;
let altura = 5;

let tiempoEstimadoSegundos = calcularTiempoEstimadoLlenadoDeposito(caudal, radio, altura);
console.log("El tiempo estimado para llenar el depósito es:", tiempoEstimadoSegundos, "segundos");
