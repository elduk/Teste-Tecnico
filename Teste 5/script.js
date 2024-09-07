/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

Entradas:
Input => string a ser invertida
Processamento => inverter os caracteres da string
Output => string invertida
*/

let stringNormal = "Alan Erick Eremita Dias";
let stringInvertida = "";

for (let i = stringNormal.length - 1; i >= 0; i--) {
  stringInvertida += stringNormal[i];
}

console.log(stringInvertida);