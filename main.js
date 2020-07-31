const readline = require('readline-sync');
const Less = require ('./desafio2')
const TrainComposition = require ('./desafio1')

const trainComposition = new TrainComposition()
const less = new Less()
function Main(){
   Msgs()
}

function Msgs(){
    
    while (exit = 1){
        console.log("-----------------------------------")
        console.log("Desafios para Sys Manager")
        console.log("-----------------------------------")
        console.log("1 - Entrar no desafio 1")
        console.log("2 - Entrar no desafio 2")
        const opcao = readline.question("Escolha um numero acima: ")
        Menu(opcao)
    }
}

function Menu(opcao){
    
    switch (opcao){
        case "1":
            trainComposition.Msgs()
            break
        case "2":
            less.CountNumbers()
            break
    }
}

Main()