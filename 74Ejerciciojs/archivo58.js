/**58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
zodiacal pertenece, para ello usar if_else anidados. */

  function determinarSignoZodiacal(mes) {
  mes = mes.toLowerCase();
  
  if (mes === "enero") {
    console.log("Capricornio");
  } else if (mes === "febrero") {
    console.log("Acuario");
  } else if (mes === "marzo") {
    console.log("Piscis");
  } else if (mes === "abril") {
    console.log("Aries");
  } else if (mes === "mayo") {
    console.log("Tauro");
  } else if (mes === "junio") {
    console.log("Géminis");
  } else if (mes === "julio") {
    console.log("Cáncer");
  } else if (mes === "agosto") {
    console.log("Leo");
  } else if (mes === "septiembre") {
    console.log("Virgo");
  } else if (mes === "octubre") {
    console.log("Libra");
  } else if (mes === "noviembre") {
    console.log("Escorpio");
  } else if (mes === "diciembre") {
    console.log("Sagitario");
  } else {
    console.log("Mes no válido.");
  }
}
let nombreMes = prompt("Ingrese el nombre del mes:");
determinarSignoZodiacal(nombreMes);
