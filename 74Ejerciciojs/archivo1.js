/*1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
mayor o menor de edad, el programa debe validar que solo se puedan ingresar
números positivos.*/

function esnumeropositivo(valor) {
  return !isNaN(valor) && parseFloat(valor) >= 0;
}

function verificaredad() {
  let edad = prompt("ingrese su edad");

  if (esnumeropositivo(edad)) {
    edad = parseInt(edad);

    if (edad >= 18) {
      console.log("eres mayor de edad");
    } else {
      console.log("eres menor de edad");
    }
  } else {
    console.log("por favor ingrese un numero positivo");
  }
}

verificaredad();