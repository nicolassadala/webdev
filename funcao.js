/*
Sintaxe de criação das funções

function nome(argumento1,  argumento2, ....., argumentoN) {
//Corpo da função
}
*/
let numero1 = 10,numero2 = 2;

/*Executa as 4 operações matematicas*/
console.log(`Soma: ${somar(numero1, numero2)}`);
console.log(`Subtração: ${subtrair(numero1, numero2)}`);
console.log(`Multiplicação: ${multiplicar(numero1, numero2)}`);

const divisao = dividir(numero1,numero2);
/*valida o resultado da divisão*/
if(divisao === Infinity)
    console.log("Não existe divisão por ZERO")
else
    console.log(`Divisão: ${divisao}`);

/*funções de calculo*/
function somar(numero1,numero2){
    return numero1+numero2;
}

function subtrair(numero1,numero2){
    return numero1-numero2;
}

function multiplicar(numero1,numero2){
    return numero1*numero2;
}

function dividir(numero1,numero2){
    return numero1/numero2;
}