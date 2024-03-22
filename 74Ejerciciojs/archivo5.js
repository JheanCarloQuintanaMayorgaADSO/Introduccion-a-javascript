/*5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
tributar o no. */


function verificartributacion() {
  let edad = parseInt(prompt("ingrese su edad"));

  let ingresosmensuales = parseFloat(prompt("ingrese sus ingresos mensuales"));

  if (edad > 16 && ingresosmensuales >= 1000) {
    console.log("debe tributar");
  } else {
    console.log("no puede tributar");
  }
}

verificartributacion()
