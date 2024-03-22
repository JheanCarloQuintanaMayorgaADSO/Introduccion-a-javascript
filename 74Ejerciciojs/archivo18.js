/*18. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b */

function evaluarexpresion() {
  let a = parseFloat(prompt("ingrese el valor de a:"));
  let b = parseFloat(prompt("ingrese el valor de b"));
  let c = parseFloat(prompt("ingrese el valor de c"));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("por favor, ingrese valores numericos validos.");
    return;
  }

  let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
  console.log(`el resultado de la expresion es ${resultado}`)
}
evaluarexpresion();