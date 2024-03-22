/*7.los tramos impositivos para la declaración de la renta en un determinado país son:
a. entre 10000 y 20000 ---- 5%
b. entre 20000 y 35000 ---- 10%
c. entre 35000 y 60000 ---- 20%
d. más de 60000 ---- 45%
escribir un programa que pregunte al usuario su renta anual y muestre por pantalla
el tipo de impositivo que le corresponde.*/

function determinartramoimpositivo() {
  
  let rentaanual = parseFloat(prompt("ingrese su renta anual"))
  
  if (rentaanual >= 10000 && rentaanual < 20000) {
    console.log("tipo de impositivo: 5%");
  } else if (rentaanual >= 20000 && rentaanual < 35000) {
    console.log("tipo de impositivo 10%");
  } else if (rentaanual >= 35000 && rentaanual < 60000) {
    console.log("tipo de impositivo: 20%");
  } else if (rentaanual >= 60000) {
    console.log("tipo de impositivo: 45%");
  } else {
    console.log("renta anual no valida o no corresponde a ningun tramo impositivo.")
  }
}
determinartramoimpositivo();