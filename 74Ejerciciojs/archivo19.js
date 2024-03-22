/* 19.Escribir un programa que calcule el área y el volumen de un cilindro.*/

function calcularareayvolumencilindro() {

  let radio = parseFloat(prompt("ingrese el radio del cilindro"));
  let altura = parseFloat(prompt("ingrese la altura del cilindro"));

  if (isNaN(radio) || isNaN(altura) || radio <= 0 || altura <= 0) {
    console.log("por favor, ingrese valores valido y mayores a cero");
    return;
  }

  let areasuperficielateral = 2 * Math.PI * radio * altura;
  let areatotalsuperficie = 2 * Math.PI * radio * (radio + altura);

  let volumen = Math.PI * Math.pow(radio, 2) * altura;

  console.log(`area de la superficie lateral del cilindro: ${areasuperficielateral}`);
  console.log(`area total de la superficie del cilindro: ${areatotalsuperficie}`);
  console.log(`volumen del cilindro ${volumen}`);
}

calcularareayvolumencilindro();