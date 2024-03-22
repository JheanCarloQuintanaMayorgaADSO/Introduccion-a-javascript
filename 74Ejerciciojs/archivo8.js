/*.8 En una determinada empresa, sus empleados son evaluados al final de cada año. Los
puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados
pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.
a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
puntuación del nivel.
b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más
Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
así como la cantidad de dinero que recibirá el usuario.*/

function determinarnivelydinero() {
  let puntuacion = parseFloat(prompt("ingrese su puntuacion:"));

  if (puntuacion === 0.0) {
    console.log("nivel: inaceptable");
    console.log("cantidad de dinero: O€");
  } else if (puntuacion === 0.4) {
    console.log("nivel: aceptable");
    console.log("cantidad de dinero: " + (2400 * puntuacion) + "€");
  } else if (puntuacion === 0.6 || puntuacion > 0.6) {
    console.log("nivel: meritorio");
    console.log("cantidad de dinero: " + (2400 * puntuacion) + "€");
  } else {
    console.log("puntuacion no valida: ");
  }
}
determinarnivelydinero();