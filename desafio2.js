const lista = []

function Desafio2(){
   CountNumbers()
}

function DescoMenor(numero){
    let numerico = parseInt(numero)
    const qntMenor = []

    for (let exit = 0; exit <= 5; exit++){
        if (numerico > lista[exit]){
            qntMenor.unshift(1)
        }
    }
    console.log("-----------------------------------")
    console.log(qntMenor.length, "são menores")
    console.log("-----------------------------------")
}

function OrdenaCres(lista){
    const readline = require('readline-sync');
    lista.sort()
    console.log("-----------------------------------")
    console.log("Ordenada de forma crescente", lista)
    console.log("-----------------------------------")
    console.log("Descubra quantos numeros são menores")
    const numero = readline.question("Digite um numero: ")
    DescoMenor(numero)
}

function AdcNumero(numero){
    let numerico = parseInt(numero)
    var adicionar = lista.unshift(numerico)
}

function CountNumbers(){

    const readline = require('readline-sync');
    for (let exit = 1; exit <= 5; exit++){
        console.log("-----------------------------------")
        console.log("Descobrindo o menor numero")
        console.log("Digite um numero cinco vezes")
        console.log("-----------------------------------")
        console.log(lista)
        const numero = readline.question("Digite um numero: ")
        AdcNumero(numero)
    }
    OrdenaCres(lista)
}


Desafio2()
