/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 

Entradas:
Input => dados de faturamento mensal por estado
Process => calcular o percentual de representação de cada estado
output => resultado
*/

let faturamentoSp = 67836.43;
let faturamentoRj = 36678.66;
let faturamentoMg = 29229.88;
let faturamentoEs = 27165.48;
let faturamentoOutros = 19849.53;

// Percentual de representação de cada estado: ValortotalMensal / faturamentoEstado * 100
let faturamentoTotal = faturamentoSp + faturamentoRj + faturamentoMg + faturamentoEs + faturamentoOutros;

function CalculaPercentual(faturamentoEstado) {
  return (faturamentoEstado / faturamentoTotal) * 100;
}

console.log(`Percentual de representação de SP: ${CalculaPercentual(faturamentoSp).toFixed(2)}%`);
console.log(`Percentual de representação de RJ: ${CalculaPercentual(faturamentoRj).toFixed(2)}%`);
console.log(`Percentual de representação de MG: ${CalculaPercentual(faturamentoMg).toFixed(2)}%`);
console.log(`Percentual de representação de ES: ${CalculaPercentual(faturamentoEs).toFixed(2)}%`);
console.log(`Percentual de representação de Outros: ${CalculaPercentual(faturamentoOutros).toFixed(2)}%`);