/*17. Escribir un programa que calcule el volumen de una esfera*/

function calcularvolumenesfera() {
  let radio = parseFloat(prompt("ingrese el radio de la esfera"));

  if (isNaN(radio) || radio <= 0) {
    console.log("por favor, ingrese un radio valido y mayor que 0");
    return;
  }

  let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

  console.log(`el volumen de las esfera es ${volumen}`);
}

calcularvolumenesfera();