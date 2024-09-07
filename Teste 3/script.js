/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

Entradas:
Input => um vetor que guarda o valor de faturamento diário de uma distribuidora

Process =>  calcular o menor valor de faturamento ocorrido em um dia do mês
            calcular o maior valor de faturamento ocorrido em um dia do mês
            calcular o número de dias no mês em que o valor de faturamento diário foi superior à média mensal

Output => dados calculados */

const fs = require("fs");

let faturamentoMensal = [];
const data = fs.readFileSync("dados.json");
const jsonData = JSON.parse(data);

faturamentoMensal = jsonData;

let menorValor = Infinity;
let maiorValor = 0;
let mediaMensal = 0;
let indice = 0;
let diasSomados = 0;
let somaTotal = 0;

let finaisDeSemana = [4, 5, 11, 12, 18, 19, 25, 26];
let diasFeriado = [7];

while (indice < faturamentoMensal.length) {
  if (
    !finaisDeSemana.includes(faturamentoMensal[indice].dia) &&
    !diasFeriado.includes(faturamentoMensal[indice].dia)
  ) {
    if (faturamentoMensal[indice].valor < menorValor)
      menorValor = faturamentoMensal[indice].valor;

    if (faturamentoMensal[indice].valor > maiorValor)
      maiorValor = faturamentoMensal[indice].valor;

    somaTotal += faturamentoMensal[indice].valor;
    diasSomados++;
  }
  indice++;
}

mediaMensal = somaTotal / diasSomados;
indice = 0;
let somaTotalDiasMaioresMediaMensal = 0;

while (indice < faturamentoMensal.length) {
  if (
    !finaisDeSemana.includes(faturamentoMensal[indice].dia) &&
    !diasFeriado.includes(faturamentoMensal[indice].dia)
  ) {
    if (faturamentoMensal[indice].valor > mediaMensal) {
      menorValor = faturamentoMensal[indice].valor;
      somaTotalDiasMaioresMediaMensal++;
    }
  }
  indice++;
}

console.log(
  `Menor valor de faturamento ocorrido em um dia do mês: ${menorValor}`
);
console.log(
  `Maior valor de faturamento ocorrido em um dia do mês: ${maiorValor}`
);

console.log(
  `Média mensal: ${mediaMensal}`
);

console.log(
  `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${somaTotalDiasMaioresMediaMensal}`
);