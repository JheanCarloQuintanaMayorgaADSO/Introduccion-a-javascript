/** 28. Calcular el sueldo de un empleado dados como datos de entrada:
a. Nombre.
b. horas de trabajo.
c. pago en hora. */

function calcularSueldo(nombre, horasTrabajo, pagoHora) {
  let sueldo = horasTrabajo * pagoHora;
  return sueldo;
}

let nombreEmpleado = "Juan";
let horasTrabajo = 40;
let pagoHora = 10;

let sueldoEmpleado = calcularSueldo(nombreEmpleado, horasTrabajo, pagoHora);
console.log("El sueldo de", nombreEmpleado, "es:", sueldoEmpleado);
