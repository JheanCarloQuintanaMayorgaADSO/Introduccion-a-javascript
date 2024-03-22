/**30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
caracteres, y al menos una mayúscula, una minúscula, y un dígito. */

function comprobarFortalezaContrasena(contrasena) {
 
  let tieneLongitudValida = /^.{8,12}$/.test(contrasena);
  let tieneMayuscula = /[A-Z]/.test(contrasena);
  let tieneMinuscula = /[a-z]/.test(contrasena);
  let tieneDigito = /\d/.test(contrasena);
  return tieneLongitudValida && tieneMayuscula && tieneMinuscula && tieneDigito;
}

let contrasena = "Contraseña1";
if (comprobarFortalezaContrasena(contrasena)) {
  console.log("La contraseña es segura.");
} else {
  console.log("La contraseña no cumple con los requisitos de seguridad.");
}
