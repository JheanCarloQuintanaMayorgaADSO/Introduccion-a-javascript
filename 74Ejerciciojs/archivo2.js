/*2. escribir un programa que almacene la cadena de caracteres contraseña de una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la
contraseña introducida por el usuario coincide con la guardada en la variable sin
tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
ingresar valores alfanuméricos.*/

function esAlfanumerico(valor) {
  return /^[a-zA-Z0-9]+$/.test(valor);
}

function validarContrasena() {

  const contrasenaGuardada = "MiContrasena123";

  let contrasenaUsuario = prompt("Ingrese su contraseña:");

  if (esAlfanumerico(contrasenaUsuario)) {

    if (contrasenaUsuario.toLowerCase() === contrasenaGuardada.toLowerCase()) {
      console.log("Contraseña correcta.");

    } else {
      console.log("Contraseña incorrecta.");
    }
  } else {
    console.log("Por favor, ingrese una contraseña alfanumérica válida.");
  }
}

validarContrasena();