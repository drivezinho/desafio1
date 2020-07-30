
function Main(){
   Msgs()
}


function Msgs(){

    const readline = require('readline-sync');
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

function desafio2(){
    const Desafio2 = require ('./desafio2')
}

function desafio1(){
    const Desafio1 = require ('./desafio1')
}

function Menu(opcao){
    
    switch (opcao){
        case "1":
            desafio1()
            break
        case "2":
            desafio2()
            break
    }
}

Main()
