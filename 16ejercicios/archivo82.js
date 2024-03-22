/*82.Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
aceptan números, la función debe devolver true si el pin es valido y false si no es válido.*/

function validarpin(pin) {
  return /^\d{4}$|^\d{6}$/.test(pin);
}
console.log(validarpin("123456"))