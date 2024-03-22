/*9. Escribir un programa para una empresa que tiene salas de juegos para todas las edades y
quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El
programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si
el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€
y si es mayor de 18 años, 10€*/

function calcularprecioentrada() {
  let edad = parseInt(prompt("ingrese la edad del cliente"));

  if (edad < 4) {
    console.log("precio de entrada: gratis");
  } else if (edad >= 4 && edad <= 18) {
    console.log("precio de entrada: 5€");
  } else if (edad > 18) {
    console.log("precio de entrada 10€");
  } else {
    console.log("edad no valida.");
  }
}
calcularprecioentrada();