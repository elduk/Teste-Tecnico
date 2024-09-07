/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/


/*Entradas:

Input => um número qualquer
Process => calcular a sequência de Fibonacci até o número informado
Output => mensagem informando se o número informado pertence ou não a sequência de Fibonacci

*/
let numeroInformado = 34;
let sequenciaDeFibonacci = [0, 1];
let resultadoProcessamentoFibonacci = 0;
let indice = 1;
let pertenceSequencia = false;
    
while(resultadoProcessamentoFibonacci < numeroInformado)
{
    resultadoProcessamentoFibonacci = sequenciaDeFibonacci[indice] + sequenciaDeFibonacci[indice - 1];
    sequenciaDeFibonacci.push(resultadoProcessamentoFibonacci);

    if(numeroInformado === resultadoProcessamentoFibonacci)
    {
        pertenceSequencia = true;
        break;
    }

    indice++;
}

if(pertenceSequencia)
    console.log(`O número ${numeroInformado} pertence a sequência de Fibonacci.`);
else
    console.log(`O número ${numeroInformado} não pertence a sequência de Fibonacci.`);