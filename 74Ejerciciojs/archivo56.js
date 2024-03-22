/**56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
$100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
un interés anual de 4%. Al final mostrar el saldo final y el interés pagado. */

function calcularInteres(saldoInicial) {
  let interes = 0;
  if (saldoInicial < 100000) {
    interes = saldoInicial * 0.03;
  } else {
    interes = saldoInicial * 0.04;
  }

  let saldoFinal = saldoInicial + interes;
  return { saldoFinal, interes };
}
let saldoInicial = parseFloat(prompt("Ingrese el saldo inicial:"));
let resultado = calcularInteres(saldoInicial);
console.log("El saldo final es:", resultado.saldoFinal.toFixed(2));
console.log("El interés pagado es:", resultado.interes.toFixed(2));
