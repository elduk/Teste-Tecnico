//Preciso saber qual o valor da variavel soma para quando:

let indiceInicial = 0; //K
let indiceFinal = 13; //INDICE
let resultado = 0; //SOMA

while(indiceInicial < indiceFinal){
    console.log("-----------------------------------------------------")

    console.log("Valor de K: " + indiceInicial);

    indiceInicial = indiceInicial + 1;
    console.log("Valor de K + 1: " + indiceInicial);

    console.log("Valor de SOMA: " + resultado);
    
    resultado = resultado + indiceInicial;
    console.log("Valor de SOMA + K: " + resultado);
}

console.log("-----------------------------------------------------")
console.log("O resultado final e: " + resultado);