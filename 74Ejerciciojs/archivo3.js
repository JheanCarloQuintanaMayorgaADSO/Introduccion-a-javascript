/*3.Escribir un programa que pida al usuario dos números y muestre por pantalla su
división, si el divisor es cero el programa debe mostrar un error, se debe manejar
mediante excepciones y el mensaje debe ser personalizado.*/

function realizardivision() {
  try {
    let dividiendo = parseFloat(prompt("ingrese el dividiendo"));
    let divisor = parseFloat(prompt("ingrese el divisor"));
    if (divisor === 0) {
      throw "error: el divisor no puede ser cero";
    }

    let resultado = dividiendo / divisor;
    console.log(`El resultado de la división es: ${resultado}`);

  } catch (error) {
    console.log(error);
  }
}
realizardivision();