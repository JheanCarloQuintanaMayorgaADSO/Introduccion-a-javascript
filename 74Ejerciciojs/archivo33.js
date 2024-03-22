/**33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos. */

function calcularEdadMadreEnParto(fechaNacimientoMadre, fechaNacimientoHijo) {
  let edadMadreEnParto = fechaNacimientoHijo.getFullYear() - fechaNacimientoMadre.getFullYear();
  
  if (fechaNacimientoHijo.getMonth() < fechaNacimientoMadre.getMonth() || 
    (fechaNacimientoHijo.getMonth() === fechaNacimientoMadre.getMonth() && 
    fechaNacimientoHijo.getDate() < fechaNacimientoMadre.getDate())) {
    edadMadreEnParto--;
  }

  return edadMadreEnParto;
}

let fechaNacimientoMadre = new Date('1980-05-15');
let fechaNacimientoHijo = new Date('2000-10-20');

let edadMadreEnParto = calcularEdadMadreEnParto(fechaNacimientoMadre, fechaNacimientoHijo);
console.log("La madre tenía", edadMadreEnParto, "años en el momento del parto.");
